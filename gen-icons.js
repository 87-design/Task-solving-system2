// node gen-icons.js  →  icons/ フォルダにPNGを生成
const { createCanvas } = require('canvas');
const fs = require('fs');

fs.mkdirSync('icons', { recursive: true });

function draw(size) {
  const c = createCanvas(size, size);
  const ctx = c.getContext('2d');
  const r = size * 0.12;

  // 背景
  ctx.fillStyle = '#0A8FA3';
  ctx.beginPath();
  ctx.roundRect(0, 0, size, size, r);
  ctx.fill();

  // チェックマーク
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = size * 0.09;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.moveTo(size * 0.22, size * 0.5);
  ctx.lineTo(size * 0.42, size * 0.7);
  ctx.lineTo(size * 0.78, size * 0.3);
  ctx.stroke();

  return c.toBuffer('image/png');
}

[192, 512].forEach(s => {
  fs.writeFileSync(`icons/icon-${s}.png`, draw(s));
  console.log(`icons/icon-${s}.png 生成完了`);
});
