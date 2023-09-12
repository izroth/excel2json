

var xlsx = require('xlsx');
var fs = require('fs');

const excel2json = (excelFile, sheetName) => {
    var workbook = xlsx.readFile(excelFile);
    var sheet_name_list = workbook.SheetNames;
    var json = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
    return json;
}

module.exports = excel2json;
