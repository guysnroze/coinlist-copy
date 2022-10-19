import Blog from "../pages/Blog";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ViewExchange from "../pages/ViewExchange";


export const pages = [
    {path: '/', element: Home},
    {path: '/https://coinlist.co/products', element: Products},
    {path: '/https://pro.coinlist.co/trader/FIL-USD', element: ViewExchange},
    {path: '/https://blog.coinlist.co/', element: Blog}
]