import fs from 'fs';
import path from 'path';
import { PDFParse } from 'pdf-parse';

async function findActualLesson26() {
  const pdfPath = path.join(process.cwd(), 'vocabulary.pdf');
  const dataBuffer = fs.readFileSync(pdfPath);
  const parser = new PDFParse({ data: new Uint8Array(dataBuffer) });
  const pdfData = await parser.getText();
  const text = pdfData.text;

  const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);

  console.log(`Total lines: ${lines.length}`);
  
  lines.forEach((line, index) => {
    if (/^Lesson\s*26$/i.test(line) || /^26課$/i.test(line) || /^第26課$/i.test(line) || /^第\s*26\s*課$/i.test(line)) {
      console.log(`\n=== MATCH FOUND AT LINE ${index + 1}: "${line}" ===`);
      for (let k = index; k < Math.min(index + 60, lines.length); k++) {
        console.log(`  [Line ${k + 1}] ${lines[k]}`);
      }
    }
  });
}

findActualLesson26().catch(console.error);
