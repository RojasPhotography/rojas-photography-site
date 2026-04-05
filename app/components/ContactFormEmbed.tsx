'use client';

import { useEffect, useState } from 'react';

export default function ContactFormEmbed() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <script type="text/javascript" src="https://Rojasheadshots.17hats.com/vendor/iframeSizer.min.js" />
      {isMounted && (
        <iframe
          name="lc_contact_form"
          title="Contact and quote request form"
          frameBorder={0}
          width="100%"
          height="600"
          src="https://Rojasheadshots.17hats.com/p#/embed/pzxhhxtvwbkzwzxgzwgxvphnpdkrfwbt"
        />
      )}
    </>
  );
}
