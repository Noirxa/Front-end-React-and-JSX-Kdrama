// // // import { useDramas } from '../context/DramaContext';
// // // import DramaCard from '../components/DramaCard';
// // //
// // // export default function DramaIndex() {
// // //     // We halen alles wat we nodig hebben uit de "centrale opslag" (Context)
// // //     const {
// // //         filteredDramas,
// // //         loading,
// // //         setSearchTerm,
// // //         showFavoritesOnly,
// // //         setShowFavoritesOnly
// // //     } = useDramas();
// // //
// // //     if (loading) return (
// // //         <div className="min-h-screen bg-[#020617] flex items-center justify-center">
// // //             <p className="text-yellow-500 font-black uppercase animate-pulse tracking-[0.3em]">
// // //                 Accessing Archive...
// // //             </p>
// // //         </div>
// // //     );
// // //
// // //     return (
// // //         <div className="bg-[#020617] min-h-screen p-8">
// // //             {/* 1. De Filter Sectie (Zoekbalk + Favorieten knop) */}
// // //             <div className="max-w-2xl mx-auto mb-12 flex flex-col md:flex-row gap-4">
// // //                 <input
// // //                     type="text"
// // //                     placeholder="Search dossiers by title or genre..."
// // //                     className="flex-grow bg-zinc-900 border border-zinc-800 p-4 text-white uppercase text-xs tracking-widest outline-none focus:border-yellow-500 transition-colors"
// // //                     onChange={(e) => setSearchTerm(e.target.value)}
// // //                 />
// // //
// // //                 <button
// // //                     onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
// // //                     className={`px-6 py-4 text-[10px] font-black uppercase tracking-widest border transition-all ${
// // //                         showFavoritesOnly
// // //                             ? 'bg-yellow-500 text-black border-yellow-500'
// // //                             : 'text-zinc-500 border-zinc-800 hover:border-zinc-600'
// // //                     }`}
// // //                 >
// // //                     {showFavoritesOnly ? 'Showing Favorites' : 'Show Favorites'}
// // //                 </button>
// // //             </div>
// // //
// // //             {/* 2. De Resultaten Teller */}
// // //             <p className="text-center text-[10px] text-zinc-600 uppercase tracking-widest mb-10">
// // //                 {filteredDramas.length} dossiers matching current criteria
// // //             </p>
// // //
// // //             {/* 3. De Grid met K-Dramas */}
// // //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
// // //                 {filteredDramas.length > 0 ? (
// // //                     filteredDramas.map(drama => (
// // //                         <DramaCard key={drama._id} drama={drama} />
// // //                     ))
// // //                 ) : (
// // //                     <div className="col-span-full text-center p-20 border-2 border-dashed border-zinc-900">
// // //                         <p className="text-zinc-600 uppercase font-black">
// // //                             No matching files found in the archive.
// // //                         </p>
// // //                     </div>
// // //                 )}
// // //             </div>
// // //         </div>
// // //     );
// // // }
// //
// // import { useDramas } from '../context/DramaContext';
// // import DramaCard from '../components/DramaCard';
// //
// // export default function DramaIndex() {
// //     const {
// //         currentItems,
// //         loading,
// //         setSearchTerm,
// //         showFavoritesOnly,
// //         setShowFavoritesOnly,
// //         currentPage,
// //         setCurrentPage,
// //         totalPages
// //     } = useDramas();
// //
// //     if (loading) return (
// //         <div className="min-h-screen bg-[#020617] flex items-center justify-center">
// //             <p className="text-yellow-500 font-black uppercase animate-pulse tracking-widest">Accessing Archive...</p>
// //         </div>
// //     );
// //
// //     return (
// //         <div className="bg-[#020617] min-h-screen p-8">
// //             <div className="max-w-2xl mx-auto mb-12 flex flex-col md:flex-row gap-4">
// //                 <input
// //                     type="text"
// //                     placeholder="Search dossiers..."
// //                     className="flex-grow bg-zinc-900 border border-zinc-800 p-4 text-white uppercase text-xs outline-none focus:border-yellow-500 transition-colors"
// //                     onChange={(e) => setSearchTerm(e.target.value)}
// //                 />
// //                 <button
// //                     onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
// //                     className={`px-6 py-4 text-[10px] font-black uppercase border transition-all ${
// //                         showFavoritesOnly ? 'bg-yellow-500 text-black border-yellow-500' : 'text-zinc-500 border-zinc-800'
// //                     }`}
// //                 >
// //                     {showFavoritesOnly ? 'Favorites Only' : 'Show All'}
// //                 </button>
// //             </div>
// //
// //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
// //                 {currentItems.map(drama => (
// //                     <DramaCard key={drama._id} drama={drama} />
// //                 ))}
// //             </div>
// //
// //             {totalPages > 1 && (
// //                 <div className="flex justify-center items-center gap-6 mt-16 pb-10">
// //                     <button
// //                         disabled={currentPage === 1}
// //                         onClick={() => setCurrentPage(prev => prev - 1)}
// //                         className="text-yellow-500 disabled:text-zinc-800 font-black uppercase tracking-widest text-[10px] border border-zinc-800 p-3 hover:border-yellow-500"
// //                     >
// //                         Prev
// //                     </button>
// //                     <span className="text-white font-black text-[10px] uppercase">
// //                         Page {currentPage} of {totalPages}
// //                     </span>
// //                     <button
// //                         disabled={currentPage === totalPages}
// //                         onClick={() => setCurrentPage(prev => prev + 1)}
// //                         className="text-yellow-500 disabled:text-zinc-800 font-black uppercase tracking-widest text-[10px] border border-zinc-800 p-3 hover:border-yellow-500"
// //                     >
// //                         Next
// //                     </button>
// //                 </div>
// //             )}
// //         </div>
// //     );
// // }
//
// import { useDramas } from '../context/DramaContext';
// import DramaCard from '../components/DramaCard';
//
// export default function DramaIndex() {
//     const {
//         currentItems,
//         loading,
//         setSearchTerm,
//         showFavoritesOnly,
//         setShowFavoritesOnly,
//         currentPage,
//         setCurrentPage,
//         totalPages
//     } = useDramas();
//
//     if (loading) return (
//         <div className="min-h-screen bg-[#020617] flex items-center justify-center">
//             <p className="text-yellow-500 font-black uppercase animate-pulse tracking-widest">
//                 Accessing Archive...
//             </p>
//         </div>
//     );
//
//     return (
//         <div className="bg-[#020617] min-h-screen p-8">
//             {/* 1. Filter Sectie (Search + Aparte Favorites Button) */}
//             <div className="max-w-2xl mx-auto mb-12 flex flex-col md:flex-row gap-4">
//                 <input
//                     type="text"
//                     placeholder="Search dossiers..."
//                     className="flex-grow bg-zinc-900 border border-zinc-800 p-4 text-white uppercase text-xs outline-none focus:border-yellow-500 transition-colors tracking-widest"
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//
//                 {/* De aparte knop voor de 2e filter eis */}
//                 <button
//                     onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
//                     className={`px-8 py-4 text-[10px] font-black uppercase tracking-widest border transition-all duration-300 ${
//                         showFavoritesOnly
//                             ? 'bg-yellow-500 text-black border-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.3)]'
//                             : 'text-zinc-500 border-zinc-800 hover:text-white hover:border-zinc-600'
//                     }`}
//                 >
//                     {showFavoritesOnly ? 'Showing: Classified' : 'Filter: Classified'}
//                 </button>
//             </div>
//
//             {/* 2. Grid met resultaten */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
//                 {currentItems.length > 0 ? (
//                     currentItems.map(drama => (
//                         <DramaCard key={drama._id} drama={drama} />
//                     ))
//                 ) : (
//                     <div className="col-span-full text-center py-20 border border-dashed border-zinc-800">
//                         <p className="text-zinc-600 uppercase text-xs font-black tracking-widest">
//                             No matching records found in this sector.
//                         </p>
//                     </div>
//                 )}
//             </div>
//
//             {/* 3. Pagination (Eis: slechts X items zichtbaar) */}
//             {totalPages > 1 && (
//                 <div className="flex justify-center items-center gap-6 mt-16 pb-10">
//                     <button
//                         disabled={currentPage === 1}
//                         onClick={() => setCurrentPage(prev => prev - 1)}
//                         className="text-yellow-500 disabled:text-zinc-900 font-black uppercase tracking-widest text-[10px] border border-zinc-800 p-3 hover:border-yellow-500 transition-colors disabled:hover:border-zinc-800"
//                     >
//                         Prev
//                     </button>
//
//                     <span className="text-white font-black text-[10px] uppercase tracking-[0.3em]">
//                         Page {currentPage} / {totalPages}
//                     </span>
//
//                     <button
//                         disabled={currentPage === totalPages}
//                         onClick={() => setCurrentPage(prev => prev + 1)}
//                         className="text-yellow-500 disabled:text-zinc-900 font-black uppercase tracking-widest text-[10px] border border-zinc-800 p-3 hover:border-yellow-500 transition-colors disabled:hover:border-zinc-800"
//                     >
//                         Next
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// }

