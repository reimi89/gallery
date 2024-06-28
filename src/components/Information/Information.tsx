"use client"
import { Playfair_Display } from "next/font/google";
import React from "react";
import useArts from "@/Hooks/useArts";
import Image from "next/image";

const playfair = Playfair_Display({
    subsets: ['cyrillic'],
    weight: ['400', '500', '700'],
    variable: "--font-playfair",
});

interface Art {
    id: number;
    attributes: {
      title: string;
      tag: string;
      image: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
    };
  }

const Information = () => {
    const getArt = useArts();
    return (
        <>
        <section>
            <div className="container mx-auto">
                <div className="w-full px-[240px]">
                    <p className="text-2xl w-[900px] font-medium text-center my-7">Добро пожаловать в нашу уникальную галерею, специализирующуюся на продаже аниме артов! Здесь вы найдете широкий выбор произведений искусства, созданных талантливыми художниками в стиле японской анимации. Мы предлагаем оригинальные работы, лимитированные выпуски и репродукции известных персонажей из популярных аниме сериалов и фильмов.</p>
                </div>
                
                <div className="tab ">
                    
                    <input defaultChecked id="tab-btn-1" name="tab-btn" type="radio" value="" />
                    <label htmlFor="tab-btn-1">Все</label>
                    <input id="tab-btn-2" name="tab-btn" type="radio" value="" />
                    <label htmlFor="tab-btn-2">Эльфы</label>
                    <input id="tab-btn-3" name="tab-btn" type="radio" value="" />
                    <label htmlFor="tab-btn-3">Альт</label>
                    <input id="tab-btn-4" name="tab-btn" type="radio" value="" />
                    <label htmlFor="tab-btn-4">Фурри</label>
                    <input id="tab-btn-5" name="tab-btn" type="radio" value="" />
                    <label htmlFor="tab-btn-5">КММ</label>
                    <input id="tab-btn-6" name="tab-btn" type="radio" value="" />
                    <label htmlFor="tab-btn-6">Суккубы</label>
                    
                    <div className="tab-content" id="content-1">
                        <div className="grid grid-cols-3 ">
                            {getArt.map((item: Art, index) => (
                            <div key={index}>
                                <div className="relative">
                                    <Image width={427} height={427} src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (item?.attributes?.image?.data.attributes?.url ?? '')} alt="alt1"
                                    className="mt-10 rounded-br-[30px] hover:brightness-50 transition-all delay-100 duration-300 cursor-pointer"/>
                                    <div className={playfair.className + ' font-medium text-black mt-1 text-2xl' }>{item.attributes?.title}</div>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                    <div className="tab-content" id="content-2">
                        <div className="grid grid-cols-3">
                            {getArt.filter((item: Art) => item.attributes.tag === 'эльф').map((item: Art, index) => (
                            <div key={index}>
                                <Image  width={427} height={427} src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (item as Art)?.attributes?.image?.data.attributes?.url ?? ''} alt="alt2"
                                className="mt-10 rounded-br-[30px] hover:brightness-50 transition-all delay-100 duration-300 cursor-pointer"/>
                                <div className={playfair.className + ' font-medium text-black mt-1 text-2xl' }>{item.attributes?.title}</div>
                            </div>
                            ))}
                        </div>
                    </div>
                    <div className="tab-content" id="content-3">
                        <div className="grid grid-cols-3">
                            {getArt.filter((item: Art) => item.attributes.tag === 'альт').map((item: Art, index) => (
                            <div key={index}>
                                <Image  width={427} height={427} src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (item?.attributes?.image?.data.attributes?.url ?? '')} alt="alt3"
                                className="mt-10 rounded-br-[30px] hover:brightness-50 transition-all delay-100 duration-300 cursor-pointer"/>
                                <div className={playfair.className + ' font-medium text-black mt-1 text-2xl' }>{item.attributes?.title}</div>
                            </div>
                            ))}
                        </div>
                    </div>
                    <div className="tab-content" id="content-4">
                        <div className="grid grid-cols-3">
                            {getArt.filter((item: Art) => item.attributes.tag === 'фурри').map((item: Art, index) => (
                            <div key={index}>
                                <Image  width={427} height={427} src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (item?.attributes?.image?.data.attributes?.url ?? '')} alt="alt4"
                                className="mt-10 rounded-br-[30px] hover:brightness-50 transition-all delay-100 duration-300 cursor-pointer"/>
                                <div className={playfair.className + ' font-medium text-black mt-1 text-2xl' }>{item.attributes?.title}</div>
                            </div>
                            ))}
                        </div>
                    </div>
                    <div className="tab-content" id="content-5">
                        <div className="grid grid-cols-3">
                            {getArt.filter((item: Art) => item.attributes.tag === 'кмм').map((item: Art, index) => (
                            <div key={index}>
                                <Image  width={427} height={427} src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (item?.attributes?.image?.data.attributes?.url ?? '')} alt="alt5"
                                className="mt-10 rounded-br-[30px] hover:brightness-50 transition-all delay-100 duration-300 cursor-pointer"/>
                                <div className={playfair.className + ' font-medium text-black mt-1 text-2xl' }>{item.attributes?.title}</div>
                            </div>
                            ))}
                        </div>
                    </div>
                    <div className="tab-content" id="content-6">
                        <div className="grid grid-cols-3">
                            {getArt.filter((item: Art) => item.attributes.tag === 'суккуб').map((item: Art, index) => (
                            <div key={index}>
                                <Image  width={427} height={427} src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (item?.attributes?.image?.data.attributes?.url ?? '')} alt="alt6"
                                className="mt-10 rounded-br-[30px] hover:brightness-50 transition-all delay-100 duration-300 cursor-pointer"/>
                                <div className={playfair.className + ' font-medium text-black mt-1 text-2xl' }>{item.attributes?.title}</div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}

export default Information;