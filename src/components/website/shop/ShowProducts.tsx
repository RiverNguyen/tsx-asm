import { Link } from "react-router-dom";
import { IProduct } from "../../../interfaces/Product.ts";
import ProductQuery from "../../../hooks/ProductQuery";

const ShowProducts = () => {
    const { data, isLoading } = ProductQuery();
    if (isLoading) return <div>Loading...</div>;

    return (
        <>
            <section className="shop">
                <div className="container">
                    <div className="section-body">
                        <div className="product-list">
                            {data?.map((product: IProduct, index: number) => (
                                <div key={index} className="product-item">
                                    <div className="product-image">
                                        <img
                                            src={product.image}
                                            alt=""
                                            className="product__thumbnail"
                                        />
                                        <span className="product-sale">
                                            {product.sale}%
                                        </span>
                                    </div>
                                    <div className="product-info">
                                        <h3 className="product__name">
                                            <a
                                                href=""
                                                className="product__link"
                                            >
                                                {product.name}
                                            </a>
                                        </h3>
                                        <a
                                            href=""
                                            className="product__category"
                                        >
                                            {product.category}
                                        </a>
                                        <div className="product-price">
                                            <span className="product-price__new">
                                                $
                                                {product.price -
                                                    (product.sale *
                                                        product.price) /
                                                        100}
                                            </span>
                                            <span className="product-price__old">
                                                ${product.price}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="product-actions">
                                        <Link
                                            to={`/detail/${product.id}`}
                                            className="product-action__quickview"
                                        >
                                            Quick View
                                        </Link>
                                        <button className="product-action__addtocart">
                                            Add To Cart
                                        </button>
                                        <div className="product-actions-more">
                                            <span className="product-action__share">
                                                <img
                                                    src="/src/assets/icons/icon-share.svg"
                                                    alt=""
                                                />
                                                Share
                                            </span>
                                            <span className="product-action__compare">
                                                <img
                                                    src="/src/assets/icons/icon-compare.svg"
                                                    alt=""
                                                />
                                            </span>
                                            <span className="product-action__like">
                                                <img
                                                    src="/src/assets/icons/icon-heart.svg"
                                                    alt=""
                                                />
                                                Like
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ShowProducts;
