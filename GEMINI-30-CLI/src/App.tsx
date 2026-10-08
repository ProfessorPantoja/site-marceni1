import { useEffect, useRef, useState, type CSSProperties } from 'react';
import {
  MessageCircle,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Video,
  Mic2,
  ArrowRight,
  ArrowDown
} from 'lucide-react';
import './App.css';

const whatsappUrl = "https://wa.me/5522998946111?text=Oi%2C%20Marceni%21%20Vim%20pelo%20seu%20site%20e%20quero%20saber%20como%20funciona%20o%20atendimento.";

const heroTopics = [
  'Ansiedade',
  'Exaustão por trabalho (burnout)',
  'Falta de equilíbrio nas áreas da vida',
  'Desequilíbrio de papéis e energias em relacionamentos',
  'Mulheres que assumem papéis masculinos e homens que assumem papéis femininos',
  'Inversão de papéis de filhos que assumem o lugar de seus pais'
];

const demands = [
  { title: "Ansiedade", desc: "Superação de crises e gestão emocional para uma vida mais leve." },
  { title: "Burnout & Exaustão", desc: "Recuperação do esgotamento profissional e prevenção de novas crises." },
  { title: "Equilíbrio de Vida", desc: "Harmonia entre as áreas pessoal, profissional e espiritual." },
  { title: "Relacionamentos", desc: "Desequilíbrio de papéis e energias: mulheres que assumem papéis masculinos e homens que assumem papéis femininos." },
  { title: "Inversão de Papéis", desc: "Filhos que assumem o lugar de seus pais: conflitos familiares e reorganização de hierarquias." },
  { title: "Empreendedorismo", desc: "Apoio psicológico focado nos desafios da jornada empresarial." }
];

const delay = (ms: number) => ({ '--reveal-delay': `${ms}ms` } as CSSProperties);

