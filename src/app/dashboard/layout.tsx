import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

interface AuthLayoutProps {
    children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <div className="min-h-screen bg-[var(--color-background)] flex flex-col md:flex-row">
            <div className="w-full md:w-80 p-10 flex flex-col items-center md:items-center md:h-screen">
                <div className="flex justify-center mb-10 md:mb-16">
                    <div className="w-32">
                        <Image
                            src="/images/torneo.png"
                            alt="Trofeo"
                            width={128}
                            height={128}
                            className="drop-shadow-lg"
                        />
                    </div>
                </div>

                <div className="w-full max-w-xs bg-white rounded-3xl p-8 space-y-6 flex flex-col shadow-xl">
                    <Button text="Dashboard" className="w-full py-5 shadow-xl" />
                    <Button text="Torneos" className="w-full py-5 shadow-xl" />
                    <Button text="Análisis" className="w-full py-5 shadow-xl" />
                    <Button text="Configuración" className="w-full py-5 shadow-xl" />
                </div>

            </div>

            <div className="flex-1 p-6 md:p-10 text-black">
                {children}
            </div>
        </div>
    );
}