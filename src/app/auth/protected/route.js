import {auth, signIn} from "auth"

export const GET = auth((req) => {
    /*if (req.auth) {
        return signIn("my-auth-server");
    }*/

    //console.log(req.auth);

    return signIn("my-auth-server");
});