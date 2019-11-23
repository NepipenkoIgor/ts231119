/// <reference lib="esnext" />
function sleep(ms: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

debugger
async function* getItemsReallySlow<T>(items: Iterable<T>): AsyncIterableIterator<T> {
    for (const item of items) {
        await sleep(2000);
        yield item;
    }
}

export async function speakSloth1(items: string[]) {
    for await (const item of getItemsReallySlow(items)) {
        console.log(item);
    }
}
