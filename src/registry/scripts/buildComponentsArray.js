const fs = require("fs");
const path = require("path");
const cwd = process.cwd();

const directoryPath = path.join(cwd, "src", "registry", "default", "example");
const outputPath = path.join(
  cwd,
  "src",
  "registry",
  "default",
  "componentsArray.tsx"
);

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  const fileNames = files.filter((file) =>
    fs.statSync(path.join(directoryPath, file)).isFile()
  );

  const tsxContent = generateTSXContent(fileNames);

  fs.writeFile(outputPath, tsxContent, (err) => {
    if (err) {
      console.error("Error writing TSX file:", err);
      return;
    }
    console.log(`TSX content written to ${outputPath}`);
  });
});

function generateTSXContent(fileNames) {
  const importStatements = fileNames.map(
    (fileName) =>
      `import ${getExportName(fileName)} from "./example/${fileName.replace(
        /\.(js|tsx)/,
        ""
      )}";`
  );
  const componentArray = fileNames
    .map(
      (fileName) =>
        `  { name: "${getNameWithoutDemo(
          fileName
        )}", component: <${getExportName(fileName)} key="${fileName}" /> }`
    )
    .join(",\n");
  const exportStatement = `const componentsArray = [\n${componentArray}\n];\n\nexport default componentsArray;`;

  return `${importStatements.join("\n")}\n\n${exportStatement}`;
}

function getExportName(fileName) {
  const pascalCaseName = fileName
    .replace(/\.(js|tsx)/, "")
    .replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
  return pascalCaseName.charAt(0).toUpperCase() + pascalCaseName.slice(1);
}

function getNameWithoutDemo(fileName) {
  const baseName = fileName
    .replace(/\.(js|tsx)/, "")
    .replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
  const withoutDemo = baseName.replace(/Demo$/, "");
  const spacedName = withoutDemo.replace(/([a-z])([A-Z])/g, "$1 $2"); // Add space before capital letters
  const capitalizedSpacedName =
    spacedName.charAt(0).toUpperCase() + spacedName.slice(1); // Capitalize the first word
  return capitalizedSpacedName;
}
