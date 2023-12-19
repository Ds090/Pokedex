// eslint-disable-next-line react/prop-types
function Pokemon({ name, image }) {
    return (
        <div className="basis-[20%] h-[220px] w-[300px] flex flex-col items-center">
            <div className="text-xl tracking-widest">{name}</div>
            <div className="mt-[1rem]"><img src={image} className="max-h-[100%] h-[150px]"/></div>
        </div>
    )
}

export default Pokemon;