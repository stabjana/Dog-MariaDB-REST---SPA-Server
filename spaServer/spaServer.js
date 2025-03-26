import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFile } from 'node:fs/promises';

const config = JSON.parse(await readFile(new URL('./config.json', import.meta.url)));

const { port, host } = config;
const BASE = fileURLToPath(new URL('.', import.meta.url));

const app = express();

app.use(express.json());
app.use(express.static(path.join(BASE, 'public')));

app.get('/', async (req, res) => {
    const filePath = path.join(BASE, 'public', 'index.html');
    res.send(await readFile(filePath, 'utf-8'));
});

app.listen(port, host, () => console.log(`SPA server running at ${host}:${port}`));
