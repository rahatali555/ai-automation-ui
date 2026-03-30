export default function StatsGrid() {
  const stats = [
    { label: "AI Efficiency", val: "94%", color: "text-emerald-400" },
    { label: "Active Nodes", val: "1,204", color: "text-cyan-400" }
  ];
  return (
    <div className="grid gap-4">
      {stats.map((s, i) => (
        <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-xl">
          <p className="text-[10px] text-gray-500 uppercase">{s.label}</p>
          <p className={`text-2xl font-bold ${s.color}`}>{s.val}</p>
        </div>
      ))}
    </div>
  );
}
