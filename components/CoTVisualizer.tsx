import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

// Define the types of lines in our terminal
type LineType = 'command' | 'output' | 'info' | 'header' | 'spacer';

interface TerminalLine {
  id: number;
  text: React.ReactNode;
  type: LineType;
  delay?: number;
}

const letterPatterns: Record<string, number[][]> = {
  V: [[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[0,1,0,1,0],[0,0,1,0,0]],
  I: [[1,1,1],[0,1,0],[0,1,0],[0,1,0],[1,1,1]],
  B: [[1,1,1,0],[1,0,0,1],[1,1,1,0],[1,0,0,1],[1,1,1,0]],
  E: [[1,1,1,1],[1,0,0,0],[1,1,1,0],[1,0,0,0],[1,1,1,1]],
  C: [[0,1,1,1],[1,0,0,0],[1,0,0,0],[1,0,0,0],[0,1,1,1]],
  O: [[0,1,1,0],[1,0,0,1],[1,0,0,1],[1,0,0,1],[0,1,1,0]],
  D: [[1,1,1,0],[1,0,0,1],[1,0,0,1],[1,0,0,1],[1,1,1,0]],
};

const PixelWord = ({ text }: { text: string }) => (
  <div className="flex gap-4 sm:gap-6 mb-6 select-none">
    {text.split('').map((char, i) => {
      const pattern = letterPatterns[char];
      if (!pattern) return <div key={i} className="w-4"></div>; // Space
      
      return (
        <div key={i} className="flex flex-col gap-[2px]">
          {pattern.map((row, y) => (
            <div key={y} className="flex gap-[2px]">
              {row.map((cell, x) => (
                <div 
                  key={x} 
                  className={`w-1.5 h-1.5 sm:w-2 sm:h-2 ${cell ? 'bg-claude-orange shadow-[0_0_2px_rgba(217,119,87,0.4)]' : 'bg-transparent'}`} 
                />
              ))}
            </div>
          ))}
        </div>
      );
    })}
  </div>
);

const CoTVisualizer: React.FC = () => {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [statusMessage, setStatusMessage] = useState("* Simmering...");
  const containerRef = useRef<HTMLDivElement>(null);
  const { t, language } = useLanguage();
  
  // Re-render lines when language changes
  useEffect(() => {
    // Reset animation when language changes to show new text
    setLines([]);
    
    const fullSequence: TerminalLine[] = [
      { id: 1, type: 'info', text: t.terminal.welcome },
      { id: 2, type: 'spacer', text: "" },
      { id: 3, type: 'command', text: t.terminal.analyze },
      { id: 4, type: 'output', text: t.terminal.connecting, delay: 500 },
      { id: 5, type: 'output', text: t.terminal.scanning, delay: 1200 },
      { id: 6, type: 'output', text: t.terminal.found, delay: 800 },
      { id: 7, type: 'spacer', text: "" },
      { id: 8, type: 'command', text: t.terminal.optimize },
      { id: 9, type: 'output', text: t.terminal.constructing, delay: 600 },
      { id: 10, type: 'output', text: "  ├─ deploy(extractor_agent)", delay: 400 },
      { id: 11, type: 'output', text: "  ├─ deploy(validator_agent)", delay: 400 },
      { id: 12, type: 'output', text: "  └─ deploy(integrator_agent)", delay: 400 },
      { id: 13, type: 'spacer', text: "" },
      { id: 14, type: 'output', text: t.terminal.simulating, delay: 1000 },
      { id: 15, type: 'info', text: t.terminal.complete, delay: 500 },
      { id: 16, type: 'spacer', text: "" },
      { id: 17, type: 'info', text: t.terminal.pressEnter, delay: 200 }
    ];

    let currentIndex = 0;
    let timeoutId: any;

    const processLine = () => {
      if (currentIndex >= fullSequence.length) {
        // Reset after a long pause
        timeoutId = setTimeout(() => {
          setLines([]);
          currentIndex = 0;
          processLine();
        }, 8000);
        return;
      }

      const line = fullSequence[currentIndex];
      
      setLines(prev => [...prev, line]);
      currentIndex++;

      const nextDelay = line.delay || 600; 
      timeoutId = setTimeout(processLine, nextDelay);
    };

    timeoutId = setTimeout(processLine, 500);

    return () => clearTimeout(timeoutId);
  }, [language, t]); // Depends on language

  // Logic to rotate the "Simmering..." message
  useEffect(() => {
    let index = 0;
    
    const intervalId = setInterval(() => {
      index = (index + 1) % t.terminal.simmering.length;
      setStatusMessage(t.terminal.simmering[index]);
    }, 1200);

    return () => clearInterval(intervalId);
  }, [t]);

  // Auto-scroll logic
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [lines, statusMessage]);

  return (
    <div className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl relative z-20 font-mono text-sm sm:text-base border border-claude-border bg-claude-bg">
      
      {/* Mac-style Window Controls (Subtle) */}
      <div className="bg-claude-bg px-4 py-3 flex items-center border-b border-claude-border/30">
        <div className="flex gap-2 opacity-50 hover:opacity-100 transition-opacity">
          <div className="w-3 h-3 rounded-full bg-claude-dim"></div>
          <div className="w-3 h-3 rounded-full bg-claude-dim"></div>
          <div className="w-3 h-3 rounded-full bg-claude-dim"></div>
        </div>
        <div className="ml-4 text-claude-dim text-xs font-semibold tracking-wide">
          vibe-terminal — agentic-session
        </div>
      </div>

      {/* Terminal Content */}
      <div 
        ref={containerRef}
        className="p-6 md:p-8 h-[300px] md:h-[400px] overflow-y-auto bg-claude-bg text-claude-text flex flex-col [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:none]"
      >
        <div className="flex flex-col sm:flex-row gap-8 mb-4">
          <PixelWord text="VIBE" />
          <PixelWord text="CODE" />
        </div>

        <div className="space-y-1">
          {lines.map((line, index) => (
            <div key={index} className="leading-relaxed break-words">
              {line.type === 'info' && (
                <span className="text-claude-orange opacity-90">{line.text}</span>
              )}
              
              {line.type === 'command' && (
                <div className="flex items-center gap-2 mt-4 mb-2">
                   <span className="text-gray-500 font-bold">{`>`}</span>
                   <span className="text-white font-semibold">{line.text}</span>
                </div>
              )}
              
              {line.type === 'output' && (
                <span className="text-gray-400 pl-4 block">{line.text}</span>
              )}
              
              {line.type === 'spacer' && (
                <div className="h-2"></div>
              )}
            </div>
          ))}

          {/* Current Input Line Simulation */}
          {/* Only show simmering if animation is still running */}
          <div className="pl-4 pt-2 text-claude-orange font-bold text-sm animate-pulse">
             {statusMessage}
          </div>

          {/* Idle Cursor (only when finished) */}
          {/* removed complex condition for simplicity in this visualizer update */}
        </div>
      </div>
      
      {/* Decorative Bottom Bar */}
      <div className="border-t border-claude-border/30 p-2 bg-claude-bg text-xs text-claude-dim flex justify-between px-4">
        <span>Agentic Mode: ON</span>
        <span>Tokens: 1420 / 8192</span>
      </div>
    </div>
  );
};

export default CoTVisualizer;