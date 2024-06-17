import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { Github } from "lucide-react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export function SignInButton() {
    const params = useSearchParams();
    const callback = params.get("callback");

    return (
        <button onClick={() => signIn("github", {
            callbackUrl: callback ? callback as string : DEFAULT_LOGIN_REDIRECT
        })} className="btn w-full btn-outline btn-neutral"><Github/></button>
    )
}