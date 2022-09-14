export default class Item {
    id;
    title;
    isArchived;
    constructor(id, title, isArchived) {
        this.id = id;
        this.title = title;
        this.isArchived = isArchived;
    }
}