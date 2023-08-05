// With fs go to the directory dist/index.js and write the line "use client"; on top of the file
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../dist/index.js");
const fileContent = fs.readFileSync(filePath, "utf8");

const newFileContent = `"use client";\n${fileContent}`;

fs.writeFileSync(filePath, newFileContent);

console.log("File updated successfully!");
