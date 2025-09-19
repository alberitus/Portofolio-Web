'use client';

import Lanyard from "./Lanyard/Lanyard";
import AnimatedContent from "./AnimatedContent/AnimatedContent";
import { TypeAnimation } from 'react-type-animation';
import SplitText from "./SplitText/SplitText";
import BlurText from "./BlurText/BlurText";
import GradientText from "./GradientText/GradientText";

export default function HeroSection() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 px-4 md:px-12 py-8 items-center">
            {/* Lanyard: sembunyikan di mobile, tampil di medium ke atas */}
            <div className="hidden md:block md:col-span-6">
                <Lanyard position={[0, 0, 14]} gravity={[0, -40, 0]} />
            </div>

            {/* Konten teks */}
            <div className="col-span-1 md:col-span-6">
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-2">
                        <AnimatedContent
                        distance={150}
                        direction="horizontal"
                        reverse={false}
                        duration={1.2}
                        initialOpacity={0.2}
                        animateOpacity
                        scale={1.1}
                        threshold={0.2}
                        delay={0.3}
                        >
                        <TypeAnimation
                            preRenderFirstString={true}
                            sequence={[
                            500,
                            "I'm Ready For Job Web Development",
                            1000,
                            "I'm Ready For Job Web Programming",
                            500,
                            ]}
                            speed={40}
                            style={{ fontSize: '1.5em' }}
                            repeat={Infinity}
                            className="text-xl md:text-2xl text-white font-bold typewriter-cursor"
                        />
                        </AnimatedContent>
                    </div>

                    <div className="flex flex-col items-start">
                        <SplitText
                        text="Hello, I'm Alberitus"
                        className="text-4xl md:text-6xl font-semibold text-start text-[#66FCF1]"
                        delay={150}
                        duration={0.6}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                        />
                    </div>

                    <BlurText
                        text={`I am a freelance web programmer and developer, specializing in building modern, responsive, and user-friendly websites and web applications. With hands-on experience in various technologies, I help businesses and individuals bring their ideas to life on the web.\n\nIn addition to my freelance work, I also work full-time as an IT staff focusing on web development at a private company, where I contribute to the development, maintenance, and improvement of internal web-based systems.\n\nMy dual role allows me to stay up-to-date with both client-oriented and enterprise-grade projects, ensuring my skills remain sharp and adaptive to different scopes of work.`}
                        delay={75}
                        animateBy="words"
                        direction="top"
                        className="text-base md:text-xl mb-2 text-[#C5C6C7]"
                    />
                    <div className="w-full sm:w-auto">
                        <GradientText
                        colors={["#66FCF1", "#48a1dc", "#66FCF1"]}
                        animationSpeed={3}
                        showBorder={false}
                        className="w-full text-center px-6 py-3 rounded-lg border text-base md:text-lg font-bold hover:bg-[#66FCF1] hover:text-[#0B0C10] transition"
                        href="https://drive.google.com/file/d/1zXViwl8rldJg2fUQqkcT4j1bjlCZGJnI/view?usp=sharing"
                        >
                        Download My CV
                        </GradientText>
                    </div>
                </div>
            </div>
        </div>
    );
}
