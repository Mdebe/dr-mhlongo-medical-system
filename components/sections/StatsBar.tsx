import { stats } from "@/lib/data";

export function StatsBar() {
  return (
    <section className="bg-[#0B1B33] py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-5 gap-8 lg:divide-x lg:divide-white/10">
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex items-center gap-4 lg:pl-8 first:lg:pl-0">
            <span className="text-[#D9A24B]"><Icon className="w-8 h-8" /></span>
            <div className="leading-tight"><p className="text-white font-bold text-lg">{value}</p><p className="text-white/60 text-xs max-w-">{label}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}