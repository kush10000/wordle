export default function Key({alphabet,matrix,row,column,setColumn,setMatrix,color}){

    if(row>5)
    return;

    if(color.has(alphabet)){
        if(color.get(alphabet) === "green"){
            return <button className=' p-1 m-2 h-10 w-10 rounded-lg bg-lime-500 text-center font-bold text-black font-mono 
        active:outline-none focus:outline-none'
        onClick={()=>{
            if(column<5){
            setMatrix(matrix=>{
                const newMatrix = [...matrix];
                newMatrix[row] = [...matrix[row]];
                newMatrix[row][column] = alphabet;
                return newMatrix;
            })
            setColumn(column=>column+1);
        }}}>
            {alphabet}
        </button>
        }
        else if(color.get(alphabet) === "yellow"){
            return <button className=' p-1 m-2 h-10 w-10 rounded-lg bg-yellow-500 text-center font-bold text-black font-mono 
        active:outline-none focus:outline-none'
        onClick={()=>{
            if(column<5){
            setMatrix(matrix=>{
                const newMatrix = [...matrix];
                newMatrix[row] = [...matrix[row]];
                newMatrix[row][column] = alphabet;
                return newMatrix;
            })
            setColumn(column=>column+1);
        }}}>
            {alphabet}
        </button>
        }
        else if(color.get(alphabet) === "dark"){
            return <button className=' p-1 m-2 h-10 w-10 rounded-lg bg-gray-700 text-center font-bold text-white font-mono 
        active:outline-none focus:outline-none'
        onClick={()=>{
            if(column<5){
            setMatrix(matrix=>{
                const newMatrix = [...matrix];
                newMatrix[row] = [...matrix[row]];
                newMatrix[row][column] = alphabet;
                return newMatrix;
            })
            setColumn(column=>column+1);
        }}}>
            {alphabet}
        </button>
        }
    }

    return <button className=' p-1 m-2 h-10 w-10 rounded-lg bg-gray-500 text-center font-bold text-white font-mono 
    active:outline-none focus:outline-none'
    onClick={()=>{
        if(column<5){
        setMatrix(matrix=>{
            const newMatrix = [...matrix];
            newMatrix[row] = [...matrix[row]];
            newMatrix[row][column] = alphabet;
            return newMatrix;
        })
        setColumn(column=>column+1);
    }}}>
        {alphabet}
    </button>
    
}

function handleClick({setMatrix,row,column,setColumn}){
    if(column<5){
        setMatrix(matrix=>{
            const newMatrix = [...matrix];
            newMatrix[row] = [...matrix[row]];
            newMatrix[row][column] = alphabet;
            return newMatrix;
        })
        setColumn(column=>column+1);
    }
}