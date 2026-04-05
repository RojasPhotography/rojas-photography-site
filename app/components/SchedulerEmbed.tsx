'use client';

import { useEffect, useState } from 'react';

export default function SchedulerEmbed() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <script type="text/javascript" src="https://Rojasheadshots.17hats.com/vendor/iframeSizer.min.js" />
      {isMounted && (
        <iframe
          name="hats_scheduler_discovery"
          title="Discovery call scheduling form"
          style={{ margin: '20px', minHeight: '900px' }}
          frameBorder={0}
          width="100%"
          height="900"
          src="https://Rojasheadshots.17hats.com/p#/scheduling/rrhknvrrwcvggbprgbngdvgzcdwwbpnb?embed=true&tp=false&hide_desc=false"
        />
      )}
    </>
  );
}
