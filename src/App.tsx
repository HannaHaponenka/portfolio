import { useState, useRef, useCallback, useEffect } from 'react'

// ─── Types ──────────────────────────────────────────────────────────────────

interface Project {
  id: string
  number: string
  name: string
  category: string
  year: string
  role: string
  tools: string
  team?: string
  description: string
  concept?: string
  portfolioReason: string
}

// ─── Data ───────────────────────────────────────────────────────────────────

const projects: Project[] = [
  {
    id: 'p01',
    number: '01',
    name: 'HanamiTech',
    category: 'Interactive / Audiovisual',
    year: '2026',
    role: 'Visual development, blob tracking system, TouchDesigner visual system',
    tools: 'TouchDesigner',
    team: 'Tetiana Bila',
    description: 'An audio-reactive composition inspired by the Japanese tradition of hanami — the act of watching sakura bloom. Cherry blossoms slowly open and move in response to the beat of the music, combining modern techno sounds with natural visuals.',
    concept: 'The snare signal is the main driver — it controls blob tracking and triggers the opening of the sakura visuals. On the first playback the audio remains clean; on the second, distortion appears and spreads through the visual system. Speed of all visual effects is also controlled by the music.',
    portfolioReason: 'An exploration of how sound, technology, and natural forms can come together through reactive visuals.',
  },
  {
    id: 'p02',
    number: '02',
    name: 'The Collector\'s Garden',
    category: 'VR / Web',
    year: '2026',
    role: 'Website creation, panorama preparation, scene implementation, navigation design',
    tools: 'Theasys, Photoshop, Procreate, Mobirise',
    team: 'Tetiana Bila, Yaren Su Bozaci',
    description: 'An interactive VR experience that invites users to explore a mysterious botanical garden filled with magical plants, objects, and hidden spaces, discovering illustrated encyclopaedia entries that reveal their properties and stories through an antique-inspired interface. Beyond the garden, visitors can join a magical tea gathering and enter a mysterious teapot that transports them into a dark, immersive space where they can uncover the properties and magical gifts of enchanted herbs, allowing the world to unfold through exploration and curiosity.',
    concept: 'Hidden away from the ordinary world, the Collectors\' Botanic Garden is a magical sanctuary where a mysterious cat lives among rare and enchanted plants. Inspired by the feeling of discovering a forgotten place filled with secrets, the garden combines botanical exploration with old books, forgotten knowledge, and quiet magic.',
    portfolioReason: 'My experience in creating immersive 360° spaces, collaborative VR, and interactive web experiences.',
  },
  {
    id: 'p03',
    number: '03',
    name: 'Jazzavu Fest',
    category: 'Branding',
    year: '2025',
    role: 'Independent project — concept, design, production',
    tools: 'Illustrator',
    description: 'Jazzavu Fest is a fictional three-day jazz festival set in New Orleans, created around the idea of celebrating jazz in all its forms. The identity captures the warmth, energy, and freedom of live music through a bold combination of expressive typography, playful illustrations, and a vibrant retro-inspired aesthetic.',
    concept: 'The challenge was making a jazz festival feel both authentic and visually fresh, without relying on predictable or overly traditional jazz aesthetics. Musical instruments were transformed into bold, simplified graphic elements. The color palette combines deep purple and red with energetic orange and yellow, balanced by a soft cream background.',
    portfolioReason: 'My exploration of identity systems and how one visual language adapts across media.',
  },
  {
    id: 'p04',
    number: '04',
    name: 'Type',
    category: 'Typography',
    year: '2026',
    role: 'Independent project — concept, design, production',
    tools: 'Illustrator',
    description: 'This project was a 50-day exploration of typography as a visual language. Each day, I spent 15 minutes creating a black-and-white composition in a fixed square format, using type to communicate the meaning of a chosen word. Through scale, rotation, position, rhythm, and hierarchy, I explored how typography can convey ideas beyond its literal content. The strict constraints encouraged experimentation and intuitive decision-making, turning typography into a tool for communication and interpretation.',
    portfolioReason: 'My ability to use typography as a visual language, transforming simple letterforms into compositions that communicate emotion and meaning beyond the written word.',
  },
  {
    id: 'p05',
    number: '05',
    name: 'My Star Family Adventure',
    category: 'UX/UI / Data',
    year: '2026',
    role: 'Interface design, interaction design, prototype development',
    tools: 'Figma',
    team: 'Maria Surawska, Anastassiya Lobayeva, Kira Makarova',
    description: 'Stellar Family Portrait is an interactive educational website for children where stars are represented as characters in one cosmic family. Each character\'s design reflects real stellar properties — color, temperature, age, and brightness. Clicking on a star opens its personal story, written in simple and engaging language.',
    concept: 'The user sees a group of star characters arranged as a "family portrait." Each star introduces itself and explains its properties in simple language. Complex astronomical data transformed into an emotional and accessible experience.',
    portfolioReason: 'The exploration of turning complex information from GAIA Dataset into an accessible digital experience.',
  },
  {
    id: 'p06',
    number: '06',
    name: 'Valleys of Shadow',
    category: 'Editorial',
    year: '2026',
    role: 'Independent project — concept, design, production',
    tools: 'InDesign, Illustrator, Photoshop',
    description: 'A comprehensive editorial design project inspired by the melancholy and haunting atmosphere of Edgar Allan Poe\'s poetry. A poetry zine with structured double-page spreads for works including "Eldorado," "To One in Paradise," and "Annabel Lee." Burnt orange linework on warm cream echoes vintage engravings and the twilight mood of the verses.',
    portfolioReason: 'My exploration of how typography and layout can respond to literary content.',
  },
  {
    id: 'p07',
    number: '07',
    name: 'Against Decluttering',
    category: 'Stop Motion Animation',
    year: '2025',
    role: 'Concept development, set and background creation, stop-motion photography',
    tools: 'Handmade, Camera, AfterEffects',
    team: 'Tetiana Bila, Oleksandra Borets, Yelyzaveta Radetska, Sofia Gulyk',
    description: 'A handmade stop-motion animation that satirically explores the relationship between decluttering and overconsumption. The film follows a character caught in an endless cycle of throwing things away and buying new ones, questioning whether constantly getting rid of possessions can really lead to a simpler life.',
    portfolioReason: 'My ability to develop a concept collaboratively and translate it into a physical, handmade stop-motion animation.',
  },
  {
    id: 'p08',
    number: '08',
    name: 'Light Painting',
    category: 'Photography',
    year: '2026',
    role: 'Concept, composition, and visual direction for the octopus and car photographs',
    tools: 'Lightroom',
    team: 'Tetiana Bila, Yaren Su Bozaci',
    description: 'A collaborative photography project exploring light, color, composition, and conceptual storytelling. Working in a team of three, experimenting with flashlights and colored light sources to create abstract and visually engaging compositions, introducing black paper cutouts and shaped backgrounds to complement the objects.',
    portfolioReason: 'My ability to explore objects through conceptual composition, experiment with light and materials, and contribute a strong individual creative perspective within a collaborative process.',
  },
  {
    id: 'p09',
    number: '09',
    name: 'Birthday Magazine',
    category: 'Editorial',
    year: '2026',
    role: 'Independent project — concept, design, production',
    tools: 'InDesign, Illustrator, Photoshop',
    description: 'A personal magazine created as a birthday gift for a best friend, bringing together photographs, memories, stories, and the small, seemingly insignificant moments that make up a friendship. Not made for an assignment, a grade, or a brief.',
    concept: 'For me, creativity has always been one of the ways I express care. When someone is important to me, I want to notice them, remember the little things about them, and sometimes turn those memories into something they can keep.',
    portfolioReason: 'I decided to include it because I believe that one of the most honest ways to understand a person is to look at how they treat the people they love.',
  },
]

