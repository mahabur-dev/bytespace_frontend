export const signupContent = {
  introTitle: "Sign up and come in",
  introDescription:
    "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost",
  eyebrow: "Create an Account",
  title: "Welcome to\nByteSpace",
  submitLabel: "Continue",
  accountPrompt: "Already have an account?",
  loginLabel: "Login",
  loginHref: "/login",
  fields: [
    {
      id: "full-name",
      label: "Full Name",
      name: "fullName",
      placeholder: "Jamie Davis",
      type: "text",
      autoComplete: "name",
    },
    {
      id: "email",
      label: "Email",
      name: "email",
      placeholder: "designer@example.com",
      type: "email",
      autoComplete: "email",
    },
    {
      id: "password",
      label: "Password",
      name: "password",
      placeholder: "********",
      type: "password",
      autoComplete: "new-password",
    },
  ],
} as const;
