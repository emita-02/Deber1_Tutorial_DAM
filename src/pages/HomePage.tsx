import { Link } from "react-router-dom";

export const HomePage = () => {
    const modulos = [
        {
            id: 1,
            title: "Introducción a TypeScript en React",
            desc: "Tipos basicos, inerencia, arrays y tuplas.",
            path: "/modulo1"
        },
        {
            id: 2,
            title: "Props y Estado",
            desc: "Props opcionales, defaults y useState tipado.",
            path: "/modulo2"
        }
    ];
    return (

        <main className="min-h-screen bg-neutral-950 text-neutral-100">
            <section className="mx-auto max-w-3xl px-6 py-12">
                <header className="mb-8">
                    <h1 className="text-2x1 md:text-3x1 font-semibold text-amber-400">
                        React + TypeScript
                    </h1>
                    <p className="text-sm text-neutral-400">
                        Navega por los módulos del curso.
                    </p>
                </header>
                <nav className="space-y-3">
                    {modulos.map((item) => (
                        <Link to={item.path} key={item.id} className="group block rounded-xl boder boder-neutral-800 bg-neutral-900/60 px-5 py. transition hover:border-blue- hover:bg-neutral-900">
                            <div className="flex items-center justify-between gap-3">  
                                <div>
                                    <span>
                                        Modulo
                                    </span>
                                    <h2 className="mt-1 text-lg font-medium text-neutral-100">
                                        {item.title}
                                    </h2>
                                    <p className="text-sm text-neutral-400">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </nav>
            </section>
        </main>
    );
};