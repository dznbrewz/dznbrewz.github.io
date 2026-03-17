import fs from 'fs';
import path from 'path';

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.startsWith('"use client";\n')) {
        content = content.replace(/^"use client";\n/, '');
        fs.writeFileSync(fullPath, content);
        console.log(`Modified ${fullPath}`);
      } else if (content.startsWith("'use client';\n")) {
        content = content.replace(/^'use client';\n/, '');
        fs.writeFileSync(fullPath, content);
        console.log(`Modified ${fullPath}`);
      }
    }
  }
}

walkDir('/src');
