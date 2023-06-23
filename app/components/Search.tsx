import { Form } from "@remix-run/react";

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
      <button
        type="submit"
        className="bg-teal-700 hover:bg-teal-800 text-white px-3 py-2 rounded-md transition duration-150"
      >
        Search
      </button>
    </Form>
  );
}
