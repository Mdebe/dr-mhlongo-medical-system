export function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`${light? "text-[#D9A24B]" : "text-[#D9A24B]"} tracking-[0.2em] text-xs font-semibold mb-3 uppercase`}>{children}</p>;
}