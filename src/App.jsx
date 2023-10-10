import { Button } from "./assets/components/Button"
import { Cita } from "./assets/components/Cita"

function App() {


  return (
    <>
      <h1>Citas Motivacionales</h1>
      <Button handleClick={() => console.log('Click en el botón')} />
      <Cita />
    </>
  )
}

export default App
