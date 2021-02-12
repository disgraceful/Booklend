import { Comment } from "@/model/Comment";

function saveComments(comments: Comment[]) {
  localStorage.setItem('comments', JSON.stringify(comments));
}

export function getComments(): Comment[] {
  const comments = localStorage.getItem('comments');
  console.log(comments);

  return comments ? JSON.parse(comments) : [];
}

export function addComment(comment: string, id: string, parentSelector: string, selectedText: string, parentHTML: string) {
  const comments = getComments();

  comments.push(new Comment(comment, id, parentSelector, selectedText, parentHTML));
  saveComments(comments);
}

export function getCommentById(id: string) {
  const comments = getComments();
  const found = comments.filter((c: Comment) => c.id == id);
  return found[0]?.comment || '';
}
