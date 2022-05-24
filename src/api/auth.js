import database from './database';

export async function userLogin(email, password) {
  try {
    const dataBody = {
      username: email,
      password,
    };
    const {data} = await database.post('/auth/login', dataBody);
    const {token, message} = data;
    return {
      ok: true,
      token,
      message,
    };
  } catch (error) {
    const {detail} = error?.response?.data;
    return {
      ok: false,
      error: detail,
    };
  }
}
