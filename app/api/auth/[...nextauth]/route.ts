import NextAuth from "next-auth/next";
import { Account, User as AuthUser } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { getUserFromDb } from "@/_actions/userAction";

const nextAuthSecret = process.env.NEXTAUTH_SECRET;

const authOptions: any = {
  providers: [
    Credentials({
      id: "credentials",
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        const user = await getUserFromDb(
          credentials.username,
          credentials.password
        );
        return user;
      },
    }),
  ],
  secret: nextAuthSecret,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
