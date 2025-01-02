import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import mermaid from "mermaid";
import React from "react";

interface MermaidDiagramProps {
  children: string;
  id?: string;
  onError?: (error: any) => void;
}

const MermaidDiagram: React.FC<MermaidDiagramProps> = ({
  id,
  children,
  onError,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  const container_id = `${id || "d" + Date.now()}-mermaid`;

  const containerId = useMemo(() => 
    `${id || 'mermaid'}-${Math.random().toString(36).substr(2, 9)}`,
    [id]
  );


  useEffect(() => {
    if (!isInitialized) {
      mermaid.initialize({
        startOnLoad: true,
      });
      setIsInitialized(true);
    }
  }, [isInitialized]);

  const renderDiagram = useCallback(async () => {
    if (!containerRef.current || !isInitialized || !children.trim()) {
      return;
    }

    try {
      const { svg } = await mermaid.render(containerId, children);
      
      if (containerRef.current) {
        containerRef.current.innerHTML = svg;
      }
    } catch (error) {
      console.error('Mermaid rendering failed:', error);
      onError?.(error instanceof Error ? error : new Error(String(error)));
    }
  }, [children, containerId, isInitialized, onError]);

  useEffect(() => {
    renderDiagram();
  }, [renderDiagram]);

  return <div id={container_id} ref={containerRef} />;
};

export default MermaidDiagram;
