import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Pokemon({ name, image, id }) {
  return (
    <div className="basis-[20%] h-[220px] w-[300px] flex flex-col items-center hover:bg-stone-600 cursor-pointer">
      <Link to={`/pokemon/${id}`}>
        <div className="text-xl tracking-widest bg-gradient-to-tr from-green-400 to-white bg-clip-text text-transparent">
          {name}
        </div>
        <div className="mt-[1rem]">
          <img src={image} className="max-h-[100%] h-[150px]" />
        </div>
      </Link>
    </div>
  );
}

export default Pokemon;
