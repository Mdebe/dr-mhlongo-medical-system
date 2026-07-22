import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
  align?: "left" | "center";
  withDot?: boolean;
};

export function SectionLabel({
  children,
  light = false,
  className,
  align = "left",
  withDot = false
}: Props) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2.5 text- font-bold tracking-[0.2em] uppercase leading-none mb-4",
        light? "text-[#D9A24B]" : "text-[#D9A24B]",
        align === "center" && "mx-auto justify-center text-center",
        className
      )}
    >
      {withDot && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D9A24B] opacity-75" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#D9A24B]" />
        </span>
      )}
      {children}
    </p>
  );
}