//  ExcelJS is not supported by Node.JS
// It's a third party library
const ExcelJS = require("exceljs");

async function readExcel() {

    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile("C:/Users/Rohith/Downloads/download.xlsx");
    const worksheet = workbook.getWorksheet("Sheet1");

    // Read an entire column
    const row = worksheet.getRow(1)
    row.eachCell((cell) => {
        console.log(cell.value);
    });

    // Read an entire column
    const column = worksheet.getColumn(2);
    column.eachCell((cell) => {
        console.log(cell.value);
    });

    // Read data from a specific cell
    const value = worksheet.getCell("B2").value;
    console.log("value " + value);

    // Iterate through all rows
    worksheet.eachRow((row, rowNumber) => {
        console.log("Row Number:", rowNumber);
        console.log("Row Values:", row.values);
    });

    // Iterate through all cells
    worksheet.eachRow((row, rowNumber) => {
        console.log("Row Number:", rowNumber);
        row.eachCell((cell, colNumber) => {
            console.log(`Column ${colNumber}: ${cell.value}`);
        });

    });

    // Get row count
    console.log("Row Count : " + worksheet.rowCount);

    // Get column count
    console.log("Column Count : " + worksheet.columnCount);
}

readExcel();