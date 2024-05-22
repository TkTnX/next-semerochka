import { NextAuthOptions, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import { users } from "@/data/usersForAuth";
export const authConfig: NextAuthOptions = {
  providers: [
    Github({
      clientId: process.env.NEXTAUTH_CLIENT_ID!,
      clientSecret: process.env.NEXTAUTH_CLIENT_SECRET!,
    }),
    Credentials({
      credentials: {
        phoneNumber: {
          label: "Ваш номер телефона",
          type: "tel",
          placeholder: "+7(999)999-99-99",
          required: true,
        },
      },
      async authorize(credentials) {
        if (!credentials?.phoneNumber) return null;
        const currentUser = users.find(
          (user) => user.phoneNumber === credentials.phoneNumber
        );

        if (
          currentUser &&
          currentUser.phoneNumber === credentials.phoneNumber
        ) {
          const { phoneNumber, ...userWithoutPhone } = currentUser;
          return userWithoutPhone as User;
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
};
