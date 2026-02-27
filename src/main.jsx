import { Applayout } from './components/AppLayout';
import ReactDOM from "react-dom/client"
import { Applayout } from "./components/AppLayout";
import Body from "./components/Body";
import {About} from "./components/About";
import {Contact} from "./components/Contact";
import {Cart} from "./components/Cart";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./components/ErrorPage";
import  RestaurantMenu from './components/RestaurantMenu';
// import  RestaurantCard  from './components/RestaurantCard';


const appRouter = () => createBrowserRouter([

    {
        path:"/",
        element:<Applayout/>,

        children:[

            {
                path:"/",
                element:<Body/>
            },

            {
                path:"/about",
                element:<About/>
            },

            {
                path:"/Contact",
                element:<Contact/>
            },

            {
                path:"/Cart",
                element:<Cart/>
            },

            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>
            }
        
        
    
    ],
    errorElement: <ErrorPage/>

}

]) 
console.log(appRouter);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter ()} />);

