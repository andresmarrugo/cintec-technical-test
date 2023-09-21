"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { useForm, SubmitHandler } from "react-hook-form"
import { ErrorMessage } from '@hookform/error-message'
import CustomErrorMessage from '@/components/error'
import { IFormInput } from '@/types'
import { ICountryAPIResponse } from '@/types/api'

type Props = {
    countries: ICountryAPIResponse[]
}

function DocumentForm({ countries }: Props) {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<IFormInput>({ mode: "onTouched" })
    const router = useRouter()
    const onSubmit: SubmitHandler<IFormInput> = data => router.push(`/resumen?document_type=${data.document_type}&document_number=${data.document_number}${data.country ? `&country=${data.country}` : ""}`);

    return (
        <section className="min-h place-content-center bg-gray-300 p-10 rounded-xl" >
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="document-tyoe" className="block mb-2 text-smfont-medium text-gray-900 dark:text-white">Tipo de documento <span className='text-red-600'>*</span></label>
                <select {...register("document_type", { required: "Selecciona un tipo de documento" })} id="document-tyoe" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option defaultValue="" className='hidden'></option>
                    <option value="CC">Cedula de ciudadanía</option>
                    <option value="RC">Registro civil</option>
                    <option value="PP">Pasaporte</option>
                    <option value="CE">Cedula de extrageria</option>
                </select>
                <ErrorMessage errors={errors} name='document_type' render={({ message }) => <CustomErrorMessage message={message} />} />


                <label htmlFor="document-number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Numero de documento <span className='text-red-600'>*</span></label>
                <input {...register("document_number", {
                    required: "Ingresa un numero valido", minLength: {
                        value: 8, message: "Debe contener una logitud minima de 8 numeros"
                    }, maxLength: {
                        value: 11,
                        message: "Debe contener una logitud maxima de 11 numeros"
                    }
                })
                }
                    type="number"
                    id="document-number"
                    className="bg-gray-50 border border-gray-300 mb-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1002333222"
                />

                <ErrorMessage errors={errors} name='document_number' render={({ message }) => <CustomErrorMessage message={message} />} />

                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">País</label>
                <select {...register("country")} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option className='hidden' defaultChecked defaultValue=""></option>
                    {countries?.map((country) => {
                        return <option key={country.cca3} value={country.cca3}>{country.name.common}</option>
                    })}
                </select>
                <ErrorMessage errors={errors} name="country" />

                <div className='flex place-content-center'>
                    <input id="boton-buscar" disabled={!isValid} type="submit" value="Buscar" className='block mt-3 py-2 px-4 w-1/3 disabled:bg-gray-200  rounded-2xl text-white bg-blue-900 ' />
                </div>
            </form>
        </section>
    )
}

export default DocumentForm