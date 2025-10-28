import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X, Leaf } from "lucide-react";

interface NavigationBarProps {
  onTakePledge: () => void;
}

export function NavigationBar({ onTakePledge }: NavigationBarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="bg-green-600 p-2 rounded-full">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <span className="text-green-800">Climate Action Pledge</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-gray-700 hover:text-green-600 transition-colors relative group pb-1"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("impact")}
              className="text-gray-700 hover:text-green-600 transition-colors relative group pb-1"
            >
              Impact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("kpi-section")}
              className="text-gray-700 hover:text-green-600 transition-colors relative group pb-1"
            >
              Statistics
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("pledge-form")}
              className="text-gray-700 hover:text-green-600 transition-colors relative group pb-1"
            >
              Take Pledge
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("pledge-wall")}
              className="text-gray-700 hover:text-green-600 transition-colors relative group pb-1"
            >
              Pledge Wall
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <Button
              onClick={onTakePledge}
              className="bg-green-600 hover:bg-green-700"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-gray-700 hover:text-green-600 transition-colors text-left relative group pb-1"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("impact")}
                className="text-gray-700 hover:text-green-600 transition-colors text-left relative group pb-1"
              >
                Impact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("kpi-section")}
                className="text-gray-700 hover:text-green-600 transition-colors text-left relative group pb-1"
              >
                Statistics
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("pledge-form")}
                className="text-gray-700 hover:text-green-600 transition-colors text-left relative group pb-1"
              >
                Take Pledge
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("pledge-wall")}
                className="text-gray-700 hover:text-green-600 transition-colors text-left relative group pb-1"
              >
                Pledge Wall
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <Button
                onClick={onTakePledge}
                className="bg-green-600 hover:bg-green-700 w-full"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
