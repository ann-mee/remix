import { getXataClient } from "utils/xata";

export type Comment = {
  name: string;
  message: string;
  slug: string;
};

export async function getComments(slug: string | undefined) {
  if (!slug) return;

  const xata = getXataClient();

  const response = await xata.db.comments.filter({ slug: slug }).getMany();

  return response;
}

export async function addComment(comment: Comment) {
  const xata = getXataClient();

  const record = await xata.db.comments.create({
    name: comment.name,
    message: comment.message,
    slug: comment.slug,
  });

  return record;
}
