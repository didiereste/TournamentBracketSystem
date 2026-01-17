"use client";

import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { ArrowRightToLine,Mail,KeyRound, House, Trophy, ChartNoAxesCombined, Settings} from "lucide-react";

interface AuthLayoutProps {
    children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <div className="min-h-screen bg-[var(--color-background)] flex flex-col md:flex-row">
            <div className="w-full bg-[var(--color-dashboard-background)] px-4 mx-auto md:w-80 p-10 flex flex-col items-center md:items-center md:h-screen">
                <div className="flex justify-center shadow-xl rounded-2xl px-6 mb-5 bg-[var(--color-background)]">
                    <div className="flex items-center text-xl py-6 font-bold">
                        <p className="text-black">
                            PlayOff
                        </p>
                        <span className="text-white px-2 ml-2 rounded-2xl shadow-lg bg-black"> Hub</span>
                    </div>
                </div>

                <div className="flex justify-center mt-5 flex-col items-center">
                    <div className="w-32">
                        <Image
                            src="/images/dashboard/usuario.png"
                            alt="Trofeo"
                            width={128}
                            height={128}
                            className="drop-shadow-lg"
                        />
                    </div>
                    <p className="mt-6 text-black text-xl font-bold text-center">
                        Bienvenid@ Elvis
                    </p>
                </div>

                <div className="w-full rounded-3xl px-2 mt-5 space-y-6 flex flex-col ">
                    <Button text="Inicio" className="w-full py-5 shadow-xl" > <House/> </Button>
                    <Button text="Torneos" className="w-full py-5 shadow-xl"> <Trophy/> </Button>
                    <Button text="Análisis" className="w-full py-5 shadow-xl"> <ChartNoAxesCombined /> </Button>
                    <Button text="Configuración" className="w-full py-5 shadow-xl"> <Settings /> </Button>
                </div>

            </div>

            <div className="flex-1 p-6 md:p-10 text-black">
                {children}
            </div>
        </div>
    );
}