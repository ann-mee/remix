export default function Button({ label }: { label: string }) {
  return (
    <button
      type="submit"
      className="bg-teal-700 hover:bg-teal-800 text-white px-3 py-2 rounded-md transition duration-150 my-2"
    >
      {label}
    </button>
  );
}
