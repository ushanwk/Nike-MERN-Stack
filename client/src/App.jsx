import { CustomerReviews, Footer, Hero, PopularProducts, Services, SpecialOffer, Subscribe, SuperQuality } from './pages/Home/index.js'
import Nav from "./components/Nav.jsx";
import {Route, Routes} from "react-router-dom";
import {ShopItems} from "./pages/Item/ShopItems.jsx";
import {NavItemsSec} from "./components/NavItemsSec.jsx";

const App = () => (

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
    </Routes>
)

export default App;