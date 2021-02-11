export class Comment {
    id: string;
    comment: string;

    constructor(comment: string, id: string) {
        this.comment = comment;
        this.id = id;
    }
}