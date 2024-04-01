import React from "react";
import { Link, NavLink } from "react-router-dom";

const CartDetail = () => {
    return (
        <>
            <div className="cart">
                <div className="container">
                    <div className="cart-around">
                        <table className="cart-table">
                            <thead className="cart-table__header">
                                <tr>
                                    <th />
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Subtotal</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className="cart-table__body">
                                <tr>
                                    <td>
                                        <img
                                            src="https://picsum.photos/id/10/3840/2160"
                                            alt=""
                                            className="cart-table__item"
                                        />
                                    </td>
                                    <td>Asgaard sofa</td>
                                    <td>25.000.000đ</td>
                                    <td>
                                        <form className="cart-table__button">
                                            <button className="minus">-</button>
                                            <input
                                                type="text"
                                                placeholder={"1"}
                                            />
                                            <button className="plus">+</button>
                                        </form>
                                    </td>
                                    <td className="custom-td">25.000.000đ</td>
                                    <td>
                                        <img
                                            src="../assets/icons/trash.svg"
                                            alt=""
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img
                                            src="https://picsum.photos/id/10/3840/2160"
                                            alt=""
                                            className="cart-table__item"
                                        />
                                    </td>
                                    <td>Asgaard sofa</td>
                                    <td>25.000.000đ</td>
                                    <td>
                                        <form className="cart-table__button">
                                            <button className="minus">-</button>
                                            <input
                                                type="text"
                                                placeholder={"1"}
                                            />
                                            <button className="plus">+</button>
                                        </form>
                                    </td>
                                    <td className="custom-td">25.000.000đ</td>
                                    <td>
                                        <img
                                            src="../assets/icons/trash.svg"
                                            alt=""
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img
                                            src="https://picsum.photos/id/10/3840/2160"
                                            alt=""
                                            className="cart-table__item"
                                        />
                                    </td>
                                    <td>Asgaard sofa</td>
                                    <td>25.000.000đ</td>
                                    <td>
                                        <form className="cart-table__button">
                                            <button className="minus">-</button>
                                            <input
                                                type="text"
                                                placeholder={"1"}
                                            />
                                            <button className="plus">+</button>
                                        </form>
                                    </td>
                                    <td className="custom-td">25.000.000đ</td>
                                    <td>
                                        <img
                                            src="../assets/icons/trash.svg"
                                            alt=""
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="cart-total">
                            <div className="cart-total__title">
                                <h2>Cart Totals</h2>
                            </div>
                            <div className="cart-total__body">
                                <div className="cart-total__subtotal">
                                    <span>Subtotal</span>
                                    <span>25.000.000đ</span>
                                </div>
                                <div className="cart-total__subtotal">
                                    <span>Total</span>
                                    <span className="total__money">
                                        25.000.000đ
                                    </span>
                                </div>
                            </div>
                            <Link
                                to={"/checkout"}
                                className="cart-total__button"
                            >
                                Check Out
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartDetail;
