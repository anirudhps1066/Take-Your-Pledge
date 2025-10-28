import { motion } from "motion/react";
import { Leaf, Heart, Globe, Zap } from "lucide-react";

export function WhySection() {
  const reasons = [
    {
      icon: Leaf,
      title: "Protect Our Planet",
      description: "Every action counts in preserving Earth's ecosystems for future generations.",
    },
    {
      icon: Heart,
      title: "Show You Care",
      description: "Join a community of passionate individuals committed to positive change.",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Your pledge contributes to a worldwide movement fighting climate change.",
    },
    {
      icon: Zap,
      title: "Inspire Action",
      description: "Lead by example and motivate others to take their climate action pledge.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">
            Why Take Climate Action?
          </h2>
          <p className="text-xl opacity-70 max-w-3xl mx-auto">
            Climate change is the defining challenge of our time. By taking the pledge, 
            you're committing to make sustainable choices and inspire others to join the movement. 
            Together, we can create a healthier, more sustainable future for all.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div 
                className="inline-flex p-4 bg-green-100 rounded-full mb-4"
                whileHover={{ 
                  scale: 1.15, 
                  rotate: 360,
                  backgroundColor: "rgba(34, 197, 94, 0.3)"
                }}
                transition={{ duration: 0.5 }}
              >
                <reason.icon className="h-8 w-8 text-green-600" />
              </motion.div>
              <h3 className="text-xl mb-2">{reason.title}</h3>
              <p className="opacity-70">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
