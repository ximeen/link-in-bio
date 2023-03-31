"use client"
/* eslint-disable @next/next/no-img-element */
import { WhatsappLogo } from "@phosphor-icons/react";
interface ProductLinkProps {
  href: string,
  srcImage: string,
  altImage: string,
  productName: string
}
export default function ProductLinks({ href, srcImage, altImage, productName }: ProductLinkProps) {
  return (
    <a
      target={"_blank"}
      href={href}
      className="flex p-2 bg-zinc-800 text-white rounded-md items-center justify-between md:w-1/2 lg:w-1/3 transition-all duration-150 hover:bg-zinc-700">
      <img
        className="w-12 h-12 rounded-md"
        src={srcImage}
        alt={altImage} />
      {productName}
      <WhatsappLogo size={28} color="#4ade80" />
    </a>
  )
}