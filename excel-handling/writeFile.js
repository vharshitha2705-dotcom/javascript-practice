const ExcelJS = require("exceljs");

async function writeExcel() {

    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile("C:/Users/Rohith/Downloads/download.xlsx");
    const worksheet = workbook.getWorksheet("Sheet1");

    // Loop through each row
    // worksheet.eachRow((row) => {
    //     // Loop through each cell in the row
    //     row.eachCell((cell) => {
    //         // Check if the cell value is "Mango"
    //         if (cell.value === "Mango") {
    //             // Replace it with "Dragon Fruit"
    //             cell.value = "Dragon Fruit";
    //         }
    //     });
    // });

    // Add a new row
    worksheet.addRow([7,"Grapes", "Green", 249 ,"Summer"]);


    // Save the updated workbook
    await workbook.xlsx.writeFile("C:/Users/Rohith/Downloads/download.xlsx");
    console.log("Value replaced successfully!");

}

writeExcel();