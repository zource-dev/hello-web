import { createServer } from 'http';

const PORT = parseInt(process.env.PORT, 10) || 5000;

createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end('<h1>Hello Web</h1>');
})
.listen(PORT, () => console.log(`Started at http://localhost:${PORT}/`));
