import React from "react";

export default function BotonPanel({ text, href }) {
  return (
    <a
      className="p-8 rounded-md text-white text-3xl text-center bg-blue-600"
      href={href}
    >
      {text}
    </a>
  );
}
