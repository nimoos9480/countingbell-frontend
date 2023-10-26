import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Header from "./components/Header";
import Header2 from "./components/Header2";
import Register from "./pages/Register";
import Find from "./pages/Find";
import RecentList from "./pages/RecentList";
import Menu from "./pages/Menu";
import RestaurantList from "./pages/RestaurantList";
import Restaurant from "./pages/Restaurant";
import ReservationCom from "./pages/ReservationCom";
import Review from "./pages/Review";
import Reservation from "./pages/Reservation";
import Waiting from "./pages/Waiting";
import ResSearch from "./pages/ResSearch";
import MyPage from "./pages/MyPage";
import AddMenu from "./pages/menus/AddMenu";
import MenuBoard from "./pages/menus/MenuBoard";
import MenuUpdate from "./pages/menus/MenuUpdate";
import LocationBoard from "./pages/location/LocationBoard";
import LocationResList from "./pages/location/LocationResList";
import LocationList from "./pages/location/LocationList";
import FoodTypeList from "./pages/food/FoodTypeList";
import FoodResList from "./pages/food/FoodResList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout header={<Header />} />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "signup",
    element: <Layout header={<Header2 />} />,
    children: [
      {
        index: true,
        element: <Register />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "find",
    element: <Layout header={<Header2 />} />,
    children: [
      {
        index: true,
        element: <Find />,
      },
    ],
  },
  {
    path: "recentList",
    element: <Layout header={<Header2 />} />,
    children: [
      {
        index: true,
        element: <RecentList />,
      },
    ],
  },
  {
    path: "foodList",
    element: <Layout header={<Header2 />} />,
    children: [
      {
        index: true,
        element: <FoodTypeList />,
      },
    ],
  },
  {
    path: "foodResList/:foodCode",
    element: <Layout header={<Header2 />} />,
    children: [
      {
        index: true,
        element: <FoodResList />,
      },
    ],
  },
  {
    path: "location",
    children: [
      {
        index: true,
        element: <LocationBoard />,
      },
    ],
  },
  {
    path: "locationList",
    element: <Layout header={<Header2 />} />,
    children: [
      {
        index: true,
        element: <LocationList />,
      },
    ],
  },
  {
    path: "locationResList/:localCode",
    element: <Layout header={<Header2 />} />,
    children: [
      {
        index: true,
        element: <LocationResList />,
      },
    ],
  },

  {
    path: "menu",
    element: <Layout header={<Header2 />} />,
    children: [
      {
        index: true,
        element: <Menu />,
      },
    ],
  },
  {
    path: "restaurantList",
    element: <Layout header={<Header2 />} />,
    children: [
      {
        index: true,
        element: <RestaurantList />,
      },
    ],
  },
  {
    path: "reservationcom",
    element: <Layout header={<Header2 />} />,
    children: [
      {
        index: true,
        element: <ReservationCom />,
      },
    ],
  },
  {
    path: "review",
    element: <Layout header={<Header2 />} />,
    children: [
      {
        index: true,
        element: <Review />,
      },
    ],
  },
  {
    path: "restaurant/:resCode",
    element: <Layout header={<Header2 />} />,
    children: [
      {
        index: true,
        element: <Restaurant />,
      },
    ],
  },
  {
    path: "reservation",
    element: <Layout header={<Header2 />} />,
    children: [
      {
        index: true,
        element: <Reservation />,
      },
    ],
  },

  {
    path: "waiting",
    element: <Layout header={<Header2 />} />,
    children: [
      {
        index: true,
        element: <Waiting />,
      },
      {
        index: true,
        element: <ResSearch />,
      },
    ],
  },
  {
    path: "myPage",
    children: [
      {
        index: true,
        element: <MyPage />,
      },
    ],
  },
  {
    path: "addmenu",
    children: [
      {
        index: true,
        element: <AddMenu />,
      },
    ],
  },
  {
    path: "updatemenu",
    children: [
      {
        index: true,
        element: <MenuUpdate />,
      },
    ],
  },
  {
    path: "menuboard",
    children: [
      {
        index: true,
        element: <MenuBoard />,
      },
    ],
  },
]);
export default router;
