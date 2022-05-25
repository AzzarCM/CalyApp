import database from './database';

export async function userLogin(email, password) {
  try {
    const dataBody = {
      username: email,
      password,
    };
    const {data} = await database.post('/auth/login', dataBody);
    const {token} = data;
    return {
      ok: true,
      token,
    };
  } catch (error) {
    const {detail} = error?.response?.data;
    return {
      ok: false,
      error: detail,
    };
  }
}
