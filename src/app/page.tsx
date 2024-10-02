import Image from 'next/image';
import Link from 'next/link';


import airPlannerSVG from './assets/airplane.svg';
import logoSVG from './assets/logo.svg';


export default function Home() {
  return (

    

    <main >

      
      <section id="hero" className="mx-auto flex p-8 h-screen w-full max-w-screen-xl flex-col">
        <nav className="w-full flex items-center h-14 mt-1 justify-between">

          <Link href="/">

            <Image
              className="h-14 w-14"
              src={logoSVG}
              alt="Logomarca da AirPlanner" />

          </Link>

          <div className="flex gap-8 items-center">
            <Link href="#hero" className="font-medium text-stone-700 hover:text-sky-500 transition-colors">Preço</Link>

            <Link href="#hero" className="font-medium text-stone-700 hover:text-sky-500 transition-colors">Sobre</Link>

            <Link href="#hero" className="font-medium text-stone-700 hover:text-sky-500 transition-colors">Blog</Link>

            <Link href="#hero" className="py-3 px-5 font-medium text-white bg-sky-500 rounded-full hover:bg-sky-800 transition-colors">Começar!</Link>
          </div>
        </nav>

        <div className="w-full flex mt-2 items-center justify-between">
          <div >
            <h1 className="text-left text-7xl font-bold text-stone-700">
              Planeje suas viagens com a <span className="text-sky-500">AirPlanner!</span>
            </h1>
            <p className="text-lg text-stone-700 font-bold mt-4">
              Nunca foi tão fácil planejar uma viagem. 
              <br/>Faça tudo de forma eficaz e sem dor de cabeça!
            </p>
            <br/>

            <Link href="#hero" className="mt-8 py-3 px-5 w-fit font-medium text-white bg-sky-500 rounded-full hover:bg-sky-800 transition-colors">Comece agora!</Link>
          </div>
          <Image
            className="w-full max-w-2xl"
            src={airPlannerSVG} alt="Ilustração de um avião sobrevoando as nuvens" />
        </div>
        

      </section>
    </main>
  );
}
