import axios from "../utils/axios";

export const findPaginate = async (page: number) => {
  try {
    const response = await axios.get(`pokemon/findPaginate/${page}`);

    return {
      message: response.data.message,
      result: response.data.result,
    };
  } catch (err) {
    const { message, error } = err;
    return {
      message: message ?? "Erro interno em buscar pokemon paginado.",
      error: error ?? "Erro interno em buscar pokemon paginado.",
    };
  }
};
