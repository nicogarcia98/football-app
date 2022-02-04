import httpInstance from "../constants/api"


/**
 * Obtener contratos    
 */
export const getTotalSocios = async () => {
    return await httpInstance.get(`/getTotalPersonas`);
}

export const getPromedioEdadRacing = async () => {
    return await httpInstance.get(`/getPromedioEdadRacing`);
}

export const getCasadosUniversitarios = async () => {
    return await httpInstance.get(`/getCasadosUniversitarios`)
}

export const getNombresRiver = async () => {
    return await httpInstance.get(`/getNombresRiver`)
}

export const getSociosEdadPorEquipo = async () => {
    return await httpInstance.get(`/getSociosEdadPorEquipo`)
}