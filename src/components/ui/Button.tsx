"use client";

import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  text : string;
};

export default function Button({ text,className='',children, ...props }: ButtonProps) {
  return (
    <button {...props} className={` flex items-center ${className} bg-[var(--color-button-background)] text-white px-4 py-2 font-semibold rounded-2xl hover:bg-orange-600 transition-colors shadow-2xl cursor-pointer space-x-3`}>
    {children}<span>{text}</span>
    </button>
  );
}
