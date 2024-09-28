import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                // path: '/',
                index: 1,
                element: <Home />
            },
            {
                path: '/menu',
                element: <Menu />
            }
        ]
    }
])

export default router;