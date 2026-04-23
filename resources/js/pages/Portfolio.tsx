import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
    Mail, 
    Phone, 
    MapPin,
    Code,
    Send,
    Sparkles,
    ArrowRight,
    Database,
    Calculator,
    BarChart3,
    Globe,
    Server,
    FileCode
} from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import { Link } from '@inertiajs/react';

interface PortfolioProps {
    hero: {
        name: string;
        title: string;
        tagline: string;
        description: string;
    };
    introduction?: {
        title: string;
        subtitle: string;
        description: string;
        hobby: string;
        instagram: string;
        photos: string[];
    };
    about: {
        title: string;
        subtitle?: string;
        description: string;
        highlights: Record<string, string>;
    };
    skills: Array<{
        category: string;
        icon: string;
        items: string[];
    }>;
    projects: Array<{
        id: string;
        title: string;
        description: string;
        technologies: string[];
        year: string;
        company: string;
    }>;
    experience: Array<{
        title: string;
        description: string;
    }>;
    workExperience?: Array<{
        title: string;
        company: string;
        location: string;
        period: string;
        description: string;
        achievements: string[];
    }>;
    organizationalExperience?: Array<{
        title: string;
        company: string;
        location: string;
        period: string;
        description: string;
        achievements: string[];
    }>;
    certifications?: Array<{
        name: string;
        issuer: string;
        year: string;
        description: string;
    }>;
    contact: {
        email: string;
        phone: string;
        location: string;
        social: {
            github: string;
            linkedin: string;
            twitter: string;
        };
    };
}

// Parallax Text Component
const ParallaxText = ({ children, offset = 50 }: { children: React.ReactNode; offset?: number }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    
    const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
    
    return (
        <motion.div ref={ref} style={{ y }}>
            {children}
        </motion.div>
    );
};

