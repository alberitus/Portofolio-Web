'use client';


import Lanyard from "./Lanyard/Lanyard";
import AnimatedContent from "./AnimatedContent/AnimatedContent";
import { TypeAnimation } from 'react-type-animation';
import SplitText from "./SplitText/SplitText";
import BlurText from "./BlurText/BlurText";
import GradientText from "./GradientText/GradientText";


export default function HeroSection() {
  return (
    <div className=" grid grid-cols-12">
        <div className="col-span-6">
            <Lanyard position={[0, 0, 14]} gravity={[0, -40, 0]} />
        </div>
        <div className="col-span-6">
            <div className="flex items-center h-full">
            <div className="flex flex-col gap-6">
                <div className="flex item-center gap-2">
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
                    "I'm Ready For Job Web Programing",
                    500,
                    ]}
                    speed={40}
                    style={{ fontSize: '2em' }}
                    repeat={Infinity}
                    className="text-2xl text-white font-bold typewriter-cursor"
                />
                </AnimatedContent>
                </div>
                <div className="flex flex-col items-start">
                    <SplitText
                        text="Hello, I'm Alberitus"
                        className="text-6xl font-semibold text-start text-[#66FCF1]"
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
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum pretium quam iaculis malesuada.
                    Nullam congue vel ligula lacinia tempus."
                    delay={75}
                    animateBy="words"
                    direction="top"
                    className="text-xl mb-8"
                />
                <div className="flex items-center">
                    <GradientText
                        colors={["#66FCF1", "#48a1dc", "#66FCF1"]}
                        animationSpeed={3}
                        showBorder={false}
                        className="px-6 py-4 rounded-lg border text-xl font-bold mr-4"
                        href="mailto:alberitus.business@gmail.com?subject=Hello%20Alberitus&body=Halo%20saya%20ingin%20menghubungi%20Anda."
                    >
                    Email
                    </GradientText>
                    <GradientText
                        colors={["#66FCF1", "#48a1dc", "#66FCF1"]}
                        animationSpeed={3}
                        showBorder={false}
                        className="px-6 py-4 rounded-lg border text-xl font-bold"
                        href="https://wa.me/6285752544386?text=Halo%20Alberitus%2C%20saya%20ingin%20bertanya"
                    >
                    Contact
                    </GradientText>
                </div>
            </div>
            </div>
        </div>
    </div>
    );
}
