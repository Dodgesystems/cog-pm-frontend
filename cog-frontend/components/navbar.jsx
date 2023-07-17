import Image from "next/image";
import Link from "next/link";
import logo1 from "../public/assets/icons/COG Logo.png";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth";
const Navbar = () => {
  // const [session, loading] = useSession;
  return (
    <header className="border-b-4 cursor-pointer">
      <nav className=" mb-5  border-hr flex justify-between px-24 items-center">
        <Link href="/">
          <Image src={logo1} alt="Cog Logo" />
        </Link>
        <div className="w-3/6">
          <ul className="flex justify-between ">
            <Link href="/" className="px-4 cursor-pointer">
              Home
            </Link>
            <Link href="/forrentals">For rentals</Link>
            <Link href="/managers">For property managers/owners</Link>
          </ul>
        </div>
        <div className="w-48">
          <ul className="flex justify-between items-center">
            <Link href="/about">About us</Link>

            {/* <Link
              href="/loginPage"
              className="bg-primary text-white px-5 py-2 rounded cursor-pointer"
              onClick={() => {
                signIn()
              }}
            >
              Sign in
            </Link> */}
            <button
              onClick={() => {
                signIn();
              }}
            >
              sigin In
            </button>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
