import type { Comments } from "api/comments";

export default function CommentsList({ comments }: Comments) {
  return (
    <div role="list">
      {comments.map((comment, index) => (
        <div className="rounded border border-slate-400 p-4" key={index}>
          <div className="text-gray-700 font-bold text-xl mb-2">
            {comment.name}
          </div>
          <p>{comment.message}</p>
        </div>
      ))}
    </div>
  );
}
