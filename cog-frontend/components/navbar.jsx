import Image from "next/image";
import Link from "next/link";
import logo1 from "../public/assets/icons/COG Logo.png";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const handleLogout = () => {
    localStorage.clear("token");
    router.reload();
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log({ token });
    if (token) {
      setToken(true);
    } else {
      setToken(false);
    }
  }, []);
  const [token, setToken] = useState(false);
  return (
    <header className="border-b-2 cursor-pointer">
      <nav className=" mb-5  border-hr flex justify-between px-24 items-center">
        <Link href="/">
          <Image src={logo1} alt="Cog Logo" />
        </Link>
        <div className="w-3/6">
          <ul className="flex justify-between ">
            <Link href="/" className="px-4 cursor-pointer">
              Home
            </Link>
            <Link href="/for-rentals">For buyers/renters</Link>
            {/* EDITED THIS TO SHIFT THE 'FOR RENTALS PAGE TO THE SRC DIRECTORY */}
            <Link href="/managers">For property managers/owners</Link>
          </ul>
        </div>
        <div className="">
          <ul className="flex justify-between items-center ">
            {token ? (
              <p
                onClick={handleLogout}
                className="border px-5 py-2 rounded cursor-pointer mr-8"
              >
                Logout
              </p>
            ) : (
              <Link
                href="/loginPage"
                className="border px-5 py-2 rounded cursor-pointer mr-8"
              >
                Login
              </Link>
            )}

            {token ? (
              ""
            ) : (
              <Link
                href="/signupPage"
                className="bg-primary text-white px-5 py-2 rounded cursor-pointer"
              >
                Sign up
              </Link>
            )}
          </ul>
        </div>
        <div className="w-48">
          <ul className="flex justify-between items-center">
            <Link href="/about">About us</Link>
            <Link
              href="/loginPage"
              className="bg-primary text-white px-5 py-2 rounded cursor-pointer"
            >
              Sign in
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
