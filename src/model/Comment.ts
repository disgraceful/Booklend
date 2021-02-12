export class Comment {
    id: string;
    comment: string;
    parentSelector: string;
    selectedText: string;
    parentInnerHTML: string

    constructor(comment: string, id: string, parentSelector: string, selectedText: string, parentInnerHTML: string) {
        this.comment = comment;
        this.id = id;
        this.parentSelector = parentSelector;
        this.selectedText = selectedText;
        this.parentInnerHTML = parentInnerHTML;
    }
}