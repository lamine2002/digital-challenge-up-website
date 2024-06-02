import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import AteliersFormations from "./AteliersFormations.jsx";
import EvenementsConferences from "./EvenementsConferences.jsx";
import PartenariatsOpportunites from "./PartenariatsOpportunites.jsx";
import Blog from "./Blog.jsx";
import Apropos from "./Apropos.jsx";
import Contact from "./Contact.jsx";


const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            // errorElement: <ErrorPage />,
        },
       {
            path: "/ateliersformations",
            element: <AteliersFormations />,
        },
        {
           path: '/evenementsconferences',
           element: <EvenementsConferences />,
       },
        {
            path: "/partenariatsopportunites",
            element: <PartenariatsOpportunites />,
        },
        {
            path: "/blog",
            element: <Blog />,
        },
        {
            path: "/apropos",
            element: <Apropos />,
        },
        {
            path: "/contact",
            element: <Contact />,
        },

    ]);

    return <RouterProvider router={router} />;
};

export default Router;