// Story Section Component
const StorySection = ({ 
    number, 
    title, 
    description, 
    align = 'left' 
}: { 
    number: string; 
    title: string; 
    description: string; 
    align?: 'left' | 'right' 
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`flex flex-col ${align === 'right' ? 'items-end text-right' : 'items-start text-left'} mb-32`}
        >
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-8xl md:text-9xl font-bold text-gray-100 mb-4"
            >
                {number}
            </motion.div>
            <motion.h3
                initial={{ opacity: 0, x: align === 'right' ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-3xl md:text-4xl font-bold text-black mb-4"
            >
                {title}
            </motion.h3>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-gray-600 max-w-xl leading-relaxed"
            >
                {description}
            </motion.p>
        </motion.div>
    );
};

// Skill Item Component - Minimalist with Hover Reveal
const SkillItem = ({ skill, index }: { skill: { category: string; items: string[] }; index: number }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group"
        >
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full text-left py-6 border-b border-gray-100 hover:border-gray-300 transition-all duration-300"
            >
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        {/* Number */}
                        <span className="text-sm text-gray-400 font-mono w-8">
                            {String(index + 1).padStart(2, '0')}
                        </span>
                        
                        {/* Category Name */}
                        <h3 className="text-2xl font-semibold text-black group-hover:text-blue-600 transition-colors">
                            {skill.category}
                        </h3>
                    </div>
                    
                    {/* Expand Icon */}
                    <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-gray-400 group-hover:text-blue-600"
                    >
                        <ArrowRight size={24} className={isExpanded ? 'rotate-90' : ''} />
                    </motion.div>
                </div>
            </button>
            
            {/* Expanded Content */}
            <motion.div
                initial={false}
                animate={{
                    height: isExpanded ? 'auto' : 0,
                    opacity: isExpanded ? 1 : 0
                }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="overflow-hidden"
            >
                <div className="py-6 pl-14">
                    <div className="flex flex-wrap gap-3">
                        {skill.items.map((item, i) => (
                            <motion.span
                                key={item}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.05 }}
                                className="px-4 py-2 bg-gray-50 text-gray-700 rounded-full text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-default"
                            >
                                {item}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default function Portfolio({ hero, introduction, about, skills, projects, experience, workExperience, organizationalExperience, certifications, contact }: PortfolioProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isBlueSection, setIsBlueSection] = useState(false);
    const [currentOrgIndex, setCurrentOrgIndex] = useState(0);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Track blue sections using Intersection Observer
    useEffect(() => {
        const blueSections = ['introduction', 'projects'];
        
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const sectionId = entry.target.id;
                    
                    // If entering a blue section
                    if (entry.isIntersecting && blueSections.includes(sectionId)) {
                        setIsBlueSection(true);
                    }
                    // If leaving a blue section
                    else if (!entry.isIntersecting && blueSections.includes(sectionId)) {
                        setIsBlueSection(false);
                    }
                    // If entering a non-blue section
                    else if (entry.isIntersecting && !blueSections.includes(sectionId)) {
                        setIsBlueSection(false);
                    }
                });
            },
            { threshold: [0, 0.5, 1] }
        );

        // Observe all sections
        const allSections = ['hero-section', 'introduction', 'about', 'skills', 'projects', 'experience', 'contact'];
        allSections.forEach(id => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    // Determine menu color based on blue section state
    const menuColorClass = isBlueSection 
        ? 'text-white hover:text-white/80' 
        : 'text-gray-600 hover:text-gray-900';

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="min-h-screen bg-white text-black snap-y snap-mandatory overflow-y-scroll h-screen">
            {/* Progress Bar - Neutral Gray */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gray-300 origin-left z-50"
                style={{ scaleX }}
            />

            {/* Simple Horizontal Menu - Dynamic Color */}
            <nav className="fixed top-0 w-full z-50">
                <div className="container mx-auto px-6 py-8">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-center items-center gap-16"
                    >
                        <motion.a
                            href="#about"
                            whileHover={{ scale: 1.05 }}
                            className={`${menuColorClass} transition-colors text-sm font-medium tracking-wide`}
                        >
                            About
                        </motion.a>
                        <motion.a
                            href="#skills"
                            whileHover={{ scale: 1.05 }}
                            className={`${menuColorClass} transition-colors text-sm font-medium tracking-wide`}
                        >
                            Skills
                        </motion.a>
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            className={`${menuColorClass} transition-colors text-sm font-medium tracking-wide`}
                        >
                            Projects
                        </motion.a>
                        <motion.a
                            href="#experience"
                            whileHover={{ scale: 1.05 }}
                            className={`${menuColorClass} transition-colors text-sm font-medium tracking-wide`}
                        >
                            Experience
                        </motion.a>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            className={`${menuColorClass} transition-colors text-sm font-medium tracking-wide`}
                        >
                            Contact
                        </motion.a>
                    </motion.div>
                </div>
            </nav>

            {/* Hero Section - Soft Blur Gradient */}
            <section id="hero-section" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-32 snap-start snap-always">
                {/* Soft Blur Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white" />
                
                {/* Blur Orbs - Soft & Subtle */}
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-[120px]" />
                <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-200/30 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 left-1/3 w-[450px] h-[450px] bg-purple-200/20 rounded-full blur-[110px]" />
                
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-5xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-12 font-light"
                            >
                                Finance Automation & Fullstack Developer
                            </motion.p>
                            
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight tracking-tight text-gray-900 min-h-[200px] md:min-h-[280px] flex items-center justify-center"
                            >
                                <span className="inline-block">
                                    <Typewriter
                                        onInit={(typewriter) => {
                                            typewriter
                                                .typeString('Hi, I\'m Aqsha')
                                                .pauseFor(1500)
                                                .deleteAll(50)
                                                .typeString('<span style="background: linear-gradient(to right, #2563eb, #0891b2); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Data Enthusiast</span>')
                                                .pauseFor(2000)
                                                .deleteAll(50)
                                                .pauseFor(500)
                                                .start();
                                        }}
                                        options={{
                                            autoStart: false,
                                            loop: true,
                                            delay: 75,
                                            deleteSpeed: 50,
                                            cursor: '|',
                                            wrapperClassName: 'typewriter-wrapper',
                                            cursorClassName: 'typewriter-cursor',
                                        }}
                                    />
                                </span>
                            </motion.h1>
                            
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 2.5, duration: 0.8 }}
                                className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-light mb-8"
                            >
                                {hero.tagline}
                            </motion.p>
                            
                            {/* FinTech Expertise Indicators */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 3, duration: 0.8 }}
                                className="flex items-center justify-center gap-8 mb-12"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                                        <Calculator className="text-blue-600" size={24} />
                                    </div>
                                    <span className="text-sm text-gray-600 font-medium">Finance Expert</span>
                                </div>
                                
                                <div className="text-2xl text-gray-300">+</div>
                                
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                                        <Code className="text-blue-600" size={24} />
                                    </div>
                                    <span className="text-sm text-gray-600 font-medium">Tech Builder</span>
                                </div>
                                
                                <div className="text-2xl text-gray-300">=</div>
                                
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                                        <Sparkles className="text-white" size={24} />
                                    </div>
                                    <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">FinTech & Data Enthusiast</span>
                                </div>
                            </motion.div>
                            
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 3.3, duration: 0.8 }}
                                className="text-sm md:text-base text-gray-500 max-w-3xl mx-auto leading-relaxed"
                            >
                                {hero.description}
                            </motion.p>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll Indicator - Fixed Position */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.5, duration: 1 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="flex flex-col items-center gap-2"
                    >
                        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-light">Scroll</span>
                        <div className="w-px h-8 bg-gradient-to-b from-gray-300 to-transparent" />
                    </motion.div>
                </motion.div>
            </section>

            {/* Introduction Section - Blue Soft Smooth */}
            {introduction && (
                <section id="introduction" className="py-32 snap-start snap-always min-h-screen flex items-center relative" style={{ background: 'linear-gradient(135deg, #4da6ff 0%, #0076E2 50%, #4da6ff 100%)' }}>
                    <div className="container mx-auto px-6">
                        <div className="max-w-5xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="space-y-8"
                            >
                                {/* Header */}
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                                            {introduction.title}
                                        </h2>
                                        <p className="text-white/80 text-sm">
                                            {introduction.subtitle}
                                        </p>
                                    </div>
                                    <a 
                                        href={`https://instagram.com/${introduction.instagram.replace('@', '')}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-white hover:underline transition-colors"
                                    >
                                        {introduction.instagram}
                                    </a>
                                </div>

                                {/* Content Grid */}
                                <div className="grid md:grid-cols-2 gap-8 pt-8">
                                    {/* Left Column - Main Description */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <p className="text-lg text-white/90 leading-relaxed">
                                            {introduction.description}
                                        </p>
                                    </motion.div>

                                    {/* Right Column - Hobby */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <p className="text-lg text-white/90 leading-relaxed">
                                            {introduction.hobby}
                                        </p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    
                    {/* Playful Greeting - Bottom Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 20, rotate: 0 }}
                        whileInView={{ opacity: 1, x: 0, rotate: -8 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="absolute bottom-12 right-12 hidden md:block"
                    >
                        <motion.div
                            animate={{ 
                                y: [0, -10, 0],
                                rotate: [-8, -12, -8]
                            }}
                            transition={{ 
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="text-white/90 text-xl font-light"
                            style={{ 
                                transform: 'rotate(-8deg)',
                                textShadow: '0 2px 10px rgba(0,0,0,0.1)'
                            }}
                        >
                            <span>nice to meet u guys</span>
                            <span className="inline-block mr-2">😁👋🏻</span>
                        </motion.div>
                    </motion.div>
                </section>
            )}

            {/* Photo Split Section - Full Height */}
            {introduction && introduction.photos && (
                <section className="w-full snap-start snap-always h-screen">
                    <div className="grid grid-cols-2 h-full">
                        {introduction.photos.map((photo, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="relative overflow-hidden h-full"
                            >
                                <motion.img
                                    src={photo}
                                    alt={`Photography ${index + 1}`}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.4 }}
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        ))}
                    </div>
                </section>
            )}

            {/* About Section - Minimal & Clean */}
            <section id="about" className="py-32 bg-white snap-start snap-always min-h-screen flex items-center">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        {/* Section Number */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-8xl font-bold text-gray-100 mb-8"
                        >
                            01
                        </motion.div>

                        {/* Main Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                {about.title}
                            </h2>
                            {about.subtitle && (
                                <p className="text-lg text-gray-500 italic mb-6">
                                    {about.subtitle}
                                </p>
                            )}
                            <p className="text-xl text-gray-600 leading-relaxed">
                                {about.description}
                            </p>
                        </motion.div>

                        {/* Stats - Simple Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="grid grid-cols-3 gap-12 pt-12 border-t border-gray-200"
                        >
                            {Object.entries(about.highlights).map(([key, value], index) => (
                                <motion.div
                                    key={key}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="text-5xl font-bold text-gray-900 mb-2">
                                        {value}
                                    </div>
                                    <div className="text-sm text-gray-500 uppercase tracking-wider">
                                        {key}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Story Section 02 - Skills - Minimalist List */}
            <section id="skills" className="py-32 bg-white snap-start snap-always min-h-screen flex items-center">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <StorySection
                            number="02"
                            title="Mastering the Craft"
                            description="From web development to database management, from accounting software to business analysis. Each skill is a tool, carefully honed to build solutions that matter."
                            align="left"
                        />
                        
                        {/* Minimalist Skills List */}
                        <div className="space-y-1">
                            {skills.map((skill, index) => (
                                <SkillItem key={skill.category} skill={skill} index={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section - Interactive Blue Design */}
            <section id="projects" className="py-20 snap-start snap-always min-h-screen flex items-center" style={{ background: 'linear-gradient(135deg, #4da6ff 0%, #0076E2 50%, #4da6ff 100%)' }}>
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        {/* Header with Number */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-16"
                        >
                            <div className="flex items-start gap-8">
                                {/* Big Number - Left Side */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="text-8xl md:text-9xl font-bold text-white/20 leading-none"
                                >
                                    03
                                </motion.div>
                                
                                {/* Title & Description - Right Side */}
                                <div className="flex-1 pt-4">
                                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                        Projects
                                    </h2>
                                    <p className="text-white/80 text-lg max-w-2xl">
                                        Real projects. Real solutions. Real impact. Each project tells a story of innovation and excellence
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                        
                        <div className="grid md:grid-cols-3 gap-6">
                            {projects.slice(0, 6).map((project, index) => (
                                <Link
                                    key={project.id}
                                    href={`/project/${project.id}`}
                                >
                                    <motion.div
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.15, duration: 0.6 }}
                                        whileHover={{ y: -10, scale: 1.02 }}
                                        className="group relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-500 cursor-pointer h-full"
                                    >
                                        {/* Animated Corner Accent */}
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
                                            className="absolute -top-3 -right-3 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
                                        >
                                            <span className="text-blue-600 font-bold text-lg">
                                                {String(index + 1).padStart(2, '0')}
                                            </span>
                                        </motion.div>

                                        {/* Year Badge */}
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-semibold mb-6"
                                        >
                                            {project.year}
                                        </motion.div>

                                        {/* Content */}
                                        <div className="space-y-4">
                                            <div>
                                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white transition-colors line-clamp-2">
                                                    {project.title}
                                                </h3>
                                                <p className="text-white/90 font-semibold text-sm">
                                                    {project.company}
                                                </p>
                                            </div>

                                            <p className="text-white/80 text-sm leading-relaxed line-clamp-3">
                                                {project.description}
                                            </p>

                                            {/* Technologies */}
                                            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/20">
                                                {project.technologies.slice(0, 3).map((tech, i) => (
                                                    <motion.span
                                                        key={tech}
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: index * 0.15 + i * 0.05 }}
                                                        className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium"
                                                    >
                                                        {tech}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Hover Glow Effect */}
                                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/5 group-hover:to-white/10 transition-all duration-500 pointer-events-none" />
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section - Timeline Design */}
            <section id="experience" className="py-32 bg-white snap-start snap-always min-h-screen">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <StorySection
                            number="04"
                            title="Professional Experience"
                            description="Every role, every responsibility, every challenge has shaped the developer I am today. From intern to coordinator, the journey continues."
                            align="right"
                        />
                        
                        {workExperience && workExperience.length > 0 && (
                            <div className="space-y-8">
                                {workExperience.map((exp, index) => (
                                    <motion.div
                                        key={exp.title}
                                        initial={{ opacity: 0, x: -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="relative pl-12 pb-12 border-l-2 border-gray-200 last:border-l-0 last:pb-0"
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.3, rotate: 360 }}
                                            className="absolute -left-3 top-0 w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full border-4 border-white shadow-lg"
                                        />
                                        
                                        <div className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-500">
                                            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                                <div>
                                                    <h3 className="text-xl font-bold text-black mb-1">{exp.title}</h3>
                                                    <p className="text-blue-600 font-semibold">{exp.company}</p>
                                                    <p className="text-sm text-gray-500">{exp.location}</p>
                                                </div>
                                                <span className="px-4 py-2 bg-gray-50 text-gray-600 rounded-full text-sm font-medium">
                                                    {exp.period}
                                                </span>
                                            </div>
                                            
                                            <p className="text-gray-600 mb-4">{exp.description}</p>
                                            
                                            <div className="space-y-2">
                                                {exp.achievements.map((achievement, i) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: index * 0.1 + i * 0.05 }}
                                                        className="flex items-start gap-2 text-sm text-gray-600"
                                                    >
                                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
                                                        <span>{achievement}</span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Organizational Experience Section - Photo Collage Carousel */}
            {organizationalExperience && organizationalExperience.length > 0 && (
                <section id="organizational" className="relative snap-start snap-always min-h-screen flex items-center justify-center overflow-hidden bg-black">
                    {/* Photo Grid Background with Smooth Transitions */}
                    <motion.div 
                        key={currentOrgIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="absolute inset-0 grid grid-cols-4 grid-rows-3 gap-1"
                    >
                        {/* Intro Slide (Index 0) */}
                        {currentOrgIndex === 0 && (
                            <>
                                {[
                                    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop",
                                    "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=400&fit=crop",
                                    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=400&fit=crop",
                                    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop",
                                    "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=400&fit=crop",
                                    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=400&fit=crop",
                                    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=400&fit=crop",
                                    "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=400&h=400&fit=crop",
                                    "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=400&fit=crop",
                                    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop",
                                    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=400&fit=crop",
                                    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=400&fit=crop"
                                ].map((src, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.8, rotateZ: -10 }}
                                        animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
                                        transition={{ 
                                            delay: i * 0.05,
                                            duration: 0.6,
                                            type: "spring",
                                            stiffness: 100
                                        }}
                                        className="relative overflow-hidden"
                                    >
                                        <motion.img 
                                            src={src}
                                            alt="Team" 
                                            className="w-full h-full object-cover"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </motion.div>
                                ))}
                            </>
                        )}
                        
                        {currentOrgIndex === 1 && (
                            <>
                                {/* Slide 1 - HIMADISA Kepala Bidang Internal */}
                                <div className="relative overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop" alt="Team" className="w-full h-full object-cover" />
                                </div>
                                <div className="relative overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=400&fit=crop" alt="Leadership" className="w-full h-full object-cover" />
                                </div>
                                <div className="relative overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=400&fit=crop" alt="Meeting" className="w-full h-full object-cover" />
                                </div>
                                <div className="relative overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop" alt="Team" className="w-full h-full object-cover" />
                                </div>
                                <div className="relative overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=400&fit=crop" alt="Organization" className="w-full h-full object-cover" />
                                </div>
                                <div className="relative overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=400&fit=crop" alt="Discussion" className="w-full h-full object-cover" />
                                </div>
                                <div className="relative overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=400&fit=crop" alt="Event" className="w-full h-full object-cover" />
                                </div>
                                <div className="relative overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=400&h=400&fit=crop" alt="Community" className="w-full h-full object-cover" />
                                </div>
                                <div className="relative overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=400&fit=crop" alt="Professional" className="w-full h-full object-cover" />
                                </div>
                                <div className="relative overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop" alt="Collaboration" className="w-full h-full object-cover" />
                                </div>
                                <div className="relative overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=400&fit=crop" alt="Achievement" className="w-full h-full object-cover" />
                                </div>
                                <div className="relative overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=400&fit=crop" alt="Success" className="w-full h-full object-cover" />
                                </div>
                            </>
                        )}
                        
                        {currentOrgIndex === 1 && (
                            <>
                                {[
                                    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=400&fit=crop",
                                    "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=400&h=400&fit=crop",
                                    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=400&fit=crop",
                                    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=400&fit=crop",
                                    "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=400&fit=crop",
                                    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=400&fit=crop",
                                    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop",
                                    "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400&h=400&fit=crop",
                                    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=400&fit=crop",
                                    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop",
                                    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=400&fit=crop",
                                    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=400&fit=crop"
                                ].map((src, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.8, y: 50 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        transition={{ 
                                            delay: i * 0.05,
                                            duration: 0.5,
                                            type: "spring",
                                            stiffness: 120
                                        }}
                                        className="relative overflow-hidden"
                                    >
                                        <motion.img 
                                            src={src}
                                            alt="Sports" 
                                            className="w-full h-full object-cover"
                                            whileHover={{ scale: 1.1, rotate: 2 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </motion.div>
                                ))}
                            </>
                        )}
                        
                        {currentOrgIndex === 2 && (
                            <>
                                {[
                                    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=400&fit=crop",
                                    "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=400&fit=crop",
                                    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=400&fit=crop",
                                    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop",
                                    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=400&fit=crop",
                                    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop",
                                    "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=400&fit=crop",
                                    "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=400&fit=crop",
                                    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=400&fit=crop",
                                    "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=400&h=400&fit=crop",
                                    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=400&fit=crop",
                                    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop"
                                ].map((src, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 1.2, rotate: 10 }}
                                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                        transition={{ 
                                            delay: i * 0.04,
                                            duration: 0.6,
                                            type: "spring",
                                            stiffness: 100
                                        }}
                                        className="relative overflow-hidden"
                                    >
                                        <motion.img 
                                            src={src}
                                            alt="Competition" 
                                            className="w-full h-full object-cover"
                                            whileHover={{ scale: 1.15, rotate: -2 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </motion.div>
                                ))}
                            </>
                        )}
                        
                        {currentOrgIndex === 3 && (
                            <>
                                {[
                                    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop",
                                    "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=400&fit=crop",
                                    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=400&fit=crop",
                                    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop",
                                    "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=400&fit=crop",
                                    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=400&fit=crop",
                                    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=400&fit=crop",
                                    "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=400&h=400&fit=crop",
                                    "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=400&fit=crop",
                                    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop",
                                    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=400&fit=crop",
                                    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=400&fit=crop"
                                ].map((src, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100, y: i % 3 === 0 ? -50 : 50 }}
                                        animate={{ opacity: 1, x: 0, y: 0 }}
                                        transition={{ 
                                            delay: i * 0.03,
                                            duration: 0.7,
                                            type: "spring",
                                            stiffness: 80
                                        }}
                                        className="relative overflow-hidden"
                                    >
                                        <motion.img 
                                            src={src}
                                            alt="Team" 
                                            className="w-full h-full object-cover"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </motion.div>
                                ))}
                            </>
                        )}
                    </motion.div>
                    
                    {/* Dark Overlay with Smooth Fade - Only for intro slide */}
                    {currentOrgIndex === 0 && (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="absolute inset-0 bg-black/70 z-5" 
                        />
                    )}
                    
                    {/* Big Title with Subtle Fade - Only for intro slide */}
                    {currentOrgIndex === 0 && (
                        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="text-6xl md:text-8xl lg:text-9xl font-bold text-white text-center leading-tight px-6"
                                style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}
                            >
                                ORGANIZATIONAL
                                <br />
                                EXPERIENCE
                            </motion.h2>
                        </div>
                    )}
                    
                    {/* Experience Info with Smooth Fade - Only for slides 1-3 */}
                    {currentOrgIndex > 0 && (
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-12"
                        >
                            <div className="max-w-7xl mx-auto">
                                <div className="flex items-end justify-between gap-8">
                                    <div className="flex-1">
                                        <motion.p
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.2, duration: 0.4 }}
                                            className="text-white/60 text-sm mb-2"
                                        >
                                            {organizationalExperience[currentOrgIndex - 1].period}
                                        </motion.p>
                                        <motion.h3
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.3, duration: 0.4 }}
                                            className="text-3xl md:text-5xl font-bold text-white mb-2"
                                        >
                                            {organizationalExperience[currentOrgIndex - 1].title}
                                        </motion.h3>
                                        <motion.p
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.4, duration: 0.4 }}
                                            className="text-white/80 text-lg"
                                        >
                                            {organizationalExperience[currentOrgIndex - 1].company}
                                        </motion.p>
                                    </div>
                                    
                                    {/* Counter with Subtle Fade */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.5, duration: 0.4 }}
                                        className="text-white/40 text-6xl font-bold"
                                    >
                                        {String(currentOrgIndex).padStart(2, '0')}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                    
                    {/* Navigation Buttons - Side */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 z-20 flex items-center justify-between px-8">
                        {/* Previous Button */}
                        <motion.button
                            whileHover={{ scale: 1.1, x: -5 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setCurrentOrgIndex((prev) => (prev === 0 ? organizationalExperience.length : prev - 1))}
                            className="w-16 h-16 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-xl transition-all"
                        >
                            <ArrowRight className="text-black rotate-180" size={28} />
                        </motion.button>
                        
                        {/* Next Button */}
                        <motion.button
                            whileHover={{ scale: 1.1, x: 5 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setCurrentOrgIndex((prev) => (prev === organizationalExperience.length ? 0 : prev + 1))}
                            className="w-16 h-16 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-xl transition-all"
                        >
                            <ArrowRight className="text-black" size={28} />
                        </motion.button>
                    </div>
                    
                    {/* Dots Indicator - Top Right (Vertical) - Total 4 dots (intro + 3 experiences) */}
                    <div className="absolute top-8 right-8 z-20 flex flex-col items-center gap-3">
                        {[...Array(organizationalExperience.length + 1)].map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentOrgIndex(index)}
                                className={`transition-all ${
                                    index === currentOrgIndex
                                        ? 'h-12 w-2 bg-white'
                                        : 'h-2 w-2 bg-white/40 hover:bg-white/60'
                                } rounded-full`}
                            />
                        ))}
                    </div>
                </section>
            )}


            {/* Certifications Section */}
            {certifications && certifications.length > 0 && (
                <section className="py-20 bg-white snap-start snap-always min-h-screen flex items-center">
                    <div className="container mx-auto px-6">
                        <StorySection
                            number="06"
                            title="Continuous Learning"
                            description="Professional certifications and achievements that validate my expertise"
                        />
                        
                        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            {certifications.map((cert, index) => (
                                <motion.div
                                    key={cert.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Sparkles className="text-blue-500" size={24} />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-start justify-between mb-3">
                                                <h3 className="text-xl font-bold text-gray-900">
                                                    {cert.name}
                                                </h3>
                                                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold">
                                                    {cert.year}
                                                </span>
                                            </div>
                                            <p className="text-blue-600 font-semibold mb-3">
                                                {cert.issuer}
                                            </p>
                                            <p className="text-gray-600 leading-relaxed">
                                                {cert.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Contact Section - Elegant & Minimal */}
            <section id="contact" className="py-32 bg-gradient-to-b from-white to-gray-50 snap-start snap-always min-h-screen">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-16"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", duration: 0.6 }}
                                className="inline-block mb-8"
                            >
                                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto">
                                    <Send className="text-white" size={32} />
                                </div>
                            </motion.div>
                            
                            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-black">
                                Let's Create
                            </h2>
                            <h3 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                                Something Great
                            </h3>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
                            </p>
                        </motion.div>

                        {/* Contact Info Cards */}
                        <div className="grid md:grid-cols-3 gap-6 mb-16">
                            <motion.a
                                href={`mailto:${contact.email}`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                whileHover={{ y: -5 }}
                                className="p-8 bg-white rounded-3xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-500 group"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                    className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100"
                                >
                                    <Mail className="text-blue-600" size={24} />
                                </motion.div>
                                <p className="text-sm text-gray-500 mb-1">Email</p>
                                <p className="font-semibold text-black">{contact.email}</p>
                            </motion.a>

                            <motion.a
                                href={`tel:${contact.phone}`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                whileHover={{ y: -5 }}
                                className="p-8 bg-white rounded-3xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-500 group"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                    className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100"
                                >
                                    <Phone className="text-blue-600" size={24} />
                                </motion.div>
                                <p className="text-sm text-gray-500 mb-1">Phone</p>
                                <p className="font-semibold text-black">{contact.phone}</p>
                            </motion.a>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                whileHover={{ y: -5 }}
                                className="p-8 bg-white rounded-3xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-500 group"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                    className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100"
                                >
                                    <MapPin className="text-blue-600" size={24} />
                                </motion.div>
                                <p className="text-sm text-gray-500 mb-1">Location</p>
                                <p className="font-semibold text-black">{contact.location}</p>
                            </motion.div>
                        </div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="flex justify-center gap-4 mb-16"
                        >
                            <motion.a
                                href={contact.social.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-14 h-14 bg-white rounded-full border border-gray-200 hover:border-blue-400 flex items-center justify-center hover:shadow-lg transition-all duration-300"
                            >
                                <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </motion.a>

                            <motion.a
                                href={contact.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-14 h-14 bg-white rounded-full border border-gray-200 hover:border-blue-400 flex items-center justify-center hover:shadow-lg transition-all duration-300"
                            >
                                <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </motion.a>

                            <motion.a
                                href={contact.social.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-14 h-14 bg-white rounded-full border border-gray-200 hover:border-blue-400 flex items-center justify-center hover:shadow-lg transition-all duration-300"
                            >
                                <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                            </motion.a>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.form
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            onSubmit={handleSubmit}
                            className="max-w-2xl mx-auto"
                        >
                            <div className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <motion.input
                                        whileFocus={{ scale: 1.02 }}
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                        placeholder="Your name"
                                        className="px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:border-blue-400 focus:outline-none transition-all text-black placeholder-gray-400"
                                    />
                                    <motion.input
                                        whileFocus={{ scale: 1.02 }}
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                        placeholder="your@email.com"
                                        className="px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:border-blue-400 focus:outline-none transition-all text-black placeholder-gray-400"
                                    />
                                </div>
                                <motion.textarea
                                    whileFocus={{ scale: 1.02 }}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                    rows={6}
                                    placeholder="Tell me about your project..."
                                    className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:border-blue-400 focus:outline-none transition-all resize-none text-black placeholder-gray-400"
                                />
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full px-8 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-blue-200 transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    Send Message
                                    <Send size={20} />
                                </motion.button>
                            </div>
                        </motion.form>
                    </div>
                </div>
            </section>

            {/* Footer - Minimal */}
            <footer className="py-12 bg-white border-t border-gray-100">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm">
                            © 2026 {hero.name}. Crafted with passion.
                        </p>
                        <div className="flex items-center gap-2 text-gray-400">
                            <Sparkles size={16} />
                            <span className="text-sm">Building the future, one line at a time</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
