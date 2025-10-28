import { Card } from "./ui/card";
import { Shield, Lock, Eye, Info } from "lucide-react";
import { motion } from "motion/react";

export function PrivacyNote() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4">Privacy & Data Usage</h2>
            <p className="text-xl opacity-70">
              Your privacy matters to us
            </p>
          </div>

          <Card className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl mb-2">Data Protection</h3>
                  <p className="opacity-70 text-sm">
                    Your information is stored securely and used only for climate action tracking purposes.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <Lock className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl mb-2">No Third-Party Sharing</h3>
                  <p className="opacity-70 text-sm">
                    We will never share your contact details with external parties or use them for marketing.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <Eye className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl mb-2">Public Display</h3>
                  <p className="opacity-70 text-sm">
                    Only your name, state, profile type, and pledge date will be displayed on the public pledge wall.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-orange-100 rounded-lg">
                    <Info className="h-6 w-6 text-orange-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl mb-2">Transparent Usage</h3>
                  <p className="opacity-70 text-sm">
                    Your email and mobile number are kept private and used only for pledge confirmation.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <p className="text-sm opacity-80 leading-relaxed">
                <strong>Important:</strong> By submitting your pledge, you consent to the display of your name, 
                state, and profile type on our public pledge wall. Your email address and mobile number will 
                remain private and will not be shared publicly. This platform is designed for climate action 
                awareness and does not collect sensitive personal information. We are committed to protecting 
                your privacy while celebrating your commitment to our planet.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
