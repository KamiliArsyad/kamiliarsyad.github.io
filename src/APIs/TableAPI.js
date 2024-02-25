import axios from "axios";

import BASE_URL from "../config/APIConfig";
let ROWS_ROUTE = "/rows";
let SINGLE_ROW_ROUTE = "/rows/:rowId";
let CELL_UPDATE_ROUTE = "/rows/:rowId/cells/:columnName";

// Modify the routes to add the BASE_URL
ROWS_ROUTE = `${BASE_URL}${ROWS_ROUTE}`;
SINGLE_ROW_ROUTE = `${BASE_URL}${SINGLE_ROW_ROUTE}`;
CELL_UPDATE_ROUTE = `${BASE_URL}${CELL_UPDATE_ROUTE}`;

export const getRows = () => axios.get(ROWS_ROUTE);
export const addRow = (newRow) => axios.post(ROWS_ROUTE, newRow);
export const deleteRow = (rowId) =>
  axios.delete(SINGLE_ROW_ROUTE.replace(":rowId", rowId));
export const updateCell = (rowId, columnName, value) =>
  axios.put(
    CELL_UPDATE_ROUTE.replace(":rowId", rowId).replace(
      ":columnName",
      columnName
    ),
    { value }
  );
