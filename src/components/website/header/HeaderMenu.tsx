import { Link } from "react-router-dom";

const HeaderMenu = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-inner">
                    <Link to={"/"} className="header__logo">
                        <img src="/src/assets/logo/logo-1.svg" alt="" />
                    </Link>
                    <div className="button-mobile">
                        <button>=</button>
                    </div>
                    <nav className="main-menu">
                        <ul className="main-menu__list">
                            <li className="main-menu__item">
                                <Link to={"/"} className="main-menu__link">
                                    Home
                                </Link>
                            </li>
                            <li className="main-menu__item">
                                <Link to={"/shop"} className="main-menu__link">
                                    Shop
                                </Link>
                            </li>
                            <li className="main-menu__item">
                                <a className="main-menu__link">About</a>
                            </li>
                            <li className="main-menu__item">
                                <a className="main-menu__link">Contact</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="header-items">
                        <div className="header-item-user">
                            <span>
                                <Link to={"/admin"}>
                                    <img src="/src/assets/icons/1.svg" alt="" />
                                </Link>
                            </span>
                        </div>
                        <div className="header-item-user">
                            <span>
                                <img src="/src/assets/icons/2.svg" alt="" />
                            </span>
                        </div>
                        <div className="header-item-user">
                            <span>
                                <img src="/src/assets/icons/3.svg" alt="" />
                            </span>
                        </div>
                        <div className="header-item-user">
                            <span>
                                <a href="./cart.html">
                                    <img src="/src/assets/icons/4.svg" alt="" />
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderMenu;
