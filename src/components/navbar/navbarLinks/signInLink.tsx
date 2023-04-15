import { SignInButton } from "@clerk/nextjs";

export const SignInLink = () => {
  const SignSpan = (
    <span
      className="text-black hover:text-blue-400"
      style={{ cursor: "pointer" }}
    >
      Sign in
    </span>
  );

  return <SignInButton>{SignSpan}</SignInButton>;
};
