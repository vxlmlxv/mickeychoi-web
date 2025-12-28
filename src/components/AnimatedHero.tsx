"use client";

import { useEffect, useState } from "react";
import { Column, Heading, Text } from "@once-ui-system/core";

export default function AnimatedHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showChairman, setShowChairman] = useState(false);

  const statements = [
    "1 & Only is back",
    "2 Levels above you",
    "The work never stops",
    "MICKEY CHOI",
  ];

  useEffect(() => {
    // Reset animation on mount (every page refresh)
    setCurrentIndex(0);
    setShowChairman(false);

    const intervals: NodeJS.Timeout[] = [];

    // Cycle through statements every 300ms
    const mainInterval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev < statements.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 300);

    intervals.push(mainInterval);

    // Show "Chairman" 400ms after "MICKEY CHOI" appears
    const chairmanTimeout = setTimeout(() => {
      setShowChairman(true);
    }, 300 * 3 + 300); // After 3 transitions + delay

    intervals.push(chairmanTimeout);

    // Clean up intervals on unmount
    return () => {
      intervals.forEach(clearInterval);
    };
  }, []);

  const isLastStatement = currentIndex === statements.length - 1;

  return (
    <Column
      fillWidth
      horizontal="center"
      gap="m"
      paddingY="xl"
      style={{ minHeight: "300px", position: "relative" }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          gap: "0.5rem",
        }}
      >
        {/* Animated Text */}
        <Heading
          variant="display-strong-xl"
          align="left"
          onBackground={isLastStatement ? "brand-strong" : "neutral-strong"}
          style={{
            transition: "all 0.5s ease-in-out",
            opacity: 1,
            transform: "translateY(0)",
          }}
        >
          {statements[currentIndex]}
        </Heading>

        {/* Chairman Text - Fades in after MICKEY CHOI */}
        <Text
          variant="heading-default-m"
          align="left"
          onBackground="neutral-medium"
          style={{
            opacity: showChairman ? 1 : 0,
            transform: showChairman ? "translateX(0)" : "translateX(-10px)",
            transition: "all 0.6s ease-in-out",
            height: showChairman ? "auto" : "0",
          }}
        >
          Chairman
        </Text>
      </div>
    </Column>
  );
}
