"use client";
import Image from "next/image";
import { useState } from "react";
import Button from "@/components/ui/Button";
import { SquarePlus } from "lucide-react";

export default function Page() {

    const [deporteSeleccionado, setDeporteSeleccionado] = useState<string | null>(null);
    const deportes = [
        { id: "pingpong", img: "/images/ping-pong.png" },
        { id: "futbol", img: "/images/jugador-de-futbol.png" },
        { id: "basket", img: "/images/baloncesto.png" }
    ];

    return (
        <div className="w-full flex flex-col items-center py-6">

            <div className="bg-[var(--color-dashboard-background)] w-[100%] max-w-6xl p-8 rounded-3xl shadow-xl">
                <div className="bg-[var(--color-button-background)] rounded-2xl p-2 mb-5 text-white shadow-lg">
                    <h1 className="text-2xl font-bold text-center">Gestión de torneo</h1>
                </div>

                <label className="text-lg font-semibold">Nombre torneo</label>
                <input
                    type="text"
                    className="w-full bg-gray-300 p-4 rounded-xl mb-6 mt-2 shadow-xl"
                />

                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label className="text-lg font-semibold">Ubicación</label>
                        <input
                            type="text"
                            className="w-full bg-gray-300 p-4 mt-2 rounded-xl shadow-xl"
                        />
                    </div>

                    <div>
                        <label className="text-lg font-semibold">Descripción</label>
                        <textarea
                            className="w-full h-28 bg-gray-300 p-4 mt-2 rounded-xl resize-none shadow-xl">
                        </textarea>
                    </div>
                </div>

                <div className="mt-4">
                    <label className="text-lg font-semibold">Deportes</label>
                    <div className="flex gap-6 mt-2">

                        {deportes.map(dep => (
                            <button
                                key={dep.id}
                                onClick={() => setDeporteSeleccionado(dep.id)}
                                className={`p-1 rounded-full border-4
                                ${deporteSeleccionado === dep.id ? "border-blue-400" : "border-transparent"}`}
                            >
                                <Image
                                    src={dep.img}
                                    alt={dep.id}
                                    width={90}
                                    height={90}
                                    className="rounded-full cursor-pointer"
                                />
                            </button>
                        ))}

                    </div>
                </div>

                <div className="flex justify-center mt-10" id="btn-create">
                    <Button
                        text="Crear Torneo"
                        className="w-full justify-center max-w-xs bg-[var(--color-button-background)] py-4"
                    >
                        <SquarePlus />
                    </Button>
                </div>

            </div>
        </div>
    );
}
