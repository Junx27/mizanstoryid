import React, { useState } from "react";
import { useForm } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/login");
    };

    return (
        <div className="bg-blue-400 h-screen py-32">
            <form
                onSubmit={handleSubmit}
                className="relative mx-5 md:mx-auto p-2 w-[350px] h-full md:w-[500px] md:h-[500px] bg-white text-xs"
            >
                <img
                    src="logo.png"
                    alt=""
                    className="w-20 md:w-32 mx-auto my-2 md;my-5"
                />
                <hr className="mx-10 mb-2 md:mb-5" />
                <a href="/">
                    <span className="absolute top-3 right-3 material-symbols-outlined">
                        close
                    </span>
                </a>
                <div className="mx-10 pt-5 flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="p-3 border mt-2 outline-blue-400 text-xs"
                        placeholder="Email"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        required
                    />
                    {errors.email && (
                        <div className="text-red-500">{errors.email}</div>
                    )}
                </div>
                <div className="mx-10 pt-5 flex flex-col">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="p-3 border mt-2 outline-blue-400 text-xs"
                        placeholder="Password"
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                        required
                    />
                    {errors.password && (
                        <div className="text-red-500">{errors.password}</div>
                    )}
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        disabled={processing}
                        className="text-white w-full p-3 bg-blue-400 mx-10 mt-10 hover:bg-blue-600"
                    >
                        {processing ? "Loading..." : "Masuk"}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;
