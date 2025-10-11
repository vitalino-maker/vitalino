'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function ClientScripts() {
  const pathname = usePathname();

  useEffect(() => {
    // Wistia Script
    const wistiaScript = document.createElement('script');
    wistiaScript.src = "https://fast.wistia.com/assets/external/E-v1.js";
    wistiaScript.async = true;
    document.body.appendChild(wistiaScript);

    return () => {
      // Cleanup Wistia script if component unmounts
      if (wistiaScript.parentNode) {
        wistiaScript.parentNode.removeChild(wistiaScript);
      }
    };
  }, [pathname]);

  return null;
}
