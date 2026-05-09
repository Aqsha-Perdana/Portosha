import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink, CheckCircle2, Globe } from 'lucide-react';
import { Link } from '@inertiajs/react';
import { useState } from 'react';

interface ProjectDetailProps {
    project: {
        id: string;
        title: string;
        description: string;
        fullDescription: string;
        technologies: string[];
        year: string;
        company: string;
        impact: string[];
        websiteUrl: string | null;
        screenshots?: string[];
    };
}

// Browser Mockup Carousel Component
const BrowserMockup = ({ screenshots, title, gradient }: { screenshots?: string[]; title: string; gradient: string }) => {
    const [current, setCurrent] = useState(0);
    const hasScreenshots = screenshots && screenshots.length > 0;
    const total = hasScreenshots ? screenshots.length : 1;

    const prev = () => setCurrent(i => (i - 1 + total) % total);
    const next = () => setCurrent(i => (i + 1) % total);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative w-full max-w-4xl mx-auto"
            style={{ perspective: '1200px' }}
        >
            <motion.div
                initial={{ rotateX: 8 }}
                whileInView={{ rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200"
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Browser Chrome */}
                <div className="bg-gray-100 px-4 py-3 flex items-center gap-3 border-b border-gray-200">
                    <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-1 bg-white rounded-md px-3 py-1.5 flex items-center gap-2 border border-gray-200">
                        <Globe size={12} className="text-gray-400" />
                        <span className="text-xs text-gray-500 truncate">{title.toLowerCase().replace(/\s+/g, '-')}.app</span>
                    </div>
                    {/* Slide counter */}
                    {total > 1 && (
                        <span className="text-xs text-gray-400 font-mono">{current + 1} / {total}</span>
                    )}
                </div>

                {/* Screen Content - Carousel */}
                <div className="relative overflow-hidden" style={{ height: '480px' }}>
                    <AnimatePresence mode="wait">
                        {hasScreenshots ? (
                            <motion.img
                                key={current}
                                src={screenshots[current]}
                                alt={`${title} screenshot ${current + 1}`}
                                initial={{ opacity: 0, x: 40 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -40 }}
                                transition={{ duration: 0.35, ease: 'easeInOut' }}
                                className="w-full h-full object-cover object-top absolute inset-0"
                            />
                        ) : (
                            <motion.div
                                key="placeholder"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="w-full h-full flex flex-col items-center justify-center absolute inset-0"
                                style={{ background: gradient }}
                            >
                                {/* Fake UI skeleton */}
                                <div className="w-full h-full p-8 flex flex-col gap-4 opacity-30">
                                    <div className="flex items-center justify-between">
                                        <div className="h-4 w-24 bg-white/60 rounded" />
                                        <div className="flex gap-3">
                                            <div className="h-4 w-12 bg-white/40 rounded" />
                                            <div className="h-4 w-12 bg-white/40 rounded" />
                                            <div className="h-4 w-12 bg-white/40 rounded" />
                                        </div>
                                    </div>
                                    <div className="flex-1 flex flex-col items-center justify-center gap-4 mt-8">
                                        <div className="h-8 w-64 bg-white/60 rounded-lg" />
                                        <div className="h-4 w-96 bg-white/40 rounded" />
                                        <div className="h-4 w-80 bg-white/40 rounded" />
                                        <div className="h-10 w-32 bg-white/60 rounded-full mt-4" />
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 mt-4">
                                        {[1,2,3].map(i => (
                                            <div key={i} className="h-24 bg-white/20 rounded-xl" />
                                        ))}
                                    </div>
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center text-white">
                                        <div className="text-5xl mb-3 opacity-60">🖥️</div>
                                        <p className="text-sm font-medium opacity-60">Screenshot coming soon</p>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Arrow Buttons - only show if multiple screenshots */}
                    {total > 1 && (
                        <>
                            <motion.button
                                onClick={prev}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center border border-gray-200 hover:bg-white transition-colors"
                            >
                                <ArrowLeft size={18} className="text-gray-700" />
                            </motion.button>
                            <motion.button
                                onClick={next}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center border border-gray-200 hover:bg-white transition-colors"
                            >
                                <ArrowRight size={18} className="text-gray-700" />
                            </motion.button>
                        </>
                    )}
                </div>

                {/* Dot Indicators */}
                {total > 1 && (
                    <div className="bg-gray-50 border-t border-gray-200 py-3 flex items-center justify-center gap-2">
                        {Array.from({ length: total }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`rounded-full transition-all duration-300 ${
                                    i === current
                                        ? 'w-6 h-2 bg-gray-700'
                                        : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                                }`}
                            />
                        ))}
                    </div>
                )}
            </motion.div>

            {/* Subtle reflection */}
            <div
                className="absolute -bottom-6 left-4 right-4 h-12 rounded-2xl blur-xl opacity-20"
                style={{ background: gradient }}
            />
        </motion.div>
    );
};

