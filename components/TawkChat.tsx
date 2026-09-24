"use client";

import Script from "next/script";

export default function TawkChat() {
  return (
    <Script id="tawk-to-chat" strategy="afterInteractive">
      {`
        var Tawk_API = Tawk_API || {},
            Tawk_LoadStart = new Date();

        (function () {
          var s1 = document.createElement("script"),
              s0 = document.getElementsByTagName("script")[0];

          s1.async = true;
          s1.src = "https://embed.tawk.to/6ab4c3256398b834460255f7/1k391kjd1";
          s1.charset = "UTF-8";
          s1.setAttribute("crossorigin", "*");

          s0.parentNode.insertBefore(s1, s0);
        })();
      `}
    </Script>
  );
}
