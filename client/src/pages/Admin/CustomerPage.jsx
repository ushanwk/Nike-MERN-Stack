import {useEffect, useState} from "react";

export function CustomerPage() {

    const[allCus, setAllCus] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/customer').then(response => {
            response.json().then(customers => {
                setAllCus(customers);
                console.log(customers)
            })
        });
    }, []);

    return (
        <section>
            <header className={'flex justify-between items-center w-full bg-coral-red bg-opacity-10'}>
                <h1 className={'text-3xl text-coral-red px-10 py-2'}>Customer Management</h1>
                <h1 className={'text-[12px] text-coral-red px-10 py-2'}>Admin dashboard > <span
                    className={'font-bold'}>Customer Management</span></h1>
            </header>

            <section className={'mx-16 mt-12'}>

                <section className={'flex gap-5'}>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5 w-[600px]">
                        <table
                            className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead
                                className="text-xs text-gray-700 uppercase bg-coral-red dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-white">
                                    Customer Email
                                </th>
                                <th scope="col" className="px-6 py-3 text-white">
                                    Customer Name
                                </th>
                            </tr>
                            </thead>

                            <tbody>

                            {
                                allCus.length > 0 && allCus.map((customer) => (
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {customer.email}
                                        </th>
                                        <td className="px-6 py-4">
                                            {customer.name}
                                        </td>

                                    </tr>
                                ))
                            }

                            </tbody>

                        </table>
                    </div>

                    <div>
                        Rest
                    </div>
                </section>


            </section>
        </section>
    )
}