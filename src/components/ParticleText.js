import React, { useRef, useEffect } from "react";

const ParticleText = ({ text, className = "", particleCount = 60, particleColor = "#5489e1" }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const width = canvas.width = canvas.offsetWidth;
    const height = canvas.height = canvas.offsetHeight;
    ctx.clearRect(0, 0, width, height);

    // Draw text in the center
    ctx.font = "bold 2.2rem sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = particleColor;
    ctx.globalAlpha = 0.15;
    ctx.fillText(text, width / 2, height / 2);
    ctx.globalAlpha = 1;

    // Draw particles
    for (let i = 0; i < particleCount; i++) {
      const angle = (Math.PI * 2 * i) / particleCount;
      const radius = Math.min(width, height) / 2.2;
      const x = width / 2 + Math.cos(angle) * radius * (0.8 + 0.2 * Math.random());
      const y = height / 2 + Math.sin(angle) * radius * (0.8 + 0.2 * Math.random());
      ctx.beginPath();
      ctx.arc(x, y, 2 + Math.random() * 2, 0, Math.PI * 2);
      ctx.fillStyle = particleColor;
      ctx.globalAlpha = 0.7 + 0.3 * Math.random();
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }, [text, particleCount, particleColor]);

  return (
    <div className={`w-full h-32 md:h-40 relative flex items-center ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-2xl md:text-4xl font-extrabold text-white drop-shadow-lg text-center" style={{ color: particleColor }}>{text}</span>
      </div>
    </div>
  );
};

export default ParticleText;
