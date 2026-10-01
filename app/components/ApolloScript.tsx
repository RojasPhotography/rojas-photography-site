import Script from "next/script";

export default function ApolloScript() {
  return (
    <Script
      id="apollo-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,o.onload=function(){window.trackingFunctions.onLoad({appId:"6a8766f3c4a8e4001425f221"})},document.head.appendChild(o)}initApollo();`,
      }}
    />
  );
}
