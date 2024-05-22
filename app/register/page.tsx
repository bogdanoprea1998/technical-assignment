import Input from "../components/input";
import { postUser } from "@/_actions/userAction";

export default async function Page() {
  return (
    <form
      action={async (formData) => {
        "use server";
        await postUser(formData);
      }}
      className="flex flex-col p-5"
    >
      <h1 className="text-center text-2xl font-bold">Register a new account</h1>
      <div className="flex flex-col gap-3 justify-center mt-6">
        <Input name="username" type="text" label="Username:" />
        <Input name="email" type="email" label="Email:" />
        <Input name="password" type="password" label="Password:" />
        <Input name="cf-password" type="password" label="Confirm password:" />
        <Input name="submit" type="submit" />
      </div>
    </form>
  );
}
