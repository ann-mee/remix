import { getXataClient } from "utils/xata";

export type Comment = {
  name: string;
  message: string;
  id: string;
};

export type Comments = {
  comments: Comment[];
};

export async function getComments(id: string | undefined) {
  if (!id) return;

  const xata = getXataClient();

  const response = await xata.db.comments.filter({ filmId: id }).getMany();

  return response;
}

export async function addComment(comment: Comment) {
  const xata = getXataClient();

  const record = await xata.db.comments.create({
    name: comment.name,
    message: comment.message,
    filmId: comment.id,
  });

  return record;
}
