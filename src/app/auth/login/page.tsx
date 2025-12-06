"use client";

import { Volleyball } from "lucide-react";
import  Button  from "@/components/ui/Button";

export default function LoginPage() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">
        Iniciar sesion
      </h1>

      <div className="space-y-4">

        <input
          type="email"
          placeholder="Email"
          className="w-full px-6 py-4 bg-white rounded-full text-gray-700 placeholder-gray-400 shadow-sm"
        />


        <input
          type="password"
          placeholder="Password"
          className="w-full px-6 py-4 bg-white rounded-full text-gray-700 placeholder-gray-400  shadow-sm"
        />

        <div className="flex justify-center mt-4">
          <Button label="Iniciar sesion" className="font-semibold rounded-full hover:bg-blue-600 transition-colors shadow-md"/>
        </div>
        
      </div>


      <div className="text-center mt-6 space-y-2">
        <a href="#" className="block text-blue-900 hover:underline">
          Olvidaste tu contraseña?
        </a>
        <p className="text-blue-900">
          No tienes una cuenta?
          <a href="#" className="ml-2">
            Registrar
          </a>
        </p>
      </div>


      <div className="flex justify-center items-center p-6">
        <div className="flex justify-center items-center">
          <div className="bg-blue-500 rounded-3xl p-8 shadow-lg">
            <Volleyball className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>

    </>
  );
}