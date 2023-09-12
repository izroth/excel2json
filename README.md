## exl-2-json

`exl-2-json` is a Node.js module that allows you to easily convert data from Excel files into JavaScript objects in JSON format.

## Installation

You can install `exl-2-json` using npm:

```bash
npm install exl-2-json --save
```

## Usage

```javascript
const exl2json = require('exl-2-json');

// Provide the path to your Excel file and the name of the sheet
const excelFile = './data.xlsx';
const sheetName = 'Sheet1';

// Convert Excel data to JSON
const jsonData = exl2json(excelFile, sheetName);

console.log(jsonData);
```

### Parameters

- `excelFile` (String): The path to the Excel file that you want to convert to JSON.
- `sheetName` (String): The name of the Excel sheet from which you want to extract data.

### Example

Suppose you have an Excel file named `data.xlsx` with the following content in `Sheet1`:

```
| Name          | Age | City      |
|---------------|-----|-----------|
| Lakhan Sharma | 21  | Jaipur    |
| Kshitiz       | 22  | San Fran  |
| Aman          | 28  | Los Angeles |
```

Running the code above will produce the following JSON output:

```json
[
  { "Name": "Lakhan Sharma", "Age": 21, "City": "Jaipur" },
  { "Name": "Kshitiz", "Age": 22, "City": "San Fran" },
  { "Name": "Aman", "Age": 28, "City": "Los Angeles" }
]
```

## Dependencies

- This module depends on the `xlsx` library for reading Excel files. You can install it using `npm install xlsx`.

## Contributing

If you encounter any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request on [GitHub]
(https://github.com/izroth/excel2json.git).

