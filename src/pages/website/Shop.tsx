import Services from "../../components/website/home/Services";
import Filter from "../../components/website/shop/Filter";
import PageNumber from "../../components/website/shop/PageNumber";
import ShowProducts from "../../components/website/shop/ShowProducts";

const Shop = () => {
    return (
        <>
            <Filter />
            <ShowProducts />
            <PageNumber />
            <Services />
        </>
    );
};

export default Shop;
