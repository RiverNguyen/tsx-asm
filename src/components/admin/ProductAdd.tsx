import MutationQuery from "../../hooks/MutationQuery";

const ProductAdd = () => {
    const { form, onSubmit, isPending } = MutationQuery({
        action: "CREATE",
    });
    return (
        <>
            <form onSubmit={form.handleSubmit(onSubmit)}>
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
                        {...form.register("category", { required: true })}
                    />
                    {form.formState.errors.category && (
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
                        {...form.register("name", { required: true })}
                    />
                    {form.formState.errors.name && (
                        <span className="text-danger">Không biết nhập à ?</span>
                    )}
                </div>
                <div className="mb-3 mt-4">
                    <label htmlFor="" className="form-label">
                        Giá:
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        {...form.register("price", { required: true })}
                    />
                    {form.formState.errors.price && (
                        <span className="text-danger">Không biết nhập à ?</span>
                    )}
                </div>
                <div className="mb-3 mt-4">
                    <label htmlFor="" className="form-label">
                        % Giảm giá:
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        {...form.register("sale", { required: true })}
                    />
                    {form.formState.errors.sale && (
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
                        {...form.register("image", { required: true })}
                    />
                    {form.formState.errors.image && (
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
                        {...form.register("description")}
                        className="form-control"
                    ></textarea>
                </div>
                <button className="btn btn-primary">
                    {" "}
                    {isPending ? "Đang thêm..." : "Thêm sản phẩm"}
                </button>
            </form>
        </>
    );
};

export default ProductAdd;
