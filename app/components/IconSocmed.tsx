'use client';

import { IconBrandGithub } from '@tabler/icons-react';

export default function IconSocmed() {
    return (
        <div className="fixed bottom-4 left-4 z-50 flex space-x-4">
        {/* GitHub */}
        <a
            href="https://github.com/alberitus"
            target="_blank"
            rel="noopener noreferrer"
        >
            <IconBrandGithub className="h-6 w-6 text-white hover:text-[#66FCF1] transition-colors duration-300" />
        </a>
        </div>
    );
}
