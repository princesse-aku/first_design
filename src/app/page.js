import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-200 font-mono flex flex-col items-center px-6">
      <header className="w-full max-w-3xl flex justify-between items-center py-6">
        <span className="text-lg font-bold">PA</span>
        <nav className="flex gap-6 text-sm">
          <a href="#">Work</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <section className="w-full max-w-3xl mt-12">
        <h1 className="text-3xl md:text-4xl font-extrabold leading-snug text-white">
          I design and build <br /> websites for creatives.
        </h1>

        <div className="flex justify-between space-x-4 mb-6">
          <img src="/Avatar.png" alt="" className="rounded-full w-12 h-12" />
          <div className="flex space-x-4 text-xl">
            <img src="/twitter.png" alt="" className="rounded-full w-6 h-6" />
            <img src="/insta.jpg" alt="" className="rounded-full w-6 h-6" />
            <img src="/linkedin.png" alt="" className="rounded-full w-6 h-6" />
          </div>
        </div>
        <p className="mt-8 text-sm text-neutral-400 leading-relaxed">
          Hi, I’m Princesse ALAGNON, a web designer and developer based in Togo.
          <br />
          I’m available for remote-friendly freelance work. Currently at{" "}
          <a href="#" className="text-yellow-400 hover:text-yellow-300">
            Great Seal Studios
          </a>
          .
        </p>
      </section>

      <section className="w-full max-w-3xl mt-12 mb-20">
        <h2 className="text-lg font-semibold mb-4">Work</h2>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-neutral-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
            <Image
              src="/afro.png"
              alt=""
              width={600}
              height={400}
              className="w-full h-40 object-cover"
            />
            <div className="p-3">
              <h3 className="text-sm font-bold">Afrobuilders</h3>
              <p className="text-xs text-neutral-400">
                Africa’s innovative projects
              </p>
            </div>
          </div>

          <div className="bg-neutral-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
            <Image
              src="/oss228.png"
              alt=""
              width={600}
              height={400}
              className="w-full h-40 object-cover"
            />
            <div className="p-3">
              <h3 className="text-sm font-bold">OpenSource 228</h3>
              <p className="text-xs text-neutral-400">
                Projets OpenSource du Togo
              </p>
            </div>
          </div>

          <div className="bg-neutral-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
            <Image
              src="/fayaas.png"
              alt=""
              width={600}
              height={400}
              className="w-full h-40 object-cover"
            />
            <div className="p-3">
              <h3 className="text-sm font-bold">Fayaas-Food</h3>
              <p className="text-xs text-neutral-400">
                Site de foodies
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
  
}
