import { Link } from "react-router-dom";
import MutationQuery from "../../hooks/MutationQuery.tsx";
import ProductQuery from "../../hooks/ProductQuery";
import { IProduct } from "../../interfaces/Product.ts";

const ProductList = () => {
    // const { data, isLoading } = ProductQuery();
    const { data, isLoading } = ProductQuery();

    const { mutate } = MutationQuery({
        action: "DELETE",
    });

    if (isLoading) return <div>Loading...</div>;

    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Quản lý sản phẩm</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <Link
                            to="/admin/products/add"
                            className="btn btn-sm btn-outline-secondary"
                        >
                            Thêm
                        </Link>
                    </div>
                </div>
            </div>

            <div>
                <table className="table align-middle text-center">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Danh mục</th>
                            <th>Tên sản phẩm</th>
                            <th>Giá</th>
                            <th>Giảm giá (%)</th>
                            <th>Ảnh</th>
                            <th>Mô tả</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((product: IProduct, index: number) => (
                            <tr key={index}>
                                <td>{product.id}</td>
                                <td>{product.category}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.sale}</td>
                                <td>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        width="100"
                                    />
                                </td>
                                <td>{product.description}</td>
                                <td>
                                    <Link
                                        className="btn btn-primary me-3"
                                        to={`/admin/products/edit/${product.id}`}
                                    >
                                        Sửa
                                    </Link>
                                    <button
                                        onClick={() => mutate(product)}
                                        className="btn btn-danger"
                                    >
                                        Xoá
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ProductList;
