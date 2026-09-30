import Link from "next/link";
import { AuthField } from "@/components/auth/AuthField";
import { loginContent } from "@/data/login";

export function LoginForm() {
  return (
    <section
      className="signup-panel-motion flex min-h-[785px] w-full max-w-[580px] flex-col rounded-card bg-white px-6 py-12 text-shuttle-gray-950 sm:px-[63px] sm:pb-[36px] sm:pt-[64px]"
      aria-labelledby="login-title"
    >
      <div className="signup-item-motion [animation-delay:180ms]">
        <p className="text-body-l text-persian-blue-800">{loginContent.eyebrow}</p>
        <h1
          className="mt-1 font-display text-display-xs font-semibold tracking-[-0.01em] sm:text-display-s"
          id="login-title"
        >
          {loginContent.title}
        </h1>
      </div>

      <form className="mt-[29px]" method="post">
        <div className="space-y-5">
          {loginContent.fields.map((field, index) => (
            <AuthField {...field} delay={300 + index * 100} key={field.id} />
          ))}
        </div>

        <div className="signup-item-motion mt-[22px] flex justify-end [animation-delay:540ms]">
          <button
            className="signup-submit-motion inline-flex min-h-[46px] cursor-pointer items-center justify-center rounded-pill bg-electric-lime-400 px-6 text-label-l font-medium text-shuttle-gray-950 transition duration-200 hover:-translate-y-0.5 hover:brightness-95 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-lime-400 focus-visible:ring-offset-2"
            type="submit"
          >
            {loginContent.submitLabel}
          </button>
        </div>

        <div className="signup-item-motion mt-[74px] flex items-center gap-3 text-body-m text-shuttle-gray-400 [animation-delay:640ms]">
          <span className="h-px flex-1 bg-shuttle-gray-200" />
          <span>or</span>
          <span className="h-px flex-1 bg-shuttle-gray-200" />
        </div>

        <div className="signup-item-motion mt-[45px] flex justify-center gap-4 [animation-delay:720ms]">
          <button
            aria-label="Continue with Facebook"
            className="group grid size-[72px] cursor-pointer place-items-center rounded-[24px] border border-shuttle-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-persian-blue-800/30 hover:shadow-[0_14px_30px_rgb(36_37_40_/_0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persian-blue-800"
            type="button"
          >
            <span className="grid size-[34px] place-items-center rounded-full bg-black font-sans text-[30px] font-bold leading-none text-white transition-transform duration-300 group-hover:scale-105">
              f
            </span>
          </button>
          <button
            aria-label="Continue with Google"
            className="group grid size-[72px] cursor-pointer place-items-center rounded-[24px] border border-shuttle-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-persian-blue-800/30 hover:shadow-[0_14px_30px_rgb(36_37_40_/_0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persian-blue-800"
            type="button"
          >
            <span className="font-sans text-[40px] font-bold leading-none tracking-[-0.08em] text-black transition-transform duration-300 group-hover:scale-105">
              G
            </span>
          </button>
        </div>
      </form>

      <p className="signup-item-motion mt-auto text-center text-body-m text-shuttle-gray-400 [animation-delay:820ms]">
        {loginContent.accountPrompt}{" "}
        <Link
          className="text-persian-blue-800 transition hover:text-electric-violet-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persian-blue-800"
          href={loginContent.signupHref}
        >
          {loginContent.signupLabel}
        </Link>
      </p>
    </section>
  );
}
