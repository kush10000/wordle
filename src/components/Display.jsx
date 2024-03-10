export default function Display({character,color}){  
    if (color === "green"){
        return <div className=' p-1 my-1 mx-2 h-10 w-10 rounded-lg bg-lime-500  text-black text-center font-bold font-mono 
        active:outline-none focus:outline-none'>
        {character}
    </div>
    }  
    if (color === "yellow"){
        return <div className=' p-1 my-1 mx-2 h-10 w-10 rounded-lg bg-yellow-600  text-black text-center font-bold font-mono 
        active:outline-none focus:outline-none'>
        {character}
    </div>
    }
    if (color === "dark"){
        return <div className=' p-1 my-1 mx-2 h-10 w-10 rounded-lg bg-gray-700  text-white text-center font-bold font-mono 
        active:outline-none focus:outline-none'>
        {character}
    </div>
    }
        return <div className=' p-1 my-1 mx-2 h-10 w-10 rounded-lg bg-gray-500  text-white text-center font-bold font-mono 
            active:outline-none focus:outline-none'>
            {character}
        </div>
}