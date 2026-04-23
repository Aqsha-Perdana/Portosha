import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, CheckCircle2 } from 'lucide-react';
import { Link } from '@inertiajs/react';

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
    };
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
    return (
        <div className="min-h-screen bg-white text-black">
            {/* Fixed Header */}
            <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-100">
                <div className="container mx-auto px-6 md:px-12 py-5">
                    <Link href="/#projects">
                        <motion.button
                            whileHover={{ x: -2 }}
                            className="flex items-center gap-2 text-gray-500 hover:text-black transition-colors text-sm font-medium"
                        >
                            <ArrowLeft size={18} />
                            <span>Back</span>
                        </motion.button>
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            {/* Meta */}
                            <div className="flex items-center gap-3 text-sm text-gray-500">
                                <span>{project.year}</span>
                                <span>•</span>
                                <span>{project.company}</span>
                            </div>

                            {/* Title */}
                            <h1 className="text-5xl md:text-7xl font-bold text-black leading-tight">
                                {project.title}
                            </h1>

                            {/* Description */}
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">
                                {project.description}
                            </p>

                            {/* CTA */}
                            {project.websiteUrl && (
                                <div className="pt-4">
                                    <motion.a
                                        href={project.websiteUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-900 transition-colors"
                                    >
                                        Lihat Website
                                        <ExternalLink size={16} />
                                    </motion.a>
                                </div>
                            )}
                        </motion.div>
                    </div>
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
                            {/* Label */}
                            <div className="md:col-span-3">
                                <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                                    Overview
                                </h2>
                            </div>

                            {/* Content */}
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
                            {/* Label */}
                            <div className="md:col-span-3">
                                <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                                    Tech Stack
                                </h2>
                            </div>

                            {/* Content */}
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
                            {/* Label */}
                            <div className="md:col-span-3">
                                <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                                    Impact
                                </h2>
                            </div>

                            {/* Content */}
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
                                            <p className="text-gray-700 leading-relaxed">
                                                {item}
                                            </p>
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
                        
                        <p className="text-lg text-gray-600">
                            Let's discuss how we can work together
                        </p>
                        
                        <div className="pt-2">
                            <Link href="/#contact">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="px-8 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-900 transition-colors"
                                >
                                    Get in Touch
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 border-t border-gray-100">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="max-w-5xl mx-auto">
                        <p className="text-sm text-gray-500 text-center">
                            © 2026 Muhammad Aqsha Perdana Detfi
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
