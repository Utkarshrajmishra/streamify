import GitHubProvider from "next-auth/providers/github";

export const authOptions={
    providers:[
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
              authorization: { params: { scope: "repo workflow read:user user:email" } },

        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks:{
        async jwt({token, account}:{token:any, account:any}){
            if(account){
                token.accessToken=account.access_token
            }
            return token
        },
        async session({session, token}:{session:any, token:any}){
            session.accessToken=token.accessToken
            return session
        }
    }
}
