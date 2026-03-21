import { AreaChart, Area, ResponsiveContainer, YAxis, Tooltip } from 'recharts';

const data = [{ v: 30 }, { v: 45 }, { v: 35 }, { v: 60 }, { v: 55 }, { v: 70 }];

export default function Performance() {
  return (
    <div className="h-48 w-full bg-white/5 p-4 rounded-xl border border-white/10">
      <p className="text-[10px] uppercase tracking-widest text-cyan-400 mb-2">Neural Load</p>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <Area type="monotone" dataKey="v" stroke="#00d4ff" fill="rgba(0, 212, 255, 0.1)" />
          <Tooltip contentStyle={{ display: 'none' }} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}