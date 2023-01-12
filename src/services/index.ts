import axios, { AxiosResponse } from 'axios';
import { ResponseAPI } from '../store/typeStore';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const apiGET = async (route :string) => {
    try {
        const response: AxiosResponse = await axios.get(route);
        const returnAPI: ResponseAPI = {
            success: response.data.success ? response.data.success : true,
            message: response.data.message ? response.data.message : 'Buscado com sucesso.',
            data: response.data.results
        }

        return returnAPI;

    } catch (error: any) {
        const returnAPIError: ResponseAPI = {
            success: error.response.data.success ? error.response.data.success : false,
            message: error.response.data.message ? error.response.data.message : 'Falha ao buscar.',
            data: error.response.data.results
        }

        return returnAPIError;
    }
}

export { apiGET };