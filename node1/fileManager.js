import fs from "node:fs";
import path from "node:path";
import fsPromises from "node:fs/promises";
import colors from "colors";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { EventEmitter } from "node:events";
export const danePlikowKatalogu = [];

export const sciezkaDoAktualnegoKatalogu = () => {
  const proces = process.cwd();
  console.log("Aktualny katalog:", proces);
  console.log({ proces });
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export const plikiKataloguEmitter = new EventEmitter();
export const plikiKatalogu = async () => {
  try {
    const files = await fsPromises.readdir(__dirname);
    const result = await Promise.all(
      files.map(async (filename) => {
        const stats = await fsPromises.stat(filename);
        danePlikowKatalogu.push({
          Name: filename,
          Size: stats.size,
          Date: stats.mtime,
        });
        return {
          Name: filename,
          Size: stats.size,
          Date: stats.mtime,
        };
      })
    );
    console.log("__filename:", __filename);
    console.log(`__dirname:, ${__dirname}`.yellow);
    // console.table(result);
    plikiKataloguEmitter.emit("daneZaładowane", danePlikowKatalogu);
  } catch (error) {
    console.error("Wystąpił błąd:", error);
  }
};