// ─── Project images ─────────────────────────────────────────────────────────

interface LabeledImage { src: string; label: string }

const p01Images: LabeledImage[] = [
    { src: import.meta.env.BASE_URL + 'images/p01/01-structure.png', label: 'Structure of TouchDesigner file' },
    { src: import.meta.env.BASE_URL + 'images/p01/02-effects.png', label: 'Effects' },
    { src: import.meta.env.BASE_URL + 'images/p01/03-audio.png', label: 'Audio' },
    { src: import.meta.env.BASE_URL + 'images/p01/04-instancing.png', label: 'Instancing' },
    { src: import.meta.env.BASE_URL + 'images/p01/05-coordinates.png', label: 'Coordinates' },
    { src: import.meta.env.BASE_URL + 'images/p01/06-lines.png', label: 'Lines' },
    { src: import.meta.env.BASE_URL + 'images/p01/07-dots.png', label: 'Dots' },
    { src: import.meta.env.BASE_URL + 'images/p01/08-final-part.png', label: 'Final part' },
    { src: import.meta.env.BASE_URL + 'images/p01/09-keyboard-controllers.png', label: 'Keyboard Controllers' },
]

const projectImages: Record<string, string[]> = {
  p02: [
    'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1600&h=900&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1585320806297-9794b3e4aaae?w=1600&h=900&fit=crop&auto=format',
  ],
  p03: [
    import.meta.env.BASE_URL + 'images/p03/01.png',
    import.meta.env.BASE_URL + 'images/p03/02.png',
    import.meta.env.BASE_URL + 'images/p03/03.png',
    import.meta.env.BASE_URL + 'images/p03/04.png',
    import.meta.env.BASE_URL + 'images/p03/05.png',
    import.meta.env.BASE_URL + 'images/p03/06.png',
    import.meta.env.BASE_URL + 'images/p03/07.png',
    import.meta.env.BASE_URL + 'images/p03/08.png',
    import.meta.env.BASE_URL + 'images/p03/09.png',
    import.meta.env.BASE_URL + 'images/p03/10.png',
  ],
  p04: [
    import.meta.env.BASE_URL + 'images/p04/01.png',
    import.meta.env.BASE_URL + 'images/p04/02.png',
    import.meta.env.BASE_URL + 'images/p04/03.png',
    import.meta.env.BASE_URL + 'images/p04/04.png',
    import.meta.env.BASE_URL + 'images/p04/05.png',
    import.meta.env.BASE_URL + 'images/p04/06.png',
  ],
  p05: [
    import.meta.env.BASE_URL + 'images/p05/03.png',
    import.meta.env.BASE_URL + 'images/p05/02.png',
    import.meta.env.BASE_URL + 'images/p05/01.png',
    import.meta.env.BASE_URL + 'images/p05/07.png',
    import.meta.env.BASE_URL + 'images/p05/05.png',
    import.meta.env.BASE_URL + 'images/p05/08.png',
    import.meta.env.BASE_URL + 'images/p05/04.png',
    import.meta.env.BASE_URL + 'images/p05/06.png',
    import.meta.env.BASE_URL + 'images/p05/09.png',
  ],
  p06: [
    import.meta.env.BASE_URL + 'images/p06/header-01.jpg',
    import.meta.env.BASE_URL + 'images/p06/header-02.jpg',
    import.meta.env.BASE_URL + 'images/p06/new-01.jpg',
    import.meta.env.BASE_URL + 'images/p06/new-02.jpg',
    import.meta.env.BASE_URL + 'images/p06/new-03.jpg',
    import.meta.env.BASE_URL + 'images/p06/cover-mockup.jpg',
    import.meta.env.BASE_URL + 'images/p06/spread-mockup.jpg',
  ],
  p08: [
    import.meta.env.BASE_URL + 'images/p08/01.jpg',
    import.meta.env.BASE_URL + 'images/p08/02.jpg',
    import.meta.env.BASE_URL + 'images/p08/03.jpg',
    import.meta.env.BASE_URL + 'images/p08/04.jpg',
  ],
}

// ─── Helpers ────────────────────────────────────────────────────────────────

function useCarousel(length: number) {
  const [idx, setIdx] = useState(0)
  const prev = useCallback(() => setIdx(i => (i - 1 + length) % length), [length])
  const next = useCallback(() => setIdx(i => (i + 1) % length), [length])
  return { idx, prev, next }
}

// ─── Components ─────────────────────────────────────────────────────────────

