import {useState} from "react";

export function ItemPage() {

    const[modelId, setModelId] = useState('');
    const[model, setModel] = useState('');
    const[unitPrice, setUnitPrice] = useState('');
    const[quantity, setQuantity] = useState('');
    const[file, setFile] = useState('')

    async function addNewItem(ev){
        const data = new FormData();
        data.set('modelId', modelId);
        data.set('model', model);
        data.set('unitPrice', unitPrice);
        data.set('quantity', quantity)
        data.set('file', file[0]);

        ev.preventDefault();

        const response = await fetch('http://localhost:4000/item', {
            method: 'POST',
            body: data,
        });

        console.log()(await response.json())
    }

    return (
        <section>
            <header className={'flex justify-between items-center w-full bg-coral-red bg-opacity-10'}>
                <h1 className={'text-3xl text-coral-red px-10 py-2'}>Item Management</h1>
                <h1 className={'text-[12px] text-coral-red px-10 py-2'}>Admin dashboard > <span className={'font-bold'}>Item Management</span></h1>
            </header>

            <section className={'w-[500px] h-[550px] bg-white ml-14 mt-10 rounded-[10px] shadow-xl px-10 py-10'}>
                <h1 className={'text-[24px]'}>Add a new Item</h1>

                <form className="space-y-4 md:space-y-6 my-8">
                    <div>
                        <label htmlFor="id"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white my-5">Item Model
                            ID</label>
                        <input type="text" name="id" id="id"
                               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="Enter item model id..." required=""
                               value={modelId}
                               onChange={(ev) => {
                                   setModelId(ev.target.value)
                               }}
                        />

                        <label htmlFor="model"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white my-5">Item
                            Model</label>
                        <input type="text" name="model" id="model"
                               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="Enter item model..." required=""
                               value={model}
                               onChange={(ev) => {
                                   setModel(ev.target.value)
                               }}
                        />

                        <label htmlFor="price"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white my-5">Unit
                            Price</label>
                        <input type="text" name="price" id="price"
                               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="Enter item unit price..." required=""
                               value={unitPrice}
                               onChange={(ev) => {
                                   setUnitPrice(ev.target.value)
                               }}
                        />

                        <div className={'flex gap-5'}>
                            <div>
                                <label htmlFor="img"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white my-5">Item
                                    Image</label>
                                <input
                                    className="bg-gray-100 py-2 rounded-[8px] relative border-gray-300 m-0 block w-full min-w-0 flex-auto cursor-pointer border border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 text-base font-normal text-surface transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:me-3 file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-e file:border-solid file:border-inherit file:bg-transparent file:px-3  file:py-[0.32rem] file:text-surface focus:border-primary focus:text-gray-700 focus:shadow-inset focus:outline-none dark:border-white/70 dark:text-white  file:dark:text-white"
                                    type="file"
                                    id="formFile"
                                    onChange={(ev) => {
                                        setFile(ev.target.files)
                                    }}
                                />
                            </div>

                            <div>
                                <label htmlFor="qty"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white my-5">Quantity</label>
                                <input type="text" name="qty" id="qty"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="Enter quantity in stock..." required=""
                                       value={quantity}
                                       onChange={(ev) => {
                                           setQuantity(ev.target.value)
                                       }}
                                />
                            </div>
                        </div>


                        <div className={'flex mt-8 gap-3'}>
                            <button className={'px-4 py-1 bg-coral-red text-white rounded-[5px]'}
                                    onClick={addNewItem}>Add Item
                            </button>

                            <button
                                className={'px-4 py-1 bg-white text-gray-500 rounded-[5px] border border-gray-500'}>Clear
                            </button>
                        </div>
                    </div>
                </form>

            </section>

        </section>
    )
}