import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addProduct, deleteProduct, updateProduct } from "../api/product.tsx";
import { IProduct } from "../interfaces/Product.ts";

type MutationQueryProps = {
    action: "UPDATE" | "DELETE" | "CREATE";
};

const MutationQuery = ({ action }: MutationQueryProps) => {
    const navigate = useNavigate();
    const form = useForm();
    const queryClient = useQueryClient();

    const { mutate, ...rest } = useMutation({
        mutationFn: async (product: IProduct) => {
            switch (action) {
                case "CREATE":
                    toast.success("Thêm sản phẩm thành công");
                    await addProduct(product);
                    navigate("/admin/products");
                    break;
                case "UPDATE":
                    toast.success("Cập nhật sản phẩm thành công");
                    await updateProduct(product);
                    navigate("/admin/products");
                    break;
                case "DELETE":
                    const confirm = window.confirm(
                        "Bạn có chắc chắn muốn xoá sản phẩm này không ?"
                    );
                    if (confirm) {
                        toast.success("Xoá sản phẩm thành công");
                        await deleteProduct(product.id as number | string);
                    }
                    break;
                default:
                    return null;
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["PRODUCT_KEY"],
            });
        },
    });

    const onSubmit = (data: any) => {
        mutate(data);
    };

    return { mutate, form, onSubmit, ...rest };
};

export default MutationQuery;