function VideoBlock({ label, aspectClass = 'aspect-[16/9]', heightClass = 'h-[80vh]' }: { label: string; aspectClass?: string; heightClass?: string }) {
  return (
    <div
      className={`relative w-full ${heightClass} bg-[#141410] flex items-end overflow-hidden`}
      style={{ fontFamily: 'var(--font-display)' }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full border border-[rgba(237,234,226,0.3)] flex items-center justify-center">
          <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
            <path d="M1 1L17 10L1 19V1Z" stroke="rgba(237,234,226,0.5)" strokeWidth="1.2" fill="none"/>
          </svg>
        </div>
      </div>
      <div className="relative z-10 p-8">
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.12em', color: 'rgba(237,234,226,0.4)' }}>
          {label}
        </p>
      </div>
    </div>
  )
}

function LandscapeCarousel({ images }: { images: string[] }) {
  const { idx, prev, next } = useCarousel(images.length)
  return (
    <div className="relative w-full overflow-hidden bg-[#D8D4CB]">
      <img
        src={images[idx]}
        alt=""
        className="w-full object-cover transition-opacity duration-700"
        style={{ aspectRatio: '16/9', display: 'block' }}
      />
      <div className="absolute inset-0 flex items-center justify-between px-6 pointer-events-none">
        <button
          onClick={prev}
          className="pointer-events-auto w-10 h-10 flex items-center justify-center bg-[rgba(237,234,226,0.85)] hover:bg-[#EDEAE2] transition-colors"
          aria-label="Previous"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 2L4 7L9 12" stroke="#141410" strokeWidth="1.2"/></svg>
        </button>
        <button
          onClick={next}
          className="pointer-events-auto w-10 h-10 flex items-center justify-center bg-[rgba(237,234,226,0.85)] hover:bg-[#EDEAE2] transition-colors"
          aria-label="Next"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 2L10 7L5 12" stroke="#141410" strokeWidth="1.2"/></svg>
        </button>
      </div>
      <div className="absolute bottom-4 right-6">
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'rgba(20,20,16,0.5)', letterSpacing: '0.08em' }}>
          {String(idx + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
        </span>
      </div>
    </div>
  )
}

function SquareCarousel({ images }: { images: string[] }) {
  const { idx, prev, next } = useCarousel(images.length)
  return (
    <div className="max-w-[640px] mx-auto relative bg-[#D8D4CB]">
      <img
        src={images[idx]}
        alt=""
        className="w-full object-cover transition-opacity duration-700"
        style={{ aspectRatio: '1/1', display: 'block' }}
      />
      <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
        <button
          onClick={prev}
          className="pointer-events-auto w-9 h-9 flex items-center justify-center bg-[rgba(237,234,226,0.85)] hover:bg-[#EDEAE2] transition-colors"
          aria-label="Previous"
        >
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M9 2L4 7L9 12" stroke="#141410" strokeWidth="1.2"/></svg>
        </button>
        <button
          onClick={next}
          className="pointer-events-auto w-9 h-9 flex items-center justify-center bg-[rgba(237,234,226,0.85)] hover:bg-[#EDEAE2] transition-colors"
          aria-label="Next"
        >
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M5 2L10 7L5 12" stroke="#141410" strokeWidth="1.2"/></svg>
        </button>
      </div>
      <div className="absolute bottom-3 right-4">
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'rgba(20,20,16,0.5)', letterSpacing: '0.08em' }}>
          {String(idx + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
        </span>
      </div>
    </div>
  )
}

function BookCarousel({ images }: { images: string[] }) {
  const { idx, prev, next } = useCarousel(images.length)
  return (
    <div className="max-w-[800px] mx-auto">
      <div className="relative overflow-hidden bg-[#D8D4CB]">
        <img
          src={images[idx]}
          alt=""
          className="w-full h-auto block transition-opacity duration-700"
        />
        <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
          <button
            onClick={prev}
            className="pointer-events-auto w-9 h-9 flex items-center justify-center bg-[rgba(237,234,226,0.85)] hover:bg-[#EDEAE2] transition-colors"
            aria-label="Previous"
          >
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M9 2L4 7L9 12" stroke="#141410" strokeWidth="1.2"/></svg>
          </button>
          <button
            onClick={next}
            className="pointer-events-auto w-9 h-9 flex items-center justify-center bg-[rgba(237,234,226,0.85)] hover:bg-[#EDEAE2] transition-colors"
            aria-label="Next"
          >
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M5 2L10 7L5 12" stroke="#141410" strokeWidth="1.2"/></svg>
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between mt-3 px-1">
        <div className="flex gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => {}}
              className="w-1.5 h-1.5 rounded-full transition-colors"
              style={{ background: i === idx ? '#141410' : 'rgba(20,20,16,0.25)' }}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'rgba(20,20,16,0.5)', letterSpacing: '0.08em' }}>
          {String(idx + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
        </span>
      </div>
    </div>
  )
}

function VerticalGallery({ images }: { images: string[] }) {
  return (
    <div className="flex flex-col gap-3 max-w-[640px] mx-auto">
      {images.map((src, i) => (
        <div key={i} className="w-full bg-[#D8D4CB] overflow-hidden">
          <img src={src} alt="" className="w-full object-cover" style={{ display: 'block' }} />
        </div>
      ))}
    </div>
  )
}

function MetaBlock({ project }: { project: Project }) {
  return (
    <div
      className="grid gap-6 pt-8 border-t"
      style={{
        borderColor: 'rgba(20,20,16,0.12)',
        gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
      }}
    >
      <div>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', color: '#7A7664', textTransform: 'uppercase', marginBottom: '4px' }}>Category</p>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#141410' }}>{project.category}</p>
      </div>
      <div>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', color: '#7A7664', textTransform: 'uppercase', marginBottom: '4px' }}>Year</p>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#141410' }}>{project.year}</p>
      </div>
      {project.tools && (
        <div>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', color: '#7A7664', textTransform: 'uppercase', marginBottom: '4px' }}>Tools</p>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#141410' }}>{project.tools}</p>
        </div>
      )}
      {project.team && (
        <div>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', color: '#7A7664', textTransform: 'uppercase', marginBottom: '4px' }}>With</p>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#141410', lineHeight: '1.5' }}>{project.team}</p>
        </div>
      )}
    </div>
  )
}

function ProjectHeader({ project }: { project: Project }) {
  return (
    <div className="mb-8">
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.15em', color: '#7A7664', textTransform: 'uppercase', marginBottom: '12px' }}>
        {project.number} — {project.category}
      </p>
      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(2rem, 6vw, 4.5rem)', lineHeight: 1.05, color: '#141410', letterSpacing: '-0.02em' }}>
        {project.name}
      </h2>
    </div>
  )
}

function ProjectDescription({ project }: { project: Project }) {
  return (
    <div className="max-w-[600px]">
      <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: 1.75, color: '#141410', marginBottom: project.concept ? '20px' : 0 }}>
        {project.description}
      </p>
      {project.concept && (
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: 1.7, color: '#7A7664' }}>
          {project.concept}
        </p>
      )}
    </div>
  )
}

function SectionSeparator({ number }: { number: string }) {
  return (
    <div
      className="relative flex items-center overflow-hidden select-none pointer-events-none"
      style={{ height: '80px', marginBottom: '-20px' }}
    >
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 100,
          fontSize: 'clamp(80px, 18vw, 160px)',
          lineHeight: 1,
          color: 'rgba(20,20,16,0.05)',
          letterSpacing: '-0.04em',
          userSelect: 'none',
          position: 'absolute',
          left: '-0.02em',
          bottom: '-0.2em',
        }}
      >
        {number}
      </span>
    </div>
  )
}

// ─── Contents Overlay ───────────────────────────────────────────────────────

