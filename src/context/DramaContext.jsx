import { createContext, useState, useEffect, useContext } from 'react';

const DramaContext = createContext();

export function DramaProvider({ children }) {
    const [dramas, setDramas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    useEffect(() => {
        fetch('http://145.24.237.12:8000/dramas', {
            headers: { 'Accept': 'application/json' }
        })
            .then(res => res.json())
            .then(data => {
                const cleanedData = (data.items || []).map(item => ({
                    ...item,
                    isFavorite: item.isFavorite ?? item.isBookmarked ?? false
                }));
                setDramas(cleanedData);
                setLoading(false);
            })
            .catch(err => {
                console.error("Fetch error:", err);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, showFavoritesOnly]);

    const toggleFavorite = async (id) => {
        const dramaToUpdate = dramas.find(d => d._id === id);
        if (!dramaToUpdate) return;

        const newStatus = !dramaToUpdate.isFavorite;

        setDramas(prev => prev.map(d =>
            d._id === id ? { ...d, isFavorite: newStatus } : d
        ));

        try {
            await fetch(`http://145.24.237.12:8000/dramas/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ isFavorite: newStatus })
            });
        } catch (err) {
            console.error("PATCH failed:", err);
        }
    };

    const addDrama = (newDrama) => setDramas(prev => [...prev, newDrama]);
    const updateDrama = (updated) => setDramas(prev => prev.map(d => d._id === updated._id ? updated : d));
    const deleteDramaState = (id) => setDramas(prev => prev.filter(d => d._id !== id));

    // Aangepaste filter logica: zoekt  in Titel EN Genre
    const filteredDramas = dramas.filter(d => {
        const matchesSearch =
            d.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (d.genre && d.genre.toLowerCase().includes(searchTerm.toLowerCase()));

        return showFavoritesOnly ? (matchesSearch && d.isFavorite) : matchesSearch;
    });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredDramas.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredDramas.length / itemsPerPage);

    return (
        <DramaContext.Provider value={{
            currentItems,
            loading,
            searchTerm,
            setSearchTerm,
            showFavoritesOnly,
            setShowFavoritesOnly,
            toggleFavorite,
            addDrama,
            updateDrama,
            deleteDramaState,
            currentPage,
            setCurrentPage,
            totalPages
        }}>
            {children}
        </DramaContext.Provider>
    );
}

export const useDramas = () => useContext(DramaContext);