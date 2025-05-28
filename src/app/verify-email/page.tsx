'use client'

import { useState, useRef, useEffect, KeyboardEvent } from 'react';
import Image from "next/image";
import Logo from "@/images/full-logo.png";
import Logo2 from "@/images/Logo.png";
import Lady from "@/images/docman.png";
import Email from "@/images/mark.png";
import Link from "next/link";
import SolidBtn from "@/components/buttons/SolidBtn";
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';

export default function VerifyEmailPage() {
    const [codes, setCodes] = useState(new Array(6).fill(''));
    const [isComplete, setIsComplete] = useState(false);
    const [isVerifying, setIsVerifying] = useState(false);
    const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
    const [otp, setOtp] = useState(false);
     const router = useRouter();

    useEffect(() => {
        // Focus first input on mount
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, []);

    const handleChange = (value: string | any[], index: number) => {
        // Only allow numbers
        if (!/^\d*$/.test(String(value))) return;

        const newCodes = [...codes];
        newCodes[index] = value.slice(-1); // Only take the last character
        setCodes(newCodes);

        // Auto-focus next input
        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }

        // Check if all fields are filled
        const allFilled = newCodes.every(code => code !== '');
        setIsComplete(allFilled);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
        // Handle backspace
        if (e.key === 'Backspace' && !codes[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e: { preventDefault: () => void; clipboardData: { getData: (arg0: string) => string; }; }) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
        const newCodes = [...codes];

        for (let i = 0; i < pastedData.length; i++) {
            if (i < 6) {
                newCodes[i] = pastedData[i];
            }
        }

        setCodes(newCodes);
        setIsComplete(newCodes.every(code => code !== ''));

        // Focus the next empty input or the last one
        const nextEmptyIndex = newCodes.findIndex(code => code === '');
        const focusIndex = nextEmptyIndex === -1 ? 5 : nextEmptyIndex;
        inputRefs.current[focusIndex]?.focus();
    };

    const handleVerify = async () => {
        if (!isComplete) return;

        setIsVerifying(true);
        const verificationCode = codes.join('');

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log('Verification code:', verificationCode);

            // Redirect to password reset page or show success
            // router.push('/reset-password');

        } catch (error) {
            console.error('Verification failed:', error);
            // Handle error - maybe show error message
        } finally {
            setIsVerifying(false);
        }
        setOtp(true);
    };

    const handleResend = () => {
        console.log('Resending verification code...');
        // Clear current codes
        setCodes(new Array(6).fill(''));
        setIsComplete(false);
        // Focus first input
        inputRefs.current[0]?.focus();
        // API call to resend code
    };

    return (
        <main className="flex h-[100vh] md:flex-row items-center justify-between w-full">

          <div className="w-[100%] md:w-2/3 flex flex-col items-center justify-center">
             {!otp ? ( 
               <div  className="flex flex-col items-center justify-center w-[90%] md:w-[60%]">
                 <div className='w-[80%] flex flex-col items-center justify-center'>

                    {/* Logo */}
                    {/* <div className="mb-8">
            <Image src={Logo} alt="Logo" className="hidden md:flex" />
            <Image src={Logo2} alt="Mobile Logo" className="flex md:hidden" />
          </div> */}

                    {/* Email Icon */}
                    <div className="mb-6">
                        <Image src={Email} alt="Email Verification" className="w-[60px] h-[60px]" />
                    </div>

                    {/* Title */}
                    <h1 className="text-[30px] font-[600] text-center text-[#101828] mb-2">
                        Verify email
                    </h1>

                    {/* Description */}
                    <p className="text-[16px] font-[400] text-center text-[#667085] mb-8 w-[85%]">
                        We sent a verification link to <br /> johndoe@docmanager.com. Enter the code to continue
                    </p>

                    {/* Security Code Label */}
                    <div className='w-[60%]'>
                        <div className="mb-3 flex justify-start">
                            <label className="text-left text-[14px] font-[500] text-[#344054]">Security code</label>
                        </div>

                        {/* Code Input Fields */}
                        <div className="flex gap-6 mb-6 justify-center w-full items-center">
                            {/* First group of 3 */}
                            <div className="flex gap-3">
                                {codes.slice(0, 3).map((code, index) => (
                                    <input
                                        key={index}
                                        ref={el => { inputRefs.current[index] = el; }}
                                        type="text"
                                        inputMode="numeric"
                                        maxLength={1}
                                        value={code}
                                        onChange={(e) => handleChange(e.target.value, index)}
                                        onKeyDown={(e) => handleKeyDown(e, index)}
                                        onPaste={handlePaste}
                                        className={`h-8 w-8 md:w-12 md:h-12 text-center text-[18px] font-[600] border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#175CD3] focus:border-transparent transition-all ${code
                                                ? 'border-[#175CD3] bg-[#F0F7FF] text-[#175CD3]'
                                                : 'border-[#D0D5DD] bg-white text-[#101828]'
                                            }`}
                                    />
                                ))}
                            </div>

                            {/* Separator dash */}
                            <div className="text-[#D0D5DD] md:text-[44px] font-[400]">-</div>

                            {/* Second group of 3 */}
                            <div className="flex gap-3">
                                {codes.slice(3, 6).map((code, index) => (
                                    <input
                                        key={index + 3}
                                        ref={el => { inputRefs.current[index + 3] = el; }}
                                        type="text"
                                        inputMode="numeric"
                                        maxLength={1}
                                        value={code}
                                        onChange={(e) => handleChange(e.target.value, index + 3)}
                                        onKeyDown={(e) => handleKeyDown(e, index + 3)}
                                        onPaste={handlePaste}
                                        className={`h-8 w-8 md:w-12 md:h-12 text-center text-[18px] font-[600] border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#175CD3] focus:border-transparent transition-all ${code
                                                ? 'border-[#175CD3] bg-[#F0F7FF] text-[#175CD3]'
                                                : 'border-[#D0D5DD] bg-white text-[#101828]'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>  

                    {/* Verify Button */}
                    <div className="w-[50%] mb-4">
                        <SolidBtn
                            text={isVerifying ? "Verifying..." : "Verify email"}
                            fullWidth
                            disabled={!isComplete || isVerifying}
                            onClick={handleVerify}
                        />
                    </div>

                    {/* Resend Link */}
                    <div className="mb-6">
                        <p className="text-[14px] text-[#475467] font-[400]">
                            Didn't receive the email?{' '}
                            <button
                                onClick={handleResend}
                                className="text-[#175CD3] font-[600] hover:underline"
                            >
                                Click to resend
                            </button>
                        </p>
                    </div>

                    {/* Back to Login */}
                    <Link href="/" className="w-full text-[#101828] text-[16px] font-[500] flex justify-center items-center gap-2">
                        <ArrowLeftOutlined style={{ color: '#475467', fontSize: '14px' }} />
                        <p className="text-[#475467] text-[14px] font-[600]">Back to log in</p>
                    </Link>

                </div>
               </div>
            
            ) : (
           <div className=" flex flex-col justify-center item-center text-center">
              <div className="flex flex-col items-center justify-center">
                  <Image src={Email} alt="Email Sent" className="w-[100px] h-[100px] mb-4" />
              </div>
              <h2 className="text-[24px] font-[600] text-[#101828] mb-2">Email verified</h2>
            <div className="w-full flex items-center justify-center mb-4">
                  <p className="text-[16px] text-[#667085] w-[75%]">
               Your password has been successfully reset. Click below to log in magically..
              </p>
            </div>
              {/* <p className="mt-4 text-[#101828] font-medium">Email: {emailValue}</p> */}
              <SolidBtn text='Continue' fullWidth onClick={() => router.push('/reset-password')}/>

              <div className="mt-4">

</div>

               <Link href="/" className="w-full text-[#101828] text-[16px] font-[500] mt-8 flex justify-center items-center gap-2">
                <ArrowLeftOutlined color="#475467" />
                <p className="text-[#475467] text-[14px] font-[600]">Back to log in</p>
              </Link>
            </div> )}

          </div>

            {/* Right Side Image */}
            <div className="hidden md:w-1/3 md:flex items-center justify-center h-[80%]">
                <Image src={Lady} alt="Verification illustration" />
            </div>
        </main>
    );
}