function ContentsOverlay({
  open,
  onClose,
  onNavigate,
}: {
  open: boolean
  onClose: () => void
  onNavigate: (id: string) => void
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex transition-all duration-500"
      style={{
        background: 'rgba(14,14,10,0.97)',
        opacity: open ? 1 : 0,
        pointerEvents: open ? 'all' : 'none',
        backdropFilter: open ? 'blur(4px)' : 'none',
      }}
      onClick={onClose}
    >
      <div
        className="flex flex-col justify-center h-full w-full px-10 md:px-16 lg:px-24"
        onClick={e => e.stopPropagation()}
        style={{ transform: open ? 'translateY(0)' : 'translateY(12px)', transition: 'transform 0.5s ease' }}
      >
        <div className="flex items-center justify-between mb-12">
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.18em', color: 'rgba(237,234,226,0.4)', textTransform: 'uppercase' }}>
            Contents
          </p>
          <button
            onClick={onClose}
            className="flex items-center gap-2 hover:opacity-60 transition-opacity"
            style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.12em', color: 'rgba(237,234,226,0.5)', textTransform: 'uppercase' }}
          >
            Close
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 2L12 12M12 2L2 12" stroke="rgba(237,234,226,0.5)" strokeWidth="1.2"/>
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-0">
          <ContentsItem label="Introduction" onClick={() => onNavigate('intro')} />
          {projects.map(p => (
            <ContentsItem
              key={p.id}
              label={`${p.number} — ${p.name}`}
              sub={p.category}
              onClick={() => onNavigate(p.id)}
            />
          ))}
          <ContentsItem label="About" onClick={() => onNavigate('about')} />
        </nav>
      </div>
    </div>
  )
}

function ContentsItem({ label, sub, onClick }: { label: string; sub?: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-baseline justify-between py-4 border-t text-left group"
      style={{ borderColor: 'rgba(237,234,226,0.08)' }}
    >
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 300,
          fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
          color: 'rgba(237,234,226,0.85)',
          letterSpacing: '-0.01em',
          transition: 'color 0.2s',
        }}
        className="group-hover:text-[#EDEAE2]"
      >
        {label}
      </span>
      {sub && (
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'rgba(237,234,226,0.3)', letterSpacing: '0.1em', textTransform: 'uppercase', marginLeft: '24px', flexShrink: 0 }}>
          {sub}
        </span>
      )}
    </button>
  )
}

// ─── Adaptive Labeled Carousel ──────────────────────────────────────────────

function AdaptiveCarousel({ images }: { images: LabeledImage[] }) {
  const { idx, prev, next } = useCarousel(images.length)
  const [fading, setFading] = useState(false)
  const [displayIdx, setDisplayIdx] = useState(0)

  const go = useCallback((dir: 'prev' | 'next') => {
    setFading(true)
    setTimeout(() => {
      dir === 'prev' ? prev() : next()
      setFading(false)
    }, 180)
  }, [prev, next])

  useEffect(() => { setDisplayIdx(idx) }, [idx])

  const img = images[displayIdx]

  return (
    <div className="w-full bg-[#141410] select-none">
      {/* Image area — natural aspect ratio per image */}
      <div
        className="relative w-full overflow-hidden"
        style={{ transition: 'opacity 0.18s ease', opacity: fading ? 0 : 1 }}
      >
        <img
          key={img.src}
          src={img.src}
          alt={img.label}
          className="w-full h-auto block"
        />

        {/* Left arrow */}
        <button
          onClick={() => go('prev')}
          className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center transition-opacity hover:opacity-100 opacity-60"
          style={{ width: '40px', height: '40px', background: 'rgba(14,14,10,0.7)', border: '1px solid rgba(237,234,226,0.15)' }}
          aria-label="Previous"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 2L4 7L9 12" stroke="rgba(237,234,226,0.8)" strokeWidth="1.2"/></svg>
        </button>

        {/* Right arrow */}
        <button
          onClick={() => go('next')}
          className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center transition-opacity hover:opacity-100 opacity-60"
          style={{ width: '40px', height: '40px', background: 'rgba(14,14,10,0.7)', border: '1px solid rgba(237,234,226,0.15)' }}
          aria-label="Next"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 2L10 7L5 12" stroke="rgba(237,234,226,0.8)" strokeWidth="1.2"/></svg>
        </button>
      </div>

      {/* Caption bar */}
      <div
        className="flex items-center justify-between px-5 py-3"
        style={{ borderTop: '1px solid rgba(237,234,226,0.08)' }}
      >
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', color: 'rgba(237,234,226,0.4)', textTransform: 'uppercase' }}>
          {img.label}
        </span>
        <div className="flex items-center gap-4">
          {/* Dot indicators */}
          <div className="flex gap-1.5">
            {images.map((_, i) => (
              <span
                key={i}
                style={{
                  display: 'block',
                  width: '5px',
                  height: '5px',
                  borderRadius: '50%',
                  background: i === idx ? 'rgba(237,234,226,0.6)' : 'rgba(237,234,226,0.15)',
                  transition: 'background 0.2s',
                }}
              />
            ))}
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'rgba(237,234,226,0.25)', letterSpacing: '0.08em' }}>
            {String(idx + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </div>
  )
}

// ─── HanamiTech Video ───────────────────────────────────────────────────────

function HanamiTechVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [started, setStarted] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  const handleStart = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    v.muted = false
    v.play().catch(() => {
      v.muted = true
      v.play()
      setIsMuted(true)
    })
    setStarted(true)
  }, [])

  const toggleMute = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setIsMuted(v.muted)
  }, [])

  return (
    <div
      className="relative overflow-hidden bg-[#141410]"
      style={{
        width: '100vw',
        height: '100vh',
        marginLeft: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      <video
        ref={videoRef}
        src={import.meta.env.BASE_URL + 'videos/hanamitech.mp4'}
        loop
        playsInline
        muted
        className="w-full h-full object-cover"
        style={{ display: 'block' }}
      />

      {/* Play overlay — shown until user interacts */}
      {!started && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer"
          style={{ background: 'rgba(14,14,10,0.55)' }}
          onClick={handleStart}
        >
          <div
            className="flex items-center justify-center rounded-full border transition-all duration-300 hover:scale-105"
            style={{ width: '72px', height: '72px', borderColor: 'rgba(237,234,226,0.5)' }}
          >
            <svg width="22" height="24" viewBox="0 0 22 24" fill="none">
              <path d="M2 1.5L20 12L2 22.5V1.5Z" stroke="rgba(237,234,226,0.85)" strokeWidth="1.3" fill="none"/>
            </svg>
          </div>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.14em', color: 'rgba(237,234,226,0.45)', textTransform: 'uppercase', marginTop: '16px' }}>
            Play with sound
          </p>
        </div>
      )}

      {/* Mute toggle — shown once playing */}
      {started && (
        <button
          onClick={toggleMute}
          className="absolute bottom-8 right-8 flex items-center gap-2 hover:opacity-60 transition-opacity"
          style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', color: 'rgba(237,234,226,0.5)', textTransform: 'uppercase', background: 'none', border: 'none' }}
        >
          {isMuted ? (
            <>
              <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
                <path d="M1 4H4L8 1V11L4 8H1V4Z" stroke="rgba(237,234,226,0.5)" strokeWidth="1" fill="none"/>
                <path d="M11 4L13 6M13 4L11 6" stroke="rgba(237,234,226,0.5)" strokeWidth="1"/>
              </svg>
              Unmute
            </>
          ) : (
            <>
              <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
                <path d="M1 4H4L8 1V11L4 8H1V4Z" stroke="rgba(237,234,226,0.5)" strokeWidth="1" fill="none"/>
                <path d="M10 3.5C11.2 4.5 11.2 7.5 10 8.5M12 2C14 3.5 14 8.5 12 10" stroke="rgba(237,234,226,0.5)" strokeWidth="1"/>
              </svg>
              Mute
            </>
          )}
        </button>
      )}

      {/* Caption */}
      <div className="absolute bottom-8 left-8 pointer-events-none">
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.12em', color: 'rgba(237,234,226,0.35)' }}>
          HanamiTech — audio-reactive video composition
        </p>
      </div>
    </div>
  )
}

