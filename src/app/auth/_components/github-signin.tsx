import { signIn } from "@/lib/auth"
import { Github } from "lucide-react"

export async function GithubSignin() {
    return (
        <form className="w-full" action={async () => {
            "use server"
            await signIn("github")
        }}>
            <button type="submit" className="btn w-full btn-outline btn-neutral"><Github/></button>
        </form>
    )
}