import { useState, useEffect } from "react";
import { NavigationBar } from "./components/NavigationBar";
import { AnnouncementBanner } from "./components/AnnouncementBanner";
import { StatisticsTicker } from "./components/StatisticsTicker";
import { HeroSection } from "./components/HeroSection";
import { ImpactSection } from "./components/ImpactSection";
import { KPISection } from "./components/KPISection";
import { WhySection } from "./components/WhySection";
import { PledgeForm, PledgeFormData } from "./components/PledgeForm";
import { Certificate } from "./components/Certificate";
import { PledgeWall, Pledge } from "./components/PledgeWall";
import { PrivacyNote } from "./components/PrivacyNote";
import { ScrollToTop } from "./components/ScrollToTop";
import { PledgeWallSkeleton } from "./components/SkeletonLoaders";
import { Toaster } from "./components/ui/sonner";
import { toast } from "sonner@2.0.3";

const STORAGE_KEY = "climate_pledges";

// Sample initial pledges for demo
const initialPledges: Pledge[] = [
  {
    id: "001",
    name: "Rahul Sharma",
    date: "2024-10-15",
    state: "Maharashtra",
    profileType: "Student",
    rating: "❤️❤️❤️❤️❤️",
  },
  {
    id: "002",
    name: "Priya Patel",
    date: "2024-10-18",
    state: "Gujarat",
    profileType: "Professional",
    rating: "❤️❤️❤️❤️❤️",
  },
  {
    id: "003",
    name: "Amit Kumar",
    date: "2024-10-20",
    state: "Delhi",
    profileType: "Student",
    rating: "❤️❤️❤️❤️❤️",
  },
  {
    id: "004",
    name: "Sneha Reddy",
    date: "2024-10-22",
    state: "Telangana",
    profileType: "Professional",
    rating: "❤️❤️❤️❤️❤️",
  },
  {
    id: "005",
    name: "Vikram Singh",
    date: "2024-10-25",
    state: "Rajasthan",
    profileType: "Other",
    rating: "❤️❤️❤️❤️❤️",
  },
];

export default function App() {
  const [pledges, setPledges] = useState<Pledge[]>([]);
  const [showCertificate, setShowCertificate] = useState(false);
  const [currentCertificate, setCurrentCertificate] = useState<{
    name: string;
    date: string;
    pledgeId: string;
  } | null>(null);
  const [heroImage, setHeroImage] = useState("");
  const [isLoadingPledges, setIsLoadingPledges] = useState(true);

  // Load pledges from localStorage
  useEffect(() => {
    // Simulate loading delay for skeleton effect
    setTimeout(() => {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsedPledges = JSON.parse(stored);
        setPledges(parsedPledges);
        console.log("Loaded pledges from storage:", parsedPledges);
      } else {
        setPledges(initialPledges);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(initialPledges));
        console.log("Initialized pledges:", initialPledges);
      }
      setIsLoadingPledges(false);
    }, 1000);
  }, []);

  // Load hero image
  useEffect(() => {
    const loadHeroImage = async () => {
      try {
        const response = await fetch(
          "https://images.unsplash.com/photo-1569163139394-de4798aa62b6?w=1920&q=80"
        );
        if (response.ok) {
          setHeroImage(response.url);
        }
      } catch (error) {
        console.error("Error loading hero image:", error);
      }
    };
    loadHeroImage();
  }, []);

  const calculateKPIs = () => {
    const students = pledges.filter((p) => p.profileType === "Student").length;
    const professionals = pledges.filter(
      (p) => p.profileType === "Professional"
    ).length;
    const others = pledges.filter((p) => p.profileType === "Other").length;

    return {
      totalPledges: pledges.length,
      students,
      professionals,
      others,
    };
  };

  const handleTakePledge = () => {
    const formSection = document.getElementById("pledge-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePledgeSubmit = async (formData: PledgeFormData) => {
    const newPledgeId = String(pledges.length + 1).padStart(3, "0");
    const newPledge: Pledge = {
      id: newPledgeId,
      name: formData.name,
      date: new Date().toISOString(),
      state: formData.state,
      profileType: formData.profileType,
      rating: "❤️❤️❤️❤️❤️",
    };

    const updatedPledges = [newPledge, ...pledges];
    setPledges(updatedPledges);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedPledges));

    // Show certificate
    setCurrentCertificate({
      name: formData.name,
      date: newPledge.date,
      pledgeId: newPledgeId,
    });
    setShowCertificate(true);

    // Show confetti
    try {
      const confetti = (await import("canvas-confetti")).default;
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#22c55e", "#3b82f6", "#a855f7"],
      });
    } catch (error) {
      console.error("Error loading confetti:", error);
    }

    toast.success("Pledge submitted successfully! Your certificate is ready.");
  };

  const kpiData = calculateKPIs();

  return (
    <div className="min-h-screen">
      <Toaster position="top-center" />
      
      <NavigationBar onTakePledge={handleTakePledge} />
      
      <AnnouncementBanner />
      
      <StatisticsTicker />
      
      {heroImage && (
        <div id="hero">
          <HeroSection onTakePledge={handleTakePledge} heroImage={heroImage} />
        </div>
      )}
      
      <ImpactSection totalPledges={kpiData.totalPledges} />
      
      <div id="kpi-section">
        <KPISection data={kpiData} isLoading={false} />
      </div>
      
      <WhySection />
      
      <PledgeForm onSubmit={handlePledgeSubmit} />
      
      <div id="pledge-wall">
        <PledgeWall pledges={pledges} isLoading={isLoadingPledges} />
      </div>
      
      <PrivacyNote />

      {showCertificate && currentCertificate && (
        <Certificate
          name={currentCertificate.name}
          date={currentCertificate.date}
          pledgeId={currentCertificate.pledgeId}
          onClose={() => setShowCertificate(false)}
        />
      )}

      <ScrollToTop />

      <footer className="bg-green-800 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xl mb-2">Cool Enough to Care! 🌍</p>
          <p className="opacity-80 text-sm">
            Together, we can make a difference for our planet.
          </p>
          <p className="opacity-60 text-xs mt-4">
            © 2024 Climate Action Pledge. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
