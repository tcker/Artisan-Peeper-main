import { HiMagnifyingGlass } from "react-icons/hi2"

function Searchbar({placeholderVal}) {
  return (
    <div className="w-full h-16 bg-black-900 flex justify-center items-center">
      <div className="flex justify-center items-center relative">
        <label htmlFor="search" className="flex justify-center items-center rounded-tl-lg rounded-bl-lg bg-slate-800 h-10 w-12 p-4">
          <HiMagnifyingGlass className="w-5 h-5"/>
        </label>
        <input type="search" placeholder={placeholderVal} className="text text-white w-[200px] md:w-[600px] h-10 rounded-tr-lg rounded-br-lg p-2 dark:bg-slate-900 outline-none"/>
      </div>
    </div>
  )
}

export default Searchbar
