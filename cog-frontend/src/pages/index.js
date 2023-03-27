// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

import Navbar from "../../components/navbar";
import Image from "next/image";
import seacrh from "../../public/assets/icons/Search.png";
import stroke from "../../public/assets/icons/Stroke 1.png";
import Location from "../../public/assets/icons/Location.png";
import Rectangle from "../../public/assets/images/Rectangle 1.png";
import Rectangle2 from "../../public/assets/images/Rectangle 2.png";
import Image8 from "../../public/assets/images/image 8.png";
import iPhone from "../../public/assets/images/iPhone.png";
import benefitData from "../../Data/benefit.js";
import { useState, useEffect } from "react";
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar />
      <hr className="my-2 border-1 border-hr" />
      <Header />
      <Seacrh />
      <Rentals />
      <PropertyMangaers />
      <BenefitHeader />
      <div className="flex justify-center w-full">
        <Benefit />
      </div>
      <ForRentals />
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
          <li className="py-1 px-2" onClick={handleClick}>
            Higlights
          </li>
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
    <section className="flex justify-between py-8 px-8 h-max bg-rentalsColor w-4/5 m-auto my-12 relative rounded">
      <div className="flex-col">
        <div className="bg-primary w-max py-2 px-6 rounded-2xl text-white text-xs">
          For rentals
        </div>
        <div className="text-white text-2xl pt-6">
          Access to diverse properties <br /> for free.
        </div>
        <p className="text-white text-l pt-12">
          Make personalized choices on your property <br /> search and meet the
          homeowners and <br /> managers who have what you want.
        </p>
        <div className="text-xs text-primary bg-white text-center mt-8 w-max px-20 py-2  rounded">
          SEARCH PROPERTIES
        </div>
      </div>
      <div className=" flex">
        {/* <div className="relative top-10 left-10 ">
          <Image src={Rectangle} height={1000} />
        </div>
        <div className="absolute top-8 left-8">
          <Image src={Rectangle2} />
        </div>
        <div className="relative top-3 left-20">
          <Image src={Rectangle} />
        </div> */}
      </div>
    </section>
  );
};

const PropertyMangaers = () => {
  return (
    <section className="flex justify-between   h-max bg-managerColor w-4/5 m-auto my-12 relative rounded">
      <div className="flex-col px-10 pt-12">
        <div className="bg-primary w-max py-2 px-6 rounded-2xl text-white text-xs">
          For property owners and managers
        </div>
        <div className="text-white text-2xl pt-6">
          End-to-end solution for cost <br /> efficiency and execution.
        </div>
        <p className="text-white text-l pt-12">
          Digitalize your entire property operations <br /> across sales inbound
          prospecting, property <br /> operations, customer (tenant and
          landlord)
          <br /> relations and back-office.
        </p>
        <div className="text-xs text-primary bg-white text-center mt-8 w-max px-20 py-2  rounded">
          GET STARTED
        </div>
      </div>
      <div className="w-1/2 pt-12">
        <Image src={Image8} />
      </div>
    </section>
  );
};
const BenefitHeader = () => {
  return (
    <h1 className="flex justify-center mb-10 text-primary text-2xl uppercase">
      Benefits
    </h1>
  );
};

const Benefit = () => {
  console.log(benefitData);
  // const items = benefitData.json
  const [benefits, setBenefits] = useState([]);
  const fetchBenefits = async () => {
    const response = await fetch(`/api/benefits`);
    const data = await response.json();
    setBenefits(data);
  };
  useEffect(() => {
    fetchBenefits();
  }, []);
  return (
    <>
      {benefits.map((benefit) => {
        return (
          <div
            key={benefit.id}
            className=" text-start w-1/4 px-4 py-12 text-benefitColor border-2 border-dashed rounded border-primary m-4 p-4"
          >
            <div className="flex justify-center">
              <Image
                src={`/../public/assets/icons/${benefit.image}`}
                width={30}
                height={30}
              />
            </div>
            <div className="text-2xl text-center py-4">{benefit.heading}</div>
            <div className="">{benefit.text}</div>
          </div>
        );
      })}
    </>
  );
};

const ForRentals = () => {
  const [rentals, setRentals] = useState([]);
  const fetchRentals = async () => {
    const response = await fetch(`/api/rentals`);
    const data = await response.json();
    setRentals(data);
  };
  useEffect(() => {
    fetchRentals();
  }, []);
  return (
    <>
      <div className="uppercase flex w-full justify-center py-12 text-primary text-2xl  font-bold">how it works</div>
      <section className="flex w-full justify-center m-auto">
        <div className=" w-1/2 flex justify-end items-center">
          <Image src={iPhone} width={330} />
        </div>
        <div className="ml-44">
          <div className="text-3xl font-bold">
            For renters
          </div>
          {rentals.map((rental) => {
            return (
              <div key={rental.id} className="w-full flex-col  ml-">
                <ul>
                  <li>
                     <span className="font-bold text-primary text-2xl pr-2">{rental.id}</span>
                      <span className="pt-8 font-bold text-xl  w-full">{rental.heading}</span>
                  </li>
                </ul>
                <p className="pl-6 pt-6 pb-8 w-2/3 text-xl">{rental.text}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
