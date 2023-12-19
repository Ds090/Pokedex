// eslint-disable-next-line react/prop-types
function Pokemon({ name, image }) {
    return (
        <div className="basis-[20%] h-[220px] w-[300px] flex flex-col items-center hover:bg-stone-600 cursor-pointer">
            <div className="text-xl tracking-widest bg-gradient-to-tr from-green-400 to-white bg-clip-text text-transparent">{name}</div>
            <div className="mt-[1rem]"><img src={image} className="max-h-[100%] h-[150px]"/></div>
        </div>
    )
}

export default Pokemon;