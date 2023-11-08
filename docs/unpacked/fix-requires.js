const fs = require("fs");
const path = require("path");

function readBundle(bundleName) {
  const bundlePath = path.join(__dirname, `${bundleName}/bundle.json`);
  return JSON.parse(fs.readFileSync(bundlePath, "utf8"));
}

function getJsFiles(dirName) {
  const dirPath = path.join(__dirname, dirName);
  return fs.readdirSync(dirPath).filter((f) => f.endsWith(".js")).map(f => path.join(dirPath, f));
}

const bundles = ["app", "vendor", "main", "main-chunk", "vendors-main", "vendors-main-chunk"].map(bundleName => ({
  name: bundleName,
  bundle: readBundle(bundleName),
  files: getJsFiles(bundleName),
}));

const allFiles = bundles.flatMap(bundle => bundle.files);

for (const file of allFiles) {
  for (const {name, bundle} of bundles) {
    fixRequires(file, name, bundle.modules);
  }
}

function fixRequires(filePath, bundleName, bundleModules) {
  const regexp = /\s\/\*webcrack:missing\*\/"\.\/([0-9]+)\.js"/;
  const fileContent = fs.readFileSync(filePath, "utf8");
  const lines = fileContent.split("\n");
  const newLines = [];

  for (const line of lines) {
    let newLine = line;
    const match = line.match(regexp);
    if (match) {
      const fileNumber = match[1];
      const bundleEntry = bundleModules.find((m) => m.id === fileNumber);
      if (bundleEntry) {
        newLine = line.replace(regexp, `"../${bundleName}/${bundleEntry.id}.js"`);
        console.log(`Fixing ${filePath}:${line} -> ${newLine}`);
      }
    }
    newLines.push(newLine);
  }

  fs.writeFileSync(filePath, newLines.join("\n"));
}