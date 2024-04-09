import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function CognitiveTimer() {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    // Clear interval on unmount to avoid memory leaks
    return () => clearInterval(timer);
  }, []); // Runs only on mount

  // Convert remaining seconds to minutes and seconds
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  // Format the time to display with leading zeros if necessary
  const formattedTime = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">
        {formattedTime}
        </CardTitle>
      </CardHeader>
    </Card>
  );
}

export default CognitiveTimer
