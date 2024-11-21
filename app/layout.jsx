import './globals.css'; // Archivo global de estilos

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Configuración</title>
      </head>
      <body className="bg-black text-white antialiased">
        <div className="flex flex-col min-h-screen">
          {/* Menú superior */}
          <header className="bg-black border-b border-gray-700">
       
          </header>

          {/* Contenido principal */}
          <main className="flex-grow container mx-auto p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
