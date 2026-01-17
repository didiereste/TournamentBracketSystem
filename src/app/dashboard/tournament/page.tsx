"use client";
import Image from "next/image";
import { useState } from "react";

export default function Page() {

    const [deporteSeleccionado, setDeporteSeleccionado] = useState<string | null>(null);
    const deportes = [
        { id: "pingpong", img: "/images/ping-pong.png" },
        { id: "futbol", img: "/images/jugador-de-futbol.png" },
        { id: "basket", img: "/images/baloncesto.png" }
    ];

    return (
        <div className="w-full flex flex-col items-center py-6">

            <div className="bg-white w-[100%] max-w-6xl p-8 rounded-3xl shadow-xl">

                <h1 className="text-4xl font-bold text-center mb-10">Crear Torneo</h1>

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
                    <button className="bg-[var(--color-button-background)] text-white font-bold text-2xl px-16 py-4 hover:bg-blue-600 rounded-3xl shadow-xl">
                        Crear Torneo
                    </button>
                </div>

            </div>
        </div>
    );
}
