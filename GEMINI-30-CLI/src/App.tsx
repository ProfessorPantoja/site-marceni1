import { useEffect, type CSSProperties } from 'react';
import { 
  MessageCircle, 
  Instagram, 
  Mail, 
  MapPin, 
  Phone, 
  Video, 
  Mic2,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import './App.css';

function App() {
  const whatsappUrl = "https://wa.me/5522998946111?text=Oi%2C%20Marceni%21%20Vim%20pelo%20seu%20site%20e%20quero%20saber%20como%20funciona%20o%20atendimento.";

  useEffect(() => {
    const animatedElements = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      animatedElements.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: '0px 0px -8% 0px'
      }
    );

    animatedElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="nav-links">
            <a href="#sobre">Sobre</a>
            <a href="#atendimento">Atendimento</a>
            <a href="#contato">Contato</a>
          </div>
          <a href="#sobre" className="logo" aria-label="Ir para secao sobre">
            <img className="logo-icon" src="/logo-marceni-MC-512x512.png" alt="Monograma MC da Marceni" loading="eager" />
            <img
              className="logo-wordmark"
              src="/logo-Marceni-somente-texto.png"
              alt="Marceni Correa"
              loading="eager"
              onError={(event) => {
                event.currentTarget.src = "/logo-Marceni-somente-texto.jpg";
              }}
            />
          </a>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="nav-btn">
            Agendar
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content hero-enter">
          <span className="hero-eyebrow">Psicóloga & Empresária | CRP 05/67563</span>
          <h1>Ajudando homens e mulheres a superar desafios</h1>
          <ul className="hero-subtopics" aria-label="Principais desafios atendidos">
            <li>Ansiedade</li>
            <li>burnout</li>
            <li>Falta de equilíbrio</li>
            <li>Desequilíbrio de papéis e energias em relacionamentos</li>
            <li>Inversão de papéis Familiar</li>
          </ul>
          <div className="hero-actions">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <MessageCircle size={20} />
              Agendar consulta
            </a>
          </div>
        </div>
        <div className="hero-overlay"></div>
      </header>

      {/* Section: Sobre */}
      <section id="sobre" className="about">
        <div className="section-header reveal">
          <h2>Sobre Marceni</h2>
          <div className="gold-line"></div>
        </div>
        <div className="about-grid">
          <div className="about-text reveal">
            <p className="about-positioning">
              Psicóloga para Empreendedores Iniciantes e Empresários de Médio Porte
            </p>
            <p className="highlight">
              Marceni Correa Inácio Coutinho é psicóloga (CRP 05/67563) e atua com foco no atendimento de empreendedores iniciantes e empresários de médio porte.
            </p>
            <p>
              Seu trabalho apoia homens e mulheres no enfrentamento da ansiedade, da exaustão por trabalho (burnout) e de conflitos relacionais, com escuta acolhedora e direção terapêutica.
            </p>
            <p>
              Como CEO da Academia Cérebro, ela integra sua expertise em psicologia com a visão empresarial para ajudar adultos ansiosos a reencontrarem paz e direção na vida e no empreendedorismo.
            </p>
          </div>
          <div className="about-image reveal" style={{ '--reveal-delay': '120ms' } as CSSProperties}>
            <div className="image-placeholder">
              <img src="/quem-e-marceni-1.png" alt="Marceni Correa Inacio Coutinho" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Section: Demandas Atendidas */}
      <section id="atendimento" className="demands">
        <div className="section-header reveal">
          <h2>Áreas de Atuação</h2>
          <p className="section-subtitle">Ajudando você a superar os desafios modernos e reencontrar o equilíbrio.</p>
          <div className="gold-line"></div>
        </div>
        <div className="client-brief-block reveal" style={{ '--reveal-delay': '70ms' } as CSSProperties}>
          <h3>Demandas descritas pela cliente</h3>
          <ul>
            <li>Ansiedade</li>
            <li>Exaustão por trabalho ( burnout)</li>
            <li>Falta de equilíbrio nas áreas da vida</li>
            <li>Desequilíbrio de papéis e energias em relacionamentos (mulheres que assumem papéis masculinos e homens que assumem papéis femininos)</li>
            <li>Inversão de papéis de filhos que assumem o lugar de seus pais</li>
          </ul>
        </div>
        <div className="demands-grid">
          {[
            { title: "Ansiedade", desc: "Superação de crises e gestão emocional para uma vida mais leve." },
            { title: "Burnout & Exaustão", desc: "Recuperação do esgotamento profissional e prevenção de novas crises." },
            { title: "Equilíbrio de Vida", desc: "Harmonia entre as áreas pessoal, profissional e espiritual." },
            { title: "Relacionamentos", desc: "Mulheres que assumem papéis masculinos e homens que assumem papéis femininos" },
            { title: "Inversão de Papéis", desc: "Tratando conflitos familiares e reorganização de hierarquias." },
            { title: "Empreendedorismo", desc: "Apoio psicológico focado nos desafios da jornada empresarial." }
          ].map((item, index) => (
            <div
              key={index}
              className="demand-card reveal"
              style={{ '--reveal-delay': `${120 + index * 80}ms` } as CSSProperties}
            >
              <CheckCircle2 size={24} color="var(--gold)" />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Formatos */}
      <section className="formats dark-bg">
        <div className="section-header reveal">
          <h2>Formatos de Atendimento</h2>
          <div className="gold-line"></div>
        </div>
        <div className="formats-grid">
          <div className="format-card reveal" style={{ '--reveal-delay': '70ms' } as CSSProperties}>
            <MapPin size={32} />
            <h3>Presencial</h3>
            <p>Atendimento em Búzios, RJ, em ambiente seguro e acolhedor.</p>
          </div>
          <div className="format-card reveal" style={{ '--reveal-delay': '150ms' } as CSSProperties}>
            <Video size={32} />
            <h3>On-line</h3>
            <p>Flexibilidade para atendimento de qualquer lugar do mundo.</p>
          </div>
          <div className="format-card reveal" style={{ '--reveal-delay': '230ms' } as CSSProperties}>
            <Mic2 size={32} />
            <h3>Palestras</h3>
            <p>Ansiedade - Exaustão Por Trabalho - Troca de Hierarquia (filhos com pais) - Inversão de Papeis (Marido e Mulher)</p>
          </div>
        </div>
      </section>

      {/* Section: Contato */}
      <section id="contato" className="contact">
        <div className="contact-container">
          <div className="contact-info reveal">
            <div className="section-header align-left">
              <h2>Entre em Contato</h2>
              <div className="gold-line"></div>
            </div>
            <p className="reveal" style={{ '--reveal-delay': '70ms' } as CSSProperties}>
              Estou pronta para te acompanhar nessa jornada de autodescoberta.
            </p>
            
            <div className="info-item reveal" style={{ '--reveal-delay': '110ms' } as CSSProperties}>
              <Mail size={20} color="var(--gold)" />
              <span>marcenipsicoach@gmail.com</span>
            </div>
            <div className="info-item reveal" style={{ '--reveal-delay': '150ms' } as CSSProperties}>
              <Instagram size={20} color="var(--gold)" />
              <a href="https://instagram.com/marcenicorrea" target="_blank" rel="noopener noreferrer">@marcenicorrea</a>
            </div>
            <div className="info-item reveal" style={{ '--reveal-delay': '190ms' } as CSSProperties}>
              <Phone size={20} color="var(--gold)" />
              <span>(22) 99894-6111</span>
            </div>
            <div className="info-item reveal" style={{ '--reveal-delay': '230ms' } as CSSProperties}>
              <MapPin size={20} color="var(--gold)" />
              <span>
                Avenida José Bento Ribeiro Dantas, 5001, sala 03
                <br />
                (Em cima da loja Engeluz)
                <br />
                Bairro: Manguinhos
                <br />
                Búzios - RJ
              </span>
            </div>

            <div className="map-block reveal" style={{ '--reveal-delay': '260ms' } as CSSProperties}>
              <h3 className="map-title">Como chegar</h3>
              <div className="map-embed">
                <iframe
                  title="Mapa - Engeluz Home Center em Buzios"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.7446182378867!2d-41.92228402344681!3d-22.7748569331717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9655735aa0ed57%3A0x5872ddf6bab3a5e0!2sEngeluz%20Home%20Center%20-%20B%C3%BAzios!5e0!3m2!1spt-BR!2sbr!4v1772501182600!5m2!1spt-BR!2sbr"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="contact-cta reveal" style={{ '--reveal-delay': '170ms' } as CSSProperties}>
            <div className="cta-box">
              <h3>Dê o primeiro passo</h3>
              <p>O agendamento é feito diretamente pelo WhatsApp de forma simples e segura.</p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary full-width">
                Falar no WhatsApp
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand reveal">
            <img className="footer-logo" src="/logo-marceni.png" alt="Logo Marceni Correa" loading="lazy" />
            <h3>Marceni Correa</h3>
            <p>Psicóloga & Empresária - CRP 05/67563</p>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Marceni Correa. Todos os direitos reservados.</p>
            <p className="designer-tag">Design & Desenvolvimento | Fabio Pantoja</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
