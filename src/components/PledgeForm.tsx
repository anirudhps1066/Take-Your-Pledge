import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card } from "./ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { motion } from "motion/react";

export interface PledgeFormData {
  name: string;
  email: string;
  mobile: string;
  state: string;
  profileType: string;
  commitments: string[];
}

interface PledgeFormProps {
  onSubmit: (data: PledgeFormData) => void;
}

const commitmentOptions = [
  "Reduce plastic usage",
  "Use public transportation",
  "Plant trees",
  "Conserve water and energy",
  "Support renewable energy",
  "Reduce food waste",
  "Educate others about climate change",
];

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Delhi", "Other"
];

export function PledgeForm({ onSubmit }: PledgeFormProps) {
  const [formData, setFormData] = useState<PledgeFormData>({
    name: "",
    email: "",
    mobile: "",
    state: "",
    profileType: "",
    commitments: [],
  });

  const handleCommitmentToggle = (commitment: string) => {
    setFormData((prev) => ({
      ...prev,
      commitments: prev.commitments.includes(commitment)
        ? prev.commitments.filter((c) => c !== commitment)
        : [...prev.commitments, commitment],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      formData.name &&
      formData.email &&
      formData.mobile &&
      formData.state &&
      formData.profileType &&
      formData.commitments.length > 0
    ) {
      onSubmit(formData);
      setFormData({
        name: "",
        email: "",
        mobile: "",
        state: "",
        profileType: "",
        commitments: [],
      });
    }
  };

  return (
    <section id="pledge-form" className="py-16 px-4 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl mb-4">Take Your Pledge</h2>
            <p className="text-xl opacity-70">
              Join thousands in committing to climate action
            </p>
          </div>

          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <Label htmlFor="mobile">Mobile Number *</Label>
                <Input
                  id="mobile"
                  type="tel"
                  value={formData.mobile}
                  onChange={(e) =>
                    setFormData({ ...formData, mobile: e.target.value })
                  }
                  placeholder="+91 XXXXX XXXXX"
                  required
                />
              </div>

              <div>
                <Label htmlFor="state">State *</Label>
                <Select
                  value={formData.state}
                  onValueChange={(value) =>
                    setFormData({ ...formData, state: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your state" />
                  </SelectTrigger>
                  <SelectContent>
                    {indianStates.map((state) => (
                      <SelectItem key={state} value={state}>
                        {state}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="profileType">Profile Type *</Label>
                <Select
                  value={formData.profileType}
                  onValueChange={(value) =>
                    setFormData({ ...formData, profileType: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your profile type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Student">Student</SelectItem>
                    <SelectItem value="Professional">Professional</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="mb-3 block">My Climate Commitments *</Label>
                <div className="space-y-3">
                  {commitmentOptions.map((commitment) => (
                    <div key={commitment} className="flex items-center space-x-2">
                      <Checkbox
                        id={commitment}
                        checked={formData.commitments.includes(commitment)}
                        onCheckedChange={() => handleCommitmentToggle(commitment)}
                      />
                      <label
                        htmlFor={commitment}
                        className="text-sm cursor-pointer"
                      >
                        {commitment}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="text-sm opacity-80">
                  <strong>Privacy Note:</strong> Your information will be used solely for 
                  climate action tracking and will be displayed on our public pledge wall. 
                  We respect your privacy and will not share your contact details with third parties.
                </p>
              </div>

              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-6"
                disabled={
                  !formData.name ||
                  !formData.email ||
                  !formData.mobile ||
                  !formData.state ||
                  !formData.profileType ||
                  formData.commitments.length === 0
                }
              >
                Submit My Pledge
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
