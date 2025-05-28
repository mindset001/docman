'use client'

import Image from "next/image";
import Lady from "@/images/Section.png";
import Logo from "@/images/full-logo.png";
import Logo2 from "@/images/Logo.png";
import ExpertButton from "@/components/buttons/ExpertButton";
import SolidBtn from "@/components/buttons/SolidBtn";
import { Formik, Form, Field } from "formik";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex h-[100%] md:flex-row items-center justify-between w-full">
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center w-[90%] md:w-[65%]">
                    <div>
                        <Image src={Logo} alt="Logo" className="hidden md:flex" />
                        <Image src={Logo2} alt="Mobile Logo" className="flex md:hidden" />
                    </div>

                    <div>
                        <h1 className="text-[30px] font-[600] text-center mt-6 text-[#101828]">
                            Welcome back
                        </h1>
                        <p className="text-[16px] font-[400] text-center mt-4 text-[#667085]">
                            Welcome back! Please enter your details.
                        </p>
                    </div>
                    <Formik
                        initialValues={{ email: "", password: "" }}
                        onSubmit={(values: any) => {
                            // handle form submission
                            console.log(values);
                        }}
                    >
                        {() => (
                            <Form className="w-full mt-10">
                                <div className="flex flex-col justify-between mb-4 ">
                                    <label htmlFor="rememberMe" className="text-[14px] font-[500] text-[#344054]">Email</label>
                                    <Field
                                        name="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full p-3 border border-gray-300 rounded-md mb-4"
                                    />
                                </div>
                                <div className="flex flex-col justify-between mb-4 ">
                                    <label htmlFor="rememberMe" className="text-[14px] font-[500] text-[#344054]">Password</label>
                                    <Field
                                        name="password"
                                        type="password"
                                        placeholder="************"
                                        className="w-full p-3 border border-gray-300 rounded-md mb-4"
                                    />
                                </div>
                                <div className="flex flex-row items-center justify-between mb-4 ">
                                    <div>
                                        <Field
                                            type="checkbox"
                                            name="rememberMe"
                                            className="mr-2"
                                        />
                                        <label htmlFor="rememberMe" className="text-[14px] font-[500] text-[#344054]">Remember for 30 days</label>
                                    </div>
                                    <Link href='/forget-password' className="text-[14px] font-[500] text-[#1E1E1E]">Forgot Password</Link>
                                </div>
                                <SolidBtn text="Login" fullWidth />
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
            <div className="hidden md:w-1/2 md:flex items-center justify-center">
                <Image src={Lady} alt="" />
            </div>
        </main>
    );
}
