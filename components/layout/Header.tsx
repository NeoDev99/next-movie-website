"use client";

import React from 'react';
import Link from 'next/link';
import LogoIcon from "@/public/assets/logo.svg";
import MenuIcon from "@/public/assets/icons/icon-menu.svg";

import { Button } from "@/components/ui/Button";

const Header = () => {
  return (
    <header className='py-4 border-b border-white/15 md:border-none sticky top-0 z-10'>
        <div className='absolute inset-0 backdrop-blur -z-10 md:hidden'></div>
        <div className='container'>
            <div className='flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto md:backdrop-blur relative'>
                <div className='absolute inset-0 backdrop-blur -z-10 hidden md:block'></div>

                <div className='flex items-center space-x-2'>
                    <div className='border w-10 h-10 rounded-lg flex justify-center items-center border-white/15'>
                        <LogoIcon className="w-8 h-8" aria-label="Logo" />
                    </div>
                    <Link href="#" className="text-xl font-bold" prefetch={false}>
                        vi0
                    </Link>
                </div>

                <div className='hidden md:block'>
                    <nav className='flex gap-8 text-sm'>
                        <a href="#" className='text-white/70 hover:text-white transition'>
                            Home
                        </a>
                        <a href="#" className='text-white/70 hover:text-white transition'>
                            Movies
                        </a>
                        <a href="#" className='text-white/70 hover:text-white transition'>
                            About
                        </a>
                        <a href="#" className='text-white/70 hover:text-white transition'>
                            Contact
                        </a>
                    </nav>
                </div>

                <div className='flex gap-4 items-center'>
                    <Button>Sign In</Button>
                    <MenuIcon className='md:hidden' aria-label="Menu" />
                </div>
            </div>
        </div>
    </header>
  );
};

export default Header;