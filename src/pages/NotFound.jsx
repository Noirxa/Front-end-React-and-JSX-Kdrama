import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center p-10 bg-black">
            <h1 className="text-9xl font-black text-zinc-900 animate-pulse">404</h1>
            <div className="mt-[-50px]">
                <h2 className="text-4xl font-black text-yellow-500 uppercase italic tracking-tighter">
                    Mission <span className="text-white">Compromised</span>
                </h2>
                <p className="text-zinc-500 mt-4 uppercase tracking-[0.3em] text-xs font-bold px-4">
                    The requested dossier does not exist or has been redacted.
                </p>
                <Link
                    to="/"
                    className="mt-10 inline-block bg-white text-black px-10 py-4 font-black uppercase text-xs hover:bg-yellow-500 transition-all"
                >
                    Return to Safehouse
                </Link>
            </div>
        </div>
    );
}