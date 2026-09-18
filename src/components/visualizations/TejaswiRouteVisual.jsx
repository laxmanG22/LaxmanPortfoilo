import { useState, useEffect } from 'react';
import { Signal } from 'lucide-react';

export default function TejaswiRouteVisual() {
  const [activeStep, setActiveStep] = useState(1);
  const [progress, setProgress] = useState(42);

  // Progressive vehicle animation simulator
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 5 : prev + 1));
    }, 120);
    return () => clearInterval(timer);
  }, []);

  const steps = [
    { id: 1, label: "Warehouse Hub", sub: "Dispatch Initialized", time: "10:14 AM" },
    { id: 2, label: "Transit Waypoint", sub: "Route Active • GMaps", time: "10:28 AM" },
    { id: 3, label: "Customer Site", sub: "Arrival Pending", time: "10:45 AM" }
  ];

  return (
    <div style={{
      width: '100%',
      background: '#0a0a0f',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      borderRadius: '12px',
      overflow: 'hidden',
      fontFamily: 'var(--font-mono)'
    }}>
      {/* Top Telemetry Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 18px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
        background: 'rgba(15, 15, 22, 0.8)',
        fontSize: '0.75rem',
        color: '#94a3b8'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#38bdf8', boxShadow: '0 0 8px #38bdf8' }}></div>
          <span style={{ color: '#f8fafc', fontWeight: 600 }}>TEJASWI FIELD ROUTER</span>
          <span style={{ color: '#475569' }}>|</span>
          <span style={{ color: '#38bdf8' }}>LIVE DISPATCH</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#10b981' }}>
            <Signal size={13} /> GPS LOCK
          </span>
          <span style={{ color: '#ff6b35' }}>
            ETA ~17 MIN
          </span>
        </div>
      </div>

      {/* Interactive Map Path Simulation */}
      <div style={{ position: 'relative', height: '280px', width: '100%', background: '#09090d', overflow: 'hidden' }}>
        {/* Subtle grid background */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          pointerEvents: 'none'
        }} />

        {/* SVG Route Visualization */}
        <svg viewBox="0 0 500 280" style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
          {/* Secondary streets */}
          <path d="M50,40 L450,40 M80,240 L440,240 M120,20 L120,260 M380,20 L380,260" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />

          {/* Primary Route Guideline */}
          <path
            id="dispatchRoute"
            d="M 60,200 C 140,210 180,110 260,110 C 340,110 380,180 440,80"
            fill="none"
            stroke="rgba(255, 255, 255, 0.12)"
            strokeWidth="5"
            strokeLinecap="round"
          />

          {/* Glowing Animated Route Segment */}
          <path
            d="M 60,200 C 140,210 180,110 260,110 C 340,110 380,180 440,80"
            fill="none"
            stroke="#ff5722"
            strokeWidth="3"
            strokeDasharray="8 6"
            strokeLinecap="round"
          />

          {/* Warehouse Origin Node */}
          <g transform="translate(60, 200)">
            <circle r="18" fill="rgba(56, 189, 248, 0.15)" stroke="#38bdf8" strokeWidth="1.5" />
            <circle r="6" fill="#38bdf8" />
            <text x="-25" y="32" fill="#cbd5e1" fontSize="10" fontFamily="sans-serif" fontWeight="600">WAREHOUSE</text>
            <text x="-15" y="44" fill="#64748b" fontSize="8" fontFamily="sans-serif">HUB #04</text>
          </g>

          {/* Technician Moving Indicator (Calculated along approximate bezier points) */}
          {(() => {
            const t = progress / 100;
            // Cubic bezier formula for M(60,200) C(140,210) (180,110) (260,110) C(340,110) (380,180) (440,80)
            // Simplified multi-step coordinate interpolator for visual realism:
            let cx = 60 + (440 - 60) * t;
            let cy = 200 - Math.sin(t * Math.PI) * 90 - (t > 0.5 ? (t - 0.5) * 60 : 0);
            return (
              <g transform={`translate(${cx}, ${cy})`}>
                <circle r="16" fill="rgba(255, 87, 34, 0.3)" />
                <circle r="7" fill="#ff5722" />
                <circle r="3" fill="#ffffff" />
                <rect x="-35" y="-30" width="70" height="18" rx="4" fill="rgba(10, 10, 15, 0.9)" stroke="rgba(255,87,34,0.5)" strokeWidth="1" />
                <text x="0" y="-18" textAnchor="middle" fill="#ff7849" fontSize="8" fontWeight="bold">TECH #14</text>
              </g>
            );
          })()}

          {/* Customer Destination Node */}
          <g transform="translate(440, 80)">
            <circle r="18" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" strokeWidth="1.5" />
            <circle r="6" fill="#10b981" />
            <text x="-20" y="-22" fill="#f8fafc" fontSize="10" fontFamily="sans-serif" fontWeight="600">CUSTOMER</text>
            <text x="-22" y="-10" fill="#10b981" fontSize="8" fontFamily="sans-serif">DESTINATION</text>
          </g>
        </svg>

        {/* Live Stepper Overlay */}
        <div style={{
          position: 'absolute',
          bottom: '12px',
          left: '14px',
          right: '14px',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '8px'
        }}>
          {steps.map((s) => (
            <div
              key={s.id}
              onClick={() => setActiveStep(s.id)}
              style={{
                cursor: 'pointer',
                background: 'rgba(12, 12, 18, 0.92)',
                border: activeStep === s.id ? '1px solid rgba(255, 87, 34, 0.5)' : '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '6px',
                padding: '8px 10px',
                backdropFilter: 'blur(8px)',
                transition: 'all 0.25s'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem', color: activeStep === s.id ? '#ff6b35' : '#64748b' }}>
                <span>STEP 0{s.id}</span>
                <span>{s.time}</span>
              </div>
              <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#f8fafc', marginTop: '2px' }}>{s.label}</div>
              <div style={{ fontSize: '0.65rem', color: '#94a3b8' }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Features Strip */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        padding: '10px 16px',
        background: 'rgba(12, 12, 17, 0.9)',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        fontSize: '0.7rem',
        textAlign: 'center',
        color: '#94a3b8'
      }}>
        <div style={{ borderRight: '1px solid rgba(255, 255, 255, 0.05)' }}>
          <span style={{ color: '#475569', display: 'block', fontSize: '0.62rem' }}>DEEP LINKING</span>
          <span style={{ color: '#f8fafc', fontWeight: 500 }}>Native Google Maps</span>
        </div>
        <div style={{ borderRight: '1px solid rgba(255, 255, 255, 0.05)' }}>
          <span style={{ color: '#475569', display: 'block', fontSize: '0.62rem' }}>APPS TIED</span>
          <span style={{ color: '#f8fafc', fontWeight: 500 }}>Admin + Tech + Customer</span>
        </div>
        <div>
          <span style={{ color: '#475569', display: 'block', fontSize: '0.62rem' }}>ROUTING</span>
          <span style={{ color: '#38bdf8', fontWeight: 500 }}>Turn-by-Turn GPS</span>
        </div>
      </div>
    </div>
  );
}

