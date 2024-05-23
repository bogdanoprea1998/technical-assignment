export default function Input({
  type,
  placeholder = "",
  label,
  name,
}: {
  type: string;
  placeholder?: string;
  label?: string;
  name: string;
}) {
  return (
    <div className="flex flex-col mt-4">
      <label className={label ? label : "hidden"} htmlFor={name}>
        {label}
      </label>
      <input
        className={`text-black py-1 px-2 ${
          type === "submit"
            ? "bg-white rounded-3xl font-bold min-w-36 mx-auto mt-6"
            : ""
        } rounded-md`}
        type={type}
        placeholder={placeholder}
        name={name}
        required
      />
    </div>
  );
}
