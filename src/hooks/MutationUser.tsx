import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { signIn, signUp } from "../api/user.tsx";
import { IUser } from "../interfaces/User.ts";

type MutationUserProps = {
    action: "SIGNIN" | "SIGNUP";
};

const MutationUser = ({ action }: MutationUserProps) => {
    const form = useForm();
    const queryClient = useQueryClient();

    const { mutate, ...rest } = useMutation({
        mutationFn: async (user: IUser) => {
            switch (action) {
                case "SIGNUP":
                    await signUp(user);
                    break;
                case "SIGNIN":
                    await signIn(user);
                    break;

                default:
                    return null;
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["USER_KEY"],
            });
        },
        onError: (error: any) => {
            console.log(error.response.data);
        },
    });

    const onSubmit = (data: any) => {
        mutate(data);
    };

    return { mutate, form, onSubmit, ...rest };
};

export default MutationUser;
