import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Portfolio,
})

function Portfolio() {
  return (
    <div style={{ fontFamily: "Candara, 'Candara Cond', Calibri, 'Trebuchet MS', sans-serif" }}>
      {/* Header */}
      <header style={{ background: '#0b2545', color: '#fff', padding: '1.5rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 2px 12px rgba(0,0,0,0.3)' }}>
        <div>
          <div style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '0.02em' }}>Bernard Gikunda Muriungi</div>
          <div style={{ fontSize: '0.88rem', color: '#a8c6e8', marginTop: '0.2rem' }}>CPA | Driving Stronger Cash Flow, Accurate Reporting &amp; Reliable Financial Control</div>
        </div>
        <nav style={{ display: 'flex', gap: '1.75rem' }}>
          {['Services', 'About', 'Experience', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{ color: '#a8c6e8', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 600, letterSpacing: '0.04em', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#a8c6e8')}
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0b2545 0%, #13315c 60%, #1a4a7a 100%)', color: '#fff', padding: '6rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: 'rgba(168,198,232,0.15)', border: '1px solid rgba(168,198,232,0.3)', borderRadius: '999px', padding: '0.4rem 1.2rem', fontSize: '0.85rem', color: '#a8c6e8', marginBottom: '1.5rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Certified Public Accountant · 7+ Years Experience
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', fontWeight: 700, lineHeight: 1.2, marginBottom: '1.25rem' }}>
            Financial Clarity.<br />Operational Excellence.
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#c8ddf0', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: '620px', margin: '0 auto 2.5rem' }}>
            Helping organizations recover debt, produce reliable financial reports, maintain clean reconciliations, and build strong internal controls.
          </p>
          <a
            href="#contact"
            style={{ display: 'inline-block', background: '#fff', color: '#0b2545', padding: '0.85rem 2.5rem', borderRadius: '0.4rem', fontWeight: 700, fontSize: '1rem', textDecoration: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.25)', transition: 'transform 0.2s, box-shadow 0.2s' }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.35)' }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.25)' }}
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Services */}
      <section id="services" style={{ padding: '5rem 2rem', background: '#f4f7fb' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <SectionHeading title="Services" subtitle="Comprehensive financial services tailored for businesses and individuals" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.75rem', marginTop: '3rem' }}>
            {[
              {
                icon: '💰',
                title: 'Debt Collection & Recovery',
                desc: 'Strategic debt recovery processes that improve cash flow while maintaining client relationships. Systematic follow-up, negotiation, and escalation procedures.',
              },
              {
                icon: '📊',
                title: 'Financial Reporting',
                desc: 'Accurate, timely financial statements prepared in compliance with IFRS and local standards. Management accounts, P&L, balance sheets, and cash flow reports.',
              },
              {
                icon: '🔄',
                title: 'Reconciliation Services',
                desc: 'Bank, Mpesa, and ledger reconciliations performed with precision. Identify discrepancies early and maintain clean, audit-ready books at all times.',
              },
              {
                icon: '🛡️',
                title: 'Internal Controls & Audit Support',
                desc: 'Design and implementation of internal control frameworks. Audit preparation, risk assessment, and process improvement to safeguard organizational assets.',
              },
            ].map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" style={{ padding: '5rem 2rem', background: '#fff' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <div>
            <span style={{ display: 'inline-block', background: '#e8f0fb', color: '#13315c', borderRadius: '4px', padding: '0.3rem 0.9rem', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: '1rem' }}>About</span>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#0b2545', marginBottom: '1.25rem', lineHeight: 1.3 }}>Bernard Gikunda Muriungi, CPA</h2>
            <p style={{ color: '#4a5568', lineHeight: 1.8, marginBottom: '1rem' }}>
              A Certified Public Accountant with over 7 years of hands-on experience across diverse industries in Kenya. Bernard specialises in transforming chaotic financial records into clear, compliant, and actionable reports.
            </p>
            <p style={{ color: '#4a5568', lineHeight: 1.8, marginBottom: '1rem' }}>
              His expertise spans <strong>debt management and recovery</strong> — developing collection strategies that consistently reduce debtor days — <strong>accurate financial reporting</strong> aligned with IFRS, and <strong>internal systems design</strong> that reduces fraud risk and improves operational efficiency.
            </p>
            <p style={{ color: '#4a5568', lineHeight: 1.8 }}>
              Bernard combines technical accounting knowledge with strong communication skills, making him equally effective working with finance teams, operations staff, and senior management.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {[
              { label: 'Years Experience', value: '7+' },
              { label: 'Core Focus Areas', value: 'Debt Recovery · Reporting · Controls' },
              { label: 'Standards', value: 'IFRS · ISA · IAS' },
              { label: 'Location', value: 'Nairobi, Kenya' },
            ].map((item) => (
              <div key={item.label} style={{ background: '#f4f7fb', borderLeft: '4px solid #13315c', borderRadius: '0 8px 8px 0', padding: '1rem 1.25rem' }}>
                <div style={{ fontSize: '0.78rem', color: '#6b7a96', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '0.25rem' }}>{item.label}</div>
                <div style={{ color: '#0b2545', fontWeight: 600 }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" style={{ padding: '5rem 2rem', background: '#f4f7fb' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <SectionHeading title="Experience" subtitle="A track record of delivering measurable financial results" />
          <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              {
                role: 'Senior Accountant',
                company: 'Financial Services Firm',
                period: '2021 – Present',
                points: [
                  'Led debt recovery program reducing outstanding receivables by 35% within 12 months',
                  'Prepared monthly management accounts and board-level financial reports',
                  'Designed and implemented internal controls reducing reconciliation errors by 60%',
                ],
              },
              {
                role: 'Accountant',
                company: 'Commercial Enterprise',
                period: '2018 – 2021',
                points: [
                  'Managed daily bank, Mpesa, and ledger reconciliations for multi-entity group',
                  'Supported external audit processes and resolved audit queries within agreed timelines',
                  'Automated monthly reporting cycle reducing close time from 10 days to 4 days',
                ],
              },
              {
                role: 'Accounts Assistant',
                company: 'Regional Business',
                period: '2017 – 2018',
                points: [
                  'Processed accounts payable and receivable transactions',
                  'Maintained petty cash and produced weekly reconciliation reports',
                  'Assisted in preparation of VAT returns and statutory filings',
                ],
              },
            ].map((job) => (
              <div key={job.role} style={{ background: '#fff', borderRadius: '10px', padding: '1.75rem', boxShadow: '0 2px 12px rgba(11,37,69,0.07)', borderTop: '3px solid #13315c' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                  <div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0b2545' }}>{job.role}</div>
                    <div style={{ color: '#4a6fa5', fontWeight: 600, fontSize: '0.9rem' }}>{job.company}</div>
                  </div>
                  <span style={{ background: '#e8f0fb', color: '#13315c', borderRadius: '999px', padding: '0.25rem 0.9rem', fontSize: '0.82rem', fontWeight: 600 }}>{job.period}</span>
                </div>
                <ul style={{ margin: 0, paddingLeft: '1.25rem', color: '#4a5568', lineHeight: 1.75 }}>
                  {job.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section style={{ padding: '5rem 2rem', background: '#0b2545', color: '#fff' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{ display: 'inline-block', background: 'rgba(168,198,232,0.15)', border: '1px solid rgba(168,198,232,0.3)', borderRadius: '999px', padding: '0.35rem 1.1rem', fontSize: '0.8rem', color: '#a8c6e8', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1rem' }}>Why Choose Me</span>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.75rem' }}>Built on Trust, Delivered with Precision</h2>
          <p style={{ color: '#a8c6e8', marginBottom: '3rem', maxWidth: '560px', margin: '0 auto 3rem', lineHeight: 1.7 }}>Three pillars that define every engagement</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.75rem' }}>
            {[
              { icon: '📈', title: 'Proven Results', desc: 'Measurable improvements in cash flow, reporting accuracy, and control effectiveness across multiple organisations.' },
              { icon: '✅', title: 'Strong Compliance', desc: 'Deep knowledge of IFRS, ISA, and Kenyan regulatory requirements ensures your books are always audit-ready.' },
              { icon: '🤝', title: 'Hands-On Experience', desc: 'Seven-plus years working directly in finance functions — not just advising, but doing the work alongside your team.' },
            ].map((card) => (
              <div key={card.title} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(168,198,232,0.2)', borderRadius: '12px', padding: '2rem 1.5rem', textAlign: 'left', transition: 'background 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}
              >
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{card.icon}</div>
                <div style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.6rem' }}>{card.title}</div>
                <div style={{ color: '#a8c6e8', lineHeight: 1.7, fontSize: '0.92rem' }}>{card.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: '5rem 2rem', background: '#fff' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <SectionHeading title="Contact" subtitle="Ready to improve your financial operations? Let's talk." />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '3rem', alignItems: 'center' }}>
            <ContactItem icon="✉️" label="Email" value="begikunda@gmail.com" href="mailto:begikunda@gmail.com" />
            <ContactItem icon="📱" label="Phone" value="+254 700 746 066" href="tel:+254700746066" />
          </div>
          <div style={{ marginTop: '3rem', background: '#f4f7fb', borderRadius: '12px', padding: '2rem', border: '1px solid #dde6f5' }}>
            <p style={{ color: '#4a5568', lineHeight: 1.8, margin: 0 }}>
              Available for <strong>full-time</strong>, <strong>part-time</strong>, and <strong>consulting engagements</strong>. Response within 24 hours guaranteed.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#0b2545', color: '#a8c6e8', textAlign: 'center', padding: '1.5rem 2rem', fontSize: '0.85rem' }}>
        © {new Date().getFullYear()} Bernard Gikunda Muriungi, CPA · All Rights Reserved
      </footer>
    </div>
  )
}

function SectionHeading({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <span style={{ display: 'inline-block', background: '#e8f0fb', color: '#13315c', borderRadius: '4px', padding: '0.3rem 0.9rem', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{title}</span>
      <p style={{ color: '#4a6fa5', fontSize: '1rem', maxWidth: '480px', margin: '0 auto' }}>{subtitle}</p>
    </div>
  )
}

function ServiceCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div
      style={{ background: '#fff', borderRadius: '12px', padding: '2rem 1.5rem', boxShadow: '0 2px 16px rgba(11,37,69,0.08)', borderTop: '4px solid #13315c', transition: 'transform 0.2s, box-shadow 0.2s' }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(11,37,69,0.14)' }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 16px rgba(11,37,69,0.08)' }}
    >
      <div style={{ fontSize: '2.25rem', marginBottom: '1rem' }}>{icon}</div>
      <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0b2545', marginBottom: '0.75rem' }}>{title}</h3>
      <p style={{ color: '#4a5568', lineHeight: 1.75, fontSize: '0.92rem', margin: 0 }}>{desc}</p>
    </div>
  )
}

function ContactItem({ icon, label, value, href }: { icon: string; label: string; value: string; href: string }) {
  return (
    <a
      href={href}
      style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#f4f7fb', border: '1px solid #dde6f5', borderRadius: '10px', padding: '1rem 1.5rem', textDecoration: 'none', width: '100%', maxWidth: '420px', transition: 'background 0.2s, border-color 0.2s' }}
      onMouseEnter={(e) => { e.currentTarget.style.background = '#e8f0fb'; e.currentTarget.style.borderColor = '#13315c' }}
      onMouseLeave={(e) => { e.currentTarget.style.background = '#f4f7fb'; e.currentTarget.style.borderColor = '#dde6f5' }}
    >
      <span style={{ fontSize: '1.5rem' }}>{icon}</span>
      <div style={{ textAlign: 'left' }}>
        <div style={{ fontSize: '0.75rem', color: '#6b7a96', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em' }}>{label}</div>
        <div style={{ color: '#0b2545', fontWeight: 600 }}>{value}</div>
      </div>
    </a>
  )
}
