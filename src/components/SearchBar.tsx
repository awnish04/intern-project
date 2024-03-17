import React, { useState } from "react";
import { BellRing, Check } from "lucide-react";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";

type CardProps = React.ComponentProps<typeof Card>;

interface CardInfo {
  title: string;
  content: string;
}

const cardsData: CardInfo[] = [
  {
    title: "Notifications",
    content: "Send notifications to device.",
  },
  {
    title: "Web",
    content: "Send notifications to device.",
  },
  {
    title: "React",
    content: "Send notifications to device.",
  },
  {
    title: "Frontend",
    content: "Send notifications to device.",
  },
  {
    title: "Backend",
    content: "Send notifications to device.",
  },
  {
    title: "MongoDb",
    content: "Send notifications to device.",
  },
];

export function CardDemo({ className, ...props }: CardProps) {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredCards = cardsData.filter((card: CardInfo) => {
    return card.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="container py-6">
      <motion.div
        initial={{ opacity: 0, y: "70%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "40%" }}
        transition={{ ...transition1, duration: 0.7 }}
        className="justify-center items-center flex"
      >
        <Input
          type="text"
          placeholder="Search by Card Title"
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-96 justify-center text-center border-2 "
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: "70%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "40%" }}
        transition={{ ...transition1, duration: 0.7 }}
        className="w-full justify-between grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-4"
      >
        {filteredCards.length > 0
          ? filteredCards.map((card: CardInfo, index: number) => (
              <div key={index}>
                <Card className={cn("w-full my-2", className)} {...props}>
                  <CardHeader>
                    <CardTitle>{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <div className="flex items-center space-x-4 rounded-md border p-4">
                      <BellRing />
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">
                          Push Notifications
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {card.content}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      <Check className="mr-2 h-4 w-4" /> Mark all as read
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))
          : null}
      </motion.div>
      {filteredCards.length === 0 && (
        <div className="justify-center items-center flex w-full text-center py-10">
          <p className="text-red-900">
            No cards found related to your search query.
          </p>
        </div>
      )}
    </div>
  );
}
