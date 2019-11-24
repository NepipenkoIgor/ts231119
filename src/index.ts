class Search {
    @debounce(500)
    public onSearch(e: Event) {
        const value = (e.target as HTMLInputElement).value;
        console.log(value);
    }
}

const search = new Search();

const input = document.querySelector('input') as HTMLInputElement;
input.addEventListener('input', search.onSearch);

function debounce(ms: number) {
    let timeoutId: number | null;
    return function (_target: Object, _key: string | symbol, descriptor: PropertyDescriptor) {
        console.log(_target);
        console.log(_key);
        console.log(descriptor);
        const originalValue = descriptor.value;
        return {
            ...descriptor,
            value: (...args: unknown[]) => {
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }
                timeoutId = setTimeout(() => {
                    originalValue(...args);
                }, ms);
            },
        };
    };
}
