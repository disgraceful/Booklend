function saveComments(comments: Array<string>) {
  localStorage.setItem('comments', JSON.stringify(comments));
}

export function getComments() {
  const comments = localStorage.getItem('comments');
  console.log(comments);

  return comments ? JSON.parse(comments) : [];
}

export function addComment(comment: string, id: string) {
  const comments = getComments();
  comments.push({ comment, id });
  saveComments(comments);
}

export function getCommentById(id: string) {
  const comments = getComments();
  return comments.find((c: any) => c.id == id).comment || '';
}
