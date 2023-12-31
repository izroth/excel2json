

# exl-2-json

`exl-2-json` is a Node.js module that simplifies the conversion of Excel files into JavaScript objects in JSON format.

[![npm version](https://badge.fury.io/js/exl-2-json.svg)](https://badge.fury.io/js/exl-2-json)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

---

## Table of Contents

- [exl-2-json](#exl-2-json)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Basic Usage](#basic-usage)
    - [Parameters](#parameters)
    - [Example](#example)

---

## Installation

Install `exl-2-json` via npm:

```bash
npm install exl-2-json --save
```

---

## Usage

### Basic Usage

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

- `excelFile` (String): The path to the Excel file you want to convert to JSON.
- `sheetName` (String): The name of the Excel sheet from which to extract data.

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
