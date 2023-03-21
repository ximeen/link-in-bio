import { InstagramLogo, TiktokLogo } from "@phosphor-icons/react";

export default function SocialMedias() {
  return (
    <section className="flex gap-4 items-center justify-center pt-10">
      <a
        target={"_blank"}
        href="https://www.tiktok.com/@gabriela_saude_beleza"
        className="p-2 bg-zinc-700 rounded-md transition-all duration-150 hover:bg-zinc-500 "
      >
        <TiktokLogo size={32} color="#4ade80" />
      </a>

      <a
        target={"_blank"}
        href="https://www.instagram.com/gabrielesaudebeleza/?igshid=YmMyMTA2M2Y%3D"
        className="p-2 bg-zinc-700 rounded-md transition-all duration-150 hover:bg-zinc-500">
        <InstagramLogo size={32} color="#4ade80" />
      </a>

    </section>
  )
}