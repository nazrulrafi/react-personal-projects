import React, {useContext, useEffect, useState} from 'react';
import {Form, redirect, useActionData, useNavigate, useSearchParams} from "react-router-dom";
import {AuthContext} from "../context/AuthContext.jsx";

function Login(props) {
    const {register,login} = useContext(AuthContext);
    const [searchParams] = useSearchParams();
    const actionData = useActionData();
    const navigate = useNavigate();
    const mode = searchParams.get("mode") || "login";
    const [key,setKey] = useState(0);

    useEffect(() => {
        if (actionData?.type === "register"){
            setKey(prev => prev + 1);
            const registerRes = register(actionData.user);
            if (registerRes.success) {
                navigate("?mode=login");
            }

        }
        if (actionData?.type === "login"){
            const loginRes = login(actionData.user);
            if (loginRes.success) {
                navigate("/dashboard");
            }
        }

    },[actionData, navigate]);
    return (
        <div className="flex items-center justify-center min-h-screen">
            <Form key={key} className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] text-gray-500 rounded-lg shadow-xl border border-gray-200 bg-white" method="post">
                <p className="text-2xl font-medium m-auto">
                    <span className="text-indigo-500">User</span> {mode === "login" ? "Login" : "Sign Up"}
                </p>
                {mode === "register" && (
                    <div className="w-full">
                        <p>Name</p>
                        <input name="name"  placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" type="text"
                               required/>
                    </div>
                )}
                <div className="w-full ">
                    <p>Email</p>
                    <input  name="email" placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" type="email"
                           required/>
                </div>
                <div className="w-full ">
                    <p>Password</p>
                    <input name="password"  placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" type="password"
                           required/>
                </div>
                {mode === "register" ? (
                    <p>
                        Already have account? <span onClick={() => navigate("?mode=login")} className="text-indigo-500 cursor-pointer">click here</span>
                    </p>
                ) : (
                    <p>
                        Create an account? <span onClick={() => navigate("?mode=register")} className="text-indigo-500 cursor-pointer">click here</span>
                    </p>
                )}
                <button  className="bg-indigo-500 hover:bg-indigo-600 transition-all text-white w-full py-2 rounded-md cursor-pointer">
                    {mode === "register" ? "Create Account" : "Login"}
                </button>
            </Form>
        </div>
    );
}

export default Login;

export async function action({request}){
    const searchParam = new URL(request.url).searchParams;
    const mode = searchParam.get("mode") || "login";


    if (!["login", "register"].includes(mode)) {
        throw new Response(JSON.stringify({message:"Invalid mode"},{status:422}));
    }



    const data = await request.formData();
    if(mode === "register"){
        const registerData = {
            type: "register",
            user:{
                name: data.get("name"),
                email: data.get("email"),
                password: data.get("password"),
            }

        }
        return registerData;
    }
    if(mode === "login"){
        const loginData = {
            type: "login",
            user:{
                email: data.get("email"),
                password: data.get("password"),
            }
        }
        return loginData;
    }
}