import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import Logo from "../../public/assets/icons/COG Logo.png";
import { useRouter } from "next/router";
function signupPage() {
  const [signup, setSignup] = useState({
    name: "",
    password: "",
    phonenumber: "",
    email: "",
    // role: "",
    userCategory: "",
  });

  const router = useRouter();
  function handleChange(event) {
    const { name, value } = event.target;
    setSignup((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://c-o-g.onrender.com/api/v1/auth/register",
        signup
      );

      if (response.status === 201) {
        console.log(response.data);
      } else {
        console.log({ error });
      }
    } catch (error) {
      // Handle error, such as displaying an error message to the user
      console.log(error);
    }
  };
  console.log(signup);
  return (
    <section className="flex flex-col items-center justify-center w-1/2 m-auto my-auto h-screen">
      <section>
        {" "}
        <Image src={Logo} className="w-[200px] flex items-center" alt="logo" />
      </section>
      <div className="flex flex-col justify-center text-center">
        <p className="text-[22px] mt-5 text-primary">Sign-Un</p>
        <p className="text-[14px]   font-[600] text-[#6666] ">
          Sign up for cog account
        </p>
      </div>

      <form className="mt-8 text-[#999999]" onSubmit={(e) => handleSubmit(e)}>
        <main className=" grid grid-cols-2 gap-4">
          <section className="flex flex-col">
            <label>Name</label>
            <input
              type="text"
              className="border w-[300px] h-[50px] outline-none pl-3"
              name="name"
              onChange={handleChange}
              id="name"
              value={signup.name}
            />
          </section>
          <section className="flex flex-col">
            <label>User Type</label>
            <select
              onChange={handleChange}
              className="border w-[300px] h-[50px] text-gray-400 pr-4 outline-none"
              placeholder="select"
              name="role"
            >
              <option>Selected category</option>
              <option
                value="manager"
                name="role"
                id="role"
                className="text-black"
              >
               Manager
              </option>
              <option
                className="text-black"
                value="client"
                name="role"
                id="role"
              >
                Client
              </option>
            </select>
          </section>
          <section className="flex flex-col">
            <label>Enter email</label>
            <input
              type="email"
              className="border w-[300px] h-[50px] outline-none pl-3"
              name="email"
              onChange={handleChange}
              value={signup.email}
            />
          </section>
          <section className="flex flex-col">
            <label>User category</label>
            <select
              onChange={handleChange}
              className="border w-[300px] h-[50px] text-gray-400 pr-4 outline-none"
              placeholder="select"
              name="usercategory"
            >
              <option>Selected category</option>
              <option
                value="Corporate enterprise"
                name="userCategory"
                id="userCategory"
                className="text-black"
              >
                Corporate enterprise
              </option>
              <option
                className="text-black"
                value="Individual"
                name="userCategory"
                id="userCategory"
              >
                Individual
              </option>
            </select>
          </section>

          <section className="flex flex-col">
            <label>Password</label>
            <input
              type="password"
              className="border w-[300px] h-[50px] outline-none pl-3"
              name="password"
              onChange={handleChange}
              value={signup.password}
            />
          </section>
          <section className="flex flex-col">
            <label>Phone Number</label>
            <input
              type="text"
              className="border w-[300px] h-[50px] outline-none pl-3"
              name="phonenumber"
              value={signup.phonenumber}
              onChange={handleChange}
            />
          </section>
        </main>

        <input
          type="submit"
          value="SIGN IN"
          className="flex justify-center items-center border w-full mt-7 py-2 bg-primary text-white rounded-lg cursor-pointer hover:bg-slate-500 hover:font-bold"
          onSubmit={handleSubmit}
        />
      </form>
    </section>
  );
}

export default signupPage;