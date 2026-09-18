import { useState } from 'react';
import { Compass, ShieldCheck } from 'lucide-react';

export default function AcreXMapVisual() {
  const [selectedPlot, setSelectedPlot] = useState(1);

  const plots = [
    { id: 1, name: "Parcel #AX-804", area: "2.45 Acres", status: "Surveyed", coords: "17.4399° N, 78.3820° E", color: "#ff5722", points: "120,60 210,50 240,140 130,160" },
    { id: 2, name: "Parcel #AX-805", area: "1.80 Acres", status: "Active Listing", coords: "17.4412° N, 78.3845° E", color: "#38bdf8", points: "220,50 310,40 330,125 245,138" },
    { id: 3, name: "Parcel #AX-806", area: "3.20 Acres", status: "Reserved", coords: "17.4370° N, 78.3805° E", color: "#a855f7", points: "135,165 248,145 235,230 110,240" },
    { id: 4, name: "Parcel #AX-807", area: "1.15 Acres", status: "Surveyed", coords: "17.4385° N, 78.3870° E", color: "#10b981", points: "255,140 335,130 350,215 240,225" },
  ];

  const current = plots.find((p) => p.id === selectedPlot) || plots[0];

  return (
    <div style={{
      width: '100%',
      background: '#0a0a0f',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      borderRadius: '12px',
      overflow: 'hidden',
      fontFamily: 'var(--font-mono)'
    }}>
      {/* Top Map HUD Header */}
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
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff5722', boxShadow: '0 0 8px #ff5722' }}></div>
          <span style={{ color: '#f8fafc', fontWeight: 600 }}>ACREX SPATIAL ENGINE</span>
          <span style={{ color: '#475569' }}>|</span>
          <span style={{ color: '#ff6b35' }}>POLYGON MAPPING ACTIVE</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Compass size={13} color="#94a3b8" /> {current.coords}
          </span>
          <span style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <ShieldCheck size={13} /> GEODETIC SYNC
          </span>
        </div>
      </div>

      {/* Interactive Canvas */}
      <div style={{ position: 'relative', height: '280px', width: '100%', background: '#09090d', overflow: 'hidden' }}>
        {/* Fine grid overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          pointerEvents: 'none'
        }} />

        {/* Contour lines */}
        <svg
          viewBox="0 0 450 280"
          style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
        >
          {/* Background topographic lines */}
          <path d="M-20,100 Q120,40 280,110 T500,70" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="3,3" />
          <path d="M-20,170 Q140,120 300,190 T500,150" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="3,3" />
          <path d="M-20,230 Q160,190 320,240 T500,210" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="3,3" />

          {/* Road vector */}
          <path d="M40,280 L110,180 L230,130 L380,20" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="2.5" />
          <path d="M40,280 L110,180 L230,130 L380,20" fill="none" stroke="#ff5722" strokeWidth="1" strokeDasharray="6,4" opacity="0.7" />

          {/* Render Polygons */}
          {plots.map((plot) => {
            const isSelected = plot.id === selectedPlot;
            return (
              <g key={plot.id} onClick={() => setSelectedPlot(plot.id)} style={{ cursor: 'pointer' }}>
                <polygon
                  points={plot.points}
                  fill={isSelected ? 'rgba(255, 87, 34, 0.28)' : 'rgba(255, 255, 255, 0.04)'}
                  stroke={isSelected ? '#ff5722' : 'rgba(255, 255, 255, 0.25)'}
                  strokeWidth={isSelected ? '2.5' : '1.2'}
                  strokeDasharray={isSelected ? 'none' : '3,2'}
                  style={{ transition: 'all 0.3s ease' }}
                />
              </g>
            );
          })}

          {/* Active Plot Pin */}
          <g transform={`translate(${selectedPlot === 1 ? '170, 95' : selectedPlot === 2 ? '275, 85' : selectedPlot === 3 ? '180, 190' : '290, 175'})`}>
            <circle r="14" fill="rgba(255, 87, 34, 0.25)" />
            <circle r="6" fill="#ff5722" />
            <circle r="3" fill="#ffffff" />
          </g>
        </svg>

        {/* Floating Controls Overlay */}
        <div style={{
          position: 'absolute',
          bottom: '12px',
          left: '14px',
          right: '14px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          pointerEvents: 'none'
        }}>
          {/* Selected Info Card */}
          <div style={{
            pointerEvents: 'auto',
            background: 'rgba(10, 10, 15, 0.92)',
            border: '1px solid rgba(255, 87, 34, 0.4)',
            padding: '10px 14px',
            borderRadius: '8px',
            backdropFilter: 'blur(8px)',
            maxWidth: '240px'
          }}>
            <div style={{ fontSize: '0.65rem', color: '#ff6b35', letterSpacing: '0.05em' }}>SELECTED BOUNDARY</div>
            <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ffffff', margin: '2px 0' }}>{current.name}</div>
            <div style={{ display: 'flex', gap: '8px', fontSize: '0.7rem', color: '#94a3b8' }}>
              <span>Area: <strong style={{ color: '#f8fafc' }}>{current.area}</strong></span>
              <span>•</span>
              <span style={{ color: '#10b981' }}>{current.status}</span>
            </div>
          </div>

          {/* Polygon Selector Buttons */}
          <div style={{ pointerEvents: 'auto', display: 'flex', gap: '6px' }}>
            {plots.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedPlot(p.id)}
                style={{
                  background: selectedPlot === p.id ? '#ff5722' : 'rgba(255,255,255,0.06)',
                  color: selectedPlot === p.id ? '#000' : '#cbd5e1',
                  border: '1px solid ' + (selectedPlot === p.id ? '#ff5722' : 'rgba(255,255,255,0.1)'),
                  borderRadius: '4px',
                  padding: '5px 9px',
                  fontSize: '0.68rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                P-{p.id}
              </button>
            ))}
          </div>
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
          <span style={{ color: '#475569', display: 'block', fontSize: '0.62rem' }}>GEO ENGINE</span>
          <span style={{ color: '#f8fafc', fontWeight: 500 }}>Polygon Drawing</span>
        </div>
        <div style={{ borderRight: '1px solid rgba(255, 255, 255, 0.05)' }}>
          <span style={{ color: '#475569', display: 'block', fontSize: '0.62rem' }}>INTEGRATION</span>
          <span style={{ color: '#f8fafc', fontWeight: 500 }}>Google Maps Routes</span>
        </div>
        <div>
          <span style={{ color: '#475569', display: 'block', fontSize: '0.62rem' }}>PRECISION</span>
          <span style={{ color: '#ff6b35', fontWeight: 500 }}>High Accuracy GPS</span>
        </div>
      </div>
    </div>
  );
}

