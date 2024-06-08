import { CustomerReviews, Footer, Hero, PopularProducts, Services, SpecialOffer, Subscribe, SuperQuality } from './pages/Home/index.js'
import Nav from "./components/Nav.jsx";
import {Route, Routes} from "react-router-dom";
import {ShopItems} from "./pages/Item/ShopItems.jsx";
import {RegisterPage} from "./pages/Register/RegisterPage.jsx";
import {RegHeader} from "./pages/Register/RegHeader.jsx";
import {LoginPage} from "./pages/Login/LoginPage.jsx";
import {UserContextProvider} from "./UserContext.jsx";

const App = () => (

    <UserContextProvider>
        <Routes>
            <Route index element={
                <main className="relative">
                    <Nav/>

                    <section>
                        <section className='xl:padding-l wide:padding-r padding-b'>
                            <Hero/>
                        </section>

                        <section className="padding">
                            <PopularProducts/>
                        </section>

                        <section className="padding">
                            <SuperQuality/>
                        </section>

                        <section className="padding-x py-10">
                            <Services/>
                        </section>

                        <section className="padding">
                            <SpecialOffer/>
                        </section>

                        <section className="bg-pale-blue padding">
                            <CustomerReviews/>
                        </section>

                        <section className="padding-x sm:py-32 py-16 w-full">
                            <Subscribe/>
                        </section>

                        <section className="padding-x bg-black padding-t pb-8">
                            <Footer/>
                        </section>
                    </section>

                </main>
            }/>

            <Route path={'items'} element={
                <main>
                    <ShopItems/>
                </main>
            } />

            <Route path={'register'} element={
                <main>
                    <RegHeader/>
                    <RegisterPage/>
                </main>
            } />

            <Route path={'login'} element={
                <main>
                    <RegHeader/>
                    <LoginPage/>
                </main>
            } />
        </Routes>
    </UserContextProvider>


)

export default App;