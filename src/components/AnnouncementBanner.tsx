import { useState } from "react";
import { AlertCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className="bg-gradient-to-r from-orange-600 to-red-600 text-white overflow-hidden mt-16"
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1">
            <AlertCircle className="h-5 w-5 flex-shrink-0 animate-pulse" />
            <p className="text-sm md:text-base">
              <span className="hidden sm:inline">
                <strong>Climate Emergency:</strong> Global temperatures have risen 1.1°C since pre-industrial times. 
              </span>
              <span className="sm:hidden">
                <strong>Act Now:</strong> Every pledge counts in the climate fight.
              </span>
              <span className="ml-2 underline cursor-pointer hover:opacity-80">
                Take action today!
              </span>
            </p>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="hover:bg-white/20 p-1 rounded transition-colors flex-shrink-0"
            aria-label="Dismiss announcement"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
