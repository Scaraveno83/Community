import React from 'react'

export default function AnimatedParticles() {
  return (
    <div className="particles absolute inset-0 -z-10 pointer-events-none">
      <div className="particle" style={{left: '10%', top: '20%'}} />
      <div className="particle" style={{left: '50%', top: '10%'}} />
      <div className="particle" style={{left: '80%', top: '30%'}} />
      <style jsx>{`
        .particle {
          position: absolute;
          width: 24px;
          height: 24px;
          background: rgba(0, 191, 246, 0.5);
          border-radius: 50%;
          filter: blur(8px);
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0% { transform: translateY(0) scale(1) }
          50% { transform: translateY(-30px) scale(1.2) }
          100% { transform: translateY(0) scale(1) }
        }
      `}</style>
    </div>
  )
}
