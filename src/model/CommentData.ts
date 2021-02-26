import { Comment } from "./Comment";

export class Coords {
    x = 0;
    y = 0;
}

export class CommentData {
    id!: string;
    show = false;
    active = false;
    coords: Coords = new Coords();
    selection: any = null;
    selectedText = '';
    comments:Comment[] = [];
}

