/* eslint-disable @next/next/no-img-element */
"use client"
import { WhatsappLogo } from "@phosphor-icons/react";

export default function ProductLinks() {
  return (
    <section className="flex flex-col gap-4 pt-10 w-full md:justify-center md:items-center">
      <a
        target={"_blank"}
        href="https://wa.me/5599991436500?text=Olá%20tenho%20interesse%20no%20LiftDetox"
        className="flex p-2 bg-zinc-800 text-white rounded-md items-center justify-between md:w-1/2 lg:w-1/3 transition-all duration-150 hover:bg-zinc-700">
        <img
          className="w-12 h-12 rounded-md"
          src="/lift-detox.jpg"
          alt="product lift detox" />
        Lift Detox
        <WhatsappLogo size={28} color="#4ade80" />
      </a>

      <a
        target={"_blank"}
        href="https://wa.me/5599991436500?text=Olá%20tenho%20interesse%20no%20Reveravit"
        className="flex p-2 bg-zinc-800 text-white rounded-md items-center justify-between md:w-1/2 lg:w-1/3 transition-all duration-150 hover:bg-zinc-700">
        <img
          className="w-12 h-12 rounded-md"
          src="/revera-vit.jpg"
          alt="product ReveraVit" />
        ReveraVit
        <WhatsappLogo size={28} color="#4ade80" />
      </a>

      <a
        target={"_blank"}
        href="https://wa.me/5599991436500?text=Olá%20tenho%20interesse%20no%20Rosa%20Amazonica"
        className="flex p-2 bg-zinc-800 text-white rounded-md items-center justify-between md:w-1/2 lg:w-1/3 transition-all duration-150 hover:bg-zinc-700">
        <img
          className="w-12 h-12 rounded-md"
          src="/rosa-amazonica.png"
          alt="product Rosa Amazonica" />
        Rosa amazônica
        <WhatsappLogo size={28} color="#4ade80" />
      </a>
    </section>
  )
}