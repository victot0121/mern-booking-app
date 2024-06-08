import { useForm } from "react-hook-form"
import { useState } from 'react'
import { FaRegEyeSlash } from "react-icons/fa";
import { LiaEyeSolid } from "react-icons/lia";
import { useMutation } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";



export type SignInFormData = {
    email: string;
    password: string;
}

 
const Signin = () => {

    const [show, setShow] = useState(false)

    const navigate = useNavigate()


     const {showToast}  = useAppContext()

    const { register, formState: { errors } , handleSubmit} = useForm<SignInFormData>()

    const mutation = useMutation(apiClient.signIn,{
        onSuccess: async()=>{
           showToast({message: "Sign in Successful", type: "SUCCESS"})
           navigate("/")
           
        }, 
        onError: (error:Error)=>{
               //show the toast
               showToast({message:  error.message, type: "ERROR"})
        }
    })
   
   
    const onSumbit = handleSubmit((data)=>{
       mutation.mutate(data)
    })
   

    const handleShow = () => {
        setShow(!show)
    }

    return (
        <form className="flex flex-col gap-5" onSubmit={onSumbit}>
            <h2 className="text-3xl font-bold">Sign In</h2>
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
            <span>
                <button type="submit" className='bg-blue-500 text-white p-2 font-Lora font-bold hover:bg-blue-400 text-sm mb-12 rounded-md'>
                    Login
                </button>
            </span>
        </form>
    )
}

export default Signin
