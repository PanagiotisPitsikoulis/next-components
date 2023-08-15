const fs = require("fs");
const cwd = process.cwd();

const sourceFilePath = cwd + "/dist/index.js";

const comment = `"use client";`;

fs.readFile(sourceFilePath, "utf8", (err: Error, data: String) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  const modifiedContent = comment + "\n" + data;

  fs.writeFile(sourceFilePath, modifiedContent, "utf8", (err: Error) => {
    if (err) {
      console.error("Error writing file:", err);
    } else {
      console.log("Comment added successfully!");
    }
  });
});
