import axios from "axios";

import BASE_URL from "../config/APIConfig";
let ADMIN_ROUTE = "/admin";

// Modify the routes to add the BASE_URL
ADMIN_ROUTE = `${BASE_URL}${ADMIN_ROUTE}`;

/**
 * Log a user in
 * @param {*} user object containing email and password
 * @returns axios promise
 */
export const login = (user) => axios.post(`${ADMIN_ROUTE}/login`, user);