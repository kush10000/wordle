export default function Back({column,setColumn,setMatrix,row}){
    return <button className='p-1 m-2 h-10 w-20 rounded-lg bg-gray-500 text-center font-bold text-white font-mono focus:outline-none'
    onClick={()=>{
      if(column==0)
      return;
      setMatrix(matrix=>{
        const newMatrix = [...matrix];
        newMatrix[row] = [...matrix[row]];
        newMatrix[row][column-1] = "";
        return newMatrix;
      })
      setColumn(column=>column-1);
    }}
    >BACK
    </button>
}