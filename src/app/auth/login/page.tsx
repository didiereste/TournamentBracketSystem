"use client";

import Button from "@/components/ui/Button";
import Image from "next/image";
import { ArrowRightToLine, Mail, KeyRound } from "lucide-react";


export default function LoginPage() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center text-black mb-8">
        Inicio de Sesión
      </h1>
      <form>
        <div className="space-y-6">
          <div className="relative w-full">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-800" />

            <label htmlFor="email" className="sr-only">
              Correo electrónico
            </label>

            <input
              id="email"
              type="email"
              placeholder="Correo electrónico"
              className="w-full pl-12 px-4 py-4 bg-white rounded-full text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none"
            />
          </div>

          <div className="relative w-full">
            <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-800" />

            <label htmlFor="password" className="sr-only">
              Contraseña
            </label>

            <input
              id="password"
              type="password"
              placeholder="Contraseña"
              className="w-full pl-12 px-6 py-4 bg-white rounded-full text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none"
            />
          </div>

          <div className="flex justify-center mt-1">
            <Button
              text="Iniciar sesion"
              className="w-full">
              <ArrowRightToLine size={23} />
            </Button>
          </div>
        </div>
      </form>

      <div className="text-center mt-5">
        <a href="#" className="font-bold text-black hover:underline">
          Olvidaste tu contraseña?
        </a>
      </div>

      <div className="flex justify-center items-center p-6">
        <div className="flex justify-center items-center space-x-10 mt-2">
          <div className="rounded-3xl p-2 shadow-lg">
            <Image
              src="/images/login/ping-pong.png"
              alt="icono pingpong"
              width={80}
              height={50}
            />
          </div>
          <div className="rounded-3xl p-2 shadow-lg">
            <Image
              src="/images/login/jugador-de-futbol.png"
              alt="icono futbol"
              width={80}
              height={50}
            />
          </div>
          <div className="rounded-3xl p-2 shadow-lg">
            <Image
              src="/images/login/baloncesto.png"
              alt="icono baloncesto"
              width={80}
              height={50}
            />
          </div>
        </div>
      </div>
    </>
  );
}
