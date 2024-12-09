import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";
import CardsContainer from "../components/CardsContainer";
import ErrorPage2 from "../components/ErrorPage2";
import Details from "../components/Details";
import ReadList from "../components/ReadList";
import WishLIst from "../components/WishLIst";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('../categories.json'),
        children: [
          {
            path: "/",
            element: <CardsContainer></CardsContainer>,
            loader: () => fetch('../gadget.json')
          },
          {
            path: "/category/:category",
            element: <CardsContainer></CardsContainer>,
            loader: () => fetch('../gadget.json')
          },

          {
            path: "/not-found",
            element: <ErrorPage2></ErrorPage2>
          }
        ]
      },
      {
        path: "/Statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        loader:()=>fetch('../gadget.json')
      },
      {
        path: "/product/:product_id",
        element: <Details></Details>,
        loader: () => fetch('../gadget.json')
      },
      // {
      //   path: "/cart",
      //   element: <ReadList></ReadList>,
      // },
      // {
      //   path: "/wish-list",
      //   element: <WishLIst></WishLIst>
      // }
    ]
  },
]);
export default router;