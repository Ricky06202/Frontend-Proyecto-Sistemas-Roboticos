
import React, { useState } from "react";

export default function Formularioeditar() {
  const [formData, setFormData] = useState({
    name: "",
    apellido:"",
    email: "",
    role: "",
    password: "",
  });


const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del formulario enviados:", formData);
  

  };  

  return (
    <div className="flex flex-col items-center gap-8 dark:text-white">
      {/* Título */}
      <h2 className="text-6xl font-bold justify-center">Editar información del Usuario</h2>
      <p className="text-xl text-center p-8">
        En esta sección el administrador podra editar la informacion del usuario.
      </p>

      {/* Formulario para la gestión de usuarios */}
      <form onSubmit={handleSubmit} className="user-form bg-gray-100 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h3 className="text-2xl font-semibold mb-6">Ingrese los datos correspondientes</h3>

        {/* Campo de nombre */}
        <div className="form-group mb-4">
          <label htmlFor="name" className="block text-gray-900 font-medium mb-2">
            Nombre:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder=" "
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Campo de apellido */}
        <div className="form-group mb-4">
          <label htmlFor="apellido" className="block text-gray-900 font-medium mb-2">
            Apellido:
          </label>
          <input
            type="text"
            id="apellido"
            name="aapellido"
            value={formData.apellido}
            onChange={handleChange}
            placeholder=""
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Campo de correo */}
        <div className="form-group mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Correo electrónico:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Ej: juan.perez@ejemplo.com"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Campo de rol */}
        <div className="form-group mb-4">
          <label htmlFor="role" className="block text-gray-700 font-medium mb-2">
            Rol:
          </label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="" disabled>
              Selecciona un rol
            </option>
            <option value="student">Estudiante</option>
            <option value="teacher">Profesor</option>
          </select>
        </div>

        {/* Campo de contraseña */}
        <div className="form-group mb-4">
          <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
            Contraseña:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Crear contraseña nueva"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Botón de envío */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Editar Información
        </button>
      </form>
    </div>
  );
}
