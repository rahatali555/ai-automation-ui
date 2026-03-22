export default function Cards() {
  const data = [
    "Vehicle Status: Optimized",
    "Robot Efficiency: +23%",
    "System Active: AI Monitoring"
  ];

  return (
    <div className="py-20 text-center bg-[#050816] text-white">
      <h2 className="text-3xl mb-10">Real-Time AI Insights</h2>

      <div className="flex justify-center gap-6">
        {data.map((item, i) => (
          <div
            key={i}
            className="w-72 p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:shadow-[0_0_30px_#00d4ff] transition"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
export function UseCases() {
  return (
    <div className="py-20 text-center text-white">
      <h2 className="text-3xl mb-10">Use Cases</h2>

      <div className="flex justify-center gap-6">
        <div className="card">🚗 Smart Vehicles</div>
        <div className="card">🤖 Robotics Control</div>
        <div className="card">🏭 Industrial Automation</div>
      </div>
    </div>
  );}