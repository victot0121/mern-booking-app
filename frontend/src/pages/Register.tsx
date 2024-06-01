import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaRegEyeSlash } from "react-icons/fa";
import { LiaEyeSolid } from "react-icons/lia";
import { useMutation } from 'react-query';
import * as apiclient from '../api-client'
import { useAppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

export type RegisterFormData = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}


const Register = () => {
    const [show, setShow] = useState(false)
    const [confirmShow, setConfirmShow] = useState(false)

    const navigate = useNavigate()

    const { showToast } = useAppContext()

    const { register, watch, handleSubmit, formState: { errors } } = useForm<RegisterFormData>();

    const Mutation = useMutation(apiclient.register, {
        onSuccess: () => {
            showToast({ message: "Registration Succes!", type: "SUCCESS" })
            navigate("/");
        },
        onError: (error: Error) => {
            showToast({ message: error.message, type: "ERROR" })
        } 
    })


    const onSumbit = handleSubmit((data) => {
        Mutation.mutate(data)
    })



    const handleShow = () => {
        setShow(!show)
    }



    const handleConfirmShow = () => {
        setConfirmShow(!confirmShow)
    }


    return (
        <form className='flex flex-col gap-5 ' onSubmit={onSumbit}>
            <h2 className='text-3xl font-bold font-Lora mt-9'>Create Account</h2>
            <div className="flex flex-col md:flex-row gap-5">
                <label htmlFor="" className='text-gray-700 text-sm font-bold  font-Lora'>
                    First Name
                    <input className=" border-b rounded w-full py-1 px-2 font-normal flex-1 focus:outline-none"
                        {...register("firstName", { required: "This field is required" })}
                    ></input>
                    {errors.firstName && (
                        <span className='text-red-500'>{errors.firstName.message}</span>
                    )}
                </label>
                <label htmlFor="" className='text-gray-700 text-sm font-bold font-Lora'>
                    Last Name
                    <input className='border-b rounded w-full py-1 px-2 font-normal flex-1 focus:outline-none'
                        {...register("lastName", { required: "This field is required" })}
                    ></input>
                    {errors.lastName && (
                        <span className='text-red-500'>{errors.lastName.message}</span>
                    )}
                </label>
            </div>
            <label htmlFor="" className='text-gray-700 text-sm font-bold font-Lora'>
                Email
                <input
                    type='email'
                    className='border-b rounded w-full py-1 px-2 font-normal flex-1 focus:outline-none'
                    {...register("email", { required: "This field is required" })}
                ></input>
                {errors.email && (
                    <span className='text-red-500'>{errors.email.message}</span>
                )}
            </label>
            <label htmlFor="" className='text-gray-700 text-sm font-bold font-Lora'>
                <div onClick={handleShow} className='flex gap-2'>
                    <div className='pt-1'>
                        {show ? <LiaEyeSolid /> : <FaRegEyeSlash />}
                    </div>
                    password
                </div>

                <input
                    type={show ? 'text' : "password"}
                    className='border-b rounded w-full py-1 px-2 font-normal flex-1 focus:outline-none'
                    {...register("password", { required: "This field is required" })}
                ></input>
                {errors.password && (
                    <span className='text-red-500'>{errors.password.message}</span>
                )}
            </label>
            <label htmlFor="" className='text-gray-700 text-sm font-bold mb-20 font-Lora'>
                <div onClick={handleConfirmShow} className='flex gap-2'>
                    <div className='pt-1'>
                        {confirmShow ? <LiaEyeSolid /> : <FaRegEyeSlash />}
                    </div>
                    confirmPassword
                </div>
                <input
                    type={confirmShow ? "text" : "password"}
                    className='border-b rounded w-full py-1 px-2 font-normal flex-1 focus:outline-none'
                    {...register("confirmPassword", {
                        validate: (val) => {
                            if (!val) {
                                return "This field is required"
                            } else if (watch("password") !== val) {
                                return "Your password do not match"
                            }
                        }
                    })}
                ></input>
                {errors.confirmPassword && (
                    <span className='text-red-500'>{errors.confirmPassword.message}</span>
                )}
            </label>
            <span>
                <button type="submit" className='bg-blue-500 text-white p-2 font-Lora font-bold hover:bg-blue-400 text-sm mb-12 rounded-md'>
                    create Account
                </button>
            </span>
        </form>
    )
}


export default Register
