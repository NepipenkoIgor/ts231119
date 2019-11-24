function getFullName(this: { name: string, surname: string }) {
    return `${this.name} ${this.surname}`;
}

let account = {
    name: 'Ihor',
    surname: 'Nepipenko',
    getFullName,

};

account.getFullName();


interface IUElement {
    addClickListener(onclick: (this: void, e: Event) => void): void;
}

class UIElement implements IUElement {
    addClickListener(_onclick: (this: void, e: Event) => void): void {

    }
}


class Handler {
    info: string;

    onClickBad(this: this, _: Event) {

    }
}

let h = new Handler();
let uiElement: UIElement = new UIElement();
uiElement.addClickListener(h.onClickBad)
