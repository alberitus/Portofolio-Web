'use client';

import { AnimatedTooltip } from "./components/ui/animated-tooltip";
import { motion } from "framer-motion";

export default function SkillsSection({ people }: { people: any[] }) {
    return (
        <section id="skills" className="my-20 px-4 md:px-10 lg:px-20">
            <motion.h2
                className="text-3xl md:text-4xl font-bold text-center text-white mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Skills
            </motion.h2>
            <div className="flex items-center justify-center w-full">
                <AnimatedTooltip items={people} />
            </div>
            </section>
    );
}
