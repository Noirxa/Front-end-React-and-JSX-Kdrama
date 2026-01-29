// // // import { Link } from 'react-router-dom';
// // // import { HiStar, HiOutlineStar } from 'react-icons/hi';
// // // import { useDramas } from '../context/DramaContext';
// // //
// // // export default function DramaCard({ drama }) {
// // //     const { toggleBookmark } = useDramas();
// // //
// // //     return (
// // //         <article className="bg-zinc-900 border border-zinc-800 overflow-hidden hover:border-yellow-500 transition-all group relative flex flex-col shadow-lg">
// // //
// // //             {/* BOOKMARK BUTTON */}
// // //             <button
// // //                 onClick={(e) => {
// // //                     e.preventDefault();
// // //                     toggleBookmark(drama._id);
// // //                 }}
// // //                 className="absolute top-4 right-4 z-20 p-2 bg-black/60 rounded-full text-yellow-500 border border-yellow-500/20 hover:scale-110 transition-transform"
// // //             >
// // //                 {drama.isBookmarked ? <HiStar size={22} /> : <HiOutlineStar size={22} />}
// // //             </button>
// // //
// // //             {/* IMAGE */}
// // //             <div className="h-72 overflow-hidden bg-zinc-800 relative">
// // //                 <img
// // //                     src={drama.image || 'https://via.placeholder.com/400x600?text=No+Visual'}
// // //                     alt={drama.title}
// // //                     className={`w-full h-full object-cover transition-all duration-700
// // //                     ${drama.isBookmarked ? 'grayscale-0 border-b-4 border-yellow-500' : 'grayscale group-hover:grayscale-0'}`}
// // //                 />
// // //             </div>
// // //
// // //             {/* INFO - Hier stond de fout */}
// // //             <div className="p-6 flex-grow flex flex-col justify-between">
// // //                 <div>
// // //                     <h2 className="text-xl font-black text-yellow-500 uppercase italic tracking-tighter leading-none mb-2">
// // //                         {drama.title}
// // //                     </h2>
// // //                     {/* Zorg dat deze velden exact overeenkomen met je database-namen */}
// // //                     <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold">
// // //                         {drama.genre} // {drama.director}
// // //                     </p>
// // //                 </div>
// // //
// // //                 <Link
// // //                     to={`/dramas/${drama._id}`}
// // //                     className="mt-6 text-center text-[10px] font-black tracking-[0.3em] text-white border border-white/10 py-3 hover:bg-yellow-500 hover:text-black transition-all uppercase"
// // //                 >
// // //                     View Dossier
// // //                 </Link>
// // //             </div>
// // //         </article>
// // //     );
// // // }
// //
// // import { Link } from 'react-router-dom';
// // import { HiStar, HiOutlineStar } from 'react-icons/hi';
// // import { useDramas } from '../context/DramaContext';
// //
// // export default function DramaCard({ drama }) {
// //     const { toggleFavorite } = useDramas();
// //
// //     return (
// //         <article className="bg-zinc-900 border border-zinc-800 overflow-hidden hover:border-yellow-500 transition-all group relative flex flex-col shadow-lg">
// //
// //             {/* FAVORITE BUTTON - Gebruikt PATCH request */}
// //             <button
// //                 onClick={(e) => {
// //                     e.preventDefault();
// //                     toggleFavorite(drama._id);
// //                 }}
// //                 className="absolute top-4 right-4 z-20 p-2 bg-black/60 rounded-full text-yellow-500 border border-yellow-500/20 hover:scale-110 transition-transform"
// //             >
// //                 {drama.isFavorite ? <HiStar size={24} /> : <HiOutlineStar size={24} />}
// //             </button>
// //
// //             <div className="h-72 overflow-hidden bg-zinc-800 relative">
// //                 <img
// //                     src={drama.image || 'https://via.placeholder.com/400x600?text=No+Visual'}
// //                     alt={drama.title}
// //                     className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
// //                 />
// //             </div>
// //
// //             <div className="p-6">
// //                 <h2 className="text-2xl font-black text-yellow-500 uppercase italic mb-2 tracking-tighter">
// //                     {drama.title}
// //                 </h2>
// //                 <p className="text-zinc-500 text-xs uppercase font-bold tracking-widest">
// //                     {drama.genre} // {drama.director}
// //                 </p>
// //                 <Link
// //                     to={`/dramas/${drama._id}`}
// //                     className="mt-6 block text-center text-xs font-black tracking-widest text-white border border-white/10 py-4 hover:bg-yellow-500 hover:text-black transition-all uppercase"
// //                 >
// //                     View dossier
// //                 </Link>
// //             </div>
// //         </article>
// //     );
// // }
//
// import { Link } from 'react-router-dom';
// import { useDramas } from '../context/DramaContext';
// // Importeer het taxi-icoon (onderdeel van react-icons)
// import { FaTaxi } from 'react-icons/fa';
//
// export default function DramaCard({ drama }) {
//     const { toggleFavorite } = useDramas();
//
//     return (
//         <article className="bg-zinc-900 border border-zinc-800 overflow-hidden hover:border-yellow-500 transition-all group relative flex flex-col shadow-lg">
//
//             {/* TAXI FAVORITE BUTTON - [cite: 48] Gebruikt PATCH request voor favorite state */}
//             <button
//                 onClick={(e) => {
//                     e.preventDefault();
//                     toggleFavorite(drama._id);
//                 }}
//                 className="absolute top-4 right-4 z-20 p-3 bg-black/70 rounded-full border border-zinc-800 hover:border-yellow-500 hover:scale-110 transition-all"
//                 title={drama.isFavorite ? "Mission Active" : "Assign Mission"}
//             >
//                 <FaTaxi
//                     size={22}
//                     className={drama.isFavorite
//                         ? "text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]"
//                         : "text-zinc-600"}
//                 />
//             </button>
//
//             {/* IMAGE - [cite: 3, 35] Overzicht toont nog niet alle details */}
//             <div className="h-72 overflow-hidden bg-zinc-800 relative">
//                 <img
//                     src={drama.image || 'https://via.placeholder.com/400x600?text=No+Visual+Evidence'}
//                     alt={drama.title}
//                     className={`w-full h-full object-cover transition-all duration-700
//                     ${drama.isFavorite ? 'grayscale-0' : 'grayscale group-hover:grayscale-0'}`}
//                 />
//                 {drama.isFavorite && (
//                     <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-500 shadow-[0_0_10px_#eab308]"></div>
//                 )}
//             </div>
//
//             <div className="p-6 flex flex-col justify-between flex-grow">
//                 <div>
//                     <h2 className="text-2xl font-black text-yellow-500 uppercase italic mb-2 tracking-tighter leading-tight">
//                         {drama.title}
//                     </h2>
//                     <p className="text-zinc-500 text-xs uppercase font-bold tracking-widest">
//                         {drama.genre} // {drama.director}
//                     </p>
//                 </div>
//
//                 {/* [cite: 4, 37] Link naar detailweergave met eigen URL */}
//                 <Link
//                     to={`/dramas/${drama._id}`}
//                     className="mt-6 block text-center text-xs font-black tracking-[0.2em] text-white border border-white/10 py-4 hover:bg-yellow-500 hover:text-black transition-all uppercase"
//                 >
//                     View dossier
//                 </Link>
//             </div>
//         </article>
//     );
// }

