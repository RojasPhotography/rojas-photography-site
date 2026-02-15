'use client';

import { useEffect, useState } from 'react';

export default function BookingScheduler() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    isMounted && (
      <iframe
        name="hats_scheduler"
        style={{ margin: '20px' }}
        frameBorder={0}
        width="100%"
        height="600"
        src="https://Rojasheadshots.17hats.com/p#/scheduling/dghcgwpskptvbvsvkskdrcgkpnrrgxch?embed=true&tp=false&hide_desc=false"
      />
    )
  );
}
