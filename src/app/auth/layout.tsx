import React from 'react'
import { Trophy } from "lucide-react";


interface AuthLayoutProps {
    children: React.ReactNode;
}
export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <>
            <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 flex items-center justify-center ">
                <div className="w-full max-w-md ">
                    <div className="flex justify-center mb-6 ">
                        <div className="bg-blue-500 rounded-3xl p-8 shadow-lg">
                            <Trophy className="w-20 h-20 text-white" />
                        </div>
                    </div>
                    <div>{children}</div>
                </div>
            </div>
        </>
    )
}