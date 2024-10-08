import { login } from "../../APIs/UserAPI";

const USER_NOT_LOGGED_IN = "User not logged in";

/**
 * @description Logs a user in
 * @param {*} dispatch - the dispatch function.
 * @param {*} user - object containing email and password
 * @returns {Promise} Promise object represents the data returned from the API
 * @throws {Error} if the API request fails
 */
export const loginUser = async (dispatch, user) => {
  try {
    dispatch({ type: "REQUEST_LOGIN" });

    const response = await login(user);
    const data = await response.data;

    if (response.status === 200) {
      dispatch({ type: "LOGIN_SUCCESS", payload: data });
      return data;
    }

    dispatch({ type: "LOGIN_ERROR", error: data.message });
  } catch (error) {
    dispatch({ type: "LOGIN_ERROR", error: error.response.data.message });
    throw error;
  }
};

/**
 * @description Logs a user out
 * @param {*} dispatch - the dispatch function.
 * @returns {void}
 */
export const logoutUser = (dispatch) => {
  dispatch({ type: "LOGOUT" });
};

/**
 * @description Gets the user from localStorage
 * @returns {object} user object if it exists
 * @throws {Error} if the user object does not exist
 */
export const getUserFromLocalStorage = () => {
  const user = localStorage.getItem("user");

  if (user) {
    return JSON.parse(user);
  }

  throw new Error(USER_NOT_LOGGED_IN);
};

/**
 * @description Loads the user from localStorage
 * @param {*} dispatch - the dispatch function.
 */
export const loadUser = (dispatch) => {
  try {
    const user = getUserFromLocalStorage();
    dispatch({ type: "LOAD_USER", payload: user });
  } catch (error) {
    if (error.message === USER_NOT_LOGGED_IN) {
      dispatch({ type: "LOGOUT" });
      return;
    }

    throw error;
  }
};

/**
 * @description Resets the error state
 * @returns {void}
 */
export const resetUserError = (dispatch) => {
  dispatch({ type: "RESET_ERROR" });
};