import { useDramas } from '../context/DramaContext';
import DramaCard from '../components/DramaCard';

export default function DramaIndex() {
    const {
        currentItems,
        loading,
        setSearchTerm,
        showFavoritesOnly,
        setShowFavoritesOnly,
        currentPage,
        setCurrentPage,
        totalPages
    } = useDramas();

    if (loading) return (
        <div className="min-h-screen bg-[#020617] flex items-center justify-center">
            <p className="text-yellow-500 font-black uppercase animate-pulse tracking-widest">
                Accessing Archive...
            </p>
        </div>
    );

    return (
        <div className="bg-[#020617] min-h-screen p-8">
            {/* 1. Filter Sectie: Eén slimme zoekbalk voor titel EN genre */}
            <div className="max-w-2xl mx-auto mb-12 flex flex-col md:flex-row gap-4">
                <input
                    type="text"
                    placeholder="Search by title or genre (e.g. 'Action')..."
                    className="flex-grow bg-zinc-900 border border-zinc-800 p-4 text-white uppercase text-xs outline-none focus:border-yellow-500 transition-colors tracking-widest font-mono"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <button
                    onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
                    className={`px-8 py-4 text-[10px] font-black uppercase tracking-widest border transition-all duration-300 ${
                        showFavoritesOnly
                            ? 'bg-yellow-500 text-black border-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.3)]'
                            : 'text-zinc-500 border-zinc-800 hover:text-white hover:border-zinc-600'
                    }`}
                >
                    {showFavoritesOnly ? 'Showing: Classified' : 'Filter: Classified'}
                </button>
            </div>

            {/* 2. Grid met resultaten */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                {currentItems.length > 0 ? (
                    currentItems.map(drama => (
                        <DramaCard key={drama._id} drama={drama} />
                    ))
                ) : (
                    <div className="col-span-full text-center py-20 border border-dashed border-zinc-800">
                        <p className="text-zinc-600 uppercase text-xs font-black tracking-widest">
                            No records found matching those coordinates.
                        </p>
                    </div>
                )}
            </div>

            {/* 3. Pagination */}
            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-6 mt-16 pb-10">
                    <button
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(prev => prev - 1)}
                        className="text-yellow-500 disabled:text-zinc-900 font-black uppercase tracking-widest text-[10px] border border-zinc-800 p-3 hover:border-yellow-500 transition-colors disabled:hover:border-zinc-800"
                    >
                        Prev
                    </button>

                    <span className="text-white font-black text-[10px] uppercase tracking-[0.3em]">
                        Page {currentPage} / {totalPages}
                    </span>

                    <button
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(prev => prev + 1)}
                        className="text-yellow-500 disabled:text-zinc-900 font-black uppercase tracking-widest text-[10px] border border-zinc-800 p-3 hover:border-yellow-500 transition-colors disabled:hover:border-zinc-800"
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}