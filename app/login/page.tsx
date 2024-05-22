import Input from "../components/input";
import { signIn } from "@/auth";

export default async function Page() {
  return (
    <form
      action={async (formData: any) => {
        "use server";
        await signIn("credentials", formData);
      }}
      className="flex flex-col p-5"
    >
      <h1 className="text-center text-2xl font-bold">Log into your account</h1>
      <div className="flex flex-col gap-3 justify-center mt-6">
        <Input name="username" type="text" label="Username:" />
        <Input name="password" type="password" label="Password:" />
        <Input name="submit" type="submit" />
      </div>
    </form>
  );
}
