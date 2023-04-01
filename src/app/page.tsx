"use client"
/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { InstagramLogo, TiktokLogo, WhatsappLogo, MapPin } from "@phosphor-icons/react";
import { useState } from "react";

import SocialMedias from "./components/SocialMedias";
import ProductLinks from "./components/ProductLinks";
import { ProductItems } from "../database/products"

export default function Home() {
  const [products] = useState(ProductItems)

  return (
    <main className="px-4 mb-10">
      <header
        className="flex flex-col justify-center items-center pt-10">
        <img
          src="/profile-icon.png"
          alt="profile image"
          className="h-40 w-40 rounded-full border-4 border-solid border-green-500" />
        <section className="mt-10 flex flex-col gap-2 text-center text-white">
          <div className="flex gap-2 items-center">
            <h3 className="text-2xl font-semibold">Giselle Ximenes </h3>
            <img className="h-7 w-7 " src="/verify.png" alt="" />
          </div>
          <div>
            <span className="flex text-lg justify-center gap-1"><MapPin size={28} color="#4ade80" /> Brasil</span>
          </div>
        </section>
      </header>
      <section className="flex gap-4 items-center justify-center pt-10">
        <SocialMedias href="https://www.instagram.com/giselle.saude.beleza/">
          <InstagramLogo size={28} color="#4ade80" />
        </SocialMedias>

        <SocialMedias href="https://wa.me/5599991436500">
          <WhatsappLogo size={28} color="#4ade80" />
        </SocialMedias>

        <SocialMedias href="https://www.tiktok.com/@gabriela_saude_beleza">
          <TiktokLogo size={28} color="#4ade80" />
        </SocialMedias>
      </section>

      <section className="flex flex-col gap-4 pt-10 w-full md:justify-center md:items-center">
        {products.map(product => (
          <ProductLinks
            key={product.id}
            productName={product.name}
            altImage={product.alt}
            srcImage={product.image}
            href={product.href}
          />
        ))}
      </section>
    </main>
  )
}