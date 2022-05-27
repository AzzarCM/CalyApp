import { fileUpload } from '../utils/file-upload';
import database from './database';

export async function createAnalysis(dataBody, token) {
  try {
    if (!token) {
      throw new Error('El token no puede estar vacío');
    }
    const fileUrl = await fileUpload(dataBody.original_image);
    dataBody.original_image = fileUrl;
    const {data: response} = await database.post('/result/new', dataBody, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const {data} = response;
    return {
      ok: true,
      data
    };
  } catch (error) {
    if (error.response) {
      const {detail} = error?.response?.data;
      return {
        ok: false,
        error: detail,
      };
    } else if (error.message) {
      return {
        ok: false,
        error: error.message,
      };
    }
  }
}

export async function getResultsById(idUser, token) {
  try {
    if (!token) {
      throw new Error('El token no puede estar vacío');
    }
    if (!idUser) {
      throw new Error('El id del usuario no puede estar vacío');
    }
    const {data: response} = await database.get(`/result/${idUser}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const {data} = response;
    return {
      ok: true,
      data
    };
  } catch (error) {
    if (error.response) {
      const {detail} = error?.response?.data;
      return {
        ok: false,
        error: detail,
      };
    } else if (error.message) {
      return {
        ok: false,
        error: error.message,
      };
    }
  }
}