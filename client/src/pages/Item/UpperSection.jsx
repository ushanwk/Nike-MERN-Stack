export const UpperSection = ({tabs}) => {
    return (
        <div className='w-full h-40 flex'>
            <div className='w-[350px] h-full flex items-center'>
                <h1 className='text-[13px] text-gray-400 px-24'>Home > <span className='text-black'>All products</span></h1>
            </div>

            <div className='h-40 flex items-center'>
                <h1 className='text-[100px] font-bold text-coral-red opacity-30 tracking-[2px]'>Search for Items...</h1>
            </div>
        </div>
    )
}
