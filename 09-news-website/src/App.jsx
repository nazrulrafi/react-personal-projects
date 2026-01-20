import { useEffect, useState } from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./pages/RootLayout.jsx";
import Home from "./pages/Home.jsx";
import News from "./pages/News.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";



import {homeLoader} from "./loaders/homeLoader.js";
import NewsDetails from "./pages/NewsDetails.jsx";
import {newsDetailsLoader} from "./loaders/newsDetailsLoader.js";
import {newsLoader} from "./loaders/newsLoader.js";
import Category from "./pages/Category.jsx";
import {categoryLoader} from "./loaders/categoryLoader.js";



const router = createBrowserRouter([
    {
        path: "/",
        element:<RootLayout/>,
        children:[
            {index:true,element:<Home/>,loader:homeLoader},
            {path:"news",element:<News/>,loader:newsLoader},
            {path:"about",element:<About/>},
            {path:"contact",element:<Contact/>},
            {path:"news/:index",element:<NewsDetails/>,loader:newsDetailsLoader},
            {path:"category/:term",element:<Category/>,loader:categoryLoader},
        ]
    }
])
function App() {
    return <RouterProvider router={router}/>
}

export default App;
