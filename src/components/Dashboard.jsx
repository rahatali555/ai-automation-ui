export default function Dashboard() {
  return (
    <div className="py-20 text-center text-white">
      <h2 className="text-3xl mb-10">AI Monitoring Dashboard</h2>

      <div className="max-w-4xl mx-auto bg-white/5 p-6 rounded-xl backdrop-blur">
        <div className="h-3 bg-primary mb-4 animate-pulse"></div>
        <div className="h-3 bg-primary mb-4 w-3/4"></div>
        <div className="h-3 bg-primary w-1/2"></div>
      </div>
    </div>
  );
}