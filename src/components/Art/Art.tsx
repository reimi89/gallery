"use client"
import React from "react";
import { Playfair_Display } from "next/font/google";
import useArts from "@/Hooks/useArts";
import Image from "next/image";

const playfair = Playfair_Display({
    subsets: ['cyrillic'],
    weight: ['400', '500', '700'],
    variable: "--font-playfair",
});

const Art = () => {
    const getArt = useArts();
    return (
        <section className="">

        </section>
    )
}

export default Art;