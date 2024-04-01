import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IUser } from "../../../interfaces/User";
import instance from "../../../api/config";

const SignUp = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: async (user: IUser) => {
            await instance.post("/signup", user);
            toast.success("Đăng ký thành công !");
        },
        onSuccess: () => {
            navigate("/sign-in");
            queryClient.invalidateQueries({
                queryKey: ["PRODUCT_KEY"],
            });
        },
        onError: (error: any) => {
            toast.error(error.response.data);
            console.log(error.response.data);
        },
    });

    const onSubmit = (data: any) => {
        mutation.mutate(data);
    };
    return (
        <div>
            {" "}
            <div className="container">
                <h1 className="my-3">Đăng ký</h1>
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
                    <Link to="/sign-in">Bạn đã có tài khoản ? Đăng nhập</Link>{" "}
                    <br />
                    <br />
                    <button className="btn btn-primary">Đăng ký</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
