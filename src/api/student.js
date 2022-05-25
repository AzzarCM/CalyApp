import database from './database';

export async function getStudentById(id, token) {
  try {
    if (!id) {
      throw new Error('El id no puede estar vacío');
    }
    if (!token) {
      throw new Error('El token no puede estar vacío');
    }

    const {data: response} = await database.get(`/student/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const {data} = response;
    return {
      ok: true,
      user: data,
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


export async function updateStudent(id, token, dataBody) {
  try {
    if (!id) {
      throw new Error('El id no puede estar vacío');
    }
    if (!token) {
      throw new Error('El token no puede estar vacío');
    }

    const {data: response} = await database.put(`/student/${id}`, dataBody, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return {
      ok: true,
      user: response,
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

