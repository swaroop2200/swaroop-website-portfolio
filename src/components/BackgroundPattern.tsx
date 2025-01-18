import React from 'react';

export const BackgroundPattern = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50" />
      <div className="grid-pattern" />
      <style jsx>{`
        .grid-pattern {
          position: absolute;
          inset: -20%;
          background-image: 
            linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 24px 24px;
          mask-image: linear-gradient(to bottom, white 80%, transparent);
          animation: patternMove 60s linear infinite;
          transform: rotate(-5deg);
        }

        @keyframes patternMove {
          0% {
            transform: translateY(-20%) rotate(-5deg);
          }
          100% {
            transform: translateY(20%) rotate(-5deg);
          }
        }
      `}</style>
    </div>
  );
};