import { Link } from 'react-router-dom';
import { useDramas } from '../context/DramaContext';
import { FaTaxi } from 'react-icons/fa';

export default function DramaCard({ drama }) {
    const { toggleFavorite } = useDramas();

    return (
        <article className="bg-slate-900 border border-slate-800 overflow-hidden hover:border-yellow-500 transition-all duration-300 group relative flex flex-col shadow-lg">

            {/* 1. TAXI FAVORITE BUTTON (Rechtsboven) */}
            <button
                onClick={(e) => {
                    e.preventDefault();
                    toggleFavorite(drama._id);
                }}
                className="absolute top-4 right-4 z-30 p-2.5 bg-slate-950/90 border border-slate-800 hover:border-yellow-500 transition-all shadow-md"
            >
                <FaTaxi
                    size={18}
                    className={drama.isFavorite ? "text-yellow-500" : "text-slate-700"}
                />
            </button>

            {/* 2. CLASSIFIED STAMP (Linksboven - Strak en opgeruimd) */}
            {drama.isFavorite && (
                <div className="absolute top-4 left-4 z-20 pointer-events-none select-none">
                    <div className="border-2 border-red-600/90 text-red-600/90 px-3 py-0.5 font-black text-xs uppercase tracking-[0.2em] bg-slate-950/80 backdrop-blur-sm">
                        Classified
                    </div>
                </div>
            )}

            {/* 3. IMAGE SECTOR */}
            <div className="h-72 overflow-hidden bg-black relative">
                <img
                    src={drama.image || 'https://via.placeholder.com/400x600?text=NO+IMAGE'}
                    alt={drama.title}
                    className={`w-full h-full object-cover transition-all duration-700 
                    ${drama.isFavorite ? 'grayscale-0' : 'grayscale group-hover:grayscale-0'}`}
                />

                {/* Gele lijn onder de foto bij selectie */}
                {drama.isFavorite && (
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-500"></div>
                )}
            </div>

            {/* 4. DOSSIER INFO */}
            <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                    <h2 className="text-2xl font-black text-white uppercase italic mb-3 tracking-tighter leading-none group-hover:text-yellow-500 transition-colors">
                        {drama.title}
                    </h2>

                    {/* HET BOLLETJE (Statisch geel bij favorite) */}
                    <div className="flex items-center gap-3">
                        <span className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
                            drama.isFavorite ? 'bg-yellow-500 shadow-[0_0_5px_#eab308]' : 'bg-slate-800'
                        }`}></span>

                        <p className="text-slate-500 text-[11px] uppercase font-bold tracking-[0.2em]">
                            {drama.genre} <span className="text-slate-800 mx-1">|</span> {drama.director}
                        </p>
                    </div>
                </div>

                {/* 5. ACTIE KNOP */}
                <Link
                    to={`/dramas/${drama._id}`}
                    className="mt-8 block text-center text-[11px] font-black tracking-[0.4em] text-white border border-slate-800 py-4 hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all uppercase"
                >
                    View Dossier
                </Link>
            </div>
        </article>
    );
}
