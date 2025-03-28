// pages
import Home from "@/pages/home/Home";
import UsersList from "@/pages/users/UsersList";
import NewUser from "@/pages/newUser/NewUser";
import Products from "@/pages/products/Products";
import Product from "@/pages/product/Product";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/users", element: <UsersList /> },
  { path: "/newUser", element: <NewUser /> },
  { path: "/products", element: <Products /> },
  { path: "/product/:id", element: <Product /> },
];

export default routes;
