import { Form } from "@remix-run/react";
import Button from "./Button";

export default function Search() {
  return (
    <Form method="get" reloadDocument>
      <label>
        Search:{" "}
        <input
          type="text"
          name="title"
          placeholder="Type a title"
          className="border border-teal-700 rounded-md py-2 px-3"
        />
      </label>{" "}
      <Button label="Search" />
    </Form>
  );
}
