export const loginContent = {
  introTitle: "Sign in with ease",
  introDescription:
    "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.",
  eyebrow: "Sign In",
  title: "Welcome Back",
  submitLabel: "Sign In",
  accountPrompt: "New user?",
  signupLabel: "Create an account",
  signupHref: "/signup",
  fields: [
    {
      id: "login-email",
      label: "Email",
      name: "email",
      placeholder: "designer@example.com",
      type: "email",
      autoComplete: "email",
    },
    {
      id: "login-password",
      label: "Password",
      name: "password",
      placeholder: "********",
      type: "password",
      autoComplete: "current-password",
    },
  ],
} as const;
