export interface KanjiVGStroke {
  id: string;
  pathData: string;
  strokeType?: string;
}

export interface KanjiVGNumber {
  num: number;
  x: number;
  y: number;
}

export interface KanjiVGData {
  char: string;
  strokes: KanjiVGStroke[];
  numbers: KanjiVGNumber[];
}

const cache: Record<string, KanjiVGData> = {};

export async function fetchKanjiVGData(char: string): Promise<KanjiVGData | null> {
  if (cache[char]) return cache[char];

  try {
    const hex = char.charCodeAt(0).toString(16).padStart(5, '0');
    const url = `https://raw.githubusercontent.com/KanjiVG/kanjivg/master/kanji/${hex}.svg`;
    const res = await fetch(url);
    if (!res.ok) return null;

    const svgText = await res.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(svgText, 'image/svg+xml');

    const paths = Array.from(doc.querySelectorAll('path')).filter(p => p.id && p.id.includes('-s'));
    const strokes: KanjiVGStroke[] = paths.map((p, idx) => ({
      id: p.id || `s-${idx + 1}`,
      pathData: p.getAttribute('d') || '',
      strokeType: p.getAttribute('kvg:type') || undefined,
    }));

    const numberTexts = Array.from(doc.querySelectorAll('text'));
    const numbers: KanjiVGNumber[] = numberTexts.map((t, idx) => {
      const transform = t.getAttribute('transform') || '';
      let x = 50;
      let y = 50;
      const matrixMatch = transform.match(/matrix\(1\s+0\s+0\s+1\s+([\d.]+)\s+([\d.]+)\)/);
      if (matrixMatch) {
        x = parseFloat(matrixMatch[1]);
        y = parseFloat(matrixMatch[2]);
      }
      return {
        num: idx + 1,
        x,
        y,
      };
    });

    const data: KanjiVGData = {
      char,
      strokes,
      numbers,
    };

    cache[char] = data;
    return data;
  } catch (err) {
    console.error(`Failed to fetch KanjiVG for ${char}:`, err);
    return null;
  }
}
