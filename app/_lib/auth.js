import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-service";

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    // eslint-disable-next-line no-unused-vars
    authorized({ auth, request }) {
      return !!auth?.user;
    },
    // eslint-disable-next-line no-unused-vars
    async signIn({ user, acc, profile }) {
      try {
        const existingGuest = await getGuest(user.email);
        console.log("exist: ", existingGuest);

        if (!existingGuest) {
          console.log("creating guest");
          await createGuest({ email: user.email, fullName: user.name });
        }

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    async session({ session }) {
      const guest = await getGuest(session.user.email);
      session.user.guestId = guest.id;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});
