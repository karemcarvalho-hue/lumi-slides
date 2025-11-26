import React, { useEffect } from 'react';
import { usePrintMode } from '../context/PrintModeContext';

export const SlideContainer = ({ children, className = "", forPrint: forPrintProp = false }) => {
  // Check both prop and context for print mode
  const contextPrintMode = usePrintMode();
  const forPrint = forPrintProp || contextPrintMode;
  
  // For print/PDF mode, use fixed 1920x1080 dimensions
  if (forPrint) {
    return (
      <div 
        className="slide-container-print bg-tn-bg flex items-center justify-center overflow-hidden"
        style={{ 
          width: '1920px', 
          height: '1080px', 
          padding: '40px',
          boxSizing: 'border-box'
        }}
      >
        <div 
          className={`slide-box-print bg-white rounded-3xl overflow-hidden relative border border-gray-100 shadow-sm ${className}`}
          style={{ 
            width: '1840px', 
            height: '1000px',
            boxSizing: 'border-box'
          }}
        >
          <div 
            className="slide-content-print flex flex-col relative z-10"
            style={{ 
              padding: '80px', 
              height: '100%',
              boxSizing: 'border-box'
            }}
          >
            {children}
          </div>
          
          {/* Abstract Background Element (Subtle) */}
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-tn-lightblue/5 rounded-full blur-3xl z-0 pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-tn-blue/5 rounded-full blur-3xl z-0 pointer-events-none" />

          {/* Footer */}
          <div className="absolute bottom-10 right-16 opacity-40 z-20">
            <span className="text-tn-blue font-semibold text-sm tracking-widest uppercase">Lumi Product</span>
          </div>
        </div>
      </div>
    );
  }

  // Normal interactive mode
  return (
    <div className="w-full h-screen bg-tn-bg flex items-center justify-center overflow-hidden p-8">
      <div 
        id="slide-content"
        className={`w-full max-w-[1400px] aspect-video bg-white rounded-3xl overflow-hidden relative border border-gray-100 shadow-sm ${className}`}
      >
        <div className="p-16 h-full flex flex-col relative z-10">
          {children}
        </div>
        
        {/* Abstract Background Element (Subtle) */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-tn-lightblue/5 rounded-full blur-3xl z-0 pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-tn-blue/5 rounded-full blur-3xl z-0 pointer-events-none" />

        {/* Footer */}
        <div className="absolute bottom-8 right-12 opacity-40 z-20">
          <span className="text-tn-blue font-semibold text-xs tracking-widest uppercase">Lumi Product</span>
        </div>
      </div>
    </div>
  );
};
