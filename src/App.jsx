import { useState } from 'react'
import Key from './components/Key';
import Row from './components/Row';
import Back from './components/Back';
import Enter from './components/Enter';


function App() {
  const [column, setColumn] = useState(0);
  const [row,setRow] = useState(0); 
  const [matrix,setMatrix] = useState(
    [["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""]]
  );
  const [color,setColor] = useState(
    [["gray","gray","gray","gray","gray"],
    ["gray","gray","gray","gray","gray"],
    ["gray","gray","gray","gray","gray"],
    ["gray","gray","gray","gray","gray"],
    ["gray","gray","gray","gray","gray"],
    ["gray","gray","gray","gray","gray"]]
  )
  const [mapState, setMapState] = useState(new Map());
  const[word,setWord] = useState("VALUE");

  return (
    <div className='flex bg-black justify-center'>
      <div className='flex flex-col h-screen justify-center'>
        <div className='flex justify-center'>
        <div id='container' className='flex justify-between bg-gray-800 rounded-lg p-2'>
          <div className='flex flex-col'>
            <Row row={0} matrix={matrix} color={color} />
            <Row row={1} matrix={matrix} color={color} />
            <Row row={2} matrix={matrix} color={color} />
            <Row row={3} matrix={matrix} color={color} />
            <Row row={4} matrix={matrix} color={color} />
            <Row row={5} matrix={matrix} color={color} />
          </div>
        </div>
        </div>




        <div id='keyboard ' className='flex flex-col mt-10' >
          <div className='flex justify-center'>
            <Key alphabet={'Q'} matrix={matrix} setMatrix={setMatrix} row={row} column={column} setColumn={setColumn} color={mapState} />
            <Key alphabet={'W'} matrix={matrix} setMatrix={setMatrix} row={row} column={column} setColumn={setColumn} color={mapState} />
            <Key alphabet={'E'} matrix={matrix} setMatrix={setMatrix} row={row} column={column} setColumn={setColumn} color={mapState} />
            <Key alphabet={'R'} matrix={matrix} setMatrix={setMatrix} row={row} column={column} setColumn={setColumn} color={mapState} />
            <Key alphabet={'T'} matrix={matrix} setMatrix={setMatrix} row={row} column={column} setColumn={setColumn} color={mapState} />
            <Key alphabet={'Y'} matrix={matrix} setMatrix={setMatrix} row={row} column={column} setColumn={setColumn} color={mapState} />
            <Key alphabet={'U'} matrix={matrix} setMatrix={setMatrix} row={row} column={column} setColumn={setColumn} color={mapState} />
            <Key alphabet={'I'} matrix={matrix} setMatrix={setMatrix} row={row} column={column} setColumn={setColumn} color={mapState} />
            <Key alphabet={'O'} matrix={matrix} setMatrix={setMatrix} row={row} column={column} setColumn={setColumn} color={mapState} />
            <Key alphabet={'P'} matrix={matrix} setMatrix={setMatrix} row={row} column={column} setColumn={setColumn} color={mapState} />
          </div>

          <div className='flex justify-center'>
            <Key alphabet={'A'} matrix={matrix} setMatrix={setMatrix} row={row} column={column} setColumn={setColumn} color={mapState} />
            <Key alphabet={'S'} matrix={matrix} setMatrix={setMatrix} row={row} column={column} setColumn={setColumn} color={mapState} />
            <Key alphabet={'D'} matrix={matrix} setMatrix={setMatrix} row={row} column={column} setColumn={setColumn} color={mapState} />
            <Key alphabet={'F'} matrix={matrix} setMatrix={setMatrix} row={row} column={column} setColumn={setColumn} color={mapState} />
            <Key alphabet={'G'} matrix={matrix} setMatrix={setMatrix} row={row} column={column} setColumn={setColumn} color={mapState} />
            <Key alphabet={'H'} matrix={matrix} setMatrix={setMatrix} row={row} column={column} setColumn={setColumn} color={mapState} />
            <Key alphabet={'J'} matrix={matrix} setMatrix={setMatrix} row={row} column={column} setColumn={setColumn} color={mapState} />
            <Key alphabet={'K'} matrix={matrix} setMatrix={setMatrix} row={row} column={column} setColumn={setColumn} color={mapState} />
            <Key alphabet={'L'} matrix={matrix} setMatrix={setMatrix} row={row} column={column} setColumn={setColumn} color={mapState} />
          </div>

          <div className='flex justify-center'>
            <Enter matrix={matrix} row={row} mapState={mapState} word={word} setColor={setColor} setColumn={setColumn} setMapState={setMapState} setRow={setRow} />
            <Key alphabet={'Z'} matrix={matrix} setMatrix={setMatrix} row={row} column={column} setColumn={setColumn} color={mapState} />
            <Key alphabet={'X'} matrix={matrix} setMatrix={setMatrix} row={row} column={column} setColumn={setColumn} color={mapState} />
            <Key alphabet={'C'} matrix={matrix} setMatrix={setMatrix} row={row} column={column} setColumn={setColumn} color={mapState} />
            <Key alphabet={'V'} matrix={matrix} setMatrix={setMatrix} row={row} column={column} setColumn={setColumn} color={mapState} />
            <Key alphabet={'B'} matrix={matrix} setMatrix={setMatrix} row={row} column={column} setColumn={setColumn} color={mapState} />
            <Key alphabet={'N'} matrix={matrix} setMatrix={setMatrix} row={row} column={column} setColumn={setColumn} color={mapState} />
            <Key alphabet={'M'} matrix={matrix} setMatrix={setMatrix} row={row} column={column} setColumn={setColumn} color={mapState} />
            <Back column={column} setColumn={setColumn} setMatrix={setMatrix} row={row} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
