import React from 'react'

import Image from 'next/image';

type AuthLayoutProps = {
    children: React.ReactNode;
}
export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <>
            <div className="min-h-screen bg-[var(--color-background)] flex items-center justify-center ">
                <div className="w-full bg-[var(--color-dashboard-background)] max-w-md shadow-2xl px-5 rounded-2xl">
                    <div className="flex justify-center mb-6 mt-4">
                        <Image
                            src="/images/login/copa-de-oro.png"
                            alt="Login Illustration"
                            width={120}
                            height={300}
                        />
                    </div>
                    <div>{children}</div>
                </div>
            </div>
        </>
    )
}