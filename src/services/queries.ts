import { useQuery } from "@tanstack/react-query"
import { getClientesIds } from "./api"

export const useClientesIds = () => {
    return useQuery({
        queryKey: ["clientes"],
        queryFn: getClientesIds        
    })
}