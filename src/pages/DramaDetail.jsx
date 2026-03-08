import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useDramas } from '../context/DramaContext';
import { HiArrowLeft, HiPencil, HiTrash } from 'react-icons/hi';

export default function DramaDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { deleteDramaState } = useDramas();
    const [drama, setDrama] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://145.24.237.12:8000/dramas/${id}`, {
            headers: { 'Accept': 'application/json' }
        })
            .then(res => {
                if (!res.ok) {
                    //  Afhandeling voor niet bestaande detailpagina
                    navigate('/not-found', { replace: true });
                    return;
                }
                return res.json();
            })
            .then(data => {
                if (data) {
                    setDrama(data);
                    setLoading(false);
                }
            })
            .catch(err => {
                console.error("Detail error:", err);
                setLoading(false);
            });
    }, [id, navigate]);

    //  Verwijderen van items
    const handleDelete = async () => {
        if (!window.confirm("ARE YOU SURE YOU WANT TO PURGE THIS DOSSIER?")) return;

        try {
            const response = await fetch(`http://145.24.237.12:8000/dramas/${id}`, {
                method: 'DELETE',
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                // Index moet automatisch bijwerken
                deleteDramaState(id);
                navigate('/');
            }
        } catch (err) {
            console.error("Delete failed", err);
        }
    };

    if (loading) return (
        <div className="min-h-screen bg-black flex items-center justify-center">
            <p className="text-yellow-500 font-black animate-pulse tracking-[0.5em]">DECRYPTING DOSSIER...</p>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#020617] text-white p-6 md:p-12 font-sans">
            <div className="max-w-6xl mx-auto">
                {/* Back Button */}
                <Link to="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-yellow-500 transition-colors mb-12 uppercase text-[10px] font-black tracking-widest">
                    <HiArrowLeft /> Back to Archive
                </Link>

                {/* [cite: 3, 36] Detailweergave Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-zinc-900/50 border border-zinc-800 shadow-2xl">

                    {/* LEFT: Content Section (Col-span 7) */}
                    <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-zinc-800">
                        <div>
                            <div className="flex justify-between items-start mb-8">
                                <h1 className="text-5xl font-black text-yellow-500 uppercase italic leading-none tracking-tighter">
                                    {drama.title}
                                </h1>
                                <span className="bg-yellow-500 text-black px-3 py-1 text-[10px] font-black uppercase tracking-widest">
                                    Classified
                                </span>
                            </div>

                            <div className="space-y-8">
                                <div className="border-l-2 border-yellow-500 pl-4">
                                    <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest mb-1">Director</p>
                                    <p className="text-2xl font-bold uppercase tracking-tight">{drama.director}</p>
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest mb-2">Genre</p>
                                        <p className="font-bold uppercase text-sm border-b border-zinc-800 pb-2">{drama.genre}</p>
                                    </div>
                                    <div>
                                        <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest mb-2">Episodes</p>
                                        <p className="font-bold uppercase text-sm border-b border-zinc-800 pb-2">{drama.episodes}</p>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest mb-3">Briefing Data</p>
                                    <p className="text-zinc-400 leading-relaxed text-sm italic bg-black/30 p-6 border border-zinc-800/50">
                                        "{drama.description}"
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="mt-12 flex gap-4 pt-8 border-t border-zinc-800">
                            {/* [cite: 39] Bewerken met huidige waarden */}
                            <Link
                                to={`/dramas/${drama._id}/edit`}
                                className="flex-grow flex items-center justify-center gap-3 bg-white text-black py-4 font-black uppercase text-[10px] tracking-widest hover:bg-yellow-500 transition-all"
                            >
                                <HiPencil size={16} /> Edit Dossier
                            </Link>

                            <button
                                onClick={handleDelete}
                                className="px-6 bg-zinc-950 border border-zinc-800 text-zinc-600 hover:text-red-500 hover:border-red-500 transition-all"
                            >
                                <HiTrash size={18} />
                            </button>
                        </div>
                    </div>

                    {/* RIGHT: Image Section (Col-span 5) */}
                    <div className="lg:col-span-5 bg-black">
                        <div className="h-full min-h-[500px] overflow-hidden">
                            <img
                                src={drama.image || 'https://via.placeholder.com/600x800?text=NO+VISUAL'}
                                alt={drama.title}
                                className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}