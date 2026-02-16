'use client';

import { useEffect, useState } from 'react';

interface BookingSchedulerProps {
  height?: number;
  src?: string;
}

export default function BookingScheduler({
  height = 1200,
  src = 'https://Rojasheadshots.17hats.com/p#/scheduling/dghcgwpskptvbvsvkskdrcgkpnrrgxch?embed=true&tp=false&hide_desc=false'
}: BookingSchedulerProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    isMounted && (
      <iframe
        name="hats_scheduler"
        style={{ margin: '20px', minHeight: `${height}px` }}
        frameBorder={0}
        width="100%"
        height={height}
        src={src}
      />
    )
  );
}
