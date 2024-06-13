import {headerLogo} from "../../assets/images/index.js";
import nikeLogo from '../../assets/images/nikeRight.png'
import dashboard from '../../assets/images/dashboard.png'
import order from '../../assets/images/order.png'
import customer from '../../assets/images/customer.png'
import supplier from '../../assets/images/supplier.png'
import item from '../../assets/images/item.png'
import {useState} from "react";
import {DashboardPage} from "./DashboardPage.jsx";
import {ItemPage} from "./ItemPage.jsx";
import {CustomerPage} from "./CustomerPage.jsx";
import {SupplierPage} from "./SupplierPage.jsx";
import {OrderPage} from "./OrderPage.jsx";
import {AdminNav} from "./AdminNav.jsx";


export function AdminDashboard() {

    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <section className="min-h-screen">
            <div className="flex h-screen">
                <div className="w-24 bg-white flex-col shadow-2xl">

                    <div className="w-24 flex justify-center">
                        <a className='mt-12'>
                            <img
                                src={nikeLogo}
                                alt="Logo"
                                width={60}
                            />
                        </a>
                    </div>

                    <div className={`w-24 flex justify-center mt-36 p-4 cursor-pointer ${selectedTab == 0 ? 'bg-coral-red bg-opacity-10' : 'bg-white'}`}
                         onClick={() => {setSelectedTab(0)}}
                    >
                        <img src={dashboard} width={25}/>
                    </div>

                    <div className={`w-24 flex justify-center mt-5 p-4 cursor-pointer ${selectedTab == 1 ? 'bg-coral-red bg-opacity-10' : 'bg-white'}`}
                         onClick={() => {setSelectedTab(1)}}
                    >
                        <img src={item} width={30}/>
                    </div>

                    <div className={`w-24 flex justify-center mt-5 p-4 cursor-pointer ${selectedTab == 2 ? 'bg-coral-red bg-opacity-10' : 'bg-white'}`}
                         onClick={() => {setSelectedTab(2)}}
                    >
                        <img src={customer} width={30}/>
                    </div>

                    <div className={`w-24 flex justify-center mt-5 p-4 cursor-pointer ${selectedTab == 3 ? 'bg-coral-red bg-opacity-10' : 'bg-white'}`}
                         onClick={() => {setSelectedTab(3)}}
                    >
                        <img src={supplier} width={30}/>
                    </div>

                    <div className={`w-24 flex justify-center mt-5 p-4 cursor-pointer ${selectedTab == 4 ? 'bg-coral-red bg-opacity-10' : 'bg-white'}`}
                         onClick={() => {setSelectedTab(4)}}
                    >
                        <img src={order} width={30}/>
                    </div>


                </div>


                <div className="flex-1 bg-gray-50">

                    <AdminNav/>

                    {selectedTab == 0 ? <DashboardPage /> : null}
                    {selectedTab == 1 ? <ItemPage /> : null}
                    {selectedTab == 2 ? <CustomerPage /> : null}
                    {selectedTab == 3 ? <SupplierPage /> : null}
                    {selectedTab == 4 ? <OrderPage /> : null}

                </div>
            </div>
        </section>
    )
}