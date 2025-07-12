import React, { useState, useEffect } from 'react';

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get visitor count from localStorage or initialize
    const storedCount = localStorage.getItem('visitorCount');
    const currentCount = storedCount ? parseInt(storedCount) : 0;
    
    // Increment count for new visit
    const newCount = currentCount + 1;
    localStorage.setItem('visitorCount', newCount.toString());
    
    setVisitorCount(newCount);
    setIsLoading(false);

    // Optional: Send to your backend/analytics service
    // sendVisitorData(newCount);
  }, []);

  const sendVisitorData = async (count) => {
    try {
      // Example: Send to your own analytics endpoint
      await fetch('/api/visitors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          count,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          referrer: document.referrer,
        }),
      });
    } catch (error) {
      console.log('Analytics data not sent:', error);
    }
  };

  if (isLoading) {
    return <div className="text-sm text-gray-400">Loading...</div>;
  }

  return (
    <div className="flex items-center gap-2 text-sm text-gray-400">
      <svg 
        className="w-4 h-4" 
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
      </svg>
      <span>{visitorCount.toLocaleString()} visitors</span>
    </div>
  );
};

export default VisitorCounter; 