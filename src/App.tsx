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

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<LayoutWebsite />}>
                    <Route path="/" index element={<Home />} />
                    <Route path="shop" element={<Shop />} />
                    <Route path="detail/:id" element={<Detail />} />
                    <Route path="cart" element={<div>cart</div>} />
                    <Route path="checkout" element={<div>checkout</div>} />
                </Route>

                <Route path="admin" element={<LayoutAdmin />}>
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
                </Route>
            </Routes>
            <ToastContainer />
        </>
    );
}

export default App;
