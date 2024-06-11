import {star} from "../../assets/icons/index.js";

export function ItemCard({item}) {
    return (
        <section className={'w-[350px] h-[480px] shadow-xl mt-5 rounded-[10px] p-2 border'}>
            <img src={'http://localhost:4000/' + item.image} className={'h-72 w-full rounded-[10px]'}/>

            <h3 className={'mx-3 mt-3 text-coral-red'}>Just In</h3>

            <div className={'flex justify-between mx-3'}>
                <h3 className="text-xl leading-normal font-semibold font-palanquin">{item.model}</h3>

                <div className="flex justify-start gap-2.5 items-center mt-1">
                    <img src={star} alt="rate" width={20}/>
                    <p className="font-montserrat text-[15px] leading-normal text-slate-gray">(4.9)</p>
                </div>
            </div>

            <h1 className={'mx-3 mt-3 font-bold text-2xl opacity-50'}>Rs.{item.price}/=</h1>

            <button className={'mx-3 mt-5 p-1 bg-coral-red w-[305px] rounded-[5px] text-white'}>Add to Cart</button>

        </section>
    )
}