/* eslint-disable @next/next/no-img-element */
"use client"
import { CaretRight } from "@phosphor-icons/react";

export default function ProductLinks() {
  return (
    <section className="flex flex-col gap-4 pt-10 w-full md:justify-center md:items-center">
      <a
        target={"_blank"}
        href="https://ev.braip.com/ref?pv=pro3yoz3&af=afig7lep1"
        className="flex p-2 bg-zinc-700 text-white rounded-md items-center justify-between md:w-1/2 lg:w-1/3 transition-all duration-150 hover:bg-zinc-500">
        <img
          className="w-12 h-12 rounded-md"
          src="/lift-detox.jpg"
          alt="product lift detox" />
        Lift Detox
        <CaretRight size={24} color="#4ade80" />
      </a>

      <a
        target={"_blank"}
        href="https://ev.braip.com/pv/liprrz1k/afip91l3z"
        className="flex p-2 bg-zinc-700 text-white rounded-md items-center justify-between md:w-1/2 lg:w-1/3 transition-all duration-150 hover:bg-zinc-500">
        <img
          className="w-12 h-12 rounded-md"
          src="/revera-vit.jpg"
          alt="product ReveraVit" />
        ReveraVit
        <CaretRight size={24} color="#4ade80" />
      </a>

      <a
        target={"_blank"}
        href="https://ev.braip.com/ref?pv=proeo8oe&af=afiz4xegx"
        className="flex p-2 bg-zinc-700 text-white rounded-md items-center justify-between md:w-1/2 lg:w-1/3 transition-all duration-150 hover:bg-zinc-500">
        <img
          className="w-12 h-12 rounded-md"
          src="/rosa-amazonica.png"
          alt="product Rosa Amazonica" />
        Rosa amazônica
        <CaretRight size={24} color="#4ade80" />
      </a>
    </section>
  )
}