import { motion } from "motion/react";

interface CertificateContentProps {
  name: string;
  date: string;
  pledgeId: string;
}

export function ClassicTemplate({ name, date, pledgeId }: CertificateContentProps) {
  return (
    <div className="p-12 relative overflow-hidden min-h-[600px]" style={{
      background: 'linear-gradient(to bottom right, #f0fdf4, #ffffff, #eff6ff)',
      border: '8px solid #16a34a'
    }}>
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 left-10 text-9xl">🌍</div>
        <div className="absolute bottom-10 right-10 text-9xl">🌱</div>
      </div>

      <div className="relative z-10 text-center" style={{ color: '#000000' }}>
        <div className="mb-6">
          <div className="text-6xl mb-4">🏆</div>
          <h2 className="text-4xl md:text-5xl mb-2" style={{ color: '#15803d' }}>
            Certificate of Commitment
          </h2>
          <div className="h-1 w-32 mx-auto" style={{ backgroundColor: '#16a34a' }}></div>
        </div>

        <div className="my-8">
          <p className="text-xl mb-4" style={{ color: '#000000' }}>This certifies that</p>
          <p className="text-4xl md:text-5xl mb-4" style={{ color: '#166534' }}>
            {name}
          </p>
          <p className="text-xl mb-6" style={{ color: '#000000' }}>has pledged to take climate action and joined the movement</p>
          
          <div className="rounded-lg p-6 my-8 inline-block" style={{
            backgroundColor: '#dcfce7',
            border: '2px solid #16a34a'
          }}>
            <p className="text-2xl md:text-3xl" style={{ color: '#15803d' }}>
              Cool Enough to Care!
            </p>
          </div>

          <div className="flex justify-center gap-1 text-4xl mb-6">
            <span>❤️</span>
            <span>❤️</span>
            <span>❤️</span>
            <span>❤️</span>
            <span>❤️</span>
          </div>

          <p style={{ opacity: 0.7, color: '#000000' }} className="mb-2">
            Pledge ID: {pledgeId}
          </p>
          <p style={{ opacity: 0.7, color: '#000000' }}>
            Date: {new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </div>

        <div className="pt-6" style={{ borderTop: '2px solid #bbf7d0' }}>
          <p style={{ opacity: 0.7, color: '#000000' }} className="text-sm">
            Together, we can make a difference for our planet
          </p>
        </div>
      </div>
    </div>
  );
}

export function ModernTemplate({ name, date, pledgeId }: CertificateContentProps) {
  return (
    <div className="p-12 relative overflow-hidden min-h-[600px]" style={{
      background: 'linear-gradient(to bottom right, #1e3a8a, #166534, #115e59)',
      color: '#ffffff'
    }}>
      {/* Geometric Background */}
      <div className="absolute inset-0" style={{ opacity: 0.1 }}>
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full" style={{
          backgroundColor: '#ffffff',
          filter: 'blur(80px)'
        }}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full" style={{
          backgroundColor: '#86efac',
          filter: 'blur(80px)'
        }}></div>
      </div>

      {/* Metallic Border Effect */}
      <div className="absolute inset-0" style={{
        border: '4px solid #facc15',
        background: 'linear-gradient(135deg, rgba(255,215,0,0.3) 0%, rgba(255,255,255,0.1) 50%, rgba(255,215,0,0.3) 100%)'
      }}></div>

      <div className="relative z-10 text-center">
        <div className="mb-8">
          <div className="inline-block p-4 rounded-full mb-4" style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(8px)'
          }}>
            <div className="text-6xl">🌟</div>
          </div>
          <h2 className="text-5xl md:text-6xl mb-2" style={{
            background: 'linear-gradient(to right, #fef08a, #bbf7d0, #bfdbfe)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Climate Champion
          </h2>
          <div className="h-1 w-48 mx-auto" style={{
            background: 'linear-gradient(to right, #facc15, #4ade80, #60a5fa)'
          }}></div>
        </div>

        <div className="my-8 rounded-2xl p-8" style={{
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <p className="text-lg mb-4" style={{ color: '#bbf7d0' }}>Proudly Awarded To</p>
          <p className="text-5xl md:text-6xl mb-6" style={{
            background: 'linear-gradient(to right, #ffffff, #dcfce7)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            {name}
          </p>
          <p className="text-lg mb-4" style={{ color: '#bfdbfe' }}>
            For taking a stand against climate change and committing to sustainable action
          </p>
          
          <div className="inline-block px-8 py-4 rounded-full mt-4" style={{
            background: 'linear-gradient(to right, #22c55e, #3b82f6)',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            color: '#ffffff'
          }}>
            <p className="text-2xl">
              Cool Enough to Care! 🌍
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mt-8 text-sm">
          <div className="rounded-lg p-3" style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <p className="mb-1" style={{ color: '#86efac' }}>Certificate ID</p>
            <p style={{ fontFamily: 'monospace', color: '#ffffff' }}>#{pledgeId}</p>
          </div>
          <div className="rounded-lg p-3" style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <p className="mb-1" style={{ color: '#93c5fd' }}>Issue Date</p>
            <p style={{ color: '#ffffff' }}>{new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MinimalTemplate({ name, date, pledgeId }: CertificateContentProps) {
  return (
    <div className="p-12 relative overflow-hidden min-h-[600px]" style={{
      backgroundColor: '#ffffff',
      border: '2px solid #111827'
    }}>
      {/* Minimalist Corner Decorations */}
      <div className="absolute top-0 left-0 w-20 h-20" style={{
        borderTop: '4px solid #16a34a',
        borderLeft: '4px solid #16a34a'
      }}></div>
      <div className="absolute top-0 right-0 w-20 h-20" style={{
        borderTop: '4px solid #16a34a',
        borderRight: '4px solid #16a34a'
      }}></div>
      <div className="absolute bottom-0 left-0 w-20 h-20" style={{
        borderBottom: '4px solid #16a34a',
        borderLeft: '4px solid #16a34a'
      }}></div>
      <div className="absolute bottom-0 right-0 w-20 h-20" style={{
        borderBottom: '4px solid #16a34a',
        borderRight: '4px solid #16a34a'
      }}></div>

      <div className="relative z-10 text-center" style={{ color: '#111827' }}>
        <div className="mb-12">
          <div className="text-6xl mb-6">🌿</div>
          <h2 className="text-6xl mb-4" style={{ letterSpacing: '-0.025em', color: '#111827' }}>
            CLIMATE PLEDGE
          </h2>
          <div className="mx-auto" style={{
            height: '2px',
            width: '96px',
            backgroundColor: '#16a34a'
          }}></div>
        </div>

        <div className="my-12 max-w-2xl mx-auto">
          <p className="text-sm uppercase mb-4" style={{
            letterSpacing: '0.1em',
            color: '#4b5563'
          }}>This Certificate is Presented to</p>
          <p className="text-5xl md:text-6xl mb-8" style={{ letterSpacing: '-0.025em', color: '#111827' }}>
            {name}
          </p>
          
          <div className="my-8 py-6" style={{
            borderTop: '1px solid #d1d5db',
            borderBottom: '1px solid #d1d5db'
          }}>
            <p className="text-lg" style={{ lineHeight: '1.75', color: '#111827' }}>
              In recognition of their commitment to environmental sustainability
              and dedication to combating climate change through conscious action
            </p>
          </div>

          <div className="inline-block px-12 py-4 mt-6" style={{
            border: '2px solid #16a34a'
          }}>
            <p className="text-2xl" style={{ letterSpacing: '0.05em', color: '#111827' }}>
              COOL ENOUGH TO CARE
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-12 mt-12 text-sm">
          <div>
            <p className="uppercase text-xs mb-2" style={{
              letterSpacing: '0.05em',
              color: '#6b7280'
            }}>Certificate No.</p>
            <p className="text-lg" style={{ fontFamily: 'monospace', color: '#111827' }}>{pledgeId}</p>
          </div>
          <div style={{
            width: '1px',
            backgroundColor: '#d1d5db'
          }}></div>
          <div>
            <p className="uppercase text-xs mb-2" style={{
              letterSpacing: '0.05em',
              color: '#6b7280'
            }}>Date Issued</p>
            <p className="text-lg" style={{ color: '#111827' }}>{new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export const certificateTemplates = [
  { id: 'classic', name: 'Classic', component: ClassicTemplate },
  { id: 'modern', name: 'Modern', component: ModernTemplate },
  { id: 'minimal', name: 'Minimal', component: MinimalTemplate },
];
