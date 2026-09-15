import fs from 'fs';
import path from 'path';
import { PDFParse } from 'pdf-parse';

async function dumpLesson26() {
  const pdfPath = path.join(process.cwd(), 'vocabulary.pdf');
  const dataBuffer = fs.readFileSync(pdfPath);
  const parser = new PDFParse({ data: new Uint8Array(dataBuffer) });
  const pdfData = await parser.getText();
  const text = pdfData.text;

  const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);

  let inL26 = false;
  let count = 0;
  console.log('--- ALL LINES UNDER LESSON 26 ---');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/^Lesson\s*26\b/i.test(line) || /^LESSON\s*26\b/i.test(line) || line === '26課' || line === '第26課') {
      inL26 = true;
      console.log(`=== HEADER FOUND: ${line} ===`);
      continue;
    }
    if (inL26 && (/^Lesson\s*27\b/i.test(line) || /^LESSON\s*27\b/i.test(line))) {
      console.log(`=== END OF LESSON 26: ${line} ===`);
      break;
    }
    if (inL26) {
      console.log(`${++count}. ${line}`);
    }
  }
}

dumpLesson26().catch(console.error);
