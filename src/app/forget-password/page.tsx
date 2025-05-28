'use client'
import { useState } from "react";
import Image from "next/image";
import Lady from "@/images/docman.png";
import Logo from "@/images/full-logo.png";
import Logo2 from "@/images/Logo.png";
import Email from "@/images/email.png";
import { Formik, Form, Field } from "formik";
import Link from "next/link";
import TextBtn from "@/components/buttons/TextBtn";
import SolidBtn from "@/components/buttons/SolidBtn";
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';


export default function Page() {
    const [emailSent, setEmailSent] = useState(false);
    const [emailValue, setEmailValue] = useState("");
    const router = useRouter();

    return (
        <main className="flex h-[100%] md:flex-row items-center justify-between w-full">
            <div className="w-full md:w-2/3 flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center w-[90%] md:w-[60%]">


                    {!emailSent ? (
                        <>
                            <div>
                                <Image src={Logo} alt="Logo" className="hidden md:flex" />
                                <Image src={Logo2} alt="Mobile Logo" className="flex md:hidden" />
                            </div>
                            <h1 className="text-[30px] font-[600] text-center mt-6 text-[#101828]">
                                Forgot password?
                            </h1>
                            <p className="text-[16px] font-[400] text-center mt-4 text-[#667085]">
                                All good. Enter your account’s email address and we’ll send you a link to reset your password.
                            </p>

                            <Formik
                                initialValues={{ email: "" }}
                                validate={(values) => {
                                    const errors: { email?: string } = {};
                                    if (!values.email) {
                                        errors.email = "Required";
                                    }
                                    return errors;
                                }}
                                onSubmit={(values) => {
                                    setEmailValue(values.email);
                                    setEmailSent(true);
                                }}
                            >
                                {({ values }) => (
                                    <Form className="w-full mt-10">
                                        <div className="flex flex-col justify-between mb-4">
                                            <label htmlFor="email" className="text-[14px] font-[500] text-[#344054]">Email</label>
                                            <Field
                                                name="email"
                                                type="email"
                                                placeholder="Enter your email"
                                                className="w-full p-3 border border-gray-300 rounded-md mb-4"
                                            />
                                        </div>

                                        {values.email.trim() === "" ? (
                                            <TextBtn text="Reset Password" fullWidth disabled />
                                        ) : (
                                            <SolidBtn
                                                text="Reset Password"
                                                fullWidth
                                                onClick={() => {
                                                    // Trigger form submission manually
                                                    if (values.email) {
                                                        setEmailValue(values.email);
                                                        setEmailSent(true);
                                                    }
                                                }}
                                            />
                                        )}
                                    </Form>
                                )}
                            </Formik>

                            <Link href="/" className="text-[#101828] text-[16px] font-[500] mt-8 flex items-center gap-2">
                                <ArrowLeftOutlined color="#475467" />
                                <p className="text-[#475467] text-[14px] font-[600]">Back to log in</p>
                            </Link>
                        </>
                    ) : (
                        <div className=" flex flex-col justify-center item-center text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={Email} alt="Email Sent" className="w-[100px] h-[100px] mb-4" />
                            </div>
                            <h2 className="text-[24px] font-[600] text-[#101828] mb-2">Email on the way!</h2>
                            <div className="w-full flex items-center justify-center mb-4">
                                <p className="text-[16px] text-[#667085] w-[75%]">
                                    We sent you password reset instructions. If it doesn't show up soon, check your spam folder.<br />
                                    We sent it from the email address <strong>no‑reply@docmanger.com</strong>.
                                </p>
                            </div>
                            {/* <p className="mt-4 text-[#101828] font-medium">Email: {emailValue}</p> */}
                            <SolidBtn text='Open email app' fullWidth onClick={() => router.push('/verify-email')} />

                            <div className="mt-4">
                                <p className="text-[#475467] font-[400] text-[14px]">Didn't receive the email?
                                    <span
                                        className="text-[#175CD3] cursor-pointer font-[600] hover:underline"
                                        onClick={() => setEmailSent(false)}
                                    > Click to resend</span></p>
                            </div>

                            <Link href="/" className="w-full text-[#101828] text-[16px] font-[500] mt-8 flex justify-center items-center gap-2">
                                <ArrowLeftOutlined color="#475467" />
                                <p className="text-[#475467] text-[14px] font-[600]">Back to log in</p>
                            </Link>
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
