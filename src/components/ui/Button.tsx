"use client";

import React from "react";
import { type LucideIcon } from "lucide-react";


type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon ?: LucideIcon;
  text : string;
};

export default function Button({ text,className='',icon: Icon, ...props }: ButtonProps) {
  return (
    <button {...props} className={` flex justify-center items-center ${className} bg-blue-500 text-white px-4 py-2 font-semibold rounded-full hover:bg-blue-600 transition-colors shadow-2xl cursor-pointer space-x-3`}>
    {Icon && <Icon size={23} />}<span>{text}</span>
    </button>
  );
}
