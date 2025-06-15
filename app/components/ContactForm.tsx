"use client";

import React, { useRef } from "react";
import emailjs, { EmailJSResponseStatus } from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";

import { Label } from '@/components/ui/label';
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

import { IconMail } from "@tabler/icons-react";

const LabelInputContainer = ({
    children,
    className,
    }: {
    children: React.ReactNode;
    className?: string;
    }) => {
    return (
        <div className={cn("flex w-full flex-col space-y-2", className)}>
        {children}
        </div>
    );
};

export default function ContactForm() {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.current) return;

        toast.promise(
        emailjs.sendForm(
            "service_qq314qq",
            "template_y2e58hq",
            form.current,
            "7RuvFzCq5Hsp-ED8i"
        ),
        {
            loading: "Mengirim...",
            success: () => {
            form.current?.reset();
            return "Email berhasil dikirim!";
            },
            error: "Gagal mengirim email.",
        }
        );
    };

    return (
        <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
        <Toaster position="top-center" />
        <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
            Contact
        </h2>
        <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
            Send me your message via this form.
        </p>

        <form ref={form} onSubmit={sendEmail} className="my-8">
            <LabelInputContainer className="mb-4">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="Your Name" type="text" required />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" placeholder="you@example.com" type="email" required />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
            <Label htmlFor="title">Subject</Label>
            <Input id="title" name="title" placeholder="Title" type="text" required />
            </LabelInputContainer>
            <LabelInputContainer className="mb-8">
            <Label htmlFor="message">Message</Label>
            <textarea
                id="message"
                name="message"
                placeholder="Your message"
                required
                className="min-h-[100px] rounded-md border border-neutral-300 bg-transparent px-3 py-2 text-sm text-black dark:text-white dark:border-neutral-600"
            />
            </LabelInputContainer>

            <button
                className="group/btn relative flex items-center justify-center space-x-2 h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white dark:bg-zinc-800"
                type="submit"
                >
                <IconMail className="h-4 w-4 text-white" />
                <span>Send</span>
                <BottomGradient />
            </button>
        </form>
        </div>
    );
}

const BottomGradient = () => (
    <>
        <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
        <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
);
