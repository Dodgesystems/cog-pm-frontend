import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import Logo from "../../public/assets/icons/COG Logo.png";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
function loginPage() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  function handleChange(event) {
    const { name, value } = event.target;
    setLogin((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }
  const handleSubmit = async (e) => {
    // const response = await axios
    //   .post("https://c-o-g.onrender.com/api/v1/auth/login?role=manager", login)
    //   .then(response.data);
    e.preventDefault();
    // signIn("credentials", {
    //   email: login.email,
    //   password: login.password,
    // });
    try {
      const response = await axios.post(
        "https://c-o-g.onrender.com/api/v1/auth/login",
        login
      );

      if (response.status === 200) {
        // alert("Logged In Successfully");
        localStorage.setItem("token", response.data.token);
        router.push("/");
        // console.log(response.data.token);
      }
    } catch (error) {
      // Handle error, such as displaying an error message to the user
      console.log(error);
    }
  };
  // console.log(login);
  return (
    <section className="flex flex-col items-center justify-center w-1/2 m-auto my-auto h-screen">
      <section>
        {" "}
        <Image src={Logo} className="w-[200px] flex items-center" alt="logo" />
      </section>
      <div className="flex flex-col justify-center text-center">
        <p className="text-[22px] mt-5 text-primary">Sign-In</p>
        <p className="text-[14px]   font-[600] text-[#6666] ">
          Sign in to your cog account
        </p>
      </div>
      <form className="mt-12 w-full " onSubmit={handleSubmit}>
        <label className="text-[20px] font-[400] text-[#999999] mb-8">
          Email/Unique numeric identifier
        </label>
        <br />
        <input
          className="border rounded  outline-none px-3 mt-4 w-full h-[50px] "
          type="text"
          placeholder="Enter Business Address"
          name="email"
          id="email"
          onChange={handleChange}
          value={login.email}
        />
        <label className="text-[20px] font-[400] text-[#999999]">
          Password
        </label>
        <br />
        <input
          className="border rounded  outline-none px-3 mt-4 w-full h-[50px]"
          type="password"
          placeholder="Enter Business Address"
          name="password"
          id="pass"
          onChange={handleChange}
          value={login.password}
        />
        <p className="flex justify-end text-primary cursor-pointer mt-1">
          Forgot Password?
        </p>

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

export default loginPage;
