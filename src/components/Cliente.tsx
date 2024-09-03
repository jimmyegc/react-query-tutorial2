import { useIsFetching } from "@tanstack/react-query"
import { useClientesIds } from "../services/queries"


export const Cliente = () => {
    const clientesIdsQueries = useClientesIds()
    //const isFetching = useIsFetching()

  /*   if(clientesIdsQueries.isPending) {
        return <span>Loading...</span>
    }
    if(clientesIdsQueries.isError) {
        return <span>there is an error!</span>
    } */
    
  return (
    <div>
        {/* <p>Query function status: { clientesIdsQueries.fetchStatus} </p>
        <p>Query data status: {clientesIdsQueries.status}</p>
        <p>Global isFetching: {isFetching}</p> */}
        {JSON.stringify(clientesIdsQueries.data)}
        { clientesIdsQueries.data?.map ((id)=> (
            <p key={id}>{id}</p>
        ))} 
    </div>
  )
}
