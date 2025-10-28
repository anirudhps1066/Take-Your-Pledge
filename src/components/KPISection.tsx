import { Card } from "./ui/card";
import { motion } from "motion/react";
import { Target, Users, Award, TrendingUp } from "lucide-react";
import { useCounterAnimation } from "./ui/use-counter-animation";
import { Skeleton } from "./ui/skeleton";

interface KPIData {
  totalPledges: number;
  students: number;
  professionals: number;
  others: number;
}

interface KPISectionProps {
  data: KPIData;
  isLoading?: boolean;
}

export function KPISection({ data, isLoading = false }: KPISectionProps) {
  const targetPledges = 1000000;
  const progressPercentage = (data.totalPledges / targetPledges) * 100;

  // Animated counters - start immediately without waiting for intersection
  const targetCounter = useCounterAnimation({ end: targetPledges, duration: 2000, startOnView: false });
  const achievedCounter = useCounterAnimation({ end: data.totalPledges, duration: 2000, startOnView: false });
  const studentsCounter = useCounterAnimation({ end: data.students, duration: 2000, startOnView: false });
  const professionalsCounter = useCounterAnimation({ end: data.professionals, duration: 2000, startOnView: false });

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">Live Impact Metrics</h2>
          <p className="text-xl opacity-70">
            Together, we're making a difference
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.5, delay: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 bg-white hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4">
                <motion.div 
                  className="p-3 bg-blue-100 rounded-lg"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Target className="h-8 w-8 text-blue-600" />
                </motion.div>
                <div>
                  <div className="opacity-70 text-sm">Target Pledges</div>
                  <div className="text-3xl">
                    {targetCounter.count.toLocaleString()}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 bg-white hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4">
                <motion.div 
                  className="p-3 bg-green-100 rounded-lg"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </motion.div>
                <div>
                  <div className="opacity-70 text-sm">Pledges Achieved</div>
                  <div className="text-3xl">
                    {achievedCounter.count.toLocaleString()}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 bg-white hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4">
                <motion.div 
                  className="p-3 bg-purple-100 rounded-lg"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Users className="h-8 w-8 text-purple-600" />
                </motion.div>
                <div>
                  <div className="opacity-70 text-sm">Students</div>
                  <div className="text-3xl">
                    {studentsCounter.count.toLocaleString()}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 bg-white hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4">
                <motion.div 
                  className="p-3 bg-orange-100 rounded-lg"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Award className="h-8 w-8 text-orange-600" />
                </motion.div>
                <div>
                  <div className="opacity-70 text-sm">Professionals</div>
                  <div className="text-3xl">
                    {professionalsCounter.count.toLocaleString()}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-200 rounded-full h-4 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-green-500 to-green-600"
              initial={{ width: 0 }}
              whileInView={{ width: `${Math.min(progressPercentage, 100)}%` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </div>
          <p className="text-center mt-4 opacity-70">
            {progressPercentage.toFixed(2)}% of our goal achieved
          </p>
        </div>
      </div>
    </section>
  );
}
