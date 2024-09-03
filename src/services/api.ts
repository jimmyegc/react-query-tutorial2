import axios from "axios"
import { Cliente } from "../types/cliente"

const BASE_URL = "https://nodejs-mysql-api-facturacion-production.up.railway.app/"
const axiosInstance = axios.create({ baseURL: BASE_URL })

export interface ResponseGenericModel<T> {
    //status: 'OK'|'ERROR';
    //errorCode: ErrorCode;
    //errorMessage: string,
    error: boolean,
    body: T;
}

type ResponseMulti = ResponseGenericModel<Cliente[]>


export const getClientesIds = async () => {         
    const response = await axiosInstance.get<ResponseMulti>('api/v1/clientes')
    const data = await response.data.body.map((cliente) => cliente.fiIdCliente)
    return data    
}