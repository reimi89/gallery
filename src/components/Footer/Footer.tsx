"use client"
import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Almendra_SC, Alumni_Sans } from 'next/font/google';

const almendra = Almendra_SC({ 
    subsets: ["latin"],
    weight: ['400'],
    variable: '--font-almendra-sc'
});

const Footer = () => {
    return (
        <footer className={almendra.className + " w-full h-[45px] bg-nav mx-auto px-4 py-1 sm:px-6"}>
            <div className='flex container mx-auto'>
                    <Link href='/'>
                        <h2 className="text-text text-4xl">
                            MyGallery
                        </h2>
                    </Link>
                    <ul className='w-full flex justify-end gap-x-4'>
                        <li>
                            <Link href='/' className=''>
                                <Image className="cursor-pointer " width={40} height={40} alt='telegram' src='/assets/img/bxl-telegram.svg'></Image>
                            </Link>
                        </li>
                        <li>
                            <Link href='/' className=''>
                                <Image className="cursor-pointer " width={40} height={40} alt='vk' src='/assets/img/bxl-vk.svg'></Image>
                            </Link>
                        </li>
                        <li>
                            <Link href='/' className=''>
                                <Image className="cursor-pointer " width={40} height={40} alt='instagram' src='/assets/img/bxl-instagram-alt.svg'></Image>
                            </Link>
                        </li>
                    </ul>
                </div>
        </footer>
    )
}

export default Footer;