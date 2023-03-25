// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

import Navbar from "../../components/navbar";
import Image from "next/image";
import seacrh from "../../public/assets/icons/Search.png";
import stroke from "../../public/assets/icons/Stroke 1.png";
import Location from "../../public/assets/icons/Location.png";
import Rectangle from "../../public/assets/images/Rectangle 1.png"

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar />
      <hr className="my-2 border-1 border-hr" />
      <Header />
      <Seacrh />
      <Rentals />
    </>
  );
}

const Header = () => {
  return (
    <header className="flex-col justify-center text-center">
      <h1 className="flex justify-center text-center text-primary mt-36 mb-2 text-4xl">
        The property rental process and <br /> experience just got better
      </h1>
      <small className="text-xs leading-snug text-lightGrey">
        Either you are a real estate renter, owner or manager, we make <br />{" "}
        your operations seamless.
      </small>
    </header>
  );
};

const Seacrh = () => {
  const handleClick = () => {
    console.log("Clicked");
  };
  return (
    <>
      <main className="flex mt-10 bg-lighterGrey lg:w-1/2 md:w-3/4 m-auto justify-between h-10 pl-2">
        <div className="w-full flex items-center">
          <Image src={seacrh} />
          <input
            type="text"
            className="bg-lighterGrey h-full w-3/6 ml-2 pl-2 outline-none "
            placeholder="What property are you looking to rent?"
          />
          <Image src={stroke} className="items-center ml-2" />
          <Image src={Location} className="items-center ml-6 mr-4" />
          <input
            type="text"
            className="h-full bg-lighterGrey w-28 pl-2 outline-none"
            placeholder="Local Area"
          />
        </div>
        <div
          className="bg-primary text-white px-5 py-2 rounded-r"
          onClick={handleClick}
        >
          Submit
        </div>
      </main>
      <div>
        <ul className="flex justify-center mt-4 text-lightGrey">
          <li className="py-1 px-2">Higlights</li>
          <li className="py-1 px-2 mx-1 items-center  border-2 border-Grey rounded-full">
            Warehouse/storage facility
          </li>
          <li className="py-1 px-2 mx-1 items-center  border-2 border-Grey rounded-full">
            Flat/apartment
          </li>
          <li className="py-1 px-2 mx-1 items-center  border-2 border-Grey rounded-full">
            Whole home
          </li>
        </ul>
      </div>
    </>
  );
};

const Rentals = () => {
  return (
    <section className="flex justify-between py-8 px-8 bg-rentalsColor w-4/5 m-auto mt-12 rounded">
      <div className="flex-col">
        <div className="bg-primary w-max py-2 px-6 rounded-2xl text-white">
          For rentals
        </div>
        <div className="text-white text-2xl pt-6">
          Access to diverse properties <br /> for free.
        </div>
        <p className="text-white text-l pt-12">
          Make personalized choices on your property <br /> search and meet the
          homeowners and <br /> managers who have what you want.
        </p>
        <div className="text-xs text-primary bg-white text-center mt-8 w-max px-20 py-2  rounded">SEARCH PROPERTIES</div>
      </div>
      <div>
        <div className="absolute"><Image src={Rectangle }/></div>
        <div className=""><Image src={Rectangle }/></div>
        <div className="relative"><Image src={Rectangle }/></div>
      </div>
    </section>
  );
};
