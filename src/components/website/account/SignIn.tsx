import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import instance from "../../../api/config";
import { IUser } from "../../../interfaces/User";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: async (user: IUser) => {
            const { data } = await instance.post("/signin", user);
            localStorage.setItem("user", JSON.stringify(data));
            return data;
        },
        onSuccess: () => {
            navigate("/admin");
            toast.success("Đăng nhập thành công !");
            queryClient.invalidateQueries({
                queryKey: ["PRODUCT_KEY"],
            });
        },
        onError: (error: any) => {
            toast.error(error.response.data);
            console.log();
        },
    });

    const onSubmit = (data: any) => {
        mutation.mutate(data);
    };

    return (
        <>
            <div className="container">
                <h1 className="my-3">Đăng nhập</h1>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label htmlFor="" className="label-form">
                            Email:
                        </label>
                        <input
                            type="email"
                            {...register("email", { required: true })}
                            className="form-control"
                        />
                        {errors.email && errors.email.type === "required" && (
                            <span className="text-danger">
                                Bắt buộc phải nhập !
                            </span>
                        )}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="label-form">
                            Mật khẩu:
                        </label>
                        <input
                            type="password"
                            {...register("password", { required: true })}
                            className="form-control"
                        />
                        {errors.password &&
                            errors.password.type === "required" && (
                                <span className="text-danger">
                                    Bắt buộc phải nhập !
                                </span>
                            )}
                    </div>
                    <button className="btn btn-primary">Đăng nhập</button>
                </form>
            </div>
        </>
    );
};

export default SignIn;
