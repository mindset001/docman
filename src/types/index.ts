import { ReactNode } from "react";
import { ExpertButtonProps } from "@/components/buttons/ExpertButton";


export interface BtnProps {
    loading?: boolean;
    icon?: ReactNode;
    disabled?: boolean;
    // textStyle: string | ReactNode;
    text?: string | ReactNode;
    onClick?: (event?: any) => void;
    fullWidth?: boolean;
    outlined?: boolean;
    size?: 'large' | 'middle' | 'small';
}
export type ButtonTypes = | 'solid' | 'text' | 'menu';