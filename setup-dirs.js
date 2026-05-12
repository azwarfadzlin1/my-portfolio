const fs = require('fs');
const path = require('path');

const libDir = path.join(__dirname, 'app', 'lib');
const compDir = path.join(__dirname, 'app', 'components');

try {
  fs.mkdirSync(libDir, { recursive: true });
  fs.mkdirSync(compDir, { recursive: true });
  console.log('✓ Directories created successfully');
  console.log(`  - ${libDir}`);
  console.log(`  - ${compDir}`);
} catch (err) {
  console.error('Error creating directories:', err);
  process.exit(1);
}
