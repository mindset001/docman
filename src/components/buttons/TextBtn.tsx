
import { Button } from "antd"
import { FC } from "react"
import { Inter } from "next/font/google";
import { BtnProps } from "@/types";

const inter = Inter({ subsets: ["latin"] });

const TextBtn: FC<BtnProps> = ({
    text,
    disabled,
    icon,
    loading,
    onClick,
    fullWidth
    // outlined,
}) => {
  return (
        <Button 
        block={fullWidth}  
        type="text"
        className={`text-[#0A424A] ${inter.className}`} 
        //  ghost={outlined}
        style={{
    // backgroundColor: outlined ? 'transparent' : '#1570EF',
    // color: outlined ? '#1570EF' : 'white',
    borderColor: '#D0D5DD',
    color: '#344054',
    fontSize: '16px',
    fontWeight: 600,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '0.25rem',
    overflow: 'hidden',
    borderRadius: '10px',
  }}
        size="large" 
        shape="round" 
        // icon={icon} 
        disabled={disabled} 
        loading={loading} 
        onClick={onClick}
        >
            { text }
        </Button>
  )
}

export default TextBtn
