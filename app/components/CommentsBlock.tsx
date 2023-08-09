import type { Comments } from "api/comments";

import CommentsList from "./CommentsList";
import CommentsForm from "./CommentsForm";

export default function CommentsBlock({ comments }: Comments) {
  return (
    <div className="mt-10">
      <h2 className="text-3xl">Comments</h2>
      <div className="flex flex-col space-y-4 my-3">
        <CommentsList comments={comments} />

        <div className="rounded border border-slate-400 p-4">
          <CommentsForm />
        </div>
      </div>
    </div>
  );
}
