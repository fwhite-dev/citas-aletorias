import { Button } from "./components/Button"
import { Cita } from "./components/Cita"

function App() {


  return (
    <>
      <div className="bg-white w-[80vw] max-w-600px min-h-[500px] border-[5px] border-black rounded-[30px] flex flex-col tems-center justify-evenly">
        <h1 className="w-full font-courgette font-bold text-[50px]">Citas Motivacionales</h1>

        <Cita />
        <Button handleClick={() => console.log('Click en el botón')} />

      </div>
    </>
  )
}

export default App
