import React from 'react';

export const BackgroundPattern = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 opacity-10"
            style={{
              background: `
                linear-gradient(
                  to right,
                  transparent,
                  rgba(125, 125, 125, 0.05) 25%,
                  transparent 50%
                )
              `,
              backgroundSize: '200% 100%',
              animation: `wave ${15 + i * 5}s linear infinite`,
              top: `${i * 33}%`,
            }}
          />
        ))}
      </div>
      <style>
        {`
          @keyframes wave {
            0% {
              background-position: 100% 0;
            }
            100% {
              background-position: -100% 0;
            }
          }
        `}
      </style>
    </div>
  );
};