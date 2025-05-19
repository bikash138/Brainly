import { signIn } from "@/auth"

export const SignInButton = () => {
    return <button onClick={() => signIn("github")}>Sign In With Github</button>
}