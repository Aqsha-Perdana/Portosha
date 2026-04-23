import { motion } from 'framer-motion';

export default function LoadingSpinner() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
            <motion.div
                animate={{
                    rotate: 360,
                }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: 'linear',
                }}
                className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
            />
        </div>
    );
}
