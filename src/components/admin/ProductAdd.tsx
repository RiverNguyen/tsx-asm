import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { IProduct } from "../../interfaces/Product";

const ProductAdd = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: async (product: IProduct) => {
            const { data } = await axios.post(
                `http://localhost:3000/products`,
                product
            );
            return data;
        },
        onSuccess: () => {
            toast.success("Thêm sản phẩm thành công");
            queryClient.invalidateQueries({
                queryKey: ["PRODUCT_KEY"],
            });
        },
    });

    const onSubmit = (data: any) => {
        mutation.mutate(data);
        console.log(data);
    };
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Thêm sản phẩm</h1>
                </div>
                <div className="mb-3 mt-4">
                    <label htmlFor="" className="form-label">
                        Danh mục:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        {...register("category", { required: true })}
                    />
                    {errors.category && (
                        <span className="text-danger">Không biết nhập à ?</span>
                    )}
                </div>
                <div className="mb-3 mt-4">
                    <label htmlFor="" className="form-label">
                        Tên sản phẩm:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        {...register("name", { required: true })}
                    />
                    {errors.name && (
                        <span className="text-danger">Không biết nhập à ?</span>
                    )}
                </div>
                <div className="mb-3 mt-4">
                    <label htmlFor="" className="form-label">
                        Giá:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        {...register("price", { required: true })}
                    />
                    {errors.price && (
                        <span className="text-danger">Không biết nhập à ?</span>
                    )}
                </div>
                <div className="mb-3 mt-4">
                    <label htmlFor="" className="form-label">
                        % Giảm giá:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        {...register("sale", { required: true })}
                    />
                    {errors.sale && (
                        <span className="text-danger">Không biết nhập à ?</span>
                    )}
                </div>
                <div className="mb-3 mt-4">
                    <label htmlFor="" className="form-label">
                        Ảnh:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        {...register("image", { required: true })}
                    />
                    {errors.image && (
                        <span className="text-danger">Không biết nhập à ?</span>
                    )}
                </div>
                <div className="mb-3 mt-4">
                    <label htmlFor="" className="form-label">
                        Mô tả:
                    </label>
                    <textarea
                        id=""
                        cols={30}
                        rows={10}
                        {...register("description")}
                        className="form-control"
                    ></textarea>
                </div>
                <button className="btn btn-primary">Thêm sản phẩm</button>
            </form>
        </>
    );
};

export default ProductAdd;
