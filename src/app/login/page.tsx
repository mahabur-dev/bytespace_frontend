import type { Metadata } from "next";
import { AuthArtwork } from "@/components/auth/AuthArtwork";
import { AuthHomeLink } from "@/components/auth/AuthHomeLink";
import { LoginForm } from "@/components/auth/LoginForm";
import { loginContent } from "@/data/login";

export const metadata: Metadata = {
  title: "Sign In | ByteSpace",
  description: "Sign in to your ByteSpace account.",
};

export default function LoginPage() {
  return (
    <main className="blue-grid-top min-h-svh overflow-hidden bg-persian-blue-800 text-white">
      <div className="relative mx-auto grid min-h-svh w-full max-w-[1200px] items-center gap-12 px-5 py-12 lg:px-8 xl:min-h-[1024px] xl:grid-cols-[540px_580px] xl:gap-20 xl:px-0 xl:py-0">
        <AuthHomeLink className="signup-copy-motion absolute left-0 top-[34px] hidden xl:block" />

        <section className="hidden self-start pt-[117px] xl:block" aria-labelledby="login-intro-title">
          <div className="signup-copy-motion">
            <h2 className="font-display text-heading-xs font-semibold" id="login-intro-title">
              {loginContent.introTitle}
            </h2>
            <p className="mt-3 w-[490px] text-body-l text-shuttle-gray-100">
              {loginContent.introDescription}
            </p>
          </div>
          <AuthArtwork />
        </section>

        <LoginForm />
      </div>
    </main>
  );
}
