import { useEffect } from "react";
import {
  Container,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Editable,
  EditableInput,
  EditablePreview,
  Button,
} from "@chakra-ui/react";
import { useICTContext } from "../../features/instantCellTable/ICTContext";
import {
  fetchRows,
  createRow,
  removeRow,
  editCell,
} from "../../features/instantCellTable/ICTServices";

/**
 * POC for Instant Cell Table
 * @returns {JSX.Element} InstantCell component
 */
export default function InstantCell() {
  const { table, dispatch } = useICTContext();

  useEffect(() => {
    fetchRows(dispatch);
  }, [dispatch]);

  const handleCellSubmit = (rowId, columnName, newValue) => {
    editCell(dispatch, rowId, columnName, newValue).catch((error) =>
      console.error("Failed to update cell:", error)
    );
  };

  return (
    <Container
      maxW="container.md"
      marginTop="10"
      marginBottom="10"
      bg="white"
      boxShadow="xl"
      borderRadius="xl"
      padding="5"
      align="center"
    >
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>C1</Th>
            <Th>C2</Th>
            <Th>C3</Th>
            <Th>C4</Th>
            {/* Additional TH for actions like Delete Row */}
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {table.rows.map((row, rowIndex) => (
            <Tr key={`row-${rowIndex}`}>
              {row.cells.map((cell, cellIndex) => (
                <Td key={`cell-${rowIndex}-${cellIndex}`}>
                  <Editable
                    defaultValue={cell.value?.toString() || "-empty-"}
                    onSubmit={(newValue) =>
                      handleCellSubmit(row._id, cell.columnName, newValue)
                    }
                  >
                    <EditablePreview />
                    <EditableInput />
                  </Editable>
                </Td>
              ))}
              <Td>
                <Button
                  size="sm"
                  colorScheme="red"
                  onClick={() => removeRow(dispatch, row._id)}
                >
                  Delete
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Button
        colorScheme="teal"
        size="md"
        onClick={() =>
          createRow(dispatch, [
            { columnName: "C1", value: "" },
            { columnName: "C2", value: "" },
            { columnName: "C3", value: "" },
            { columnName: "C4", value: "" },
          ])
        }
        mt={4}
      >
        Add Row
      </Button>
    </Container>
  );
}
