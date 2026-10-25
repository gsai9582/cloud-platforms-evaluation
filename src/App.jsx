import React, { useState } from 'react';
import { 
  Cloud, 
  Server, 
  Database, 
  Network, 
  DollarSign, 
  ShieldCheck, 
  LayoutDashboard, 
  Info,
  Cpu,
  ChevronRight,
  ExternalLink,
  Globe,
  Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cloudProviders, serviceCategories, pricingModels, useCases } from './data/cloud-data';

// --- Components ---

const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'overview', icon: LayoutDashboard, label: 'Market Overview' },
    { id: 'compute', icon: Cpu, label: 'Compute Services' },
    { id: 'storage', icon: Database, label: 'Storage Solutions' },
    { id: 'database', icon: Server, label: 'Databases' },
    { id: 'networking', icon: Network, label: 'Networking' },
    { id: 'architecture', icon: Globe, label: 'Architecture Lab' },
    { id: 'pricing', icon: DollarSign, label: 'Pricing Models' },
    { id: 'security', icon: ShieldCheck, label: 'Security & IAM' },
    { id: 'usecases', icon: Info, label: 'Real-World Cases' },
  ];

  return (
    <nav className="sidebar glass" style={{ width: 'var(--sidebar-width)', height: '100vh', position: 'fixed', left: 0, top: 0, padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem', zIndex: 100 }}>
      <div className="logo flex items-center gap-3" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
        <div style={{ background: 'var(--primary)', padding: '0.5rem', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Cloud size={24} color="white" />
        </div>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, background: 'linear-gradient(to right, #fff, #94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          CloudSync
        </h2>
      </div>

      <div className="menu" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '0.75rem 1rem',
              borderRadius: 'var(--radius-md)',
              border: 'none',
              background: activeTab === item.id ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
              color: activeTab === item.id ? 'var(--primary)' : 'var(--text-secondary)',
              cursor: 'pointer',
              transition: 'var(--transition)',
              width: '100%',
              textAlign: 'left',
              fontWeight: activeTab === item.id ? 600 : 400
            }}
          >
            <item.icon size={20} />
            <span style={{ fontSize: '0.95rem' }}>{item.label}</span>
          </button>
        ))}
      </div>

      <div style={{ marginTop: 'auto', padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Project: FSAD Evaluation</p>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>v1.0.0 Stable</p>
      </div>
    </nav>
  );
};

const Header = ({ activeTab }) => {
  return (
    <header className="glass" style={{ height: 'var(--header-height)', position: 'fixed', top: 0, left: 'var(--sidebar-width)', right: 0, padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 90 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
        <span style={{ fontSize: '0.85rem' }}>Dashboard</span>
        <ChevronRight size={14} />
        <span style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 500, textTransform: 'capitalize' }}>
          {activeTab}
        </span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.05)', padding: '0.4rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem', border: '1px solid var(--border)' }}>
          <div style={{ width: '8px', height: '8px', background: '#10b981', borderRadius: '50%' }}></div>
          Cloud API: Connected
        </div>
      </div>
    </header>
  );
};

