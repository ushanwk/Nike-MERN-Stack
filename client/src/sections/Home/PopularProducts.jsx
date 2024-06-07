import {products} from "../../constants/index.js";
import PopularProductCard from "../../components/PopularProductCard.jsx";
import Button from "../../components/Button.jsx";
import {Link} from "react-router-dom";

const PopularProducts = () => {
    return(
        <section id="products" className="max-container max-sm:mt-12">
            <div className="flex flex-col justify-start gap-5">
                <h2 className="text-4xl font-palanquin font-bold">Our <span
                    className="text-coral-red">Popular</span> Products</h2>
                <p className="max-w-lg mt-2 font-montserrat text-slate-gray">Experience top-notch quality and style with
                    our sought-after
                    selections. Discover a world of comfort, design, and value</p>
            </div>

            <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
                {
                    products.map((product) => (
                        <PopularProductCard key={product.name} {...product}/>
                    ))
                }
            </div>

            <div className='mt-16 flex flex-wrap gap-4 justify-center'>
                <Link to={'items'} className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full border-gray-500">
                    Discover more
                </Link>
            </div>
        </section>
)
}

export default PopularProducts;