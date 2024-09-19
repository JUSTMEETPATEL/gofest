const fs = require('fs');
const path = require('path');

// Update these paths to the correct directories
const componentsDir = path.join(__dirname, 'components');
const projectDir = path.join(__dirname, '..'); // Assuming the script is in a subdirectory of the project

const getAllFiles = (dir, files = []) => {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllFiles(filePath, files);
    } else {
      files.push(filePath);
    }
  });
  return files;
};

const getComponentNames = dir => {
  return fs.readdirSync(dir).map(file => path.basename(file, path.extname(file)));
};

const searchComponentUsage = (component, files) => {
  return files.some(file => {
    const content = fs.readFileSync(file, 'utf-8');
    return content.includes(component);
  });
};

const components = getComponentNames(componentsDir);
const projectFiles = getAllFiles(projectDir);

const unusedComponents = components.filter(component => !searchComponentUsage(component, projectFiles));

console.log('Unused Components:', unusedComponents);