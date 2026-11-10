// Usage: put your original file at ./original.html then run: npm run extract
import fs from 'fs';
const src=fs.readFileSync(process.argv[2]||'./original.html','utf8');
const css=src.match(/<style>([\s\S]*?)<\/style>/)[1];
fs.writeFileSync('src/styles/legacy.css',css.trim());
const js=src.match(/<script>([\s\S]*?)<\/script>/)[1];
const cut=(a,b)=>{const i=js.indexOf(a),j=js.indexOf(b,i);if(i<0||j<0)throw new Error('marker not found: '+a);return js.slice(i,j).trim()};
const ex=s=>s.replace(/^const /,'export const ');
fs.writeFileSync('src/data/site.js',ex(cut('const D={','\nconst SW=')));
fs.writeFileSync('src/data/sw.js',ex(cut('const SW=','\nconst ILL=')));
fs.writeFileSync('src/data/illustrations.js',ex(cut('const ILL=','\nlet LANG')));
fs.writeFileSync('src/data/icons.js',cut('const S=','\nfunction lev')+'\nexport {IC};');
fs.writeFileSync('src/data/tooth.js',ex(cut('const TOOTH=`','\nconst pages=')));
fs.writeFileSync('src/data/photo.js',ex(cut('const PHOTO=','\nfunction phead')));
console.log('Extracted: legacy.css, site.js, sw.js, illustrations.js, icons.js, tooth.js, photo.js');
