import { Link, useParams } from "react-router-dom";
import ProductQuery from "../../../hooks/ProductQuery";
const ProductDetail = () => {
    const { id } = useParams();
    const { data, isLoading } = ProductQuery(id);
    if (isLoading) return <div>Loading...</div>;
    return (
        <>
            <div>
                <section className="filters">
                    <div className="container">
                        <div className="filters-around">
                            <div className="filters-choose">
                                <div className="filters-choose__action">
                                    <span className="filters__text">Home</span>
                                    <img
                                        src="/src/assets/icons/next.svg"
                                        alt=""
                                    />
                                    <span className="filters__text">Shop</span>
                                    <img
                                        src="/src/assets/icons/next.svg"
                                        alt=""
                                    />
                                </div>

                                <div className="filters-show">
                                    <span className="filters-show__text">
                                        {data.name}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="products">
                    <div className="container">
                        <div className="products-around">
                            <div className="products-img">
                                <div className="products-img__gallery">
                                    <ul className="products-img__list">
                                        <li className="products-img__item">
                                            <img src={data.image} alt="" />
                                        </li>
                                        <li className="products-img__item">
                                            <img src={data.image} alt="" />
                                        </li>
                                        <li className="products-img__item">
                                            <img src={data.image} alt="" />
                                        </li>
                                        <li className="products-img__item">
                                            <img src={data.image} alt="" />
                                        </li>
                                    </ul>
                                </div>
                                <div className="products-img__thumbnail">
                                    <img src={data.image} alt="" />
                                </div>
                            </div>
                            <div className="products-info">
                                <h2 className="products__name">{data.name}</h2>
                                <h4 className="products__price">
                                    ${data.price}
                                </h4>
                                <div className="products-info__judge">
                                    <div className="products__star">
                                        <img
                                            src="/src/assets/icons/star.svg"
                                            alt=""
                                        />
                                        <img
                                            src="/src/assets/icons/star.svg"
                                            alt=""
                                        />
                                        <img
                                            src="/src/assets/icons/star.svg"
                                            alt=""
                                        />
                                        <img
                                            src="/src/assets/icons/star.svg"
                                            alt=""
                                        />
                                        <img
                                            src="/src/assets/icons/star-half.svg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="products__review">
                                        <span>5 Customer Review</span>
                                    </div>
                                </div>
                                <div className="products-description">
                                    <p>{data.description}</p>
                                </div>
                                <div className="products-info__size">
                                    <h5 className="products__text">Size:</h5>
                                    <span className="products__size">L</span>
                                    <span className="products__size">M</span>
                                    <span className="products__size">S</span>
                                </div>
                                <div className="products-color">
                                    <h5 className="products__text">Color:</h5>
                                    <span className="products-color__violet" />
                                    <span className="products-color__black" />
                                    <span className="products-color__brown" />
                                </div>
                                <div className="products-btn">
                                    <button className="products-btn__count">
                                        <span className="minus">-</span>1
                                        <span className="plus">+</span>
                                    </button>
                                    <Link
                                        to={"/cart"}
                                        className="products__btn"
                                    >
                                        Add to cart
                                    </Link>
                                    <button className="products__btn">
                                        + Compare
                                    </button>
                                </div>
                                <hr className="hr" />
                                <div className="products-info__more">
                                    <div className="products__group">
                                        <span className="products__title">
                                            SKU
                                        </span>
                                        <span className="products__colons">
                                            :
                                        </span>
                                        <span className="products__description">
                                            SS001
                                        </span>
                                    </div>
                                    <div className="products__group">
                                        <span className="products__title">
                                            Category
                                        </span>
                                        <span className="products__colons">
                                            :
                                        </span>
                                        <span className="products__description">
                                            Sofas
                                        </span>
                                    </div>
                                    <div className="products__group">
                                        <span className="products__title">
                                            Tags
                                        </span>
                                        <span className="products__colons">
                                            :
                                        </span>
                                        <span className="products__description">
                                            Sofa, Chair, Home, Shop
                                        </span>
                                    </div>
                                    <div className="products__group">
                                        <span className="products__title">
                                            Share
                                        </span>
                                        <span className="products__colons">
                                            :
                                        </span>
                                        <span className="products__description">
                                            <img
                                                src="/src/assets/icons/fb.svg"
                                                alt=""
                                            />
                                            <img
                                                src="/src/assets/icons/linkedin.svg"
                                                alt=""
                                            />
                                            <img
                                                src="/src/assets/icons/twitter.svg"
                                                alt=""
                                            />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <hr className="hr" />
                <section className="description">
                    <div className="container">
                        <div className="description-header">
                            <div className="description-header__title">
                                <h2 className="description__title active">
                                    Description
                                </h2>
                                <h2 className="description__title">
                                    Additional Information
                                </h2>
                                <h2 className="description__title">
                                    Reviews [5]
                                </h2>
                            </div>
                            <div className="description-body">
                                <p>
                                    Embodying the raw, wayward spirit of rock
                                    ‘n’ roll, the Kilburn portable active stereo
                                    speaker takes the unmistakable look and
                                    sound of Marshall, unplugs the chords, and
                                    takes the show on the road.
                                </p>
                                <p>
                                    Weighing in under 7 pounds, the Kilburn is a
                                    lightweight piece of vintage styled
                                    engineering. Setting the bar as one of the
                                    loudest speakers in its class, the Kilburn
                                    is a compact, stout-hearted hero with a
                                    well-balanced audio which boasts a clear
                                    midrange and extended highs for a sound that
                                    is both articulate and pronounced. The
                                    analogue knobs allow you to fine tune the
                                    controls to your personal preferences while
                                    the guitar-influenced leather strap enables
                                    easy and stylish travel.
                                </p>
                            </div>
                            <div className="description-image">
                                <img src={data.image} alt="" />
                                <img src={data.image} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                <hr className="hr" />
                <section className="product">
                    <div className="container">
                        <h1 className="related-product__title">
                            Related Product
                        </h1>
                        <div className="product-list">
                            <div className="product-item">
                                <div className="product-image">
                                    <img
                                        src="https://picsum.photos/id/10/3840/2160"
                                        alt=""
                                        className="product__thumbnail"
                                    />
                                    <span className="product-sale">30%</span>
                                </div>
                                <div className="product-info">
                                    <h3 className="product__name">
                                        <a href="" className="product__link">
                                            Syltherine
                                        </a>
                                    </h3>
                                    <a href="" className="product__category">
                                        Stylish cafe chair
                                    </a>
                                    <div className="product-price">
                                        <span className="product-price__new">
                                            $200
                                        </span>
                                        <span className="product-price__old">
                                            $300
                                        </span>
                                    </div>
                                </div>
                                <div className="product-actions">
                                    <button className="btn product-action__quickview">
                                        Quick View
                                    </button>
                                    <button className="btn product-action__addtocart">
                                        Add To Cart
                                    </button>
                                    <div className="product-actions-more">
                                        <span className="product-action__share">
                                            <img
                                                src="/src/assets/icon-share.svg"
                                                alt=""
                                            />
                                            Share
                                        </span>
                                        <span className="product-action__compare">
                                            <img
                                                src="/src/assets/icon-compare.svg"
                                                alt=""
                                            />
                                        </span>
                                        <span className="product-action__like">
                                            <img
                                                src="/src/assets/icon-heart.svg"
                                                alt=""
                                            />
                                            Like
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="product-item">
                                <div className="product-image">
                                    <img
                                        src="https://picsum.photos/id/10/3840/2160"
                                        alt=""
                                        className="product__thumbnail"
                                    />
                                    <span className="product-sale">30%</span>
                                </div>
                                <div className="product-info">
                                    <h3 className="product__name">
                                        <a href="" className="product__link">
                                            Syltherine
                                        </a>
                                    </h3>
                                    <a href="" className="product__category">
                                        Stylish cafe chair
                                    </a>
                                    <div className="product-price">
                                        <span className="product-price__new">
                                            $200
                                        </span>
                                        <span className="product-price__old">
                                            $300
                                        </span>
                                    </div>
                                </div>
                                <div className="product-actions">
                                    <button className="btn product-action__quickview">
                                        Quick View
                                    </button>
                                    <button className="btn product-action__addtocart">
                                        Add To Cart
                                    </button>
                                    <div className="product-actions-more">
                                        <span className="product-action__share">
                                            <img
                                                src="/src/assets/icon-share.svg"
                                                alt=""
                                            />
                                            Share
                                        </span>
                                        <span className="product-action__compare">
                                            <img
                                                src="/src/assets/icon-compare.svg"
                                                alt=""
                                            />
                                        </span>
                                        <span className="product-action__like">
                                            <img
                                                src="/src/assets/icon-heart.svg"
                                                alt=""
                                            />
                                            Like
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="product-item">
                                <div className="product-image">
                                    <img
                                        src="https://picsum.photos/id/10/3840/2160"
                                        alt=""
                                        className="product__thumbnail"
                                    />
                                    <span className="product-sale">30%</span>
                                </div>
                                <div className="product-info">
                                    <h3 className="product__name">
                                        <a href="" className="product__link">
                                            Syltherine
                                        </a>
                                    </h3>
                                    <a href="" className="product__category">
                                        Stylish cafe chair
                                    </a>
                                    <div className="product-price">
                                        <span className="product-price__new">
                                            $200
                                        </span>
                                        <span className="product-price__old">
                                            $300
                                        </span>
                                    </div>
                                </div>
                                <div className="product-actions">
                                    <button className="btn product-action__quickview">
                                        Quick View
                                    </button>
                                    <button className="btn product-action__addtocart">
                                        Add To Cart
                                    </button>
                                    <div className="product-actions-more">
                                        <span className="product-action__share">
                                            <img
                                                src="/src/assets/icon-share.svg"
                                                alt=""
                                            />
                                            Share
                                        </span>
                                        <span className="product-action__compare">
                                            <img
                                                src="/src/assets/icon-compare.svg"
                                                alt=""
                                            />
                                        </span>
                                        <span className="product-action__like">
                                            <img
                                                src="/src/assets/icon-heart.svg"
                                                alt=""
                                            />
                                            Like
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="product-item">
                                <div className="product-image">
                                    <img
                                        src="https://picsum.photos/id/10/3840/2160"
                                        alt=""
                                        className="product__thumbnail"
                                    />
                                    <span className="product-sale">30%</span>
                                </div>
                                <div className="product-info">
                                    <h3 className="product__name">
                                        <a href="" className="product__link">
                                            Syltherine
                                        </a>
                                    </h3>
                                    <a href="" className="product__category">
                                        Stylish cafe chair
                                    </a>
                                    <div className="product-price">
                                        <span className="product-price__new">
                                            $200
                                        </span>
                                        <span className="product-price__old">
                                            $300
                                        </span>
                                    </div>
                                </div>
                                <div className="product-actions">
                                    <button className="btn product-action__quickview">
                                        Quick View
                                    </button>
                                    <button className="btn product-action__addtocart">
                                        Add To Cart
                                    </button>
                                    <div className="product-actions-more">
                                        <span className="product-action__share">
                                            <img
                                                src="/src/assets/icon-share.svg"
                                                alt=""
                                            />
                                            Share
                                        </span>
                                        <span className="product-action__compare">
                                            <img
                                                src="/src/assets/icon-compare.svg"
                                                alt=""
                                            />
                                        </span>
                                        <span className="product-action__like">
                                            <img
                                                src="/src/assets/icon-heart.svg"
                                                alt=""
                                            />
                                            Like
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/** End .product-item **/}
                        <div className="btn-showmore">
                            <button className="btn-showmore__action">
                                Show more
                            </button>
                        </div>
                    </div>
                </section>
                <hr className="hr" />
            </div>
        </>
    );
};

export default ProductDetail;
