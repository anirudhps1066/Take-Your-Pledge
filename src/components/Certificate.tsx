import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { Download, Share2, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { certificateTemplates } from "./CertificateTemplates";
import confetti from "canvas-confetti";

interface CertificateProps {
  name: string;
  date: string;
  pledgeId: string;
  onClose: () => void;
}

export function Certificate({ name, date, pledgeId, onClose }: CertificateProps) {
  const certificateRef = useRef<HTMLDivElement>(null);
  const [selectedTemplate, setSelectedTemplate] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);

  // Trigger confetti and reveal animation
  useState(() => {
    setTimeout(() => {
      setIsRevealed(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#22c55e', '#3b82f6', '#eab308', '#ffffff']
      });
    }, 300);
  });

  const handleDownload = async () => {
    if (!certificateRef.current) return;

    try {
      const html2canvas = (await import("html2canvas")).default;
      const canvas = await html2canvas(certificateRef.current, {
        scale: 2,
        backgroundColor: "#ffffff",
        logging: false,
        useCORS: true,
        allowTaint: true,
      });

      const link = document.createElement("a");
      link.download = `climate-pledge-certificate-${pledgeId}.png`;
      link.href = canvas.toDataURL();
      link.click();

      // Small confetti burst on download
      confetti({
        particleCount: 50,
        spread: 50,
        origin: { y: 0.7 }
      });
    } catch (error) {
      console.error("Error generating certificate:", error);
    }
  };

  const handleShare = async () => {
    const shareText = `I just took the Climate Action Pledge! Join me in making a difference. #CoolEnoughToCare #ClimateAction`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: "My Climate Pledge Certificate",
          text: shareText,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(shareText);
      alert("Share text copied to clipboard!");
    }
  };

  const TemplateComponent = certificateTemplates[selectedTemplate].component;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0, rotateY: -180 }}
        animate={{ scale: 1, opacity: 1, rotateY: 0 }}
        exit={{ scale: 0.5, opacity: 0, rotateY: 180 }}
        transition={{ 
          type: "spring", 
          duration: 0.8,
          delay: 0.1
        }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-3xl"
      >
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute -top-12 right-0 text-white hover:bg-white/20 z-10"
            onClick={onClose}
          >
            <X className="h-6 w-6" />
          </Button>

          {/* Template Selector */}
          <div className="mb-4 flex gap-2 justify-center">
            {certificateTemplates.map((template, index) => (
              <motion.button
                key={template.id}
                onClick={() => setSelectedTemplate(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-lg transition-all ${
                  selectedTemplate === index
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <Sparkles className="inline h-4 w-4 mr-2" />
                {template.name}
              </motion.button>
            ))}
          </div>

          {/* Certificate with Animated Reveal */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTemplate}
              initial={{ opacity: 0, rotateY: 90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: -90 }}
              transition={{ duration: 0.5 }}
            >
              <div
                ref={certificateRef}
                className="overflow-hidden relative"
                style={{
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                  borderRadius: '0.5rem'
                }}
              >
                {/* Shimmer effect overlay */}
                {isRevealed && (
                  <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: '200%' }}
                    transition={{ 
                      duration: 1.5, 
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                    className="absolute inset-0 z-20 pointer-events-none"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                      width: '50%'
                    }}
                  />
                )}
                
                <TemplateComponent 
                  name={name} 
                  date={date} 
                  pledgeId={pledgeId} 
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex gap-4 mt-6 justify-center flex-wrap"
          >
            <Button
              onClick={handleDownload}
              className="bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Certificate
            </Button>
            <Button
              onClick={handleShare}
              variant="outline"
              className="border-2 border-white bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm shadow-lg"
            >
              <Share2 className="mr-2 h-5 w-5" />
              Share on Social Media
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
