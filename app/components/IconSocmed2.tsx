'use client';

import { IconMail  } from '@tabler/icons-react';

export default function IconSocmed2() {
    return (
        <div className="fixed bottom-4 right-4 z-50 flex space-x-4">
        {/* Email */}
        <a
            href="mailto:alberitus.business@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
        >
            <IconMail className="h-6 w-6 text-white hover:text-[#66FCF1] transition-colors duration-300" />
        </a>

        {/* Instagram */}
        <a
            href="https://www.instagram.com/alberitus"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#66FCF1] transition-colors duration-300"
        >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-instagram"
            viewBox="0 0 16 16"
            >
            <path d="M8 0C5.75 0 5.5 0 4.64.05c-.86.04-1.45.18-1.95.38a3.9 3.9 0 0 0-1.4.9A3.9 3.9 0 0 0 .43 2.7c-.2.5-.34 1.09-.38 1.95C0 5.5 0 5.75 0 8s0 2.5.05 3.36c.04.86.18 1.45.38 1.95.18.45.42.85.74 1.2a3.9 3.9 0 0 0 1.4.9c.5.2 1.09.34 1.95.38C5.5 16 5.75 16 8 16s2.5 0 3.36-.05c.86-.04 1.45-.18 1.95-.38a3.9 3.9 0 0 0 1.4-.9 3.9 3.9 0 0 0 .9-1.4c.2-.5.34-1.09.38-1.95C16 10.5 16 10.25 16 8s0-2.5-.05-3.36c-.04-.86-.18-1.45-.38-1.95a3.9 3.9 0 0 0-.9-1.4 3.9 3.9 0 0 0-1.4-.9c-.5-.2-1.09-.34-1.95-.38C10.5 0 10.25 0 8 0zm0 1.43c2.22 0 2.47 0 3.34.05.77.04 1.19.17 1.47.29.37.15.64.33.92.61.28.28.46.55.61.92.12.28.25.7.29 1.47.05.87.05 1.12.05 3.34s0 2.47-.05 3.34c-.04.77-.17 1.19-.29 1.47a2.46 2.46 0 0 1-.61.92 2.46 2.46 0 0 1-.92.61c-.28.12-.7.25-1.47.29-.87.05-1.12.05-3.34.05s-2.47 0-3.34-.05c-.77-.04-1.19-.17-1.47-.29a2.46 2.46 0 0 1-.92-.61 2.46 2.46 0 0 1-.61-.92c-.12-.28-.25-.7-.29-1.47C1.43 10.47 1.43 10.22 1.43 8s0-2.47.05-3.34c.04-.77.17-1.19.29-1.47a2.46 2.46 0 0 1 .61-.92 2.46 2.46 0 0 1 .92-.61c.28-.12.7-.25 1.47-.29C5.53 1.43 5.78 1.43 8 1.43z" />
            <path d="M8 3.91A4.09 4.09 0 1 0 8 12.09 4.09 4.09 0 0 0 8 3.91zm0 6.75a2.66 2.66 0 1 1 0-5.33 2.66 2.66 0 0 1 0 5.33zM12.33 3.67a.96.96 0 1 1-1.91 0 .96.96 0 0 1 1.91 0z" />
            </svg>
        </a>

        {/* LinkedIn */}
        <a
            href="https://www.linkedin.com/in/alberitus"
            target="_blank"
            rel="noopener noreferrer"
        >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white hover:text-[#66FCF1] transition-colors duration-300"
            fill="currentColor"
            viewBox="0 0 24 24"
            >
            <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 24h4V7H.5v17zM8 7h3.66v2.56h.05c.51-.96 1.76-1.96 3.63-1.96 3.88 0 4.6 2.55 4.6 5.86V24h-4v-8.36c0-1.99-.04-4.56-2.78-4.56-2.78 0-3.2 2.17-3.2 4.42V24h-4V7z" />
            </svg>
        </a>
        </div>
    );
}
