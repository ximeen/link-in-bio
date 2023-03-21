/* eslint-disable @next/next/no-img-element */
export default function Header() {
  return (
    <header

      className="flex flex-col justify-center items-center pt-10">
      <img
        src="/profile-image.jpeg"
        alt="profile image"
        className="h-40 w-40 rounded-full" />
      <section className="mt-10 flex flex-col gap-2 text-center text-white">
        <div className="flex gap-2 items-center">
          <h3 className="text-2xl font-semibold">Gabriele Ximenes </h3>
          <img className="h-7 w-7" src="/verify.png" alt="" />
        </div>
        <span className="text-lg">Brasil</span>
      </section>
    </header>
  )
}