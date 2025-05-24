'use client'
import { ArrowRight, Eye, EyeOff, FileText, Link2, Lock, Mail, Twitter, User, Youtube, SquareArrowOutUpRight } from 'lucide-react'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import axios, { AxiosRequestHeaders } from 'axios'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { RadioGroup } from '@/components/ui/radio-group'
import { title } from 'process'



const Auth = ({isSignin} : {isSignin:boolean}) => {
    //API ENDPOINTS
    

    //INTERFACE
    interface FormValues{
        title: string,
        type: string,
        url?: string
    }

   
    const router = useRouter()
    
    const{
        register,
        handleSubmit,
        reset,
        formState: {errors, isSubmitting}
    } = useForm<FormValues>({
        defaultValues: {
            title: "",
            type: "",
            url: ""
        }
    })

    const onsubmit:SubmitHandler<FormValues> = async (formData) => {
        try{
            console.log(formData)
            const response = await axios.post("api/dashboard/addContent", {
                title: formData.title,
                type: formData.type,
                url: formData.url
            })
            console.log(response.data)
            reset()
        }catch(error){
          console.log(error)
        }
    }

  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-md">
            {/* Login Form */}
            <div className='p-5 bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden backdrop-blur-sm backdrop-filter border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl'>
                <form onSubmit={handleSubmit(onsubmit)}>
                    {/* Title Input */}
                    <div className="mb-5">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Title
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail size={18} className="text-gray-400" />
                            </div>
                            
                            <input
                            {...register('title',{ required: 'Title is required' })}
                            type="title"
                            className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm text-gray-900 dark:text-white bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:placeholder-gray-500 transition-all duration-200"
                            placeholder="Add your title"
                            />   
                        </div>
                        {errors.title && <p className='text-red-500 text-sm'>{errors.title.message}</p>}
                    </div>

                    {/* Type Radio Option */}
                    <div className="mb-5">
                        <div className="flex justify-between mb-1">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Select the type
                            </label>
                        </div>
                        <div className="flex min-w-2/5 justify-between">
                            <div className="flex items-center space-x-2">
                                <input
                                type="radio"
                                value="VIDEO"
                                id="youtube"
                                {...register('type', { required: 'Type is required' })}
                                name="type"
                                />
                                <label htmlFor="youtube"><Youtube/></label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <input
                                type="radio"
                                value="TWEET"
                                id="twitter"
                                {...register('type', { required: 'Type is required' })}
                                name="type"
                                />
                                <label htmlFor="twitter"><Twitter/></label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <input 
                                type='radio' 
                                value="DOCUMENT" 
                                id="pdf"
                                {...register('type', { required: 'Type is required' })}
                                name="type"
                                />
                                <label htmlFor="pdf"><FileText /></label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <input 
                                type='radio' 
                                value="LINK" 
                                id="link" 
                                {...register('type', { required: 'Type is required' })}
                                name="type"
                                />
                                <label htmlFor="link"><Link2/></label>
                            </div>
                        </div>
                        {errors.type && <p className='text-red-500 text-sm'>{errors.type.message}</p>}
                    </div>

                    {/* Content Link */}
                    <div className="mb-5">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Link
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <SquareArrowOutUpRight size={18} className="text-gray-400" />
                                </div>
                                <input
                                {...register('url')}
                                type="text"
                                id="text"
                                className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm text-gray-900 dark:text-white bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:placeholder-gray-500 transition-all duration-200"
                                placeholder="name"
                                />
                            </div>
                            {errors.url && <p className='text-red-500 text-sm'>{errors.url.message}</p>}
                    </div>
                    {/* Login Button */}
                    <button
                        disabled={isSubmitting}
                        type="submit"
                        className="w-full mt-8 cursor-pointer flex justify-center items-center 
                                py-2.5 px-4 bg-blue-500 hover:bg-blue-600 focus:ring-4 
                                focus:ring-blue-300 dark:focus:ring-blue-700 text-white 
                                font-medium rounded-lg transition-all duration-200 
                                overflow-hidden group"
                    >
                        <span className="relative inline-flex items-center group">
                            <span>Create</span>
                            <ArrowRight 
                            size={18} 
                            className="ml-2 group-hover:translate-x-1 transition-transform duration-200" 
                            />
                        </span>
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Auth