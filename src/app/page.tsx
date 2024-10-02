import Image from 'next/image';
import Link from 'next/link';

import airPlannerSVG from './assets/airplane.svg';
import logoSVG from './assets/logo.svg';

export default function Home() {
  return (
    <main>
      <section
        id="hero"
        className="mx-auto·flex·h-screen·w-full·max-w-screen-xl·flex-col·p-8"
      >
        <nav className="mt-1 flex h-14 w-full items-center justify-between">
          <Link href="/">
            <Image
              className="h-14 w-14"
              src={logoSVG}
              alt="Logomarca da AirPlanner"
            />
          </Link>

          <div className="flex items-center gap-8">
            <Link
              href="#hero"
              className="font-medium text-stone-700 transition-colors hover:text-sky-500"
            >
              Preço
            </Link>

            <Link
              href="#hero"
              className="font-medium text-stone-700 transition-colors hover:text-sky-500"
            >
              Sobre
            </Link>

            <Link
              href="#hero"
              className="font-medium text-stone-700 transition-colors hover:text-sky-500"
            >
              Blog
            </Link>

            <Link
              href="#hero"
              className="rounded-full bg-sky-500 px-5 py-3 font-medium text-white transition-colors hover:bg-sky-800"
            >
              Começar!
            </Link>
          </div>
        </nav>

        <div className="mt-2 flex w-full items-center justify-between">
          <div>
            <h1 className="text-left text-7xl font-bold text-stone-700">
              Planeje suas viagens com a{' '}
              <span className="text-sky-500">AirPlanner!</span>
            </h1>
            <p className="mt-4 text-lg font-bold text-stone-700">
              Nunca foi tão fácil planejar uma viagem.
              <br />
              Faça tudo de forma eficaz e sem dor de cabeça!
            </p>
            <br />

            <Link
              href="#hero"
              className="mt-8 w-fit rounded-full bg-sky-500 px-5 py-3 font-medium text-white transition-colors hover:bg-sky-800"
            >
              Comece agora!
            </Link>
          </div>
          <Image
            className="w-full max-w-2xl"
            src={airPlannerSVG}
            alt="Ilustração de um avião sobrevoando as nuvens"
          />
        </div>
      </section>
    </main>
  );
}
