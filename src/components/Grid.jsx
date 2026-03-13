import React, { useEffect, useRef } from 'react';

export const Grid = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    let points = [];
    const spacing = 35; 
    let mouse = { x: -1000, y: -1000, radius: 250 };
    let targetMouse = { x: -1000, y: -1000 };

    const initPoints = () => {
      points = [];
      const cols = Math.floor(window.innerWidth / spacing) + 2;
      const rows = Math.floor(window.innerHeight / spacing) + 2;

      for (let i = -1; i < cols; i++) {
        for (let j = -1; j < rows; j++) {
          points.push({
            x: i * spacing,
            y: j * spacing,
            originX: i * spacing,
            originY: j * spacing,
          });
        }
      }
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      initPoints();
    };

    window.addEventListener('resize', resize);
    resize();

    const handleMouseMove = (e) => {
      targetMouse.x = e.clientX;
      targetMouse.y = e.clientY;
    };
    
    const handleMouseLeave = () => {
      targetMouse.x = -1000;
      targetMouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const animate = () => {
      mouse.x += (targetMouse.x - mouse.x) * 0.15;
      mouse.y += (targetMouse.y - mouse.y) * 0.15;

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      ctx.fillStyle = '#030712';
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, mouse.radius * 1.5);
      gradient.addColorStop(0, 'rgba(6, 182, 212, 0.08)'); 
      gradient.addColorStop(0.5, 'rgba(59, 130, 246, 0.03)'); 
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      for (let i = 0; i < points.length; i++) {
        let p = points[i];
        let dx = mouse.x - p.originX;
        let dy = mouse.y - p.originY;
        let dist = Math.sqrt(dx * dx + dy * dy);
        let force = Math.max(0, (mouse.radius - dist) / mouse.radius);
        let angle = Math.atan2(dy, dx);
        let repelStrength = 30;
        let targetX = p.originX - Math.cos(angle) * force * repelStrength;
        let targetY = p.originY - Math.sin(angle) * force * repelStrength;

        p.x += (targetX - p.x) * 0.15;
        p.y += (targetY - p.y) * 0.15;

        let opacity = 0.15 + (force * 0.7);
        let size = 1.2 + (force * 1.5);

        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
};
