import { useEffect, useState } from "react";
import { TrendingUp, Thermometer, Droplets, Wind } from "lucide-react";

interface TickerStat {
  icon: React.ReactNode;
  label: string;
  value: string;
  trend: string;
}

export function StatisticsTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const stats: TickerStat[] = [
    {
      icon: <Thermometer className="h-5 w-5" />,
      label: "Global Temperature Rise",
      value: "+1.1°C",
      trend: "since 1880",
    },
    {
      icon: <TrendingUp className="h-5 w-5" />,
      label: "CO₂ Concentration",
      value: "421 ppm",
      trend: "Oct 2024",
    },
    {
      icon: <Droplets className="h-5 w-5" />,
      label: "Arctic Ice Decline",
      value: "-13%",
      trend: "per decade",
    },
    {
      icon: <Wind className="h-5 w-5" />,
      label: "Sea Level Rise",
      value: "+3.4mm",
      trend: "per year",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stats.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [stats.length]);

  return (
    <div className="bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-3">
        {/* Desktop: Show all stats */}
        <div className="hidden md:grid md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-2 rounded-lg bg-white/5 backdrop-blur-sm"
            >
              <div className="text-orange-400 flex-shrink-0">{stat.icon}</div>
              <div className="min-w-0">
                <div className="text-xs opacity-70 truncate">{stat.label}</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-orange-400">{stat.value}</span>
                  <span className="text-xs opacity-50">{stat.trend}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Rotating single stat */}
        <div className="md:hidden">
          <div className="flex items-center justify-center gap-3 p-2">
            <div className="text-orange-400">
              {stats[currentIndex].icon}
            </div>
            <div>
              <div className="text-xs opacity-70">
                {stats[currentIndex].label}
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-orange-400">
                  {stats[currentIndex].value}
                </span>
                <span className="text-xs opacity-50">
                  {stats[currentIndex].trend}
                </span>
              </div>
            </div>
          </div>
          {/* Pagination dots */}
          <div className="flex justify-center gap-1 mt-2">
            {stats.map((_, index) => (
              <div
                key={index}
                className={`h-1 w-1 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-orange-400 w-3"
                    : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
