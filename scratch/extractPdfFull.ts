import fs from 'fs';
import path from 'path';
import { PDFParse } from 'pdf-parse';
import { parseUserCsvFile } from '../scripts/parseUserCsv';

async function testFullMerge() {
  const csvPath = path.join(process.cwd(), 'data', 'user_vocabulary.csv');
  const csvCards = parseUserCsvFile(csvPath);
  console.log(`CSV cards parsed: ${csvCards.length}`);

  const pdfPath = path.join(process.cwd(), 'vocabulary.pdf');
  const dataBuffer = fs.readFileSync(pdfPath);
  const parser = new PDFParse({ data: new Uint8Array(dataBuffer) });
  const pdfData = await parser.getText();
  const pdfLines = pdfData.text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);

  console.log(`PDF text lines: ${pdfLines.length}`);

  // Let's inspect chapter distribution in CSV
  const csvChapters: Record<number, number> = {};
  csvCards.forEach(c => {
    csvChapters[c.chapter] = (csvChapters[c.chapter] || 0) + 1;
  });

  console.log('\nCSV Chapter Distribution (N4: 26-50):');
  Object.entries(csvChapters).forEach(([ch, count]) => {
    console.log(`  Chapter ${ch}: ${count} words`);
  });
}

testFullMerge().catch(console.error);
