import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import React from "react";

const GithubButton = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  return (
      <button
          type="button"
      className="border rounded px-4 py-3 font-bold hover:bg-black transition duration-150 hover:text-white"
      onClick={() => signIn("github", { callbackUrl })}
    >
      Войти с GitHub
    </button>
  );
};

export default GithubButton;
