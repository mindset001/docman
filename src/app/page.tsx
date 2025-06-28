'use client'

import Image from "next/image";
import Lady from "@/images/Section.png";
import Logo from "@/images/full-logo.png";
import Logo2 from "@/images/Logo.png";
import ExpertButton from "@/components/buttons/ExpertButton";
import SolidBtn from "@/components/buttons/SolidBtn";
import { Formik, Form, Field } from "formik";
import Link from "next/link";
import { login } from "./api/auth";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

interface LoginValues {
  email: string;
  password: string;
}

export default function Home() {
  const router = useRouter();

  const handleLogin = async (values: LoginValues) => {
    try {
      const data = await login(values);
      console.log("Login success:", data);
      router.push("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <main className="flex min-h-screen md:flex-row items-center justify-between w-full">
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center py-8">
        <div className="flex flex-col items-center justify-center w-[90%] md:w-[65%]">
          <div>
            <Image 
              src={Logo} 
              alt="Logo" 
              className="hidden md:block" 
              priority 
            />
            <Image 
              src={Logo2} 
              alt="Mobile Logo" 
              className="block md:hidden" 
              priority 
            />
          </div>

          <div className="text-center mt-6">
            <h1 className="text-[30px] font-[600] text-[#101828]">
              Welcome back
            </h1>
            <p className="text-[16px] font-[400] mt-4 text-[#667085]">
              Welcome back! Please enter your details.
            </p>
          </div>
          
          <Formik
            initialValues={{ email: "", password: ""}}
            onSubmit={handleLogin}
          >
            {({ isSubmitting }) => (
              <Form className="w-full mt-10">
                <div className="mb-4">
                  <label htmlFor="email" className="block text-[14px] font-[500] text-[#344054] mb-1">
                    Email
                  </label>
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-3 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="password" className="block text-[14px] font-[500] text-[#344054] mb-1">
                    Password
                  </label>
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    placeholder="************"
                    className="w-full p-3 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                
                <div className="flex flex-row items-center justify-between mb-6">
                  <div className="flex items-center">
                    <Field
                      id="rememberMe"
                      type="checkbox"
                      name="rememberMe"
                      className="mr-2"
                    />
                    <label htmlFor="rememberMe" className="text-[14px] font-[500] text-[#344054]">
                      Remember for 30 days
                    </label>
                  </div>
                  <Link href='/forget-password' className="text-[14px] font-[500] text-[#1E1E1E] hover:underline">
                    Forgot Password
                  </Link>
                </div>
                
                <button
  type="submit"
  className="w-full bg-blue-600 text-white py-3 rounded-md font-medium"
  disabled={isSubmitting}
>
  {isSubmitting ? "Logging in..." : "Login"}
</button>

              </Form>
            )}
          </Formik>
        </div>
      </div>
      
      <div className="hidden md:flex md:w-1/2 items-center justify-center bg-gray-50 h-screen">
        <Image 
          src={Lady} 
          alt="Illustration of a woman" 
          className="object-cover h-full w-full"
          priority
        />
      </div>
    </main>
  );
}