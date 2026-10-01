import Link from "next/link";
import { AuthField } from "@/components/auth/AuthField";
import { AuthHomeLink } from "@/components/auth/AuthHomeLink";
import { signupContent } from "@/data/signup";

export function SignupForm() {
  return (
    <section
      className="auth-panel signup-panel-motion relative flex w-full max-w-[580px] flex-col rounded-card bg-white px-6 py-12 text-shuttle-gray-950 sm:px-[63px] sm:pb-[52px] sm:pt-[64px]"
      aria-labelledby="signup-title"
    >
      <AuthHomeLink
        className="absolute right-5 top-5 z-10 sm:right-6 sm:top-6 xl:hidden"
        variant="back"
      />

      <div className="signup-item-motion [animation-delay:180ms]">
        <p className="text-body-l text-persian-blue-800">{signupContent.eyebrow}</p>
        <h1
          className="mt-1 whitespace-pre-line font-display text-display-xs font-semibold tracking-[-0.01em] sm:text-display-s"
          id="signup-title"
        >
          {signupContent.title}
        </h1>
      </div>

      <form className="mt-[29px] flex flex-1 flex-col" method="post">
        <div className="space-y-5">
          {signupContent.fields.map((field, index) => (
            <AuthField {...field} delay={300 + index * 100} key={field.id} />
          ))}
        </div>

        <div className="signup-item-motion mt-[22px] flex justify-end [animation-delay:640ms]">
          <button
            className="signup-submit-motion inline-flex min-h-[46px] cursor-pointer items-center justify-center rounded-pill bg-electric-lime-400 px-6 text-label-l font-medium text-shuttle-gray-950 transition duration-200 hover:-translate-y-0.5 hover:brightness-95 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-lime-400 focus-visible:ring-offset-2"
            type="submit"
          >
            {signupContent.submitLabel}
          </button>
        </div>
      </form>

      <p className="signup-item-motion mt-12 text-center text-body-m text-shuttle-gray-700 [animation-delay:760ms]">
        {signupContent.accountPrompt}{" "}
        <Link
          className="text-persian-blue-800 transition hover:text-electric-violet-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persian-blue-800"
          href={signupContent.loginHref}
        >
          {signupContent.loginLabel}
        </Link>
      </p>
    </section>
  );
}
