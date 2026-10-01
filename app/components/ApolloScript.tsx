'use client';

import Script from "next/script";

export default function ApolloScript() {
  return (
    <Script
      id="apollo-tracking"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          function initApollo(){
            var n=Math.random().toString(36).substring(7);
            var o=document.createElement("script");
            o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n;
            o.async=true;
            o.defer=true;
            o.onload=function(){
              if(window.trackingFunctions){
                window.trackingFunctions.onLoad({appId:"6a8766f3c4a8e4001425f221"});
              }
            };
            document.head.appendChild(o);
          }
          initApollo();
        `,
      }}
    />
  );
}
