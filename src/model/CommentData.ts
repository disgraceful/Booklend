export class Coords {
    x = 0;
    y = 0;
}

export class CommentData {
    show = false;
    active = false;
    coords: Coords = new Coords();
    selection: any = null;
    selectedText = '';
    commentText = '';
}

