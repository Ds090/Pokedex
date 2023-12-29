import UseDebounce from "../../hooks/usedebounce";

/* eslint-disable react/prop-types */
function Search({updateSearch}) {
  const debounceCallBack = UseDebounce((e) => updateSearch(e.target.value))

  return (
    <>
      <input type="text" placeholder="pokemon name. . . ." className="w-[300px] lg:w-[500px]  mt-2 py-2 px-2 text-white shadow-md shadow-red-700 focus:shadow-teal-600 mb-3" id="pokemo-name-search " onChange={debounceCallBack}/>
       
    </>
       
  );

}

export default Search;