// ─── Audio Video (play-with-sound pattern) ──────────────────────────────────

function AudioVideo({ src, caption }: { src: string; caption: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [started, setStarted] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  const handleStart = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    v.muted = false
    v.play().catch(() => {
      v.muted = true
      v.play()
      setIsMuted(true)
    })
    setStarted(true)
  }, [])

  const toggleMute = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setIsMuted(v.muted)
  }, [])

  return (
    <div className="relative bg-[#141410] overflow-hidden">
      <video
        ref={videoRef}
        src={src}
        loop
        playsInline
        muted
        controls
        style={{ width: '100%', height: 'auto', display: 'block' }}
      />

      {!started && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer"
          style={{ background: 'rgba(14,14,10,0.55)' }}
          onClick={handleStart}
        >
          <div
            className="flex items-center justify-center rounded-full border transition-all duration-300 hover:scale-105"
            style={{ width: '72px', height: '72px', borderColor: 'rgba(237,234,226,0.5)' }}
          >
            <svg width="22" height="24" viewBox="0 0 22 24" fill="none">
              <path d="M2 1.5L20 12L2 22.5V1.5Z" stroke="rgba(237,234,226,0.85)" strokeWidth="1.3" fill="none"/>
            </svg>
          </div>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.14em', color: 'rgba(237,234,226,0.45)', textTransform: 'uppercase', marginTop: '16px' }}>
            Play with sound
          </p>
        </div>
      )}

      {started && (
        <button
          onClick={toggleMute}
          className="absolute bottom-5 right-5 flex items-center gap-2 hover:opacity-60 transition-opacity"
          style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', color: 'rgba(237,234,226,0.5)', textTransform: 'uppercase', background: 'none', border: 'none' }}
        >
          {isMuted ? (
            <>
              <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
                <path d="M1 4H4L8 1V11L4 8H1V4Z" stroke="rgba(237,234,226,0.5)" strokeWidth="1" fill="none"/>
                <path d="M11 4L13 6M13 4L11 6" stroke="rgba(237,234,226,0.5)" strokeWidth="1"/>
              </svg>
              Unmute
            </>
          ) : (
            <>
              <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
                <path d="M1 4H4L8 1V11L4 8H1V4Z" stroke="rgba(237,234,226,0.5)" strokeWidth="1" fill="none"/>
                <path d="M10 3.5C11.2 4.5 11.2 7.5 10 8.5M12 2C14 3.5 14 8.5 12 10" stroke="rgba(237,234,226,0.5)" strokeWidth="1"/>
              </svg>
              Mute
            </>
          )}
        </button>
      )}

      <div className="absolute bottom-0 left-0 p-5 pointer-events-none">
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.12em', color: 'rgba(237,234,226,0.35)' }}>
          {caption}
        </p>
      </div>
    </div>
  )
}

// ─── Main App ───────────────────────────────────────────────────────────────

