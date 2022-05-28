import database from './database';

export const getAllWords = async (token) => {
    try {
      if (!token) {
        throw new Error('El token no puede estar vacío');
      }
      const { data : response } = await database.get('/vocabulary', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = response;
      return {
        ok: true,
        data,
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
  };