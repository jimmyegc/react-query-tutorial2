import { Cliente } from "./components/Cliente"

function App() {

  //const [data, setData] = useState([])
  
  /*useEffect(()=> {
    axios.get("https://nodejs-mysql-api-facturacion-production.up.railway.app/api/v1/clientes")
    .then(response => {
      setData(response.data)
    })
    .catch(error => {
      console.log(error)
    })
  }, []) */

  return (
    <>
      app
      <Cliente />
    </>
  )
}

export default App
