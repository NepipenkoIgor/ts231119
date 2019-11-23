/// <reference lib="esnext" />
function sleep(ms: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}


async function* getItemsReallySlow<T>(items: Iterable<T>): AsyncIterableIterator<T> {
    for (const item of items) {
        await sleep(2000);
        yield item;
    }
}

async function speakSloth(items: string[]) {
    for await (const item of getItemsReallySlow(items)) {
        console.log(item);
    }
}
