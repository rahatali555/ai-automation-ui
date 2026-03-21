import Hero from "./components/Hero";
import Cards from "./components/Cards";
import { UseCases } from "./components/Cards";
import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    <div className="bg-[#050816] text-white">
      <Hero />
      <Cards />
      <UseCases />
      <Dashboard />
  
    </div>
  );
}