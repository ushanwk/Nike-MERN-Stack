import {useEffect, useState} from "react";

export function SupplierPage() {

    const[supId, setSupId] = useState('');
    const[supName, setSupName] = useState('');
    const[supAdd, setSupAdd] = useState('');
    const[supTel, setSupTel] = useState('');

    const [allSup, setAllSup] = useState([]);

    async function addSupplier(ev){
        ev.preventDefault()

        await fetch('http://localhost:4000/supplier', {
            method: 'POST',
            body: JSON.stringify({supId, supName, supAdd, supTel}),
            headers: {'Content-Type': 'application/json'},
        })
    }

    useEffect(() => {
        fetch('http://localhost:4000/supplier').then(response => {
            response.json().then(suppliers => {
                setAllSup(suppliers)
            })
        });
    }, []);

    return (
        <section>
            <header className={'flex justify-between items-center w-full bg-coral-red bg-opacity-10'}>
                <h1 className={'text-3xl text-coral-red px-10 py-2'}>Supplier Management</h1>
                <h1 className={'text-[12px] text-coral-red px-10 py-2'}>Admin dashboard > <span
                    className={'font-bold'}>Supplier Management</span></h1>
            </header>


            <section className={'flex gap-5'}>

                <section
                    className={'w-[500px] h-[550px] bg-white ml-14 mt-10 rounded-[10px] shadow-xl px-10 py-10'}>
                    <h1 className={'text-[24px]'}>Add a Supplier</h1>

                    <form className="space-y-4 md:space-y-6 my-8">
                        <div>
                            <label htmlFor="id"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white my-5">Supplier
                                ID</label>
                            <input type="text" name="id" id="id"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="Enter supplier id..." required=""
                                   value={supId}
                                   onChange={(ev) => {
                                       setSupId(ev.target.value)
                                   }}
                            />

                            <label htmlFor="name"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white my-5">Supplier
                                Name</label>
                            <input type="text" name="name" id="name"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="Enter supplier name" required=""
                                   value={supName}
                                   onChange={(ev) => {
                                       setSupName(ev.target.value)
                                   }}
                            />

                            <label htmlFor="address"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white my-5">Supplier
                                Address</label>
                            <input type="text" name="address" id="address"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="Enter supplier address" required=""
                                   value={supAdd}
                                   onChange={(ev) => {
                                       setSupAdd(ev.target.value)
                                   }}
                            />

                            <label htmlFor="tel"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white my-5">Supplier
                                Telephone</label>
                            <input type="text" name="tel" id="tel"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="Enter supplier telephone..." required=""
                                   value={supTel}
                                   onChange={(ev) => {
                                       setSupTel(ev.target.value)
                                   }}
                            />

                        </div>

                        <div className={'flex mt-8 gap-3'}>
                            <button className={'px-4 py-1 bg-coral-red text-white rounded-[5px]'}
                                    onClick={addSupplier}>Add Supplier
                            </button>

                            <button
                                className={'px-4 py-1 bg-white text-gray-500 rounded-[5px] border border-gray-500'}>Clear
                            </button>
                        </div>
                    </form>

                </section>

                <section>

                    <section
                        className={'w-[900px] h-[550px] bg-white mr-14 mt-10 rounded-[10px] shadow-xl px-10 py-10'}>
                        <h1 className={'text-[24px]'}>All Suppliers</h1>


                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
                            <table
                                className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead
                                    className="text-xs text-gray-700 uppercase bg-coral-red dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-white">
                                        Supplier ID
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-white">
                                       Supplier Name
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-white">
                                        Supplier Address
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-white">
                                        Supplier Telephone
                                    </th>
                                </tr>
                                </thead>

                                <tbody>

                                {
                                    allSup.length > 0 && allSup.map((supplier) => (
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <th scope="row"
                                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {supplier.supId}
                                            </th>
                                            <td className="px-6 py-4">
                                                {supplier.supName}
                                            </td>
                                            <td className="px-6 py-4">
                                                {supplier.supAddress}
                                            </td>
                                            <td className="px-6 py-4">
                                                0{supplier.supTelephone}
                                            </td>
                                        </tr>
                                    ))
                                }

                                </tbody>

                            </table>
                        </div>


                    </section>


                </section>

            </section>

        </section>
    )
}