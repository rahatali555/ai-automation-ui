export default function SystemStatus() {
  return (
    <div className="p-4 bg-black/40 border border-white/10 rounded-xl font-mono text-[10px] h-32 overflow-hidden">
      <p className="text-cyan-500">[SYSTEM] Initialization Complete...</p>
      <p className="text-gray-500">[DATA] Syncing with Node_Alpha_01</p>
      <p className="text-emerald-500">[OK] AI Model V4.2 Online</p>
      <p className="text-amber-500 animate-pulse">[WARN] High Latency in Sector 7</p>
    </div>
  );
}