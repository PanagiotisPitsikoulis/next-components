const fs = require("fs");

const cwd = process.cwd();

function main() {
const sourceFilePath = cwd + "/components/index.js";

const comment = '"use client";';

fs.readFile(sourceFilePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  const modifiedContent = comment + "\n" + data;

  fs.writeFile(sourceFilePath, modifiedContent, "utf8", (err) => {
    if (err) {
      console.error("Error writing file:", err);
    } else {
      console.log("Comment added successfully!");
    }
  });
});
}

function mainMJS() {
const sourceFilePath = cwd + "/components/index.mjs";

const comment = '"use client";';

fs.readFile(sourceFilePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  const modifiedContent = comment + "\n" + data;

  fs.writeFile(sourceFilePath, modifiedContent, "utf8", (err) => {
    if (err) {
      console.error("Error writing file:", err);
    } else {
      console.log("Comment added successfully!");
    }
  });
});
}

main();
mainMJS();
