import { IFormInput } from '@/types'
import React from 'react'
import Link from 'next/link'
import users from '@/db/users.json'

type Props = {
    searchParams: IFormInput
}

function Resumen({ searchParams }: Props) {

    const findUser = () => {
        for (const user of users.users) {
            if (
                user['document-type'] === searchParams.document_type &&
                user['document-number'] === Number(searchParams.document_number) &&
                (!searchParams.country || user['country'] === searchParams.country)
            ) {
                return user;
            }
        }
        return null; // Usuario no encontrado
    }

    const userFinded = findUser();

    return (
        <main className="flex min-h flex-col items-center justify-between p-24">
            {!userFinded ? <section className="z-10 max-w-5xl w-full items-center font-mono text-sm lg:flex place-content-center justify-around">
                <p id="no-encontrado" className='text-red-400 font-bold bg-blue-200 p-5 rounded-xl shadow-md'>No se encontro ningun usuario con la identificación</p>
            </section> :
                <section className="z-10 max-w-5xl w-full items-center font-mono text-sm lg:flex place-content-center justify-around">
                    <section className="min-h place-content-center bg-gray-200 p-10 rounded-x" >
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-500 dark:text-white " >Primer nombre</label>
                        <input disabled type="text" id="name" value={userFinded?.name} className="disabled:bg-gray-300 disabled:text-gray-500 bg-gray-50 border border-gray-300 mb-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nombre" />
                        <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Primer apellido</label>
                        <input disabled type="text" id="lastname" value={userFinded?.lastname} className="disabled:bg-gray-300 disabled:text-gray-500 bg-gray-50 border border-gray-300 mb-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nombre" />
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Telefono</label>
                        <input disabled type="text" id="phone" value={userFinded?.phone} className="disabled:bg-gray-300 disabled:text-gray-500 bg-gray-50 border border-gray-300 mb-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nombre" />
                    </section>
                </section>}
            <Link href="/" className='block mt-3 py-2 px-4 disabled:bg-gray-200  rounded-2xl text-white bg-blue-900 text-center'>Regresar</Link>
        </main>
    )
}

export default Resumen