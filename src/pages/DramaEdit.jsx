//
// import { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useDramas } from '../context/DramaContext';
//
// export default function DramaEdit() {
//     const { id } = useParams();
//     const navigate = useNavigate();
//     const { updateDrama } = useDramas();
//
//     const [loading, setLoading] = useState(true);
//     const [formData, setFormData] = useState({
//         title: '',
//         director: '',
//         episodes: '',
//         genre: '',
//         description: '',
//         image: ''
//     });
//
//     useEffect(() => {
//         fetch(`http://145.24.237.12:8000/dramas/${id}`, {
//             headers: { 'Accept': 'application/json' }
//         })
//             .then(res => res.json())
//             .then(data => {
//                 setFormData({
//                     title: data.title || '',
//                     director: data.director || '',
//                     episodes: data.episodes || '',
//                     genre: data.genre || '',
//                     description: data.description || '',
//                     image: data.image || ''
//                 });
//                 setLoading(false);
//             })
//             .catch(err => {
//                 console.error("Fout bij ophalen:", err);
//                 setLoading(false);
//             });
//     }, [id]);
//
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({ ...prev, [name]: value }));
//     };
//
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await fetch(`http://145.24.237.12:8000/dramas/${id}`, {
//                 method: 'PUT',
//                 headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
//                 body: JSON.stringify(formData)
//             });
//
//             if (response.ok) {
//                 const updatedItem = await response.json();
//                 updateDrama(updatedItem);
//                 navigate('/');
//             }
//         } catch (err) {
//             console.error("Update error:", err);
//         }
//     };
//
//     if (loading) return (
//         <div className="min-h-screen bg-[#020617] flex items-center justify-center">
//             <p className="text-yellow-500 font-black uppercase animate-pulse text-xl">Decrypting Records...</p>
//         </div>
//     );
//
//     return (
//         <div className="min-h-screen bg-[#020617] p-8 flex justify-center items-center">
//             <form onSubmit={handleSubmit} className="bg-zinc-900 border border-zinc-800 p-10 max-w-2xl w-full shadow-2xl">
//                 <h2 className="text-4xl font-black text-yellow-500 uppercase italic mb-8 border-b border-yellow-500/20 pb-4">
//                     Modify <span className="text-white">Dossier</span>
//                 </h2>
//
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="flex flex-col">
//                         {/* Label naar text-xs (12px) en input naar text-base (16px) */}
//                         <label className="text-xs text-zinc-500 uppercase font-black mb-2 tracking-widest">Target Title</label>
//                         <input name="title" value={formData.title} onChange={handleChange} required
//                                className="bg-black border border-zinc-800 p-4 text-white focus:border-yellow-500 outline-none uppercase text-base font-bold transition-all" />
//                     </div>
//                     <div className="flex flex-col">
//                         <label className="text-xs text-zinc-500 uppercase font-black mb-2 tracking-widest">Director</label>
//                         <input name="director" value={formData.director} onChange={handleChange} required
//                                className="bg-black border border-zinc-800 p-4 text-white focus:border-yellow-500 outline-none uppercase text-base font-bold transition-all" />
//                     </div>
//                 </div>
//
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
//                     <div className="flex flex-col">
//                         <label className="text-xs text-zinc-500 uppercase font-black mb-2 tracking-widest">Genre</label>
//                         <input name="genre" value={formData.genre} onChange={handleChange} required
//                                className="bg-black border border-zinc-800 p-4 text-white focus:border-yellow-500 outline-none uppercase text-base font-bold transition-all" />
//                     </div>
//                     <div className="flex flex-col">
//                         <label className="text-xs text-zinc-500 uppercase font-black mb-2 tracking-widest">Episodes</label>
//                         <input name="episodes" type="number" value={formData.episodes} onChange={handleChange} required
//                                className="bg-black border border-zinc-800 p-4 text-white focus:border-yellow-500 outline-none text-base font-bold transition-all" />
//                     </div>
//                 </div>
//
//                 <div className="mt-6 flex flex-col">
//                     <label className="text-xs text-zinc-500 uppercase font-black mb-2 tracking-widest">Mission Briefing</label>
//                     <textarea name="description" value={formData.description} onChange={handleChange} required
//                               className="bg-black border border-zinc-800 p-4 text-white focus:border-yellow-500 outline-none text-base h-40 transition-all"></textarea>
//                 </div>
//
//                 <div className="mt-6 flex flex-col">
//                     <label className="text-xs text-zinc-500 uppercase font-black mb-2 tracking-widest">Image URL</label>
//                     <input name="image" type="url" value={formData.image} onChange={handleChange}
//                            className="bg-black border border-zinc-800 p-4 text-white focus:border-yellow-500 outline-none text-sm" />
//                 </div>
//
//                 <div className="flex gap-4 mt-10">
//                     <button type="submit" className="flex-1 bg-yellow-500 text-black font-black uppercase py-5 text-sm tracking-[0.2em] hover:bg-white transition-all transform hover:scale-[1.01]">
//                         Update Database
//                     </button>
//                     <button type="button" onClick={() => navigate(-1)} className="px-8 border border-zinc-800 text-zinc-500 uppercase text-xs font-black hover:text-white transition-colors">
//                         Abort
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// }

import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDramas } from '../context/DramaContext';

export default function DramaEdit() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { updateDrama } = useDramas();

    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        title: '',
        director: '',
        episodes: '',
        genre: '',
        description: '',
        image: ''
    });

    useEffect(() => {
        fetch(`http://145.24.237.12:8000/dramas/${id}`, {
            headers: { 'Accept': 'application/json' }
        })
            .then(res => {
                // EIS: Afhandeling van niet-bestaande detailpagina (404)
                if (!res.ok) {
                    navigate('/not-found', { replace: true });
                    return;
                }
                return res.json();
            })
            .then(data => {
                if (data) {
                    // EIS: Velden vooraf invullen met huidige waarden
                    setFormData({
                        title: data.title || '',
                        director: data.director || '',
                        episodes: data.episodes || '',
                        genre: data.genre || '',
                        description: data.description || '',
                        image: data.image || ''
                    });
                    setLoading(false);
                }
            })
            .catch(err => {
                console.error("Fout bij ophalen dossier:", err);
                setLoading(false);
            });
    }, [id, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // EIS: Volledige update via PUT request
            const response = await fetch(`http://145.24.237.12:8000/dramas/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const updatedItem = await response.json();
                // EIS: UI automatisch bijwerken via Context
                updateDrama(updatedItem);
                navigate(`/dramas/${id}`); // Terug naar detail na succes
            }
        } catch (err) {
            console.error("Update error:", err);
        }
    };

    if (loading) return (
        <div className="min-h-screen bg-[#020617] flex items-center justify-center">
            <p className="text-yellow-500 font-black uppercase animate-pulse text-xl tracking-widest">Accessing Classified Records...</p>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#020617] p-8 flex justify-center items-center font-sans">
            <form onSubmit={handleSubmit} className="bg-zinc-900 border border-zinc-800 p-10 max-w-2xl w-full shadow-2xl">
                <h2 className="text-4xl font-black text-yellow-500 uppercase italic mb-8 border-b border-yellow-500/20 pb-4">
                    Modify <span className="text-white">Dossier</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                        <label className="text-xs text-zinc-500 uppercase font-black mb-2 tracking-widest">Target Title</label>
                        <input name="title" value={formData.title} onChange={handleChange} required
                               className="bg-black border border-zinc-800 p-4 text-white focus:border-yellow-500 outline-none uppercase text-base font-bold transition-all" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-xs text-zinc-500 uppercase font-black mb-2 tracking-widest">Director</label>
                        <input name="director" value={formData.director} onChange={handleChange} required
                               className="bg-black border border-zinc-800 p-4 text-white focus:border-yellow-500 outline-none uppercase text-base font-bold transition-all" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="flex flex-col">
                        <label className="text-xs text-zinc-500 uppercase font-black mb-2 tracking-widest">Genre</label>
                        <input name="genre" value={formData.genre} onChange={handleChange} required
                               className="bg-black border border-zinc-800 p-4 text-white focus:border-yellow-500 outline-none uppercase text-base font-bold transition-all" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-xs text-zinc-500 uppercase font-black mb-2 tracking-widest">Episodes</label>
                        <input name="episodes" type="number" value={formData.episodes} onChange={handleChange} required
                               className="bg-black border border-zinc-800 p-4 text-white focus:border-yellow-500 outline-none text-base font-bold transition-all" />
                    </div>
                </div>

                <div className="mt-6 flex flex-col">
                    <label className="text-xs text-zinc-500 uppercase font-black mb-2 tracking-widest">Mission Briefing</label>
                    <textarea name="description" value={formData.description} onChange={handleChange} required
                              className="bg-black border border-zinc-800 p-4 text-white focus:border-yellow-500 outline-none text-base h-40 transition-all font-bold"></textarea>
                </div>

                <div className="mt-6 flex flex-col">
                    <label className="text-xs text-zinc-500 uppercase font-black mb-2 tracking-widest">Visual Evidence (URL)</label>
                    <input name="image" type="url" value={formData.image} onChange={handleChange}
                           className="bg-black border border-zinc-800 p-4 text-white focus:border-yellow-500 outline-none text-base font-bold transition-all" />
                </div>

                <div className="flex gap-4 mt-10">
                    <button type="submit" className="flex-1 bg-yellow-500 text-black font-black uppercase py-5 text-sm tracking-[0.2em] hover:bg-white transition-all transform hover:scale-[1.01]">
                        Update The Mission
                    </button>
                    <button type="button" onClick={() => navigate(-1)} className="px-8 border border-zinc-800 text-zinc-500 uppercase text-xs font-black hover:text-white transition-colors">
                        Abort
                    </button>
                </div>
            </form>
        </div>
    );
}