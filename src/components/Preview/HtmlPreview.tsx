import React, { useEffect, useRef } from 'react'

interface HtmlPreviewProps{
    code: string;
}

const HtmlPreview: React.FC<HtmlPreviewProps> = ({
    code
}) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const iframe = document.createElement('iframe');
        //   iframe.style.width = '100%';  // Slightly larger than canvas to account for borders
        //   iframe.style.height = '100%';  // Enough space for score and canvas
          iframe.style.border = 'none';
          iframe.className='w-full min-h-96'
          
          // Set the HTML content
          iframe.srcdoc = code;
          
          // Clear any existing content and append the iframe
          if (containerRef.current) {
            containerRef.current.innerHTML = '';
            containerRef.current.appendChild(iframe);
          }
    }, []);
  return (
    <div className='w-full min-h-96' ref={containerRef}></div>
  )
}

export default HtmlPreview