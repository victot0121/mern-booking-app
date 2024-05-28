import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaRegEyeSlash } from "react-icons/fa";
import { LiaEyeSolid } from "react-icons/lia";

type RegisterFormData = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}


const Register = () => {
    const [show, setShow] = useState(false)
    const { register } = useForm<RegisterFormData>();

    const handleShoew = () => {
        setShow(!show)
    }

    return (
        <form className='flex flex-col gap-5 '>
            <h2 className='text-3xl font-bold'>Create Account</h2>
            <div className="flex flex-col md:flex-row gap-5">
                <label htmlFor="" className='text-gray-700 text-sm font-bold'>
                    First Name
                    <input className=" border-b rounded w-full py-1 px-2 font-normal flex-1 focus:outline-none"
                        {...register("firstName", { required: "This field is required" })}
                    ></input>
                </label>
                <label htmlFor="" className='text-gray-700 text-sm font-bold'>
                    Last Name
                    <input className='border-b rounded w-full py-1 px-2 font-normal flex-1 focus:outline-none'
                        {...register("lastName", { required: "This field is required" })}
                    ></input>
                </label>
            </div>
            <label htmlFor="" className='text-gray-700 text-sm font-bold'>
                Email
                <input
                    type='email'
                    className='border-b rounded w-full py-1 px-2 font-normal flex-1 focus:outline-none'
                    {...register("email", { required: "This field is required" })}
                ></input>
            </label>
            <label htmlFor="" className='text-gray-700 text-sm font-bold'>
                <div>
                    {show ? <FaRegEyeSlash /> : <LiaEyeSolid />}
                </div>
                password
                <input
                    type='Password'
                    className='border-b rounded w-full py-1 px-2 font-normal flex-1 focus:outline-none'
                    {...register("password", { required: "This field is required" })}
                ></input>
            </label>
            <label htmlFor="" className='text-gray-700 text-sm font-bold mb-20'>
                confirmPassword
                <input
                    type='password'
                    className='border-b rounded w-full py-1 px-2 font-normal flex-1 focus:outline-none'
                    {...register("confirmPassword", { required: "This field is required" })}
                ></input>
            </label>
        </form>
    )
}


export default Register
