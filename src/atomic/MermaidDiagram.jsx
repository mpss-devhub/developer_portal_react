import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

const MermaidDiagram = ({ diagramDefinition }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && containerRef.current) {
      mermaid.initialize({ startOnLoad: false });
      mermaid.render('mermaidDiagram', diagramDefinition, (svgCode) => {
        containerRef.current.innerHTML = svgCode;
      });
    }
  }, [diagramDefinition]);

  return <div ref={containerRef} />;
};

export default MermaidDiagram;