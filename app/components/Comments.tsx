import { useLocation, useNavigation } from "@remix-run/react";
import type { Comment } from "~/api/comments";
import Button from "./Button";
import InputField from "./form/InputField";

import { ValidatedForm } from "remix-validated-form";
import { withZod } from "@remix-validated-form/with-zod";
import { z } from "zod";

type CommentsList = {
  comments: Comment[];
};

export const validator = withZod(
  z.object({
    name: z.string().min(1, { message: "Name is required" }),
    message: z.string().min(1, { message: "Message is required" }),
  })
);

export default function Comments({ comments }: CommentsList) {
  const transition = useNavigation();
  const location = useLocation();

  return (
    <div className="mt-10">
      <h2 className="text-3xl">Comments</h2>
      <div className="flex flex-col space-y-4 my-3">
        {comments.map((comment, index) => (
          <div className="rounded border border-slate-400 p-4" key={index}>
            <div className="text-gray-700 font-bold text-xl mb-2">
              {comment.name}
            </div>
            <p>{comment.message}</p>
          </div>
        ))}
        <div className="rounded border border-slate-400 p-4">
          <ValidatedForm validator={validator} method="post" key={location.key}>
            <fieldset disabled={transition.state === "submitting"}>
              <InputField label="Name:" name="name" />
              <InputField label="Message:" name="message" />
              <Button
                label={
                  transition.state === "submitting" ? "Adding" : "Add comment"
                }
              />
            </fieldset>
          </ValidatedForm>
        </div>
      </div>
    </div>
  );
}
