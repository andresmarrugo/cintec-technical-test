import Image from 'next/image'
import UserSearchForm from "@/components/user-search-form";
import { ICountryAPIResponse } from '@/types/api';
export default async function Home() {

  const countries = await (await (fetch("https://restcountries.com/v3.1/all"))).json() as ICountryAPIResponse[]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="z-10 max-w-5xl w-full items-center font-mono text-sm lg:flex place-content-center justify-around">
        <UserSearchForm countries={countries} />
      </section>
    </main>
  )
}
