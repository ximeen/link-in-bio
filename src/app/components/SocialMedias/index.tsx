"use client"
import { InstagramLogo, TiktokLogo, WhatsappLogo } from "@phosphor-icons/react";

export default function SocialMedias() {
  return (
    <section className="flex gap-4 items-center justify-center pt-10">
      <a
        target={"_blank"}
        href="https://www.instagram.com/giselle.saude.beleza/"
        className="p-2 bg-zinc-800 rounded-md transition-all duration-150 hover:bg-zinc-700">
        <InstagramLogo size={32} color="#4ade80" />
      </a>
      <a
        target={"_blank"}
        href="https://wa.me/5599991436500"
        className="p-2 bg-zinc-800 rounded-md transition-all duration-150 hover:bg-zinc-700 "
      >
        <WhatsappLogo size={32} color="#4ade80" />
      </a>
      <a
        target={"_blank"}
        href="https://www.tiktok.com/@gabriela_saude_beleza"
        className="p-2 bg-zinc-800 rounded-md transition-all duration-150 hover:bg-zinc-700 "
      >
        <TiktokLogo size={32} color="#4ade80" />
      </a>



    </section>
  )
}