interface IListItem {
    readonly title: string;
    readonly items?: IListItem[];
}
