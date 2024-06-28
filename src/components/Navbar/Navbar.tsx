'use client'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Almendra_SC, Alumni_Sans } from 'next/font/google';

const almendra = Almendra_SC({ 
    subsets: ["latin"],
    weight: ['400'],
    variable: '--font-almendra-sc'
});

const alumni = Alumni_Sans({ 
    subsets: ["cyrillic"],
    weight: ['300', '400', '500', '700'],
    variable: '--font-alumni-sans'
  });

const Navbar = () => {
    return (
        <nav className={almendra.className}>
            <menu className='w-full h-[55px] bg-nav mx-auto px-4 py-2 sm:px-6'>
                <div className='flex container '>
                    <Link href='/'>
                        <h2 className="text-text text-4xl">
                            MyGallery
                        </h2>
                    </Link>
                </div>
            </menu>
        </nav>
    )
}

export default Navbar