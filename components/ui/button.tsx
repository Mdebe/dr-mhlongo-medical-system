import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "dark" | "outline";
type ButtonSize = "sm" | "md" | "lg" | "icon";

type Props = Omit<React.ComponentPropsWithoutRef<"a"> & React.ComponentPropsWithoutRef<"button">, "href"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  external = false,
 ...props
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A24B] focus-visible:ring-offset-2 active:scale-[0.98] whitespace-nowrap select-none";

  const sizes: Record<ButtonSize, string> = {
    sm: "h-9 px-4 text- rounded-full",
    md: "h-11 px-6 text- rounded-full",
    lg: "h-12 px-8 text- rounded-full",
    icon: "h-10 w-10 p-0 rounded-full",
  };

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-[#D9A24B] text-[#0B1B33] hover:bg-[#c8913e] hover:shadow-[0_4px_20px_rgba(217,162,75,0.35)] shadow-sm",
    secondary:
      "border border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white hover:text-[#0B1B33] hover:border-white",
    ghost:
      "border border-black/10 bg-transparent text-[#0B1B33] hover:bg-black/[0.04] hover:border-black/15",
    dark: "bg-[#0B1B33] text-white hover:bg-[#122a50] hover:shadow-lg shadow-sm",
    outline:
      "border border-[#0B1B33]/15 bg-white text-[#0B1B33] hover:bg-[#F7F5F1] hover:border-[#0B1B33]/25",
  };

  const cls = cn(base, sizes[size], variants[variant], className);

  if (href) {
    const isExternal = external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
    return (
      <Link
        href={href}
        className={cls}
        target={isExternal? "_blank" : undefined}
        rel={isExternal && href.startsWith("http")? "noopener noreferrer" : undefined}
        {...(props as any)}
      >
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