function App() {
  const heroRef = useRef<HTMLElement | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Navbar ganha fundo depois que a página rola
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Entrada suave das seções ao aparecerem na tela
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
      { threshold: 0.14, rootMargin: '0px 0px -8% 0px' }
    );

    animatedElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  // Hero: retrato acompanha o mouse (computador) e a rolagem (todas as telas)
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    const state = { x: 0, y: 0, targetX: 0, targetY: 0, scroll: 0 };
    let rafId: number | null = null;

    const render = () => {
      rafId = null;
      state.x += (state.targetX - state.x) * 0.08;
      state.y += (state.targetY - state.y) * 0.08;
      hero.style.setProperty('--px', state.x.toFixed(4));
      hero.style.setProperty('--py', state.y.toFixed(4));
      hero.style.setProperty('--scroll', state.scroll.toFixed(4));
      if (Math.abs(state.targetX - state.x) > 0.001 || Math.abs(state.targetY - state.y) > 0.001) {
        rafId = window.requestAnimationFrame(render);
      }
    };
    const queue = () => {
      if (rafId === null) rafId = window.requestAnimationFrame(render);
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = hero.getBoundingClientRect();
      state.targetX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      state.targetY = ((event.clientY - rect.top) / rect.height) * 2 - 1;
      queue();
    };
    const onPointerLeave = () => {
      state.targetX = 0;
      state.targetY = 0;
      queue();
    };
    const onScroll = () => {
      state.scroll = Math.min(1, Math.max(0, window.scrollY / hero.offsetHeight));
      queue();
    };

    if (hasFinePointer) {
      hero.addEventListener('pointermove', onPointerMove);
      hero.addEventListener('pointerleave', onPointerLeave);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      hero.removeEventListener('pointermove', onPointerMove);
      hero.removeEventListener('pointerleave', onPointerLeave);
      window.removeEventListener('scroll', onScroll);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className={`navbar${scrolled ? ' is-scrolled' : ''}`}>
        <div className="nav-content">
          <a href="#topo" className="logo" aria-label="Voltar ao topo">
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
          <div className="nav-links">
            <a href="#sobre">Sobre</a>
            <a href="#atendimento">Atendimento</a>
            <a href="#contato">Contato</a>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="nav-btn">
            Agendar
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header id="topo" className="hero" ref={heroRef}>
        <div className="hero-glow" aria-hidden="true"></div>
        <div className="hero-inner">
          <div className="hero-text">
            <p className="eyebrow hero-step" style={delay(200)}>
              <span className="eyebrow-line"></span>
              Psicóloga & Empresária
            </p>
            <h1>
              <span className="line"><span className="hero-step" style={delay(320)}>Ajudando homens</span></span>
              <span className="line"><span className="hero-step" style={delay(420)}>e mulheres a</span></span>
              <span className="line"><span className="hero-step gold-text" style={delay(520)}>superar desafios</span></span>
            </h1>
            <p className="hero-lead hero-step" style={delay(700)}>
              Psicóloga para empreendedores iniciantes e empresários de médio porte. Escuta acolhedora, com direção terapêutica.
            </p>
            <div className="hero-actions hero-step" style={delay(820)}>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <MessageCircle size={20} />
                Agendar consulta
              </a>
              <a href="#sobre" className="btn-ghost">
                Conhecer a Marceni
                <ArrowDown size={16} />
              </a>
            </div>
            <ul className="hero-credentials hero-step" style={delay(950)}>
              <li><strong>CRP</strong> 05/67563</li>
              <li><strong>CEO</strong> Academia Cérebro</li>
              <li><strong>Búzios</strong> e on-line</li>
            </ul>
          </div>

          <figure className="hero-portrait">
            <span className="portrait-frame" aria-hidden="true"></span>
            <div className="portrait-mask">
              <img
                src="/marceni-hero.webp"
                srcSet="/marceni-hero-640.webp 640w, /marceni-hero.webp 1024w"
                sizes="(max-width: 900px) 100vw, 42vw"
                alt="Marceni Correa, psicóloga, de blazer vermelho"
                fetchPriority="high"
              />
            </div>
            <figcaption className="portrait-caption">
              <span>Marceni Correa</span>
              Psicologia Estratégica para Empresários
            </figcaption>
          </figure>
        </div>

        <div className="hero-marquee" aria-label="Principais desafios atendidos">
          <div className="marquee-track">
            {[0, 1].map((copy) => (
              <ul key={copy} aria-hidden={copy === 1 ? true : undefined}>
                {heroTopics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </header>

      {/* Sobre */}
      <section id="sobre" className="about">
        <div className="about-grid">
          <div className="about-intro">
            <p className="eyebrow reveal"><span className="eyebrow-line"></span>Quem é</p>
            <h2 className="reveal" style={delay(60)}>Marceni Correa</h2>
            <p className="about-positioning reveal" style={delay(120)}>
              Psicóloga para Empreendedores Iniciantes e Empresários de Médio Porte
            </p>
            <ul className="about-pillars reveal" style={delay(180)}>
              <li><span>Psicóloga</span>CRP 05/67563</li>
              <li><span>Empresária</span>CEO da Academia Cérebro</li>
              <li><span>Palestrante</span>Ansiedade, burnout e papéis</li>
            </ul>
          </div>
          <div className="about-text">
            <p className="highlight reveal" style={delay(180)}>
              Marceni Correa Inácio Coutinho é psicóloga (CRP 05/67563) e atua com foco no atendimento de empreendedores iniciantes e empresários de médio porte.
            </p>
            <p className="reveal" style={delay(240)}>
              Seu trabalho apoia homens e mulheres no enfrentamento da ansiedade, da exaustão por trabalho (burnout) e de conflitos relacionais, com escuta acolhedora e direção terapêutica.
            </p>
            <p className="reveal" style={delay(300)}>
              Como CEO da Academia Cérebro, ela integra sua expertise em psicologia com a visão empresarial para ajudar adultos ansiosos a reencontrarem paz e direção na vida e no empreendedorismo.
            </p>
          </div>
        </div>
      </section>

      {/* Áreas de atuação */}
      <section id="atendimento" className="demands">
        <div className="section-header reveal">
          <p className="eyebrow eyebrow-center"><span className="eyebrow-line"></span>Atendimento<span className="eyebrow-line"></span></p>
          <h2>Áreas de Atuação</h2>
          <p className="section-subtitle">Ajudando você a superar os desafios modernos e reencontrar o equilíbrio.</p>
        </div>
        <div className="demands-grid">
          {demands.map((item, index) => (
            <article key={item.title} className="demand-card reveal" style={delay(80 + index * 70)}>
              <span className="demand-number">{String(index + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Frase */}
      <div className="quote-band">
        <figure className="quote-portrait reveal">
          <span className="quote-frame" aria-hidden="true"></span>
          <div className="quote-mask">
            <img
              src="/marceni-sobre.webp"
              srcSet="/marceni-sobre-640.webp 640w, /marceni-sobre.webp 1024w"
              sizes="(max-width: 900px) 70vw, 360px"
              alt="Marceni Correa Inácio Coutinho"
              loading="lazy"
            />
          </div>
        </figure>
        <blockquote className="reveal" style={delay(120)}>
          <span className="quote-mark" aria-hidden="true">“</span>
          <p>Você não precisa enfrentar esses desafios emocionais sozinho.</p>
          <p className="quote-gold">Estou com você nesse processo.</p>
          <footer>Marceni Correa</footer>
        </blockquote>
      </div>

      {/* Formatos */}
      <section className="formats">
        <div className="section-header reveal">
          <p className="eyebrow eyebrow-center"><span className="eyebrow-line"></span>Como funciona<span className="eyebrow-line"></span></p>
          <h2>Formatos de Atendimento</h2>
        </div>
        <div className="formats-grid">
          <div className="format-card reveal" style={delay(70)}>
            <MapPin size={28} />
            <h3>Presencial</h3>
            <p>Atendimento em Búzios, RJ, em ambiente seguro e acolhedor.</p>
          </div>
          <div className="format-card reveal" style={delay(150)}>
            <Video size={28} />
            <h3>On-line</h3>
            <p>Sessões por vídeo, com a liberdade de ser atendido onde for melhor para você.</p>
          </div>
          <div className="format-card reveal" style={delay(230)}>
            <Mic2 size={28} />
            <h3>Palestras</h3>
            <p>Ansiedade · Exaustão por trabalho · Troca de hierarquia (filhos com pais) · Inversão de papéis (marido e mulher)</p>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="contact">
        <div className="contact-container">
          <div className="contact-info">
            <p className="eyebrow reveal"><span className="eyebrow-line"></span>Contato</p>
            <h2 className="reveal" style={delay(60)}>Entre em Contato</h2>
            <p className="contact-lead reveal" style={delay(100)}>
              Estou pronta para te acompanhar nessa jornada de autodescoberta.
            </p>

            <div className="info-item reveal" style={delay(140)}>
              <Mail size={20} />
              <span>marcenipsicoach@gmail.com</span>
            </div>
            <div className="info-item reveal" style={delay(170)}>
              <Instagram size={20} />
              <a href="https://instagram.com/marcenicorrea" target="_blank" rel="noopener noreferrer">@marcenicorrea</a>
            </div>
            <div className="info-item reveal" style={delay(200)}>
              <Phone size={20} />
              <span>(22) 99894-6111</span>
            </div>
            <div className="info-item reveal" style={delay(230)}>
              <MapPin size={20} />
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
          </div>

          <div className="contact-side">
            <div className="cta-box reveal" style={delay(120)}>
              <img src="/logo-marceni-MC-512x512.png" alt="" aria-hidden="true" className="cta-monogram" loading="lazy" />
              <h3>Dê o primeiro passo</h3>
              <p>O agendamento é feito diretamente pelo WhatsApp de forma simples e segura.</p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary full-width">
                Falar no WhatsApp
                <ArrowRight size={18} />
              </a>
            </div>
            <div className="map-block reveal" style={delay(200)}>
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
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <img className="footer-logo" src="/logo-marceni.png" alt="Logo Marceni Correa" loading="lazy" />
            <p>Psicóloga & Empresária · CRP 05/67563</p>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Marceni Correa. Todos os direitos reservados.</p>
            <p className="designer-tag">
              Design & Desenvolvimento |{' '}
              <a href="https://letreirodigital.com.br/?utm_source=marcenicorrea&utm_medium=rodape&utm_campaign=portfolio" target="_blank" rel="noopener">
                Letreiro Digital
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
