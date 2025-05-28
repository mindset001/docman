
import { Button } from "antd"
import { FC } from "react"
import { Inter } from "next/font/google";
import { BtnProps } from "@/types";

const inter = Inter({ subsets: ["latin"] });

const SolidBtn: FC<BtnProps> = ({
    text,
    disabled,
    icon,
    loading,
    onClick,
    fullWidth,
    outlined,
    size
}) => {
  return (
      <Button 
  block={fullWidth}  
  type="primary" 
  ghost={outlined}
  style={{
    backgroundColor: outlined ? 'transparent' : '#1570EF',
    color: outlined ? '#1570EF' : 'white',
    borderColor: '#1570EF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '0.25rem',
    overflow: 'hidden',
    borderRadius: '10px',
  }}
  size={size || "large"} 
  shape="round" 
  disabled={disabled} 
  loading={loading} 
  onClick={onClick}
>
  {text}
</Button>

  )
}

export default SolidBtn
