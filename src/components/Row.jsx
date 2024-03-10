import Display from "./Display";

export default function Row({row,matrix,color}){

    return <div className='flex p-1 mx-1'>
            <Display character={matrix[row][0]} color={color[row][0]}/> 
            <Display character={matrix[row][1]} color={color[row][1]}/> 
            <Display character={matrix[row][2]} color={color[row][2]}/> 
            <Display character={matrix[row][3]} color={color[row][3]}/> 
            <Display character={matrix[row][4]} color={color[row][4]}/>
        </div>
}