export default function App() {
  const [contentsOpen, setContentsOpen] = useState(false)
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})

  const setRef = useCallback((id: string) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el
  }, [])

  const navigateTo = useCallback((id: string) => {
    setContentsOpen(false)
    setTimeout(() => {
      sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 300)
  }, [])

  return (
    <div style={{ background: '#EDEAE2', minHeight: '100vh' }}>
      {/* Fixed Contents button */}
      <button
        onClick={() => setContentsOpen(true)}
        className="fixed top-6 right-6 z-40 flex items-center gap-2 hover:opacity-60 transition-opacity"
        style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.14em', color: '#141410', textTransform: 'uppercase', background: 'transparent', border: 'none' }}
      >
        <span>Contents</span>
        <span style={{ display: 'inline-flex', flexDirection: 'column', gap: '3px' }}>
          {[0,1,2].map(i => <span key={i} style={{ display: 'block', width: '14px', height: '1px', background: '#141410' }}/>)}
        </span>
      </button>

      <ContentsOverlay
        open={contentsOpen}
        onClose={() => setContentsOpen(false)}
        onNavigate={navigateTo}
      />

      {/* ── Introduction ─────────────────────────────────────────────────── */}
      <section
        ref={setRef('intro')}
        id="intro"
        className="relative min-h-screen flex flex-col px-10 md:px-16 lg:px-24 py-16 overflow-hidden"
      >
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.14em', color: '#7A7664', textTransform: 'uppercase' }}>
            Graphic Design Portfolio
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#7A7664', letterSpacing: '0.08em' }}>
            2025 — 2026
          </div>
        </div>

        {/* Main content: two-column grid */}
        <div className="flex-1 grid md:grid-cols-[1fr_auto] gap-8 md:gap-0 items-center mt-12 md:mt-0">

          {/* LEFT: name + credentials + intro */}
          <div className="flex flex-col justify-center">
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 200,
                fontSize: 'clamp(3.5rem, 10vw, 9.5rem)',
                lineHeight: 0.95,
                letterSpacing: '-0.035em',
                color: '#141410',
                maxWidth: '12ch',
              }}
            >
              Hanna<br />Haponenka
            </h1>

            <div className="mt-8 flex flex-col gap-3">
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: '#141410', maxWidth: '460px', lineHeight: 1.75 }}>
                There's always more than one way to bring an idea to life.<br />I explore different forms of visual design, interaction, motion,<br />and digital media to find the one that makes an idea feel right.
              </p>
            </div>

            <div
              className="flex items-center gap-2 animate-bounce mt-16 md:mt-24"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#7A7664', letterSpacing: '0.1em', textTransform: 'uppercase', animationDuration: '2.5s', width: 'fit-content' }}
            >
              Scroll
              <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
                <path d="M5 1V15M1 11L5 15L9 11" stroke="#7A7664" strokeWidth="1"/>
              </svg>
            </div>
          </div>

          {/* RIGHT: portrait — large, 3:4, flush toward right edge */}
          <div
            className="relative self-stretch flex items-center justify-end"
            style={{ minWidth: 'clamp(200px, 32vw, 420px)' }}
          >
            <div
              style={{
                width: 'clamp(200px, 32vw, 420px)',
                aspectRatio: '3/4',
                background: '#D8D4CB',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <img
                src={import.meta.env.BASE_URL + 'images/portrait.jpg'}
                alt="Hanna Haponenka"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>
        </div>

        {/* Large decorative text in background */}
        <div
          className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none"
          style={{ height: '200px' }}
        >
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 100,
              fontSize: 'clamp(100px, 20vw, 200px)',
              lineHeight: 1,
              color: 'rgba(20,20,16,0.04)',
              letterSpacing: '-0.04em',
              whiteSpace: 'nowrap',
              position: 'absolute',
              bottom: '-0.15em',
              left: '-0.02em',
            }}
          >
            Portfolio
          </span>
        </div>
      </section>

      {/* ── Project 01: HanamiTech ───────────────────────────────────────── */}
      <section
        ref={setRef('p01')}
        id="p01"
        className="px-10 md:px-16 lg:px-24 pt-24 pb-20"
      >
        <SectionSeparator number="01" />
        <div className="mb-10">
          <ProjectHeader project={projects[0]} />
        </div>

        {/* Video — full viewport */}
        <HanamiTechVideo />

        <div className="grid md:grid-cols-2 gap-12 mt-14 mb-12">
          <ProjectDescription project={projects[0]} />
          <div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.14em', color: '#7A7664', textTransform: 'uppercase', marginBottom: '8px' }}>Portfolio note</p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: 1.7, color: '#7A7664', fontStyle: 'italic' }}>
              {projects[0].portfolioReason}
            </p>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.14em', color: '#7A7664', textTransform: 'uppercase', marginBottom: '8px', marginTop: '20px' }}>My Role</p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: 1.7, color: '#7A7664' }}>
              I was mainly responsible for developing the visuals in TouchDesigner. I designed the distortion effects, dynamic lines, and dot-based geometries that reacted to the music. I also developed the blob tracking system, extracting X and Y coordinates from blobs triggered by the snare and using this data to control how the effects moved across the blooming sakura.
            </p>
          </div>
        </div>

        {/* TouchDesigner process — adaptive carousel */}
        <AdaptiveCarousel images={p01Images} />

        <div className="mt-8 px-0">
          <MetaBlock project={projects[0]} />
        </div>
      </section>

      {/* ── Project 02: The Collectors' Garden ──────────────────────────── */}
      <section
        ref={setRef('p02')}
        id="p02"
        className="px-10 md:px-16 lg:px-24 pt-24 pb-20"
        style={{ borderTop: '1px solid rgba(20,20,16,0.1)', marginTop: '20px' }}
      >
        <SectionSeparator number="02" />
        <div className="mb-10">
          <ProjectHeader project={projects[1]} />
        </div>

        {/* 2 videos stacked, natural aspect ratio, no black bars */}
        <div className="flex flex-col gap-3 mb-12">
          <div className="relative bg-[#141410] overflow-hidden">
            <video
              src={import.meta.env.BASE_URL + 'videos/collectors-garden-1.mp4'}
              autoPlay
              loop
              muted
              playsInline
              controls
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-5 pointer-events-none">
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.12em', color: 'rgba(237,234,226,0.4)' }}>
                The Collectors' Garden — VR experience walkthrough
              </p>
            </div>
          </div>
          <AudioVideo src={import.meta.env.BASE_URL + 'videos/collectors-garden-2.mp4'} caption="360° botanical garden exploration" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-10">
          <ProjectDescription project={projects[1]} />
          <div className="flex flex-col gap-4">
            <div className="mb-4">
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.14em', color: '#7A7664', textTransform: 'uppercase', marginBottom: '8px' }}>Portfolio note</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: 1.7, color: '#7A7664', fontStyle: 'italic', marginBottom: '16px' }}>
                {projects[1].portfolioReason}
              </p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.14em', color: '#7A7664', textTransform: 'uppercase', marginBottom: '8px' }}>My Role</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: 1.7, color: '#7A7664', marginBottom: '16px' }}>
                I created the entire website and connected it with our 360° virtual tour. I prepared the panoramas, added my teammates' work into Theasys, and created the navigation between locations. I was mainly responsible for combining everything into one complete interactive experience.
              </p>
            </div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.14em', color: '#7A7664', textTransform: 'uppercase', marginBottom: '4px' }}>External links</p>
            <a
              href="https://thecollectorsgarden.mobirisesite.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
              style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: '#141410', textDecoration: 'none' }}
            >
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#7A7664' }}>→</span>
              <span style={{ borderBottom: '1px solid rgba(20,20,16,0.2)' }} className="group-hover:border-[#141410] transition-colors">
                View Website
              </span>
            </a>
            <a
              href="https://ths.li/N24aYzb"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
              style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: '#141410', textDecoration: 'none' }}
            >
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#7A7664' }}>→</span>
              <span style={{ borderBottom: '1px solid rgba(20,20,16,0.2)' }} className="group-hover:border-[#141410] transition-colors">
                View on Theasys
              </span>
            </a>
          </div>
        </div>

        <MetaBlock project={projects[1]} />
      </section>

      {/* ── Project 03: Jazzavu Fest ─────────────────────────────────────── */}
      <section
        ref={setRef('p03')}
        id="p03"
        className="pt-24 pb-20"
        style={{ borderTop: '1px solid rgba(20,20,16,0.1)', marginTop: '20px' }}
      >
        <div className="px-10 md:px-16 lg:px-24 mb-10">
          <SectionSeparator number="03" />
          <ProjectHeader project={projects[2]} />
        </div>

        {/* Landscape carousel first */}
        <LandscapeCarousel images={projectImages.p03.slice(0, 4)} />

        <div className="px-10 md:px-16 lg:px-24 mt-12 mb-12">
          <div className="grid md:grid-cols-2 gap-12">
            <ProjectDescription project={projects[2]} />
            <div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.14em', color: '#7A7664', textTransform: 'uppercase', marginBottom: '8px' }}>Portfolio note</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: 1.7, color: '#7A7664', fontStyle: 'italic' }}>
                {projects[2].portfolioReason}
              </p>
            </div>
          </div>
        </div>

        {/* Vertical gallery */}
        <div className="px-10 md:px-16 lg:px-24">
          <VerticalGallery images={projectImages.p03.slice(4)} />
        </div>

        <div className="px-10 md:px-16 lg:px-24 mt-8">
          <MetaBlock project={projects[2]} />
        </div>
      </section>

      {/* ── Project 04: Type ─────────────────────────────────────────────── */}
      <section
        ref={setRef('p04')}
        id="p04"
        className="px-10 md:px-16 lg:px-24 pt-24 pb-20"
        style={{ borderTop: '1px solid rgba(20,20,16,0.1)', marginTop: '20px' }}
      >
        <SectionSeparator number="04" />
        <div className="mb-10">
          <ProjectHeader project={projects[3]} />
        </div>

        {/* Video first */}
        <div className="relative bg-[#141410] overflow-hidden">
          <video
            src={import.meta.env.BASE_URL + 'videos/type.mp4'}
            autoPlay
            loop
            muted
            playsInline
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
          <div className="absolute bottom-0 left-0 right-0 p-8 pointer-events-none">
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.12em', color: 'rgba(237,234,226,0.4)' }}>
              Type — 50-day typography study, time-lapse
            </p>
          </div>
        </div>

        <div className="mt-12 mb-10">
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: 1.75, color: '#141410', maxWidth: '560px' }}>
            {projects[3].description}
          </p>
        </div>

        {/* 1:1 carousel */}
        <SquareCarousel images={projectImages.p04} />

        <div className="mt-8">
          <MetaBlock project={projects[3]} />
        </div>
      </section>

      {/* ── Project 05: My Star Family Adventure ────────────────────────── */}
      <section
        ref={setRef('p05')}
        id="p05"
        className="pt-24 pb-20"
        style={{ borderTop: '1px solid rgba(20,20,16,0.1)', marginTop: '20px' }}
      >
        <div className="px-10 md:px-16 lg:px-24 mb-10">
          <SectionSeparator number="05" />
          <ProjectHeader project={projects[4]} />
        </div>

        {/* Video first */}
        <div className="px-10 md:px-16 lg:px-24 mb-8">
          <div className="relative bg-[#141410] overflow-hidden">
            <video
              src={import.meta.env.BASE_URL + 'videos/star-family.mp4'}
              autoPlay
              loop
              muted
              playsInline
              controls
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 pointer-events-none">
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.12em', color: 'rgba(237,234,226,0.4)' }}>
                My Star Family Adventure — interactive prototype walkthrough
              </p>
            </div>
          </div>
        </div>

        <div className="px-10 md:px-16 lg:px-24 mb-10">
          <div className="grid md:grid-cols-2 gap-12">
            <ProjectDescription project={projects[4]} />
            <div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.14em', color: '#7A7664', textTransform: 'uppercase', marginBottom: '8px' }}>Portfolio note</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: 1.7, color: '#7A7664', fontStyle: 'italic' }}>
                {projects[4].portfolioReason}
              </p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.14em', color: '#7A7664', textTransform: 'uppercase', marginBottom: '8px', marginTop: '20px' }}>My Role</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: 1.7, color: '#7A7664' }}>
                I was responsible for designing and developing the interactive interface in Figma. I collaborated with a teammate during the initial ideation and prompt creation, then took the lead in refining the design, developing the interactions, and bringing the prototype to its final form.
              </p>
                <a
                    href="https://empty-hug-31162021.figma.site"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 underline underline-offset-4 transition-colors hover:text-[#141410]"
                    style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '12px',
                        letterSpacing: '0.06em',
                    }}
                >
                    Explore the project website ↗
                </a>
            </div>
          </div>
        </div>

        {/* Landscape carousel */}
        <LandscapeCarousel images={projectImages.p05} />

        <div className="px-10 md:px-16 lg:px-24 mt-8">
          <MetaBlock project={projects[4]} />
        </div>
      </section>

      {/* ── Project 06: Valleys of Shadow ───────────────────────────────── */}
      <section
        ref={setRef('p06')}
        id="p06"
        className="pt-24 pb-20"
        style={{ borderTop: '1px solid rgba(20,20,16,0.1)', marginTop: '20px' }}
      >
        <div className="px-10 md:px-16 lg:px-24 mb-10">
          <SectionSeparator number="06" />
          <ProjectHeader project={projects[5]} />
        </div>

        {/* 2 photos under title */}
        <div className="px-10 md:px-16 lg:px-24 mb-6">
          <div className="grid md:grid-cols-2 gap-3">
            {projectImages.p06.slice(0, 2).map((src, i) => (
              <div key={i} className="w-full overflow-hidden bg-[#D8D4CB]">
                <img src={src} alt="" className="w-full h-auto" style={{ display: 'block' }} />
              </div>
            ))}
          </div>
        </div>

        <div className="px-10 md:px-16 lg:px-24 mb-10">
          <ProjectDescription project={projects[5]} />
        </div>

        {/* Book carousel of 5 */}
        <div className="px-10 md:px-16 lg:px-24">
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.14em', color: '#7A7664', textTransform: 'uppercase', marginBottom: '16px' }}>
            Editorial spreads
          </p>
          <BookCarousel images={projectImages.p06.slice(2)} />
        </div>

        <div className="px-10 md:px-16 lg:px-24 mt-8">
          <MetaBlock project={projects[5]} />
        </div>
      </section>

      {/* ── Project 07: Against Decluttering ────────────────────────────── */}
      <section
        ref={setRef('p07')}
        id="p07"
        className="pt-24 pb-20"
        style={{ borderTop: '1px solid rgba(20,20,16,0.1)', marginTop: '20px' }}
      >
        <div className="px-10 md:px-16 lg:px-24 mb-10">
          <SectionSeparator number="07" />
          <ProjectHeader project={projects[6]} />
        </div>

        {/* Full screen video */}
        <AudioVideo src={import.meta.env.BASE_URL + 'videos/against-decluttering.mp4'} caption="Against Decluttering — stop-motion animation" />

        <div className="px-10 md:px-16 lg:px-24 mt-12">
          <div className="grid md:grid-cols-2 gap-12">
            <ProjectDescription project={projects[6]} />
            <div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.14em', color: '#7A7664', textTransform: 'uppercase', marginBottom: '8px' }}>Portfolio note</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: 1.7, color: '#7A7664', fontStyle: 'italic' }}>
                {projects[6].portfolioReason}
              </p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.14em', color: '#7A7664', textTransform: 'uppercase', marginBottom: '8px', marginTop: '20px' }}>My Role</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: 1.7, color: '#7A7664' }}>
                Collaborative concept development, set and background creation, and stop-motion photography. Working together with teammates, I contributed to developing the narrative and visual direction, painted and prepared the backgrounds and set elements, and photographed the animation.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <MetaBlock project={projects[6]} />
          </div>
        </div>
      </section>

      {/* ── Project 08: Light Painting ───────────────────────────────────── */}
      <section
        ref={setRef('p08')}
        id="p08"
        className="pt-24 pb-20"
        style={{ borderTop: '1px solid rgba(20,20,16,0.1)', marginTop: '20px' }}
      >
        <div className="px-10 md:px-16 lg:px-24 mb-10">
          <SectionSeparator number="08" />
          <ProjectHeader project={projects[7]} />
        </div>

        <div className="px-10 md:px-16 lg:px-24 mb-12">
          <ProjectDescription project={projects[7]} />
        </div>

        {/* Vertical gallery */}
        <div className="px-10 md:px-16 lg:px-24">
          <VerticalGallery images={projectImages.p08} />
        </div>

        <div className="px-10 md:px-16 lg:px-24 mt-10 mb-2 text-center">
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: 1.8, color: '#141410', maxWidth: '640px', margin: '0 auto', fontStyle: 'italic' }}>
            The four attached photos are all based on my own conceptual ideas and creative work. I developed the concepts and compositions, designing the cutouts and background elements to interact with the objects rather than simply decorate them. I was particularly interested in transforming ordinary objects into something more conceptual and visually expressive.
          </p>
        </div>

        <div className="px-10 md:px-16 lg:px-24 mt-8">
          <MetaBlock project={projects[7]} />
        </div>
      </section>

      {/* ── Project 09: Birthday Magazine ───────────────────────────────── */}
      <section
        ref={setRef('p09')}
        id="p09"
        className="pt-24 pb-20"
        style={{ borderTop: '1px solid rgba(20,20,16,0.1)', marginTop: '20px' }}
      >
        <div className="px-10 md:px-16 lg:px-24 mb-10">
          <SectionSeparator number="09" />

          {/* Title below intro text for this project — different positioning */}
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.15em', color: '#7A7664', textTransform: 'uppercase', marginBottom: '40px' }}>
            09 — {projects[8].category}
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: 1.8, color: '#7A7664', maxWidth: '540px', fontStyle: 'italic', marginBottom: '24px' }}>
            {projects[8].concept}
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(2rem, 6vw, 4.5rem)', lineHeight: 1.05, color: '#141410', letterSpacing: '-0.02em' }}>
            {projects[8].name}
          </h2>
        </div>

        {/* Full screen video */}
        <div className="relative bg-[#141410] overflow-hidden">
          <video
            src={import.meta.env.BASE_URL + 'videos/birthday-magazine.mp4'}
            autoPlay
            loop
            muted
            playsInline
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
          <div className="absolute bottom-0 left-0 right-0 p-8 pointer-events-none">
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.12em', color: 'rgba(237,234,226,0.4)' }}>
              Birthday Magazine — editorial documentation
            </p>
          </div>
        </div>

        <div className="px-10 md:px-16 lg:px-24 mt-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: 1.75, color: '#141410' }}>
                This magazine was not made for an assignment, a grade, or a brief. I made it simply because she mattered to me — and because I wanted to give her something that could hold a small piece of the life we shared. In that sense, it is probably one of the most personal things I have ever designed.
              </p>
            </div>
            <div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.14em', color: '#7A7664', textTransform: 'uppercase', marginBottom: '8px' }}>Portfolio Note</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: 1.7, color: '#7A7664', fontStyle: 'italic' }}>
                {projects[8].portfolioReason}
              </p>
            </div>
          </div>
          <div className="mt-8">
            <MetaBlock project={projects[8]} />
          </div>
        </div>
      </section>

      {/* ── About ─────────────────────────────────────────────────────────── */}
      <section
        ref={setRef('about')}
        id="about"
        className="px-10 md:px-16 lg:px-24 pt-32 pb-24"
        style={{ borderTop: '1px solid rgba(20,20,16,0.1)', marginTop: '40px' }}
      >
        <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
          <div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.15em', color: '#7A7664', textTransform: 'uppercase', marginBottom: '20px' }}>
              About
            </p>
            <div className="bg-[#D8D4CB] overflow-hidden" style={{ aspectRatio: '3/4' }}>
              <img
                src={import.meta.env.BASE_URL + 'images/about.jpg'}
                alt="Hanna Haponenka"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-8 flex flex-col gap-4">
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.15em', color: '#7A7664', textTransform: 'uppercase' }}>
                Thank you for looking
              </p>
              <button
                onClick={() => navigateTo('intro')}
                className="flex items-center gap-2 hover:opacity-50 transition-opacity w-fit"
                style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', color: '#7A7664', textTransform: 'uppercase', background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
              >
                <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
                  <path d="M5 13V1M1 5L5 1L9 5" stroke="#7A7664" strokeWidth="1"/>
                </svg>
                Back to top
              </button>
            </div>
          </div>

          <div className="pt-8 md:pt-12">
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 200, fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1, letterSpacing: '-0.025em', color: '#141410', marginBottom: '32px' }}>
              Hanna Haponenka
            </h2>

            <div className="flex flex-col gap-5 max-w-[500px]">
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: 1.8, color: '#141410' }}>
                I work across visual design, digital interfaces, motion, and interactive media. I like exploring how different forms of design can turn an idea, feeling, or problem into something people can see, interact with, and experience.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: 1.8, color: '#141410' }}>
                I'm someone who can stay focused on a problem for hours once I decide to solve it. I take feedback seriously and can adapt to changes without losing focus. I also tend to notice possibilities in things that others might overlook, which often leads me to experiment and try directions I hadn't considered before.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: 1.8, color: '#141410' }}>
                I like learning by making — experimenting, testing, changing direction, and pushing an idea until it feels resolved.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t" style={{ borderColor: 'rgba(20,20,16,0.12)' }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', color: '#7A7664', textTransform: 'uppercase', marginBottom: '16px' }}>Skills</p>
              <div className="flex flex-col gap-5">
                <div>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', color: '#7A7664', textTransform: 'uppercase', marginBottom: '4px' }}>Visual Design</p>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#141410', lineHeight: 1.7 }}>Photoshop · Illustrator · InDesign · Lightroom · Procreate</p>
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', color: '#7A7664', textTransform: 'uppercase', marginBottom: '4px' }}>Interaction &amp; Motion</p>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#141410', lineHeight: 1.7 }}>TouchDesigner · After Effects · Theasys</p>
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', color: '#7A7664', textTransform: 'uppercase', marginBottom: '4px' }}>UI/UX &amp; Digital</p>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#141410', lineHeight: 1.7 }}>Figma · Mobirise</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
