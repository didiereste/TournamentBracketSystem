import React from "react";
import Image from "next/image";

interface AuthLayoutProps {
    children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-200 to-blue-200 flex flex-col md:flex-row">
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

                <div className="w-full max-w-xs bg-blue-100 rounded-3xl p-8 space-y-6 flex flex-col shadow-xl">
                    <button className="w-full bg-[var(--color-button-background)] text-white font-bold py-4 rounded-2xl text-lg hover:bg-blue-600 shadow-xl">
                        Dashboard
                    </button>

                    <button className="w-full bg-[var(--color-button-background)] text-white font-bold py-4 rounded-2xl text-lg hover:bg-blue-600 shadow-xl">
                        Torneos
                    </button>

                    <button className="w-full bg-[var(--color-button-background)] text-white font-bold py-4 rounded-2xl text-lg hover:bg-blue-600 shadow-xl">
                        Análisis
                    </button>

                    <button className="w-full bg-[var(--color-button-background)] text-white font-bold py-4 rounded-2xl text-lg hover:bg-blue-600 shadow-xl">
                        Configuración
                    </button>
                </div>

                <p className="mt-6 text-black text-xl font-bold text-center">
                    Bienvenid@ Elvis
                </p>
            </div>

            <div className="flex-1 p-6 md:p-10 text-black">
                {children}
            </div>
        </div>
    );
}