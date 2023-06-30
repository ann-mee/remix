import { useField } from "remix-validated-form";

type InputProps = {
  label: string;
  name: string;
  type?: string;
};

export default function InputField({ label, name, type = "text" }: InputProps) {
  const { error } = useField(name);

  return (
    <>
      <label className="my-2">{label}</label>
      <input
        name={name}
        type={type}
        className={`rounded border py-2 px-3 inline-block w-full ${
          error ? "border-red-700" : "border-slate-400"
        }`}
      />
      {error && <p className="text-red-700">{error}</p>}
    </>
  );
}
