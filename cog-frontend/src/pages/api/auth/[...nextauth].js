import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default NextAuth({
  session: {
    strategy: " jwt",
  },

  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Email address", placeholder: "<EMAIL>" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          const response = await axios.post(
            "https://c-o-g.onrender.com/api/v1/auth/login?role=manager",
            {
              credentials,
              req,
            }
          );

          const user = response.data;

          if (user) {
            return user;
            alert("Success");
          } else {
            return null;
          }
        } catch (error) {
          // Handle any errors that occur during the API request
          console.error("Error validating credentials:", error);
          return null;
        }
      },
    }),
  ],
  // pages: {
  //   signIn: "/loginPage",
  // },
});

// credentials: {
//       username: { label: "Username", type: "text", placeholder: "jsmith" },
//       email: {
//         label: "Enter Enail",
//         type: "text",
//         placeholder: "email@gmail.com",
//       },
//       password: { label: "Password", type: "password" },
//     },
//     async authorize(credentials) {
//       try {
//         // Make an API request to your authentication endpoint
//         const response = await axios.post(
//           "https://c-o-g.onrender.com/api/v1/auth/login?role=manager",
//           {
//             email: credentials.email,
//             password: credentials.password,
//           }
//         );
//         console.log("Response:", response.data);
//         const user = response.data.user;

//         if (user) {
//           const router = useRouter();

//           // Use the signIn function from next-auth/client to initiate the authentication flow
//           await signIn("credentials", {
//             email: credentials.email,
//             password: credentials.password,
//             callbackUrl: "/",
//             redirect: false,
//           });

//           router.push("/");
//           return user;
//         } else {
//           // Authentication failed, return null or an error message
//           return null;
//         }
//       } catch (error) {
//         // Handle any error that occurred during the API request
//         console.error(error);
//         throw new Error("Failed to authenticate");
//       }
//     },
