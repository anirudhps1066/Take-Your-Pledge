import { motion } from "motion/react";
import { Users, Target, Heart, Globe } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const impactCards = [
  {
    icon: <Users className="h-8 w-8" />,
    title: "Community Power",
    description: "Every pledge joins a global movement of climate champions taking real action.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Measurable Impact",
    description: "Track collective progress and see how individual actions create massive change.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Personal Commitment",
    description: "Transform intention into action with your personalized climate pledge certificate.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Global Movement",
    description: "Be part of a worldwide effort to limit warming to 1.5°C and protect our planet.",
    color: "from-orange-500 to-orange-600",
  },
];

interface ImpactSectionProps {
  totalPledges: number;
}

export function ImpactSection({ totalPledges }: ImpactSectionProps) {
  return (
    <section id="impact" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            Your Pledge Makes a Difference
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join {totalPledges.toLocaleString()}+ individuals who have already committed to climate action
          </p>
        </motion.div>

        {/* Impact Cards with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -8,
                rotateX: 5,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              style={{ perspective: 1000 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <CardContent className="p-6">
                  <motion.div 
                    className={`bg-gradient-to-br ${card.color} p-3 rounded-lg inline-block mb-4 text-white`}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {card.icon}
                  </motion.div>
                  <h3 className="text-gray-900 mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl"
        >
          <h3 className="text-3xl md:text-4xl mb-4">
            Together We Can Limit Global Warming
          </h3>
          <p className="text-lg md:text-xl opacity-90 mb-6 max-w-2xl mx-auto">
            Climate scientists say we need collective action now to keep warming below 1.5°C. 
            Your pledge is a commitment to be part of the solution.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8">
            <div>
              <div className="text-4xl md:text-5xl mb-2">1.5°C</div>
              <div className="text-sm md:text-base opacity-80">Target Limit</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl mb-2">{totalPledges}+</div>
              <div className="text-sm md:text-base opacity-80">Pledges Taken</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl mb-2">100%</div>
              <div className="text-sm md:text-base opacity-80">Commitment</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
