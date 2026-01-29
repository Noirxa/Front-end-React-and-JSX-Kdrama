// // import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// // import Layout from './components/Layout';
// // import DramaIndex from './pages/DramaIndex';
// // import DramaDetail from './pages/DramaDetail';
// // import DramaCreate from './pages/DramaCreate';
// // import DramaEdit from './pages/DramaEdit';
// // import NotFound from './pages/NotFound';
// //
// // const router = createBrowserRouter([
// //     {
// //         path: "/",
// //         element: <Layout />,
// //         // errorElement vangt fouten op zoals een verkeerde URL (404)
// //         errorElement: <Layout><NotFound /></Layout>,
// //         children: [
// //             { index: true, element: <DramaIndex /> },
// //             { path: "dramas/create", element: <DramaCreate /> }, // Create boven :id zetten
// //             { path: "dramas/:id", element: <DramaDetail /> },
// //             { path: "dramas/:id/edit", element: <DramaEdit /> },
// //             // Deze vangt onbekende paden binnen de layout op
// //             { path: "*", element: <NotFound /> }
// //         ]
// //     }
// // ]);
// //
// // export default function App() {
// //     return <RouterProvider router={router} />;
// // }
//
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import DramaIndex from './pages/DramaIndex';
// import DramaDetail from './pages/DramaDetail';
// import DramaCreate from './pages/DramaCreate';
// import DramaEdit from './pages/DramaEdit';
// import NotFound from './pages/NotFound'; // Je mooie 404 component
//
// export default function App() {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<DramaIndex />} />
//                 <Route path="/dramas/create" element={<DramaCreate />} />
//                 <Route path="/dramas/:id" element={<DramaDetail />} />
//                 <Route path="/dramas/:id/edit" element={<DramaEdit />} />
//
//                 {/* Deze vangt alle onbekende URL's op  */}
//                 <Route path="*" element={<NotFound />} />
//             </Routes>
//         </Router>
//     );
// }

// src/App.jsx
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
                {/* De Layout route heeft geen eigen path, maar omarmt de rest */}
                <Route element={<Layout />}>
                    <Route path="/" element={<DramaIndex />} />
                    <Route path="/dramas/create" element={<DramaCreate />} />
                    <Route path="/dramas/:id" element={<DramaDetail />} />
                    <Route path="/dramas/:id/edit" element={<DramaEdit />} />
                    {/* De 404 moet BINNEN de layout als je daar ook de header wilt */}
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </Router>
    );
}