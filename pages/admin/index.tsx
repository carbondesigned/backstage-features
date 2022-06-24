import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import api from "axiosStore";
import { useRouter } from "next/router";
type Props = {};

const AdminHome = (props: Props) => {
  const [signinErrors, setSigninErrors] = React.useState("");

  const router = useRouter();
  const signInValidation = z.object({
    email: z.string().email(),
    password: z.string().min(8),
  });
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = handleSubmit((data: any) => {
    api
      .post("/auth/signin", data)
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("token", res.data.token);
          router.push("/admin/dashboard");
          reset();
        }
      })
      .catch((err) => {
        console.log(err.response);
        setSigninErrors(err.response.data.error);
      });
  });

  return (
    <main className="min-h-screen bg-neutral grid place-items-center">
      <div className="bg-base-300 p-12 text-base-100 rounded-2xl">
        <div className="w-[25em] mx-auto">
          <h1 className="text-4xl mb-12">Login</h1>
          {signinErrors.length > 0 && (
            <span className="text-error">{signinErrors}</span>
          )}
          <form
            className="flex w-full mx-auto flex-col gap-4"
            onSubmit={onSubmit}
          >
            <div className="flex flex-col w-full">
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
              <label htmlFor="email" className="text-neutral-content">
                Email
              </label>
              <input
                {...register("email")}
                type="text"
                placeholder="Enter Email"
                className="input w-full max-w-lg bg-base-200"
              />
            </div>
            <div className="flex flex-col w-full">
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
              <label htmlFor="password" className="text-neutral-content">
                Password
              </label>
              <input
                {...register("password")}
                type="password"
                placeholder="Enter Password"
                className="input w-full max-w-lg bg-base-200"
              />
            </div>
            <div>
              <button type="submit" className="btn btn-primary w-full">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default AdminHome;