// Get gradient per project based on tech stack
const getProjectGradient = (technologies: string[]) => {
    if (technologies.includes('Next.js') || technologies.includes('AI Integration')) {
        return 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    }
    if (technologies.includes('Laravel') && technologies.includes('MySQL')) {
        return 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';
    }
    if (technologies.includes('Python') || technologies.includes('n8n')) {
        return 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)';
    }
    if (technologies.includes('Payment Gateway')) {
        return 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)';
    }
    return 'linear-gradient(135deg, #0076E2 0%, #4da6ff 100%)';
};

export default function ProjectDetail({ project }: ProjectDetailProps) {
    const gradient = getProjectGradient(project.technologies);

    return (
        <div className="min-h-screen bg-white text-black">
            {/* Fixed Header */}
            <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <div className="container mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
                    <Link href="/#projects">
                        <motion.button
                            whileHover={{ x: -2 }}
                            className="flex items-center gap-2 text-gray-500 hover:text-black transition-colors text-sm font-medium"
                        >
                            <ArrowLeft size={18} />
                            <span>Back to Projects</span>
                        </motion.button>
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-28 pb-16">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-5"
                        >
                            {/* Meta */}
                            <div className="flex items-center gap-3 text-sm text-gray-400">
                                <span>{project.year}</span>
                                <span>·</span>
                                <span>{project.company}</span>
                            </div>

                            {/* Title */}
                            <h1 className="text-5xl md:text-7xl font-bold text-black leading-tight">
                                {project.title}
                            </h1>

                            {/* Description */}
                            <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-3xl">
                                {project.description}
                            </p>

                            {/* CTA */}
                            {project.websiteUrl && (
                                <motion.a
                                    href={project.websiteUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full text-sm font-medium"
                                >
                                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                    Visit Website
                                    <ExternalLink size={14} />
                                </motion.a>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Browser Mockup Section */}
            <section className="py-12 px-6 md:px-12">
                <div className="max-w-5xl mx-auto">
                    <BrowserMockup
                        screenshots={project.screenshots}
                        title={project.title}
                        gradient={gradient}
                    />

                    {/* No more separate grid - all handled inside carousel */}
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-20 border-t border-gray-100">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="grid md:grid-cols-12 gap-12"
                        >
                            <div className="md:col-span-3">
                                <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                                    Overview
                                </h2>
                            </div>
                            <div className="md:col-span-9">
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    {project.fullDescription}
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="py-20 border-t border-gray-100 bg-gray-50">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="grid md:grid-cols-12 gap-12"
                        >
                            <div className="md:col-span-3">
                                <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                                    Tech Stack
                                </h2>
                            </div>
                            <div className="md:col-span-9">
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, index) => (
                                        <motion.span
                                            key={tech}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.05 }}
                                            className="px-4 py-2 bg-white text-gray-700 text-sm font-medium rounded-lg border border-gray-200"
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Impact Section */}
            <section className="py-20 border-t border-gray-100">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="grid md:grid-cols-12 gap-12"
                        >
                            <div className="md:col-span-3">
                                <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                                    Impact
                                </h2>
                            </div>
                            <div className="md:col-span-9">
                                <div className="space-y-4">
                                    {project.impact.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex items-start gap-3"
                                        >
                                            <CheckCircle2
                                                size={20}
                                                className="text-blue-600 flex-shrink-0 mt-0.5"
                                            />
                                            <p className="text-gray-700 leading-relaxed">{item}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 border-t border-gray-100 bg-gray-50">
                <div className="container mx-auto px-6 md:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto text-center space-y-6"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-black">
                            Interested in this project?
                        </h2>
                        <p className="text-lg text-gray-500">
                            Let's discuss how we can work together
                        </p>
                        <Link href="/#contact">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-900 transition-colors"
                            >
                                Get in Touch
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 border-t border-gray-100">
                <div className="container mx-auto px-6 md:px-12">
                    <p className="text-sm text-gray-400 text-center">
                        © 2026 Muhammad Aqsha Perdana Detfi
                    </p>
                </div>
            </footer>
        </div>
    );
}
