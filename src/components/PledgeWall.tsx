import { Card } from "./ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { useState } from "react";
import { Button } from "./ui/button";

import { Skeleton } from "./ui/skeleton";

export interface Pledge {
  id: string;
  name: string;
  date: string;
  state: string;
  profileType: string;
  rating: string;
}

interface PledgeWallProps {
  pledges: Pledge[];
  isLoading?: boolean;
}

export function PledgeWall({ pledges, isLoading = false }: PledgeWallProps) {
  const [showAll, setShowAll] = useState(false);
  
  // Sort pledges by ID in ascending order
  const sortedPledges = [...pledges].sort((a, b) => {
    const idA = parseInt(a.id);
    const idB = parseInt(b.id);
    return idA - idB;
  });
  
  const displayedPledges = showAll ? sortedPledges : sortedPledges.slice(0, 10);

  const getProfileColor = (profileType: string) => {
    switch (profileType) {
      case "Student":
        return "bg-purple-100 text-purple-700 border-purple-300";
      case "Professional":
        return "bg-blue-100 text-blue-700 border-blue-300";
      default:
        return "bg-gray-100 text-gray-700 border-gray-300";
    }
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4">Pledge Wall of Honor</h2>
            <p className="text-xl opacity-70">
              Join these amazing individuals who have committed to climate action
            </p>
          </div>

          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-green-50">
                    <TableHead>Pledge ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>State</TableHead>
                    <TableHead>Profile</TableHead>
                    <TableHead>Rating</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {isLoading ? (
                    Array.from({ length: 10 }).map((_, i) => (
                      <TableRow key={i}>
                        <TableCell><Skeleton className="h-4 w-12" /></TableCell>
                        <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                        <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                        <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                        <TableCell><Skeleton className="h-6 w-20 rounded-full" /></TableCell>
                        <TableCell><Skeleton className="h-4 w-16" /></TableCell>
                      </TableRow>
                    ))
                  ) : displayedPledges.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-12 opacity-70">
                        No pledges yet. Be the first to take the pledge!
                      </TableCell>
                    </TableRow>
                  ) : (
                    displayedPledges.map((pledge, index) => (
                      <motion.tr
                        key={pledge.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        whileHover={{ 
                          backgroundColor: "rgba(34, 197, 94, 0.05)",
                          scale: 1.01,
                          transition: { duration: 0.2 }
                        }}
                        className="border-b transition-colors"
                      >
                        <TableCell className="opacity-70">
                          #{pledge.id}
                        </TableCell>
                        <TableCell>{pledge.name}</TableCell>
                        <TableCell className="opacity-70">
                          {new Date(pledge.date).toLocaleDateString()}
                        </TableCell>
                        <TableCell>{pledge.state}</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={getProfileColor(pledge.profileType)}
                          >
                            {pledge.profileType}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <span className="text-xl">{pledge.rating}</span>
                        </TableCell>
                      </motion.tr>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>

            {pledges.length > 10 && (
              <div className="p-4 text-center border-t">
                <Button
                  variant="outline"
                  onClick={() => setShowAll(!showAll)}
                  className="border-green-600 text-green-700 hover:bg-green-50"
                >
                  {showAll ? "Show Less" : `View All ${pledges.length} Pledges`}
                </Button>
              </div>
            )}
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
