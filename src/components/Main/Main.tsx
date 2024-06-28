'use client'
import { Almendra_SC } from 'next/font/google';
import Image from 'next/image'
import React from 'react'

const almendra = Almendra_SC({ 
    subsets: ["latin"],
    weight: ['400'],
    variable: '--font-almendra-sc'
});

const Main = () => {
    return (
        <section className='w-full bg-hero h-screen bg-center bg-no-repeat pt-[370px]'>
            <div className='container mx-auto'>
                <div className={almendra.className}>
                    <h1 className='text-text text-5xl'>MyGallery</h1>
                    <p className="text-text text-4xl border-b w-[500px]">Искусство становится ближе</p>
                </div>
            </div>
        </section>
        
    )
}

export default Main