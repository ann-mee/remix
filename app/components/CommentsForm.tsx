import { useLocation, useNavigation } from "@remix-run/react";
import Button from "./Button";
import InputField from "./form/InputField";

import { ValidatedForm } from "remix-validated-form";
import { withZod } from "@remix-validated-form/with-zod";
import { z } from "zod";

export const validator = withZod(
  z.object({
    name: z.string().min(1, { message: "Name is required" }),
    message: z.string().min(1, { message: "Message is required" }),
  })
);

export default function CommentsForm() {
  const transition = useNavigation();
  const location = useLocation();

  return (
    <ValidatedForm validator={validator} method="post" key={location.key}>
      <fieldset disabled={transition.state === "submitting"}>
        <InputField label="Name:" name="name" />
        <InputField label="Message:" name="message" />
        <Button
          label={transition.state === "submitting" ? "Adding" : "Add comment"}
        />
      </fieldset>
    </ValidatedForm>
  );
}
