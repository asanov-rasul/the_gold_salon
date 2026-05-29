import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  CalendarCheck,
  ChevronRight,
  Clock,
  Eye,
  Flower2,
  Gem,
  Heart,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Palette,
  Phone,
  Scissors,
  ShieldCheck,
  Sparkles,
  Star,
  WandSparkles,
  X,
} from 'lucide-react';

const navItems = [
  ['О салоне', '#about'],
  ['Услуги', '#services'],
  ['Команда', '#team'],
  ['Галерея', '#gallery'],
  ['Запись', '#booking'],
  ['Контакты', '#contact'],
];

const image = (id, width = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

const heroImage = image('photo-1560066984-138dadb4c035', 2200);
const aboutImages = [
  image('photo-1522335789203-aabd1fc54bc9', 1200),
  image('photo-1521590832167-7bcbfaa6381f', 900),
];

const services = [
  {
    title: 'Укладки и волосы',
    icon: Scissors,
    text: 'Авторские стрижки, сияющие укладки, окрашивание и образы для особых событий.',
    image: image('photo-1580618672591-eb180b1a973f', 900),
  },
  {
    title: 'Макияж',
    icon: Palette,
    text: 'Безупречный тон, свадебное сияние, вечерний glam и мягкое скульптурирование.',
    image: image('photo-1516975080664-ed2fc6a32937', 900),
  },
  {
    title: 'Ногти',
    icon: Sparkles,
    text: 'Маникюрные ритуалы, гелевое покрытие, идеальная форма и золотые акценты.',
    image: image('photo-1604654894610-df63bc536371', 900),
  },
  {
    title: 'Косметология',
    icon: WandSparkles,
    text: 'Премиальный уход за лицом, обновление кожи, glow-терапия и экспертные процедуры.',
    image: image('photo-1570172619644-dfd03ed5d881', 900),
  },
  {
    title: 'SPA',
    icon: Flower2,
    text: 'Теплые масла, расслабляющий массаж, уход за телом и глубокое восстановление.',
    image: image('photo-1600334129128-685c5582fd35', 900),
  },
  {
    title: 'Брови и ресницы',
    icon: Eye,
    text: 'Ламинирование ресниц, архитектура бровей, окрашивание и выразительный взгляд.',
    image: image('photo-1616394584738-fc6e612e71b9', 900),
  },
];

const team = [
  {
    name: 'Амира Халид',
    role: 'Креативный hair-директор',
    experience: '12 лет',
    specialty: 'Сложное окрашивание, couture-укладки',
    image: image('photo-1494790108377-be9c29b29330', 900),
    instagram: 'https://instagram.com/',
  },
  {
    name: 'Лейла Мансур',
    role: 'Ведущий визажист',
    experience: '9 лет',
    specialty: 'Свадебное сияние, editorial glam',
    image: image('photo-1580489944761-15a19d654956', 900),
    instagram: 'https://instagram.com/',
  },
  {
    name: 'Майя Стерлинг',
    role: 'Мастер ногтевого сервиса',
    experience: '7 лет',
    specialty: 'Гелевое моделирование, luxury nail art',
    image: image('photo-1534528741775-53994a69daeb', 900),
    instagram: 'https://instagram.com/',
  },
  {
    name: 'Нура Белл',
    role: 'Косметолог и SPA-терапевт',
    experience: '10 лет',
    specialty: 'Уходы за лицом, скульптурный массаж',
    image: image('photo-1517841905240-472988babdf9', 900),
    instagram: 'https://instagram.com/',
  },
];

const gallery = [
  { src: image('photo-1560066984-138dadb4c035', 1000), span: 'md:row-span-2' },
  { src: image('photo-1596462502278-27bfdc403348', 900), span: '' },
  { src: image('photo-1522337660859-02fbefca4702', 900), span: '' },
  { src: image('photo-1521590832167-7bcbfaa6381f', 900), span: 'md:row-span-2' },
  { src: image('photo-1580618672591-eb180b1a973f', 900), span: '' },
  { src: image('photo-1570172619644-dfd03ed5d881', 900), span: '' },
];

const testimonials = [
  {
    name: 'Дана А.',
    service: 'Волосы и макияж',
    text: 'THE GOLD ощущается как приватный beauty suite. Каждая деталь спокойная, безупречная и по-настоящему роскошная.',
  },
  {
    name: 'Ясмин Р.',
    service: 'Свадебный образ',
    text: 'Мой свадебный образ был элегантным, стойким и очень красиво смотрелся на фото. Команда понимает премиальный вкус.',
  },
  {
    name: 'София К.',
    service: 'Уход за кожей',
    text: 'Процедура для лица была исключительной. Кожа выглядела сияющей, а весь опыт был очень персональным и утонченным.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1250);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-ink text-pearl selection:bg-gold selection:text-ink">
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Team />
        <Gallery />
        <Testimonials />
        <Booking />
        <Contact />
      </main>
    </div>
  );
}

function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] grid place-items-center bg-ink"
      exit={{ opacity: 0, transition: { duration: 0.65, ease: 'easeInOut' } }}
    >
      <div className="relative flex flex-col items-center">
        <div className="absolute h-44 w-44 rounded-full bg-gold/20 blur-3xl animate-breathe" />
        <motion.div
          className="relative grid h-24 w-24 place-items-center rounded-full border border-gold/30 bg-white/[0.03] shadow-gold"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, rotate: 360 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Gem className="h-9 w-9 text-gold" strokeWidth={1.2} />
        </motion.div>
        <motion.p
          className="mt-7 font-display text-3xl tracking-[0.28em] text-champagne"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          THE GOLD
        </motion.p>
      </div>
    </motion.div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <nav className="mx-auto flex w-[min(1180px,calc(100%-32px))] items-center justify-between rounded-full border border-white/10 bg-ink/45 px-4 py-3 shadow-glass backdrop-blur-2xl md:px-6">
        <a href="#home" className="group flex items-center gap-3" onClick={close}>
          <span className="grid h-10 w-10 place-items-center rounded-full border border-gold/30 bg-gold/10 shadow-gold-soft transition-transform duration-300 group-hover:scale-105">
            <Gem className="h-5 w-5 text-gold" strokeWidth={1.4} />
          </span>
          <span>
            <span className="block font-display text-xl leading-none tracking-[0.18em] text-champagne">
              THE GOLD
            </span>
            <span className="hidden text-[10px] uppercase tracking-[0.32em] text-pearl/45 sm:block">
              Салон красоты
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="rounded-full px-4 py-2 text-sm text-pearl/68 transition duration-300 hover:bg-white/[0.06] hover:text-champagne"
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href="#booking"
          className="hidden items-center gap-2 rounded-full bg-gold-gradient px-5 py-3 text-sm font-semibold text-ink shadow-gold-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-gold md:inline-flex"
        >
          <CalendarCheck className="h-4 w-4" />
          Записаться
        </a>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.05] text-champagne transition hover:border-gold/40 hover:bg-gold/10 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mx-auto mt-3 w-[min(460px,calc(100%-32px))] overflow-hidden rounded-[28px] border border-white/10 bg-ink/88 p-3 shadow-glass backdrop-blur-2xl lg:hidden"
            initial={{ opacity: 0, y: -12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.96 }}
          >
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={close}
                className="flex items-center justify-between rounded-2xl px-4 py-3 text-pearl/75 transition hover:bg-white/[0.06] hover:text-champagne"
              >
                {label}
                <ChevronRight className="h-4 w-4 text-gold" />
              </a>
            ))}
            <a
              href="#booking"
              onClick={close}
              className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-gold-gradient px-5 py-3 font-semibold text-ink"
            >
              <CalendarCheck className="h-4 w-4" />
              Записаться
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-dark-radial">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Роскошная атмосфера салона красоты"
          className="h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.94)_0%,rgba(5,5,5,0.72)_42%,rgba(5,5,5,0.18)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <motion.div
        className="relative z-10 mx-auto flex min-h-screen w-[min(1180px,calc(100%-32px))] items-center pt-28"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-3xl pb-24">
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-gold/25 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.34em] text-champagne/80 backdrop-blur-xl"
          >
            <Sparkles className="h-4 w-4 text-gold" />
            Роскошь в стиле Dubai
          </motion.div>
          <motion.p variants={fadeUp} className="font-display text-2xl tracking-[0.38em] text-gold sm:text-3xl">
            THE GOLD
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mt-5 max-w-4xl font-display text-[clamp(3.9rem,9vw,7.7rem)] leading-[0.84] text-pearl"
          >
            Роскошный Beauty Experience
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-2xl text-base leading-8 text-pearl/68 sm:text-lg"
          >
            Приватный премиальный салон для безупречных волос, сияющей кожи,
            идеального макияжа, утонченного маникюра и авторских beauty-ритуалов.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <GoldButton href="#booking" icon={CalendarCheck}>
              Записаться
            </GoldButton>
            <GlassButton href="#services" icon={ArrowRight}>
              Смотреть услуги
            </GlassButton>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-6 right-8 z-10 hidden w-[920px] grid-cols-3 gap-3 2xl:grid"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.7 }}
      >
        {[
          ['Приватные кабинеты', 'спокойный сервис один на один'],
          ['Золотые ритуалы', 'только премиальные продукты'],
          ['Event Ready', 'свадебные и editorial-образы'],
        ].map(([title, text]) => (
          <div
            key={title}
            className="rounded-[24px] border border-white/10 bg-white/[0.045] p-5 backdrop-blur-2xl"
          >
            <p className="font-display text-2xl text-champagne">{title}</p>
            <p className="mt-1 text-sm text-pearl/48">{text}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-shell relative overflow-hidden">
      <Glow />
      <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal className="relative min-h-[560px]">
          <div className="absolute left-0 top-8 h-[78%] w-[72%] overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] shadow-glass">
            <img src={aboutImages[0]} alt="Интерьер салона THE GOLD" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
          </div>
          <div className="absolute bottom-0 right-0 h-[58%] w-[58%] overflow-hidden rounded-[30px] border border-gold/20 bg-ink shadow-gold-soft">
            <img src={aboutImages[1]} alt="Премиальная деталь hair-сервиса" className="h-full w-full object-cover" />
          </div>
          <div className="absolute left-8 top-0 rounded-full border border-gold/30 bg-ink/80 px-5 py-3 text-sm text-champagne shadow-gold-soft backdrop-blur-xl">
            Премиальное beauty-ателье
          </div>
        </Reveal>

        <Reveal>
          <SectionHeader
            eyebrow="О салоне THE GOLD"
            title="Красота как приватный ритуал роскоши."
            text="THE GOLD создан для женщин, которые хотят, чтобы каждый визит был продуманным, утонченным и глубоко персональным. Салон соединяет минимализм fashion-брендов, теплое гостеприимство, экспертную технику и золотое ощущение особого момента."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ['01', 'Тихая точность', 'Каждая услуга строится на консультации, пропорции и идеальном финише.'],
              ['02', 'Премиальные продукты', 'Для ритуалов мы выбираем формулы с высокой эффективностью и роскошным ощущением.'],
              ['03', 'Женственная атмосфера', 'Мягкий свет, полированные текстуры и приватность создают спокойный beauty-escape.'],
              ['04', 'Готовность к событию', 'От ежедневной ухоженности до свадеб, съемок и вечерних выходов.'],
            ].map(([number, title, text]) => (
              <div
                key={title}
                className="rounded-[26px] border border-white/10 bg-white/[0.035] p-5 transition duration-300 hover:border-gold/30 hover:bg-gold/[0.06]"
              >
                <p className="text-sm text-gold">{number}</p>
                <h3 className="mt-3 font-display text-2xl text-champagne">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-pearl/55">{text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section-shell bg-graphite">
      <SectionHeader
        centered
        eyebrow="Services"
        title="A curated menu of premium beauty."
        text="Each treatment is crafted with a luxury finish, refined touch and a calm rhythm that lets the result feel effortless."
      />
      <motion.div
        className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </motion.div>
    </section>
  );
}

function ServiceCard({ title, text, image: src, icon: Icon }) {
  return (
    <motion.article
      variants={fadeUp}
      className="group relative min-h-[390px] overflow-hidden rounded-[30px] border border-white/10 bg-ink shadow-glass"
    >
      <img
        src={src}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover opacity-54 transition duration-700 group-hover:scale-110 group-hover:opacity-68"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/62 to-transparent" />
      <div className="relative z-10 flex h-full flex-col justify-end p-6">
        <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl border border-gold/25 bg-ink/65 text-gold shadow-gold-soft backdrop-blur-xl transition duration-300 group-hover:scale-105 group-hover:bg-gold/15">
          <Icon className="h-6 w-6" strokeWidth={1.5} />
        </div>
        <h3 className="font-display text-4xl text-champagne">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-pearl/62">{text}</p>
        <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-gold opacity-80 transition duration-300 group-hover:translate-x-1 group-hover:opacity-100">
          Explore service
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
      <span className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
    </motion.article>
  );
}

function Team() {
  return (
    <section id="team" className="section-shell relative overflow-hidden">
      <Glow side="right" />
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <SectionHeader
          eyebrow="Artists"
          title="A beauty team with a couture eye."
          text="Specialists in hair, makeup, nails, skincare and the small details that make a look feel expensive."
        />
        <GlassButton href="#booking" icon={CalendarCheck}>
          Reserve With Us
        </GlassButton>
      </div>
      <motion.div
        className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
      >
        {team.map((member) => (
          <TeamCard key={member.name} {...member} />
        ))}
      </motion.div>
    </section>
  );
}

function TeamCard({ name, role, experience, specialty, image: src, instagram }) {
  return (
    <motion.article
      variants={fadeUp}
      className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.035] shadow-glass transition duration-500 hover:-translate-y-2 hover:border-gold/30 hover:bg-white/[0.055]"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={src}
          alt={name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/88 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex gap-2">
          <SocialButton href={instagram} label="Instagram">
            <Instagram className="h-4 w-4" />
          </SocialButton>
          <SocialButton
            href="https://wa.me/971501234567"
            label="WhatsApp"
          >
            <MessageCircle className="h-4 w-4" />
          </SocialButton>
        </div>
      </div>
      <div className="p-5">
        <p className="text-xs uppercase tracking-[0.28em] text-gold">{role}</p>
        <h3 className="mt-3 font-display text-3xl text-champagne">{name}</h3>
        <div className="mt-5 space-y-3 text-sm text-pearl/58">
          <div className="flex items-center gap-3">
            <Clock className="h-4 w-4 text-gold" />
            {experience} experience
          </div>
          <div className="flex items-start gap-3">
            <Sparkles className="mt-0.5 h-4 w-4 text-gold" />
            <span>{specialty}</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="section-shell bg-graphite">
      <SectionHeader
        centered
        eyebrow="Gallery"
        title="Golden moments, polished finishes."
        text="A glimpse into luminous interiors, refined tools and beauty results designed to feel timeless."
      />
      <div className="mt-12 grid auto-rows-[240px] gap-4 md:grid-cols-4">
        {gallery.map((item, index) => (
          <Reveal key={item.src} delay={index * 0.05} className={`group relative overflow-hidden rounded-[28px] border border-white/10 bg-ink ${item.span}`}>
            <img
              src={item.src}
              alt={`THE GOLD gallery ${index + 1}`}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/58 via-transparent to-transparent opacity-60 transition duration-500 group-hover:opacity-30" />
            <div className="absolute bottom-4 left-4 rounded-full border border-gold/25 bg-ink/60 px-4 py-2 text-xs uppercase tracking-[0.22em] text-champagne opacity-0 backdrop-blur-xl transition duration-500 group-hover:opacity-100">
              THE GOLD
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section-shell">
      <SectionHeader
        centered
        eyebrow="Testimonials"
        title="Loved for calm luxury and flawless finish."
        text="Reviews from clients who choose THE GOLD for premium rituals, refined technique and quiet confidence."
      />
      <motion.div
        className="mt-12 grid gap-5 lg:grid-cols-3"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {testimonials.map((review) => (
          <motion.article
            variants={fadeUp}
            key={review.name}
            className="rounded-[30px] border border-white/10 bg-white/[0.035] p-7 shadow-glass transition duration-300 hover:border-gold/25 hover:bg-white/[0.055]"
          >
            <div className="mb-8 flex items-center justify-between">
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="grid h-11 w-11 place-items-center rounded-full border border-gold/25 bg-gold/10 text-gold">
                <Heart className="h-5 w-5" />
              </span>
            </div>
            <p className="text-lg leading-8 text-pearl/76">"{review.text}"</p>
            <div className="mt-8 border-t border-white/10 pt-5">
              <p className="font-display text-2xl text-champagne">{review.name}</p>
              <p className="mt-1 text-sm text-gold/78">{review.service}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

function Booking() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: 'Hair Styling',
    datetime: '',
  });

  const whatsappUrl = useMemo(() => {
    const text = encodeURIComponent(
      `Hello THE GOLD, I would like to book an appointment.\nName: ${form.name || '-'}\nPhone: ${form.phone || '-'}\nService: ${form.service}\nDate & time: ${form.datetime || '-'}`,
    );
    return `https://wa.me/971501234567?text=${text}`;
  }, [form]);

  const update = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  return (
    <section id="booking" className="section-shell relative overflow-hidden bg-graphite">
      <Glow />
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <SectionHeader
            eyebrow="Booking"
            title="Reserve your golden hour."
            text="Choose your service, share your preferred time and continue directly through WhatsApp for a fast personal confirmation."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              [ShieldCheck, 'Private consultation'],
              [Sparkles, 'Premium products'],
              [Clock, 'Flexible scheduling'],
              [Gem, 'Luxury finish'],
            ].map(([Icon, label]) => (
              <div key={label} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gold/10 text-gold">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm text-pearl/70">{label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="rounded-[34px] border border-white/10 bg-ink/72 p-4 shadow-glass backdrop-blur-2xl sm:p-7">
          <form className="grid gap-4" onSubmit={(event) => event.preventDefault()}>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name">
                <input
                  name="name"
                  value={form.name}
                  onChange={update}
                  onInput={update}
                  placeholder="Your name"
                  className="field"
                />
              </Field>
              <Field label="Phone">
                <input
                  name="phone"
                  value={form.phone}
                  onChange={update}
                  onInput={update}
                  placeholder="+971 50 000 0000"
                  className="field"
                />
              </Field>
            </div>
            <Field label="Service">
              <select name="service" value={form.service} onChange={update} className="field">
                {services.map((service) => (
                  <option key={service.title}>{service.title}</option>
                ))}
              </select>
            </Field>
            <Field label="Date & time">
              <input
                type="datetime-local"
                name="datetime"
                value={form.datetime}
                onChange={update}
                onInput={update}
                className="field"
              />
            </Field>
            <div className="mt-2 grid gap-3 sm:grid-cols-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[56px] items-center justify-center gap-2 rounded-full bg-gold-gradient px-6 py-4 font-semibold text-ink shadow-gold-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-gold"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
              <a
                href="tel:+971501234567"
                className="inline-flex min-h-[56px] items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.045] px-6 py-4 font-semibold text-champagne transition duration-300 hover:border-gold/35 hover:bg-gold/10"
              >
                <Phone className="h-5 w-5" />
                Call Salon
              </a>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <footer id="contact" className="section-shell pb-8">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionHeader
            eyebrow="Contact"
            title="Visit THE GOLD."
            text="A premium beauty destination inspired by Dubai's refined salon culture, created for calm appointments and luminous results."
          />
          <div className="mt-8 space-y-4">
            <ContactItem icon={MapPin} title="Address" text="Boulevard Plaza, Downtown Dubai, UAE" />
            <ContactItem icon={Phone} title="Phone" text="+971 50 123 4567" href="tel:+971501234567" />
            <ContactItem icon={Instagram} title="Instagram" text="@thegold.salon" href="https://instagram.com/" />
            <ContactItem icon={MessageCircle} title="WhatsApp" text="Message us now" href="https://wa.me/971501234567" />
            <ContactItem icon={Mail} title="Email" text="hello@thegold.salon" href="mailto:hello@thegold.salon" />
          </div>
        </Reveal>

        <Reveal className="overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.035] shadow-glass">
          <iframe
            title="THE GOLD location map"
            src="https://www.google.com/maps?q=Downtown%20Dubai%20Boulevard%20Plaza&output=embed"
            loading="lazy"
            className="h-[420px] w-full grayscale invert"
          />
        </Reveal>
      </div>

      <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-sm text-pearl/45 md:flex-row">
        <a href="#home" className="font-display text-3xl tracking-[0.24em] text-champagne">
          THE GOLD
        </a>
        <p>Luxury beauty salon experience. All rights reserved.</p>
        <div className="flex gap-2">
          {[Instagram, MessageCircle, Phone].map((Icon, index) => (
            <a
              key={index}
              href={index === 0 ? 'https://instagram.com/' : index === 1 ? 'https://wa.me/971501234567' : 'tel:+971501234567'}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-champagne transition hover:border-gold/30 hover:bg-gold/10"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

function SectionHeader({ eyebrow, title, text, centered = false }) {
  return (
    <Reveal className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}>
      <div className={`mb-4 flex items-center gap-3 ${centered ? 'justify-center' : ''}`}>
        <span className="h-px w-10 bg-gold" />
        <span className="text-xs uppercase tracking-[0.32em] text-gold">{eyebrow}</span>
        <span className="h-px w-10 bg-gold" />
      </div>
      <h2 className="font-display text-[clamp(3rem,8vw,6.5rem)] leading-[0.9] text-champagne">
        {title}
      </h2>
      <p className="mt-6 text-base leading-8 text-pearl/62">{text}</p>
    </Reveal>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-champagne/72">{label}</span>
      {children}
    </label>
  );
}

function ContactItem({ icon: Icon, title, text, href }) {
  const content = (
    <div className="flex items-center gap-4 rounded-[24px] border border-white/10 bg-white/[0.035] p-4 transition duration-300 hover:border-gold/30 hover:bg-gold/[0.055]">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold/10 text-gold">
        <Icon className="h-5 w-5" />
      </span>
      <span>
        <span className="block text-xs uppercase tracking-[0.24em] text-gold/80">{title}</span>
        <span className="mt-1 block text-pearl/70">{text}</span>
      </span>
    </div>
  );

  return href ? (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
      {content}
    </a>
  ) : (
    content
  );
}

function Reveal({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function GoldButton({ href, icon: Icon, children }) {
  return (
    <a
      href={href}
      className="group inline-flex min-h-[56px] items-center justify-center gap-3 rounded-full bg-gold-gradient px-7 py-4 font-semibold text-ink shadow-gold-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-gold"
    >
      <Icon className="h-5 w-5 transition group-hover:scale-110" />
      {children}
    </a>
  );
}

function GlassButton({ href, icon: Icon, children }) {
  return (
    <a
      href={href}
      className="group inline-flex min-h-[56px] items-center justify-center gap-3 rounded-full border border-white/12 bg-white/[0.055] px-7 py-4 font-semibold text-champagne backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-gold/35 hover:bg-gold/10"
    >
      {children}
      <Icon className="h-5 w-5 text-gold transition group-hover:translate-x-1" />
    </a>
  );
}

function SocialButton({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-ink/65 text-champagne backdrop-blur-xl transition duration-300 hover:border-gold/40 hover:bg-gold/15"
    >
      {children}
    </a>
  );
}

function Glow({ side = 'left' }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute top-20 h-72 w-72 rounded-full bg-gold/12 blur-3xl ${
        side === 'right' ? 'right-[-120px]' : 'left-[-120px]'
      }`}
    />
  );
}

export default App;
