'use client'
import { useState } from "react";
import Image from "next/image";
import Lady from "@/images/docman.png";
import Logo from "@/images/full-logo.png";
import Logo2 from "@/images/mark.png";
import Email from "@/images/key.png";
import { Formik, Form, Field } from "formik";
import Link from "next/link";
import TextBtn from "@/components/buttons/TextBtn";
import SolidBtn from "@/components/buttons/SolidBtn";
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';


export default function Page() {
    const [emailSent, setEmailSent] = useState(false);
    const [emailValue, setEmailValue] = useState("");
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <main className="flex h-[80%] md:flex-row items-center justify-between w-full">
            <div className="w-full md:w-2/3 flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center w-[90%] md:w-[60%]">


                    {!emailSent ? (
                        <>
                            <div className="mb-6">
                                <Image src={Email} alt="Email Verification" className="w-[60px] h-[60px]" />
                            </div>
                            <h1 className="text-[30px] font-[600] text-center mt-6 text-[#101828]">
                                Set new password
                            </h1>
                            <p className="text-[16px] font-[400] text-center mt-4 text-[#667085]">
                                Your new password must be different to previously used passwords.
                            </p>

                            <Formik
                                initialValues={{ password: "", cpassword: "" }}
                                validate={(values) => {
                                    const errors: { password?: string; cpassword?: string } = {};
                                    if (!values.password) errors.password = "Required";
                                    if (!values.cpassword) errors.cpassword = "Required";
                                    else if (values.password !== values.cpassword)
                                        errors.cpassword = "Passwords do not match";
                                    return errors;
                                }}
                                onSubmit={() => {
                                    setEmailSent(true);
                                }}
                            >
                                {({ values, handleChange }) => (
                                    <Form className="w-full mt-10">
                                        <div className="flex flex-col justify-between mb-4 relative">
                                            <label className="text-[14px] font-[500] text-[#344054]">Password</label>
                                            <Field
                                                name="password"
                                                type={showPassword ? "text" : "password"}
                                                placeholder="************"
                                                onChange={handleChange}
                                                className="w-full p-3 pr-10 border border-gray-300 rounded-md"
                                            />
                                            <div
                                                className="absolute right-3 top-[38px] text-[#667085] cursor-pointer"
                                                onClick={() => setShowPassword(!showPassword)}
                                            >
                                                {showPassword ? <EyeInvisibleOutlined /> : <EyeTwoTone />}
                                            </div>
                                        </div>

                                        <div className="flex flex-col justify-between mb-4 relative">
                                            <label className="text-[14px] font-[500] text-[#344054]">Confirm Password</label>
                                            <Field
                                                name="cpassword"
                                                type={showConfirmPassword ? "text" : "password"}
                                                placeholder="************"
                                                onChange={handleChange}
                                                className="w-full p-3 pr-10 border border-gray-300 rounded-md"
                                            />
                                            <div
                                                className="absolute right-3 top-[38px] text-[#667085] cursor-pointer"
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            >
                                                {showConfirmPassword ? <EyeInvisibleOutlined /> : <EyeTwoTone />}
                                            </div>
                                        </div>

                                       <div className="mt-10">
                                         {values.password.trim() === "" ? (
                                            <TextBtn text="Reset Password" fullWidth disabled />
                                        ) : (
                                            <SolidBtn
                                                text="Reset Password"
                                                fullWidth
                                                onClick={() => {
                                                    // Trigger form submission manually
                                                    if (values.password && values.cpassword && values.password === values.cpassword) {
                                                        setEmailValue(values.password);
                                                        setEmailSent(true);
                                                    }
                                                }}
                                            />
                                        )}
                                       </div>
                                    </Form>
                                )}
                            </Formik>


                        </>
                    ) : (
                        <div className=" flex flex-col justify-center item-center text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={Logo2} alt="Email Sent" className="w-[100px] h-[100px] mb-4" />
                            </div>
                            <h2 className="text-[24px] font-[600] text-[#101828] mb-2">Password reset</h2>
                            <div className="w-full flex items-center justify-center mb-4">
                                <p className="text-[16px] text-[#667085] w-[75%]">
                                   Your password has been successfully reset. Click below to log in magically.
                                </p>
                            </div>
                            {/* <p className="mt-4 text-[#101828] font-medium">Email: {emailValue}</p> */}
                            <SolidBtn text='Continue' fullWidth onClick={() => router.push('/')} />

                            

                          
                        </div>

                    )}
                </div>
            </div>

            <div className="hidden md:w-1/3 md:flex items-center justify-center h-[80%]">
                <Image src={Lady} alt="" />
            </div>
        </main>
    );
}
