import axios from "axios";
import { API_HOST } from "../utils/constants";

const database = axios.create({
    baseURL: API_HOST,
})

export default database;