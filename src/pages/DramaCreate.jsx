//
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useDramas } from '../context/DramaContext';
//
// export default function DramaCreate() {
//     const [formData, setFormData] = useState({
//         title: '', director: '', episodes: '', genre: '', description: '', image: ''
//     });
//     const { addDrama } = useDramas();
//     const navigate = useNavigate();
//
//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };
//
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await fetch('http://145.24.237.12:8000/dramas', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
//                 body: JSON.stringify(formData)
//             });
//
//             if (response.ok) {
//                 const newMission = await response.json();
//                 addDrama(newMission); // Basiseis: Automatisch bijwerken
//                 navigate('/');
//             }
//         } catch (err) {
//             console.error("Create error:", err);
//         }
//     };
//
//     return (
//         <div className="min-h-screen bg-[#020617] p-8 flex justify-center items-center">
//             <form onSubmit={handleSubmit} className="bg-zinc-900 border border-zinc-800 p-10 max-w-2xl w-full">
//                 <h1 className="text-3xl font-black text-yellow-500 uppercase italic mb-8 tracking-tighter border-b border-yellow-500/20 pb-4">
//                     New <span className="text-white">Mission</span>
//                 </h1>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <input name="title" placeholder="TITLE" required onChange={handleChange} className="bg-black border border-zinc-800 p-3 text-white uppercase text-xs" />
//                     <input name="director" placeholder="DIRECTOR" required onChange={handleChange} className="bg-black border border-zinc-800 p-3 text-white uppercase text-xs" />
//                     <input name="genre" placeholder="GENRE" required onChange={handleChange} className="bg-black border border-zinc-800 p-3 text-white uppercase text-xs" />
//                     <input name="episodes" type="number" placeholder="EPISODES" required onChange={handleChange} className="bg-black border border-zinc-800 p-3 text-white uppercase text-xs" />
//                 </div>
//                 <textarea name="description" placeholder="BRIEFING" required onChange={handleChange} className="w-full mt-6 bg-black border border-zinc-800 p-3 text-white text-xs h-32"></textarea>
//                 <input name="image" placeholder="IMAGE URL" type="url" onChange={handleChange} className="w-full mt-6 bg-black border border-zinc-800 p-3 text-white text-xs" />
//                 <button type="submit" className="w-full mt-10 bg-yellow-500 text-black font-black uppercase py-4 tracking-widest hover:bg-white transition-all">
//                     Register Mission
//                 </button>
//             </form>
//         </div>
//     );
// }

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDramas } from '../context/DramaContext';

export default function DramaCreate() {
    const [formData, setFormData] = useState({
        title: '', director: '', episodes: '', genre: '', description: '', image: ''
    });
    const { addDrama } = useDramas();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Fix voor de checker: stuur episodes als string
        const safeData = { ...formData, episodes: formData.episodes.toString() };

        try {
            const response = await fetch('http://145.24.237.12:8000/dramas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(safeData)
            });

            if (response.ok) {
                const newMission = await response.json();
                addDrama(newMission);
                navigate('/');
            }
        } catch (err) {
            console.error("Create error:", err);
        }
    };

    return (
        <div className="min-h-screen bg-[#020617] p-8 flex justify-center items-center font-sans">
            <form onSubmit={handleSubmit} className="bg-zinc-900 border border-zinc-800 p-10 max-w-2xl w-full shadow-2xl">
                <h1 className="text-4xl font-black text-yellow-500 uppercase italic mb-8 border-b border-yellow-500/20 pb-4">
                    New <span className="text-white">Dossier</span>
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input name="title" placeholder="TITLE" required onChange={handleChange} className="bg-black border border-zinc-800 p-4 text-white uppercase text-base font-bold" />
                    <input name="director" placeholder="DIRECTOR" required onChange={handleChange} className="bg-black border border-zinc-800 p-4 text-white uppercase text-base font-bold" />
                    <input name="genre" placeholder="GENRE" required onChange={handleChange} className="bg-black border border-zinc-800 p-4 text-white uppercase text-base font-bold" />
                    <input name="episodes" type="number" placeholder="EPISODES" required onChange={handleChange} className="bg-black border border-zinc-800 p-4 text-white text-base font-bold" />
                </div>
                <textarea name="description" placeholder="BRIEFING" required onChange={handleChange} className="w-full mt-6 bg-black border border-zinc-800 p-4 text-white text-base h-40"></textarea>
                <input name="image" placeholder="IMAGE URL" type="url" onChange={handleChange} className="w-full mt-6 bg-black border border-zinc-800 p-4 text-white text-sm" />
                <button type="submit" className="w-full mt-10 bg-yellow-500 text-black font-black uppercase py-5 text-sm tracking-[0.2em] hover:bg-white transition-all">
                    Register Mission
                </button>
            </form>
        </div>
    );
}