import Image from "next/image";
import Link from "next/link";
import logo1 from "../public/assets/icons/COG Logo.png";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth";
const Navbar = () => {
  // const [session, loading] = useSession;
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
            <Link
              href="/loginPage"
              className="border px-5 py-2 rounded cursor-pointer mr-8"
            >
              Login
            </Link>
            <Link
              href="/signupPage"
              className="bg-primary text-white px-5 py-2 rounded cursor-pointer"
            >
              Sign up
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
