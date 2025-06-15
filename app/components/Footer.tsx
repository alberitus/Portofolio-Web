'use client';

import CircularText from "./CircularText/CircularText";
import ContactForm from "./ContactForm";

export default function Footer() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="custom-class">
                <CircularText
                    text="THANK*YOU*"
                    onHover="speedUp"
                    spinDuration={20}
                    className="custom-class"
                />
            </div>
            <div className="w-full md:w-1/2">
                <ContactForm />
            </div>
        </div>
    );
}
