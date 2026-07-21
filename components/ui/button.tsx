import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "dark";

type Props = Omit<React.ComponentPropsWithoutRef<"button">, "type"> & {
  variant?: ButtonVariant;
  href?: string;
};

export function Button({ variant = "primary", className, children, href,...props }: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold text-sm px-6 py-3 rounded-md transition-colors disabled:opacity-50 disabled:pointer-events-none";

  const variants: Record<ButtonVariant, string> = {
    primary: "bg-[#D9A24B] hover:bg-[#c8913e] text-[#0B1B33]",
    secondary: "border border-white/40 text-white hover:bg-white/10",
    ghost: "border border-black/10 hover:bg-black/5 text-[#0B1B33]",
    dark: "bg-[#0B1B33] hover:bg-[#122a50] text-white",
  };

  const cls = cn(base, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}