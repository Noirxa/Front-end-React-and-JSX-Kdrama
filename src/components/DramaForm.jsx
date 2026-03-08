

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DramaForm() {
    const [formData, setFormData] = useState({
        title: '',
        director: '',
        episodes: '',
        genre: 'Action',
        description: '',
        image: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://145.24.237.12:8000/dramas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                // Na succes gaan we terug naar de lijst
                navigate('/');
            } else {
                const errorData = await response.json();
                alert("Mission Failed: " + errorData.error);
            }
        } catch (err) {
            console.error("Submit error:", err);
        }
    };

    return (
        <div className="max-w-2xl mx-auto my-10 bg-slate-900 border border-slate-800 p-10 shadow-2xl">
            <h2 className="text-4xl font-black text-yellow-500 uppercase mb-8 italic italic tracking-tighter">
                Dispatch New <span className="text-white">Mission</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-slate-500 uppercase text-[10px] font-black tracking-widest mb-2">Drama Title</label>
                    <input type="text" name="title" onChange={handleChange} required className="w-full bg-black border border-slate-800 p-3 text-white focus:border-yellow-500 outline-none transition-all" />
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label className="block text-slate-500 uppercase text-[10px] font-black tracking-widest mb-2">Director</label>
                        <input type="text" name="director" onChange={handleChange} required className="w-full bg-black border border-slate-800 p-3 text-white focus:border-yellow-500 outline-none transition-all" />
                    </div>
                    <div>
                        <label className="block text-slate-500 uppercase text-[10px] font-black tracking-widest mb-2">Episodes</label>
                        <input type="number" name="episodes" onChange={handleChange} required className="w-full bg-black border border-slate-800 p-3 text-white focus:border-yellow-500 outline-none transition-all" />
                    </div>
                </div>

                <div>
                    <label className="block text-slate-500 uppercase text-[10px] font-black tracking-widest mb-2">Poster URL</label>
                    <input type="url" name="image" onChange={handleChange} placeholder="https://..." className="w-full bg-black border border-slate-800 p-3 text-white focus:border-yellow-500 outline-none transition-all" />
                    <p className="text-[9px] text-slate-600 mt-1 uppercase">Tip: Use picsum.photos for testing</p>
                </div>

                <div>
                    <label className="block text-slate-500 uppercase text-[10px] font-black tracking-widest mb-2">Briefing / Description</label>
                    <textarea name="description" onChange={handleChange} required rows="4" className="w-full bg-black border border-slate-800 p-3 text-white focus:border-yellow-500 outline-none transition-all"></textarea>
                </div>

                <button type="submit" className="w-full bg-yellow-500 text-black font-black uppercase py-4 hover:bg-white transition-all transform hover:scale-[1.02]">
                    Register Mission
                </button>
            </form>
        </div>
    );
}