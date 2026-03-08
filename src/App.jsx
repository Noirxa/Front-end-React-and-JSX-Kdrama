
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import DramaIndex from './pages/DramaIndex';
import DramaDetail from './pages/DramaDetail';
import DramaCreate from './pages/DramaCreate';
import DramaEdit from './pages/DramaEdit';
import NotFound from './pages/NotFound';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<DramaIndex />} />
                    <Route path="/dramas/create" element={<DramaCreate />} />
                    <Route path="/dramas/:id" element={<DramaDetail />} />
                    <Route path="/dramas/:id/edit" element={<DramaEdit />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </Router>
    );
}