import type { Metadata } from "next";
import { AuthArtwork } from "@/components/auth/AuthArtwork";
import { AuthHomeLink } from "@/components/auth/AuthHomeLink";
import { SignupForm } from "@/components/signup/SignupForm";
import { signupContent } from "@/data/signup";

export const metadata: Metadata = {
  title: "Create an Account | ByteSpace",
  description: "Create your ByteSpace account.",
};

export default function SignupPage() {
  return (
    <main className="blue-grid-top min-h-svh overflow-hidden bg-persian-blue-800 text-white">
      <div className="relative mx-auto grid min-h-svh w-full max-w-[1200px] items-center gap-12 px-5 py-6 lg:px-8 xl:grid-cols-[540px_580px] xl:gap-20 xl:px-0 xl:pb-8 xl:pt-[120px]">
        <AuthHomeLink className="signup-copy-motion absolute left-0 top-[34px] hidden xl:block" />

        <section className="hidden self-start xl:block" aria-labelledby="signup-intro-title">
          <div className="signup-copy-motion">
            <h2 className="font-display text-heading-xs font-semibold" id="signup-intro-title">
              {signupContent.introTitle}
            </h2>
            <p className="mt-3 w-[490px] text-body-l text-shuttle-gray-100">
              {signupContent.introDescription}
            </p>
          </div>
          <AuthArtwork className="mt-[60px]" />
        </section>

        <SignupForm />
      </div>
    </main>
  );
}
