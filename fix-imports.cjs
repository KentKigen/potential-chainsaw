const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const componentsDir = path.join(__dirname, 'src', 'components');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/LeadFormModal/g, 'LeadModal');
  content = content.replace(/PropertyCard/g, 'ListingCard');
  fs.writeFileSync(filePath, content, 'utf8');
}

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      replaceInFile(fullPath);
    }
  }
}

processDir(pagesDir);
processDir(componentsDir);
replaceInFile(path.join(__dirname, 'src', 'App.tsx'));
console.log('Done');
