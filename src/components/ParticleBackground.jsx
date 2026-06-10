// ParticleBackground.jsx - Constellation particle network
// Fixed behind entire site using position: fixed and z-index: 0
// All other content sits above it at z-index: 10
// Uses HTML Canvas API to draw and animate dots and connecting lines
// useRef gives direct access to the canvas DOM element
// requestAnimationFrame creates a smooth 60fps animation loop
// Particles bounce off edges and connect to nearby particles with lines
// Line opacity fades as distance increases - creates constellation effect
// pointer-events-none means canvas never blocks clicks or hover on content

import { useEffect, useRef } from "react";

function ParticleBackground() {
  // useRef stores a reference to the canvas element
  // does not cause re-render when it changes unlike useState
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;

    // Resize canvas to fill full viewport
    // Called on load and whenever window resizes
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    // Particle array - rebuilt on every resize
    let particles = [];

    const initParticles = () => {
      particles = [];
      // 100 particles spread randomly across the canvas
      const count = 100;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width, // random x position
          y: Math.random() * canvas.height, // random y position
          vx: (Math.random() - 0.5) * 0.4, // slow random horizontal velocity
          vy: (Math.random() - 0.5) * 0.4, // slow random vertical velocity
          size: Math.random() * 2 + 1, // random size between 1-3px
        });
      }
    };

    // Main draw loop - runs 60 times per second via requestAnimationFrame
    const draw = () => {
      // Clear previous frame
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw each particle
      particles.forEach((p) => {
        // Move particle by its velocity
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges by reversing velocity
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Draw the dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(139, 92, 246, 0.5)";
        ctx.fill();
      });

      // Draw connecting lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          // Calculate distance between two particles using Pythagorean theorem
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Only draw line if particles are within 150px of each other
          if (dist < 150) {
            // Line fades out as distance increases
            // at dist=0 opacity=0.15, at dist=150 opacity=0
            const opacity = (1 - dist / 150) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Schedule next frame - creates smooth animation loop
      animationId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    draw();

    // Cleanup when component unmounts
    // Cancels animation loop and removes resize listener
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    // Fixed canvas covers full viewport
    // z-index 0 keeps it behind all content
    // pointer-events-none means it never blocks clicks
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}

export default ParticleBackground;
