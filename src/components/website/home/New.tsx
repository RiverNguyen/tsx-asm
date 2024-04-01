import { Link } from "react-router-dom";
import ProductQuery from "../../../hooks/ProductQuery";
import { IProduct } from "../../../interfaces/Product.ts";

const New = () => {
    const { data, isLoading } = ProductQuery();
    if (isLoading) return <div>Loading...</div>;

    return (
        <section className="news">
            <div className="container">
                <div className="section-heading">
                    <h2 className="section-heading__title">New</h2>
                </div>
                <div className="section-body">
                    <div className="product-list">
                        {data
                            ?.slice(0, 4)
                            .map((product: IProduct, index: number) => (
                                <div key={index} className="product-item">
                                    <div className="product-image">
                                        <img
                                            src={product.image as string}
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
                                                {+product.price -
                                                    (+product.sale *
                                                        +product.price) /
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
            <div className="container">
                <hr />
            </div>
        </section>
    );
};

export default New;
