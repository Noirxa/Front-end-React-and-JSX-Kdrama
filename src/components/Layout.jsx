import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col">
            {/* Header: Rainbow Transport Identity */}
            <header className="border-b-4 border-yellow-500 p-6 bg-slate-900 flex justify-between items-center shadow-2xl">
                <div>
                    <h1 className="text-3xl font-black tracking-tighter text-yellow-500 uppercase">
                        Rainbow Transport <span className="text-white">// K-Drama Files</span>
                    </h1>
                    <p className="text-xs text-slate-400 italic">"Don't die, take revenge. We'll do it for you."</p>
                </div>
                <nav className="space-x-4">
                    <Link to="/" className="hover:text-yellow-500 font-bold uppercase tracking-widest text-sm transition-colors">Dashboard</Link>
                    <Link to="/dramas/create" className="bg-yellow-500 text-black px-4 py-2 font-bold text-sm uppercase hover:bg-white transition-all">New Mission</Link>
                </nav>
            </header>

            {/* Main Content Sector */}
            <main className="p-8 flex-grow">
                <Outlet />
            </main>

            {/* Footer: Persona & System Credits */}
            <footer className="bg-slate-900 border-t-2 border-yellow-500/30 p-8 mt-auto">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

                    {/* Kolom 1: Naam als Lead Agent */}
                    <div className="text-left">
                        <p className="text-[10px] uppercase font-black tracking-[0.3em] text-yellow-500 mb-1">
                            Lead Agent
                        </p>
                        <p className="text-sm text-white uppercase font-black tracking-widest">
                            Aya Zaid
                        </p>
                    </div>

                    {/* Kolom 2: Thema Unit ID */}
                    <div className="text-center border-x border-slate-800 px-4">
                        <p className="text-[10px] uppercase font-black tracking-[0.3em] text-slate-400">
                            Unit ID
                        </p>
                        <p className="text-[9px] text-yellow-500/70 font-mono mt-1 uppercase tracking-widest">
                            Deluxe Taxi #5173 // 7351-DB
                        </p>
                    </div>

                    {/* Kolom 3: De quote & Copyright */}
                    <div className="text-right">
                        <p className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-500">
                            © 2026 Rainbow Transport
                        </p>
                        <p className="text-[9px] text-red-600 uppercase font-black tracking-widest mt-1 animate-pulse">
                            "The meter is still running"
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}