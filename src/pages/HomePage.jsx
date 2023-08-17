import { Link } from "react-router-dom";

function HomePage() {
  return (
  <section className="bg-red-500 flex justify-center items-center">
    <header className="bg-zinc-800 p-10">
      <h1 className="text-5xl py-2 font-bold">React version Beta</h1>
      <p className="text-md text-slate-400">
       Aplicacion para gestionar tareas,creada con React,Node y MongoDB,
       utilizando principalmente , react-router-dom, react-hook-form, Tailwind-css .
       Conectada a la api backend que esta en le repositoria a continuacion <Link to={"https://github.com/felipedev1996/backend-react-mongo-auth-crud"} className="text-blue-500 hover:text-blue-700 font-bold py-2 px-4 rounded">backend-react-mongo-auth-crud</Link>

       
      </p>

      <Link
        className="bg-zinc-500 text-white px-4 py-2 rounded-md mt-4 inline-block"
        to="/register"
      >
        Get Started
      </Link>
    </header>
  </section>
  );
}

export default HomePage;
