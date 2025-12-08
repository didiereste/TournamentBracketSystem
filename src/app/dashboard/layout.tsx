import React from "react";
import Image from "next/image";

interface AuthLayoutProps {
    children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-200 to-blue-200 flex justify-start items-start">
            <div className="w-full max-w-sm p-10 items-center justify-center my-auto">
                <div className="flex justify-center mb-16">
                    <div className="w-32">
                        <Image
                            src="/images/torneo.png"
                            alt="Trofeo"
                            width={128}
                            height={128}
                        />
                    </div>
                </div>

                {/* Botones con nueva paleta */}
                <div className="w-full bg-blue-100 rounded-3xl p-8 space-y-8 flex flex-col">
                    <button className="w-full bg-[var(--color-button-background)] text-white font-bold py-4 rounded-2xl text-lg hover:bg-blue-600">
                        Dashboard
                    </button>

                    <button className="w-full bg-[var(--color-button-background)] text-white font-bold py-4 rounded-2xl text-lg hover:bg-blue-600">
                        Torneos
                    </button>

                    <button className="w-full bg-[var(--color-button-background)] text-white font-bold py-4 rounded-2xl text-lg hover:bg-blue-600">
                        Análisis
                    </button>

                    <button className="w-full bg-[var(--color-button-background)] text-white font-bold py-4 rounded-2xl text-lg hover:bg-blue-600">
                        Configuración
                    </button>
                </div>

                <p className="mt-10 text-black text-xl font-bold text-center">
                    Bienvenid@ Elvis
                </p>
            </div>

            {/* Columna derecha: contenido dinámico */}
            <div className="flex-1 p-10 text-black">
                {children}
            </div>
        </div>
    );
}