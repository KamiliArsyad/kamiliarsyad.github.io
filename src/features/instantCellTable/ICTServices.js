import { getRows, addRow, deleteRow, updateCell } from "../../APIs/TableAPI";

/**
 * @description Fetches all rows from the API
 * @param {*} dispatch
 * @returns {Promise} Promise object represents the data returned from the API
 */
export const fetchRows = async (dispatch) => {
  try {
    dispatch({ type: "REQUEST_ROWS" });

    const response = await getRows();
    const data = await response.data;

    if (response.status === 200) {
      dispatch({ type: "ROWS_SUCCESS", payload: data });
      return data;
    }

    dispatch({ type: "ROWS_ERROR", error: "Failed to fetch rows" });
  } catch (error) {
    dispatch({
      type: "ROWS_ERROR",
      error: error.message || "An error occurred while fetching rows",
    });
    console.error(error.message || "An error occurred while fetching rows");
  }
};

/**
 * @description Adds a new row
 * @param {*} dispatch
 * @param {*} newRow Data for the new row
 * @returns {Promise} Promise object represents the operation status
 */
export const createRow = async (dispatch, newRow) => {
  try {
    dispatch({ type: "REQUEST_ADD_ROW" });

    const response = await addRow({ cells: newRow });
    if (response.status === 201) {
      dispatch({ type: "ADD_ROW_SUCCESS", payload: response.data });
      fetchRows(dispatch); // Refresh rows after adding
    } else {
      dispatch({ type: "ADD_ROW_ERROR", error: "Failed to add row" });
    }
  } catch (error) {
    dispatch({
      type: "ADD_ROW_ERROR",
      error: error.message || "An error occurred while adding a row",
    });
    console.error(error.message || "An error occurred while adding a row");
  }
};

/**
 * @description Deletes a row by ID
 * @param {*} dispatch
 * @param {*} rowId ID of the row to be deleted
 * @returns {Promise} Promise object represents the operation status
 */
export const removeRow = async (dispatch, rowId) => {
  try {
    dispatch({ type: "REQUEST_DELETE_ROW" });

    const response = await deleteRow(rowId);
    if (response.status === 200) {
      dispatch({ type: "DELETE_ROW_SUCCESS" });
      fetchRows(dispatch); // Refresh rows after deleting
    } else {
      dispatch({ type: "DELETE_ROW_ERROR", error: "Failed to delete row" });
    }
  } catch (error) {
    dispatch({
      type: "DELETE_ROW_ERROR",
      error: error.message || "An error occurred while deleting a row",
    });
    console.error(error.message || "An error occurred while deleting a row");
  }
};

/**
 * @description Updates a cell
 * @param {*} dispatch
 * @param {*} rowId ID of the row containing the cell
 * @param {*} columnName Name of the column of the cell to update
 * @param {*} value New value for the cell
 * @returns {Promise} Promise object represents the operation status
 */
export const editCell = async (dispatch, rowId, columnName, value) => {
  try {
    dispatch({ type: "REQUEST_UPDATE_CELL" });

    const response = await updateCell(rowId, columnName, value);
    if (response.status === 200) {
      dispatch({
        type: "UPDATE_CELL_SUCCESS",
        payload: { rowId, columnName, value },
      });
      fetchRows(dispatch); // Optionally refresh rows after updating a cell
    } else {
      dispatch({ type: "UPDATE_CELL_ERROR", error: "Failed to update cell" });
    }
  } catch (error) {
    dispatch({
      type: "UPDATE_CELL_ERROR",
      error: error.message || "An error occurred while updating the cell",
    });
    console.error(error.message || "An error occurred while updating the cell");
  }
};