const ComparisonTable = ({ categoryId }) => {
  const category = serviceCategories.find(c => c.id === categoryId);
  if (!category) return null;

  return (
    <div className="animate-fade-in">
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{category.name} Analysis</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>{category.description}</p>
      </div>

      <div className="glass" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid var(--border)' }}>
              <th style={{ padding: '1.5rem', color: 'var(--text-muted)', fontWeight: 500 }}>CORE FEATURE</th>
              <th style={{ padding: '1.5rem', color: 'var(--aws-color)', fontWeight: 600 }}>AWS</th>
              <th style={{ padding: '1.5rem', color: 'var(--azure-color)', fontWeight: 600 }}>Azure</th>
              <th style={{ padding: '1.5rem', color: 'var(--gcp-color)', fontWeight: 600 }}>Google Cloud</th>
            </tr>
          </thead>
          <tbody>
            {category.services.map((service, index) => (
              <tr key={index} style={{ borderBottom: index === category.services.length - 1 ? 'none' : '1px solid var(--border)', transition: 'var(--transition)' }} className="glass-hover">
                <td style={{ padding: '1.25rem 1.5rem', fontWeight: 500 }}>{service.name}</td>
                <td style={{ padding: '1.25rem 1.5rem' }}>
                  <code style={{ background: 'rgba(255,153,0,0.1)', color: 'var(--aws-color)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>{service.aws}</code>
                </td>
                <td style={{ padding: '1.25rem 1.5rem' }}>
                  <code style={{ background: 'rgba(0,137,214,0.1)', color: 'var(--azure-color)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>{service.azure}</code>
                </td>
                <td style={{ padding: '1.25rem 1.5rem' }}>
                  <code style={{ background: 'rgba(66,133,244,0.1)', color: 'var(--gcp-color)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>{service.gcp}</code>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        <div className="glass" style={{ padding: '1.5rem', borderRadius: 'var(--radius-lg)' }}>
          <h4 style={{ color: 'var(--primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Zap size={18} /> Architecture insight
          </h4>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            When deploying {category.name.toLowerCase()} workloads, consider regional latency and availability zone distribution. AWS offers the most zones, while GCP provides the fastest global fiber network.
          </p>
        </div>
      </div>
    </div>
  );
};

const MarketOverview = () => {
  return (
    <div className="animate-fade-in">
      <div style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 700 }}>The Cloud Landscape 2025</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '800px' }}>
          A comprehensive analysis of the top three hyperscalers dominating the digital infrastructure world.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
        {cloudProviders.map((provider) => (
          <motion.div 
            key={provider.id}
            whileHover={{ y: -5 }}
            className="glass"
            style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', borderTop: `4px solid ${provider.color}` }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.5rem' }}>{provider.name}</h3>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.4rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600, color: provider.color }}>
                {provider.marketShare} Share
              </div>
            </div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>{provider.description}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {provider.strengths.map(s => (
                <span key={s} style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.05)', padding: '0.2rem 0.6rem', borderRadius: '4px', color: 'var(--text-muted)' }}>{s}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
        <h3 style={{ marginBottom: '1.5rem' }}>Infrastructure Evolution</h3>
        <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto', paddingBottom: '1rem' }}>
          <div style={{ minWidth: '200px', padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
            <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>2006</h4>
            <p style={{ fontSize: '0.85rem' }}>AWS launches S3 and EC2, pioneering the IaaS model.</p>
          </div>
          <div style={{ minWidth: '200px', padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
            <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>2010</h4>
            <p style={{ fontSize: '0.85rem' }}>Microsoft Azure joins the race, focusing on PaaS.</p>
          </div>
          <div style={{ minWidth: '200px', padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
            <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>2014</h4>
            <p style={{ fontSize: '0.85rem' }}>Kubernetes released by Google, changing cloud-native tech.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const PricingView = () => {
  return (
    <div className="animate-fade-in">
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Cloud Economics</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>How the "Pay-as-you-use" model drives scalability and efficiency.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        {pricingModels.map((model, i) => (
          <div key={i} className="glass glass-hover" style={{ padding: '1.5rem', borderRadius: 'var(--radius-lg)' }}>
            <div style={{ width: '40px', height: '40px', background: 'var(--primary)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
              <DollarSign size={20} color="white" />
            </div>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>{model.type}</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>{model.description}</p>
            <div style={{ fontSize: '0.8rem', padding: '0.5rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '6px', color: 'var(--primary)' }}>
              <strong>Best for:</strong> {model.bestFor}
            </div>
          </div>
        ))}
      </div>

      <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', background: 'linear-gradient(135deg, rgba(13,17,23,0.8) 0%, rgba(59,130,246,0.05) 100%)' }}>
        <h3>Optimization Strategies</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '1.5rem' }}>
          <div>
            <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Right-sizing</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Analyzing performance data to move to cheaper instance sizes without impacting performance. Reduces waste by 30-50% on average.</p>
          </div>
          <div>
            <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Auto-scaling</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Dynamically adding or removing resources based on real-time demand. Ensures you don't pay for idle capacity during low-traffic periods.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const UseCasesView = () => {
  return (
    <div className="animate-fade-in">
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Real-World Application</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Strategic selection based on business vertical and technical requirements.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {useCases.map((uc, i) => (
          <div key={i} className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '2rem' }}>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Target Segment</div>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)' }}>{uc.title}</h3>
            </div>
            <div style={{ borderLeft: '1px solid var(--border)', paddingLeft: '2rem' }}>
              <div style={{ display: 'inline-block', padding: '0.3rem 0.8rem', background: 'rgba(59, 130, 246, 0.1)', color: 'var(--primary)', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1rem' }}>
                Recommended: {uc.recommendation}
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{uc.reasoning}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ArchitectureView = () => {
  return (
    <div className="animate-fade-in">
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Architecture Lab</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Visualizing industry-standard scalable and AI-driven cloud infrastructures.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '4rem' }}>
        <div className="glass" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
          <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border)' }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)' }}>Scalable Web Application</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Highly available 3-tier architecture with auto-scaling.</p>
          </div>
          <img src="/assets/web-arch.png" alt="Scalable Web Architecture" style={{ width: '100%', height: 'auto', display: 'block' }} />
          <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)' }}>
            <ul style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', paddingLeft: '1.2rem' }}>
              <li>ELB/ALB for traffic distribution</li>
              <li>ASG (Auto Scaling Group) for compute elasticity</li>
              <li>Multi-AZ RDS for data durability</li>
            </ul>
          </div>
        </div>

        <div className="glass" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
          <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border)' }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--secondary)' }}>AI/ML Data Pipeline</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Modern data processing and model training workflow.</p>
          </div>
          <img src="/assets/ai-arch.png" alt="AI/ML Pipeline" style={{ width: '100%', height: 'auto', display: 'block' }} />
          <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)' }}>
            <ul style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', paddingLeft: '1.2rem' }}>
              <li>Real-time ingestion via Kinesis/PubSub</li>
              <li>Serverless processing with Cloud Functions</li>
              <li>Managed ML training via SageMaker/Vertex AI</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const SecurityView = () => {
  const securityFeatures = [
    { title: 'Identity & Access', aws: 'IAM', azure: 'Entra ID', gcp: 'Cloud IAM', desc: 'Granular permissions and user management.' },
    { title: 'Encryption', aws: 'KMS', azure: 'Key Vault', gcp: 'Cloud KMS', desc: 'Secure management of cryptographic keys.' },
    { title: 'Threat Detection', aws: 'GuardDuty', azure: 'Defender for Cloud', gcp: 'Security Command Center', desc: 'AI-driven monitoring for suspicious activities.' },
    { title: 'Firewall', aws: 'WAF / Shield', azure: 'Firewall / DDoS Protection', gcp: 'Cloud Armor', desc: 'Edge security and layer 7 protection.' }
  ];

  return (
    <div className="animate-fade-in">
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Security & Compliance</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Protecting assets with enterprise-grade security frameworks.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
        {securityFeatures.map((feat, i) => (
          <div key={i} className="glass" style={{ padding: '1.5rem', borderRadius: 'var(--radius-lg)' }}>
            <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>{feat.title}</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>{feat.desc}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.8rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>AWS</span>
                <span style={{ fontWeight: 600 }}>{feat.aws}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Azure</span>
                <span style={{ fontWeight: 600 }}>{feat.azure}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>GCP</span>
                <span style={{ fontWeight: 600 }}>{feat.gcp}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return <MarketOverview />;
      case 'compute': return <ComparisonTable categoryId="compute" />;
      case 'storage': return <ComparisonTable categoryId="storage" />;
      case 'database': return <ComparisonTable categoryId="database" />;
      case 'networking': return <ComparisonTable categoryId="networking" />;
      case 'architecture': return <ArchitectureView />;
      case 'pricing': return <PricingView />;
      case 'security': return <SecurityView />;
      case 'usecases': return <UseCasesView />;
      default: return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '60vh', textAlign: 'center' }}>
          <ShieldCheck size={64} color="var(--primary)" style={{ marginBottom: '1.5rem' }} />
          <h2>Content Coming Soon</h2>
          <p style={{ color: 'var(--text-secondary)' }}>This section is currently being analyzed and verified.</p>
        </div>
      );
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg-dark)' }}>
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main style={{ marginLeft: 'var(--sidebar-width)', flex: 1, padding: 'calc(var(--header-height) + 3rem) 3rem 4rem 3rem', maxWidth: '1400px' }}>
        <Header activeTab={activeTab} />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Decorative background elements */}
      <div style={{ position: 'fixed', top: '10%', right: '5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)', zIndex: -1 }}></div>
      <div style={{ position: 'fixed', bottom: '10%', left: '20%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)', zIndex: -1 }}></div>
    </div>
  );
}
