export const initialTableState = {
  rows: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const tableReducer = (state, action) => {
  switch (action.type) {
    case "REQUEST_ROWS":
    case "REQUEST_ADD_ROW":
    case "REQUEST_DELETE_ROW":
    case "REQUEST_UPDATE_CELL":
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
        message: "Loading...",
      };
    case "ROWS_SUCCESS":
      return {
        ...state,
        rows: action.payload,
        isLoading: false,
        isSuccess: true,
        message: "",
      };
    case "ADD_ROW_SUCCESS":
      return {
        ...state,
        rows: [...state.rows, action.payload],
        isLoading: false,
        isSuccess: true,
        message: "Row added successfully",
      };
    case "DELETE_ROW_SUCCESS":
      return {
        ...state,
        // Filter out the deleted row
        rows: state.rows.filter((row) => row.rowId !== action.payload.rowId),
        isLoading: false,
        isSuccess: true,
        message: "Row deleted successfully",
      };
    case "UPDATE_CELL_SUCCESS":
      const updatedRows = state.rows.map((row) => {
        if (row.rowId === action.payload.rowId) {
          const updatedCells = row.cells.map((cell) => {
            if (cell.columnName === action.payload.columnName) {
              return { ...cell, value: action.payload.value };
            }
            return cell;
          });
          return { ...row, cells: updatedCells };
        }
        return row;
      });
      return {
        ...state,
        rows: updatedRows,
        isLoading: false,
        isSuccess: true,
        message: "Cell updated successfully",
      };
    case "ROWS_ERROR":
    case "ADD_ROW_ERROR":
    case "DELETE_ROW_ERROR":
    case "UPDATE_CELL_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
        message: action.error,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
