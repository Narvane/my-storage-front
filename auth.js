import NextAuth from "next-auth";


// export const { handlers, signIn, signOut, auth } = NextAuth(request, {
//     providers: [
//         {
//             id: "my-auth-server", // signIn("my-provider") and will be part of the callback URL
//             name: "My auth server", // optional, used on the default login page as the button text.
//             type: "oidc", // or "oauth" for OAuth 2 providers
//             issuer: "http://localhost:8090", // to infer the .well-known/openid-configuration URL
//             authorization: 'http://localhost:8090/oauth2/authorize',
//             token: 'http://localhost:8090/oauth2/token',
//             clientId: process.env.AUTH_CLIENT_ID, // from the provider's dashboard
//             clientSecret: process.env.AUTH_CLIENT_SECRET, // from the provider's dashboard
//         }
//     ],
// });

/*export const { handlers, signIn, signOut, auth } = NextAuth(request => {
    //console.log(request);
    console.log(this);
    return {
        providers: [
            {
                id: "my-auth-server", // signIn("my-provider") and will be part of the callback URL
                name: "My auth server", // optional, used on the default login page as the button text.
                type: "oidc", // or "oauth" for OAuth 2 providers
                issuer: "http://localhost:8090", // to infer the .well-known/openid-configuration URL
                authorization: 'http://localhost:8090/oauth2/authorize',
                token: 'http://localhost:8090/oauth2/token',
                clientId: process.env.AUTH_CLIENT_ID, // from the provider's dashboard
                clientSecret: process.env.AUTH_CLIENT_SECRET, // from the provider's dashboard
            }
        ],
    }
});*/

export const { handlers, signIn, signOut, auth } = NextAuth(function config(request) {
    console.log(auth);
    if (!auth) {
        return signIn("my-auth-server");
    }
    return {
        providers: [
            {
                id: "my-auth-server", // signIn("my-provider") and will be part of the callback URL
                name: "My auth server", // optional, used on the default login page as the button text.
                type: "oidc", // or "oauth" for OAuth 2 providers
                issuer: "http://localhost:8090", // to infer the .well-known/openid-configuration URL
                authorization: 'http://localhost:8090/oauth2/authorize',
                token: 'http://localhost:8090/oauth2/token',
                clientId: process.env.AUTH_CLIENT_ID, // from the provider's dashboard
                clientSecret: process.env.AUTH_CLIENT_SECRET, // from the provider's dashboard
            }
        ],
        trustHost: true,
        secret: process.env.AUTH_SECRET,
        basePath: "/auth"
    }
});