export interface AuthFieldProps {
  autoComplete: string;
  delay?: number;
  id: string;
  label: string;
  name: string;
  placeholder: string;
  type: string;
}

export function AuthField({
  autoComplete,
  delay = 300,
  id,
  label,
  name,
  placeholder,
  type,
}: AuthFieldProps) {
  return (
    <div
      className="signup-item-motion [animation-delay:var(--auth-field-delay)]"
      style={{ "--auth-field-delay": `${delay}ms` } as React.CSSProperties}
    >
      <label className="mb-2 block text-body-s font-medium text-shuttle-gray-950" htmlFor={id}>
        {label}
      </label>
      <input
        autoComplete={autoComplete}
        className="h-[52px] w-full rounded-[14px] border border-shuttle-gray-200 bg-white px-6 text-body-l text-shuttle-gray-950 outline-none transition duration-200 placeholder:text-shuttle-gray-400 hover:border-shuttle-gray-300 focus:border-persian-blue-800 focus:ring-4 focus:ring-persian-blue-800/10"
        id={id}
        name={name}
        placeholder={placeholder}
        required
        type={type}
      />
    </div>
  );
}
