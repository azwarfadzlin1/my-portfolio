import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.dirname(fileURLToPath(import.meta.url));
const libDir = path.join(rootDir, 'lib');
const compDir = path.join(rootDir, 'components');

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
