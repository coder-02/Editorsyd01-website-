// ============================================================
//  EDITORSYD01 — SITE CONFIG
//  Edit everything here: contacts, links, logo, hero/showreel
//  videos and portfolio projects. No need to touch components.
// ============================================================

// Real brand assets (Vite bundles & optimizes these automatically).
// To change them later, just replace the files in src/Images/.
import logoImg from '../Images/logosyd.png'
import ownerImg from '../Images/you.jpg'
import heroVideoFile from '../Images/hero_section.mp4'
import aboutHero from '../Images/hero-section1.png'
import workHero from '../Images/hero-section2.png'
import servicesHero from '../Images/hero-section3.png'
import processHero from '../Images/hero-section4.png'
import contactHero from '../Images/hero-section5.png'

export const brand = {
  name: 'Editorsyd01',
  subtitle: 'CINEMATIC',
  owner: 'Sayed Shaad',
  tagline: 'EDIT. FEEL. REMEMBER.',
  logo: logoImg,
  ownerPhoto: ownerImg,
}

// ----- CONTACT / SOCIAL (fully configurable) -----
export const contact = {
  email: 'editorsyd01@gmail.com',
  // WhatsApp: international format, no + or spaces for the wa.me link
  whatsappNumber: '917620807334',
  whatsappDisplay: '+91 76208 07334',
  instagram: 'https://www.instagram.com/cinematic_videos01?igsi=NmtzZnlwNG1sem1h',
  instagramHandle: '@cinematic_videos01',
  facebook: 'https://www.facebook.com/share/1EBMH78dtP/',
}

export const links = {
  whatsapp: `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    "Hi Sayed, I'd love to talk about a cinematic video project."
  )}`,
  email: `mailto:${contact.email}`,
  instagram: contact.instagram,
  facebook: contact.facebook,
}

// ----- HERO + SHOWREEL VIDEOS (easy to replace) -----
// To change the hero video, just replace src/Images/hero_section.mp4.
// For the showreel you can drop a file in /public/assets or paste an .mp4 URL.
export const media = {
  heroVideo: heroVideoFile,
  // Skip the first N seconds of the hero video (start has a glitch).
  // The loop also restarts from this point. Tweak freely.
  heroVideoStart: 1.5,
  heroPoster:
    'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1920&q=80',
  showreelVideo: '/assets/showreel.mp4',
  showreelPoster:
    'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1920&q=80',
}

// ----- PER-PAGE HERO BACKGROUND IMAGES -----
// To change any of these, just replace the matching file in src/Images/.
export const heroImages = {
  about: aboutHero,
  work: workHero,
  services: servicesHero,
  process: processHero,
  contact: contactHero,
}

// ----- PORTFOLIO CATEGORIES -----
export const categories = [
  'All',
  'Wedding Films',
  'Cinematic Reels',
  'Travel Films',
  'Brand Films',
  'Music Videos',
  'Social Media',
]

// ----- PROJECTS (easy to edit) -----
// thumb: image poster. video: fullscreen playback source (optional).
export const projects = [
  {
    id: 'p1',
    title: 'Eternal Vows',
    category: 'Wedding Films',
    year: '2025',
    thumb:
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    video: '',
  },
  {
    id: 'p2',
    title: 'Neon Nights',
    category: 'Cinematic Reels',
    year: '2025',
    thumb:
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80',
    video: '',
  },
  {
    id: 'p3',
    title: 'Wander North',
    category: 'Travel Films',
    year: '2024',
    thumb:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80',
    video: '',
  },
  {
    id: 'p4',
    title: 'Monochrome',
    category: 'Brand Films',
    year: '2024',
    thumb:
      'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1200&q=80',
    video: '',
  },
  {
    id: 'p5',
    title: 'Midnight Echo',
    category: 'Music Videos',
    year: '2025',
    thumb:
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80',
    video: '',
  },
  {
    id: 'p6',
    title: 'City Pulse',
    category: 'Social Media',
    year: '2025',
    thumb:
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&q=80',
    video: '',
  },
  {
    id: 'p7',
    title: 'Golden Hour',
    category: 'Wedding Films',
    year: '2024',
    thumb:
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
    video: '',
  },
  {
    id: 'p8',
    title: 'Coastline',
    category: 'Travel Films',
    year: '2025',
    thumb:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    video: '',
  },
  {
    id: 'p9',
    title: 'The Craft',
    category: 'Brand Films',
    year: '2025',
    thumb:
      'https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?auto=format&fit=crop&w=1200&q=80',
    video: '',
  },
]

// ----- SERVICES -----
export const services = [
  { n: '01', title: 'Cinematic Video Editing', desc: 'Story-first edits with intentional pacing, rhythm and emotional flow.' },
  { n: '02', title: 'Wedding Films', desc: 'Timeless films that hold the feeling of the day, frame by frame.' },
  { n: '03', title: 'Reels & Short-Form', desc: 'Scroll-stopping vertical edits built for reach and retention.' },
  { n: '04', title: 'Color Grading', desc: 'Filmic tones and mood crafted to give footage a signature look.' },
  { n: '05', title: 'Sound Design', desc: 'Layered audio, foley and mix that make every cut feel alive.' },
  { n: '06', title: 'Motion & Visual Effects', desc: 'Clean motion, titles and VFX that elevate without distraction.' },
]

// ----- PROCESS -----
export const processSteps = [
  { n: '01', title: 'Send Your Footage', desc: 'Share raw clips, references and the story you want to tell.' },
  { n: '02', title: 'Edit & Story', desc: 'We shape structure, pacing and emotion into a first cut.' },
  { n: '03', title: 'Color & Sound', desc: 'Cinematic grade, sound design and mix bring it to life.' },
  { n: '04', title: 'Final Delivery', desc: 'Polished, export-ready films in every format you need.' },
]

// ----- TESTIMONIALS -----
export const testimonials = [
  { name: 'Aarav & Meera', role: 'Wedding Film', quote: 'He turned our raw wedding clips into a film we cry watching. Every cut felt intentional.' },
  { name: 'Studio Lumen', role: 'Brand Film', quote: 'The pacing, grade and sound design were on another level. Truly cinematic work.' },
  { name: 'Riya Kapoor', role: 'Creator', quote: 'My reels finally look like a story, not just clips. Retention shot up instantly.' },
  { name: 'Nomad Collective', role: 'Travel Film', quote: 'He made our footage feel like a Netflix opening sequence. Absolutely premium.' },
  { name: 'Kabir Sound', role: 'Music Video', quote: 'The edit breathes with the track. Timing and transitions were flawless.' },
]
