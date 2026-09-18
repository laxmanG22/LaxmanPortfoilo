import { useState } from 'react';
import { Shield, Users, Truck, Database, Search, SlidersHorizontal, CheckCircle2 } from 'lucide-react';

export default function SatyasakshiDashboardVisual() {
  const [activeModule, setActiveModule] = useState('superAdmin');

  const modules = [
    { id: 'superAdmin', label: 'Super Admin', icon: Shield, count: '12 Policies' },
    { id: 'vehicles', label: 'Vehicle Fleet', icon: Truck, count: '64 Units' },
    { id: 'users', label: 'User Governance', icon: Users, count: '1,420 Users' },
    { id: 'system', label: 'Audit Log', icon: Database, count: '99.98% OK' }
  ];

  const tableData = {
    superAdmin: [
      { id: "POL-01", entity: "Root Fleet Dispatch", role: "Super Admin", access: "Full Read/Write", status: "Active" },
      { id: "POL-02", entity: "Driver Telemetry Stream", role: "Fleet Lead", access: "Scoped Access", status: "Active" },
      { id: "POL-03", entity: "Billing Reconciliation", role: "Finance Admin", access: "Restricted", status: "Protected" }
    ],
    vehicles: [
      { id: "VH-408", entity: "Scania Heavy Freight", role: "Heavy Commercial", access: "Depot North", status: "In Transit" },
      { id: "VH-409", entity: "Tata Prima Logistics", role: "Medium Commercial", access: "Hub Central", status: "Scheduled" },
      { id: "VH-410", entity: "Eicher Express Van", role: "Light Transit", access: "Depot South", status: "Available" }
    ],
    users: [
      { id: "USR-99", entity: "R. Sharma (Fleet Super)", role: "Super Admin", access: "All Regions", status: "Active" },
      { id: "USR-102", entity: "K. Reddy (Operations)", role: "Regional Lead", access: "Telangana South", status: "Active" },
      { id: "USR-104", entity: "A. Verma (Audit Ops)", role: "System Auditor", access: "Logs & Traces", status: "Active" }
    ],
    system: [
      { id: "SYS-77", entity: "RBAC Token Verification", role: "Security Layer", access: "Token Exp: 24h", status: "Encrypted" },
      { id: "SYS-78", entity: "Query Index Rebalancing", role: "MySQL Engine", access: "Execution: 4ms", status: "Optimized" },
      { id: "SYS-79", entity: "REST Cache Invalidation", role: "Edge Gate", access: "Hit Rate: 94%", status: "Nominal" }
    ]
  };

  const rows = tableData[activeModule] || tableData.superAdmin;

  return (
    <div style={{
      width: '100%',
      background: '#0a0a0f',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      borderRadius: '12px',
      overflow: 'hidden',
      fontFamily: 'var(--font-mono)'
    }}>
      {/* Top HUD Header */}
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
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#a855f7', boxShadow: '0 0 8px #a855f7' }}></div>
          <span style={{ color: '#f8fafc', fontWeight: 600 }}>SATYASAKSHI GOVERNANCE CONSOLE</span>
          <span style={{ color: '#475569' }}>|</span>
          <span style={{ color: '#a855f7' }}>4 USER MODULES</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <span style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <CheckCircle2 size={13} /> RBAC ENFORCED
          </span>
          <span style={{ color: '#ff6b35' }}>
            SECURE AUDIT
          </span>
        </div>
      </div>

      {/* Module Selector Tabs */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
        background: '#09090d'
      }}>
        {modules.map((m) => {
          const Icon = m.icon;
          const isCurrent = activeModule === m.id;
          return (
            <button
              key={m.id}
              onClick={() => setActiveModule(m.id)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px 6px',
                background: isCurrent ? 'rgba(255, 87, 34, 0.08)' : 'transparent',
                border: 'none',
                borderBottom: isCurrent ? '2px solid #ff5722' : '2px solid transparent',
                cursor: 'pointer',
                transition: 'all 0.2s',
                fontFamily: 'inherit'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: isCurrent ? '#ff7849' : '#94a3b8', fontSize: '0.72rem', fontWeight: 600 }}>
                <Icon size={13} />
                <span className="hidden sm:inline">{m.label}</span>
              </div>
              <div style={{ fontSize: '0.62rem', color: '#64748b', marginTop: '2px' }}>{m.count}</div>
            </button>
          );
        })}
      </div>

      {/* Search & Filter Toolbar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 16px',
        background: 'rgba(12, 12, 17, 0.95)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        fontSize: '0.72rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b' }}>
          <Search size={13} />
          <span>FILTER: <strong style={{ color: '#cbd5e1' }}>ACTIVE ENTITIES</strong></span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94a3b8' }}>
          <SlidersHorizontal size={13} />
          <span>PAGINATION: 1-10 OF 1,420</span>
        </div>
      </div>

      {/* Abstract Data Table Preview */}
      <div style={{ padding: '8px 12px', background: '#09090d', minHeight: '165px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.72rem' }}>
          <thead>
            <tr style={{ color: '#64748b', borderBottom: '1px solid rgba(255,255,255,0.06)', textAlign: 'left' }}>
              <th style={{ padding: '8px 6px', fontWeight: 500 }}>ID</th>
              <th style={{ padding: '8px 6px', fontWeight: 500 }}>RESOURCE</th>
              <th style={{ padding: '8px 6px', fontWeight: 500 }}>ROLE / LEVEL</th>
              <th style={{ padding: '8px 6px', fontWeight: 500 }}>SCOPE</th>
              <th style={{ padding: '8px 6px', fontWeight: 500, textAlign: 'right' }}>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr
                key={idx}
                style={{
                  borderBottom: '1px solid rgba(255, 255, 255, 0.03)',
                  color: '#cbd5e1',
                  transition: 'background 0.2s'
                }}
              >
                <td style={{ padding: '10px 6px', color: '#ff6b35', fontWeight: 600 }}>{row.id}</td>
                <td style={{ padding: '10px 6px', color: '#ffffff', fontWeight: 500 }}>{row.entity}</td>
                <td style={{ padding: '10px 6px' }}>
                  <span style={{
                    display: 'inline-block',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    background: 'rgba(255,255,255,0.06)',
                    color: '#94a3b8',
                    fontSize: '0.66rem'
                  }}>
                    {row.role}
                  </span>
                </td>
                <td style={{ padding: '10px 6px', color: '#94a3b8' }}>{row.access}</td>
                <td style={{ padding: '10px 6px', textAlign: 'right' }}>
                  <span style={{
                    display: 'inline-block',
                    padding: '2px 8px',
                    borderRadius: '9999px',
                    background: 'rgba(16, 185, 129, 0.1)',
                    color: '#34d399',
                    fontSize: '0.64rem',
                    fontWeight: 600
                  }}>
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
          <span style={{ color: '#475569', display: 'block', fontSize: '0.62rem' }}>SECURITY</span>
          <span style={{ color: '#f8fafc', fontWeight: 500 }}>Granular RBAC</span>
        </div>
        <div style={{ borderRight: '1px solid rgba(255, 255, 255, 0.05)' }}>
          <span style={{ color: '#475569', display: 'block', fontSize: '0.62rem' }}>PERFORMANCE</span>
          <span style={{ color: '#f8fafc', fontWeight: 500 }}>Large Dataset Pagination</span>
        </div>
        <div>
          <span style={{ color: '#475569', display: 'block', fontSize: '0.62rem' }}>COMPONENTS</span>
          <span style={{ color: '#a855f7', fontWeight: 500 }}>Reusable Data Tables</span>
        </div>
      </div>
    </div>
  );
}

