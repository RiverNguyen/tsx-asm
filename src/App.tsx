import { Route, Routes } from "react-router-dom";
import Home from "./pages/website/Home";
import Shop from "./pages/website/Shop";
import LayoutWebsite from "./components/layouts/LayoutWebsite";
import LayoutAdmin from "./components/layouts/LayoutAdmin";
import ProductAddAdmin from "./pages/admin/ProductAdd";
import ProductListAdmin from "./pages/admin/ProductList";
import { ToastContainer } from "react-toastify";
import ProductEditAdmin from "./pages/admin/ProductEdit";
import Detail from "./pages/website/Detail";
import SignUp from "./components/website/account/SignUp";
import SignIn from "./components/website/account/SignIn";
import ProtectedRoute from "./components/admin/ProtectedRoute";
import UserListAdmin from "./pages/admin/UserList";
import Cart from "./pages/website/Cart";
import Checkout from "./pages/website/Checkout";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<LayoutWebsite />}>
                    <Route path="/" index element={<Home />} />
                    <Route path="shop" element={<Shop />} />
                    <Route path="detail/:id" element={<Detail />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="checkout" element={<Checkout />} />
                    <Route path="sign-up" element={<SignUp />} />
                    <Route path="sign-in" element={<SignIn />} />
                </Route>

                <Route
                    path="admin"
                    element={
                        <ProtectedRoute>
                            <LayoutAdmin />
                        </ProtectedRoute>
                    }
                >
                    <Route path="products" element={<ProductListAdmin />} />
                    <Route
                        path="products/:id"
                        element={<div>products/:id</div>}
                    />
                    <Route path="products/add" element={<ProductAddAdmin />} />
                    <Route
                        path="products/edit/:id"
                        element={<ProductEditAdmin />}
                    />
                    <Route path="users" element={<UserListAdmin />} />
                </Route>
            </Routes>
            <ToastContainer />
        </>
    );
}

export default App;
