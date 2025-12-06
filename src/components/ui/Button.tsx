"use client";

import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  className?: string;
};

export default function Button({ label,className='', ...props }: ButtonProps) {
  return (
    <button {...props} className={`bg-blue-500 text-white px-4 py-2 rounded ${className}`}>
     {label}
    </button>
  );
}
