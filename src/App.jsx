import Appclima from "./components/Appclima"
import { ClimaProvider } from "./context/ClimaProvider"




function App() {

  return (

    <ClimaProvider>
      <header>
        <h1>Buscador de CLima</h1>
      </header>

      <Appclima/>
      
    </ClimaProvider>
  )
}

export default App
