import React from "react";
import Image from "next/image";
import Logo from "../../public/assets/icons/COG Logo.png";
function loginPage() {
  return (
    <section className="flex flex-col items-center justify-center w-1/2 m-auto my-auto h-screen">
      <section>
        {" "}
        <Image src={Logo} className="w-[200px] flex items-center" />
      </section>
      <div className="flex flex-col justify-center text-center">
        <p className="text-[22px] mt-5 text-primary">Sign-In</p>
        <p className="text-[14px]   font-[600] text-[#6666] ">
          Sign in to your cog account
        </p>
      </div>
      <form className="mt-12 w-1/2 ">
        <label className="text-[20px] font-[400] text-[#999999]">
          Email/Unique numeric identifier
        </label>
        <br />
        <input
          className="border rounded py-7 outline-none px-3 w-full my-5 "
          type="text"
          placeholder="Enter Business Address"
        />
        <label className="text-[20px] font-[400] text-[#999999]">
          Password
        </label>
        <br />
        <input
          className="border rounded py-7 outline-none px-3 w-full mt-5"
          type="password"
          placeholder="Enter Business Address"
        />
        <p className="flex justify-end text-primary cursor-pointer mt-1">
          Forgot Password?
        </p>

        <input
          type="submit"
          value="SIGN IN"
          className="flex justify-center items-center border w-full mt-7 py-5 bg-primary text-white rounded-lg cursor-pointer hover:bg-slate-500 hover:font-bold"
        />
      </form>
    </section>
  );
}

export default loginPage;
