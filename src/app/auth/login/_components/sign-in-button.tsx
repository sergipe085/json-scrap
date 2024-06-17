import { Github } from "lucide-react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export function SignInButton() {
    const params = useSearchParams();
    const callback = params.get("callback");

    return (
        <button onClick={() => signIn("github", {
            callbackUrl: callback as string
        })} className="btn w-full btn-outline btn-neutral"><Github/></button>
    )
}