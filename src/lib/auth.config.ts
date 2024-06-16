import github from "next-auth/providers/github";

import type { NextAuthConfig } from "next-auth";

export default {
    providers: [github({
        clientId: process.env.GITHUB_APP_CLIENT_ID,
        clientSecret: process.env.GITHUB_APP_CLIENT_SECRET,
    })]
} satisfies NextAuthConfig