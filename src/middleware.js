import {auth} from "../auth";

/*export { auth as middleware } from "auth"*/

export default auth((req) => {
    console.log('IDTAKEANYMOERE')
    if (!req.auth) {
        return console.log('foadas')
    }
    console.log(req.auth);
});

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};