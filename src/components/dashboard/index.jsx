import PerformanceChart from "./PerformanceChart";
import StatsGrid from "./StatsGrid";
import SystemStatus from "./SystemStatus";

export default function Dashboard() {
  return (
    <section className="min-h-screen bg-[#020617] p-8 text-white">
      {/* Header */}
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold tracking-tighter bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent italic">
          AI COMMAND CENTER
        </h2>
        <div className="h-[1px] w-64 bg-cyan-500/30 mx-auto mt-2 shadow-[0_0_10px_#00d4ff]" />
      </div>

      {/* Main Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column (Stats & Logs) - Takes 4/12 columns */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <StatsGrid />
          <SystemStatus />
        </div>

        {/* Right Column (Graph) - Takes 8/12 columns */}
        <div className="lg:col-span-8 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl">
           <div className="flex justify-between items-center mb-10">
              <h3 className="text-xs uppercase tracking-[0.3em] text-cyan-400 font-mono font-bold">
                Neural_Processing_Load
              </h3>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-500 rounded-full animate-ping" />
                <span className="text-[10px] text-cyan-500 font-mono">LIVE_FEED</span>
              </div>
           </div>
           
           <PerformanceChart />
           
           <div className="mt-10 pt-6 border-t border-white/5 flex justify-around text-[10px] font-mono text-gray-500 uppercase tracking-widest">
             <span>Node: 0x88F</span>
             <span>Status: Nominal</span>
             <span>Uptime: 100.0%</span>
           </div>
        </div>
      </div>
    </section>
  );
}