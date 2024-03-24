import { useParams } from "react-router-dom";
import ProductQuery from "../../../hooks/ProductQuery";

const ProductDetail = () => {
    const { id } = useParams();
    const { data, isLoading } = ProductQuery(id);
    if (isLoading) return <div>Loading...</div>;
    return (
        <>
            <h1>{data.name}</h1>
        </>
    );
};

export default ProductDetail;
