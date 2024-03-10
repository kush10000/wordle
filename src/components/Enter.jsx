import axios from "axios";

export default function Enter({matrix,row,word,setColor,setMapState,setColumn,setRow,mapState}){
    return <button className='p-1 m-2 h-10 w-20 rounded-lg bg-gray-500 text-center font-bold text-white font-mono focus:outline-none'
    onClick={async ()=>{
      if(matrix[row][4] == "" || row >5){
        return;
      }
      let s = "";
      for(let i=0;i<5;i++){
        s+=matrix[row][i];
      }



      for(let i=0;i<5;i++){
        if(matrix[row][i] == word.charAt(i)){
          setColor(color => {
            const newColor = [...color];
            newColor[row] = [...color[row]];
            newColor[row][i] = "green";
            return newColor;
          })
            setMapState(prevMap =>{
              const newMap = new Map([...prevMap]);
              newMap.set(matrix[row][i],"green");
              return newMap;
            })
        }
        else{
          let exist = false;
          for(let j=0;j<5;j++){
            if(matrix[row][i] == word.charAt(j)){
              setColor(color => {
                const newColor = [...color];
                newColor[row] = [...color[row]];
                newColor[row][i] = "yellow";
                return newColor;
              })
              if(!mapState.has(matrix[row][i])){
                setMapState(prevMap =>{
                  const newMap = new Map([...prevMap]);
                  newMap.set(matrix[row][i],"yellow");
                  return newMap;
                })
              }
              exist = true;
              break;
            }
          }

          if(exist == false){
            setColor(color => {
              const newColor = [...color];
              newColor[row] = [...color[row]];
              newColor[row][i] = "dark";
              return newColor;
            })
            if(!mapState.has(matrix[row][i])){
              setMapState(prevMap =>{
                const newMap = new Map([...prevMap]);
                newMap.set(matrix[row][i],"dark");
                return newMap;
              })
            }
            
          }
        }
      }
      setRow(row=>row+1);
      setColumn(0);
    }}
    >ENTER
    </button>
}