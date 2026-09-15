import fs from 'fs';
import path from 'path';
import { PDFParse } from 'pdf-parse';

async function inspectPdf() {
  const pdfPath = path.join(process.cwd(), 'vocabulary.pdf');
  console.log('Reading PDF:', pdfPath);

  const dataBuffer = fs.readFileSync(pdfPath);
  const parser = new PDFParse({ data: new Uint8Array(dataBuffer) });
  const pdfData = await parser.getText();
  const text = pdfData.text;

  console.log(`Total Text Length: ${text.length}`);
  console.log(`Total Pages: ${pdfData.total}`);

  const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  console.log(`Total Non-empty Lines: ${lines.length}`);

  // Dump first 100 non-empty lines to see structure
  console.log('\n--- SAMPLE LINES (First 100) ---');
  for (let i = 0; i < Math.min(100, lines.length); i++) {
    console.log(`[Line ${i+1}] ${lines[i]}`);
  }

  // Search for lines matching lesson/chapter headers or numbers
  const lessonLines = lines.filter(l => /(?:Lesson|LESSON|第|Chapter|\bL\b)\s*\d+/i.test(l) || /^\d{1,2}\s*課/.test(l));
  console.log('\n--- DETECTED LESSON HEADERS ---');
  lessonLines.forEach(l => console.log('  ->', l));
}

inspectPdf().catch(console.error);
