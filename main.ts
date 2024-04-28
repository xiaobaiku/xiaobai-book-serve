import express from "express";
import { JSONFilePreset } from "lowdb/node";
import { mkdir } from "node:fs/promises";
import path from "node:path";


const app = express();
const port = 3000;

interface Rule {
  a: number;
}



app.get("/", async (req, res) => {
  const xiaobaiPath = path.resolve(process.env.TMP!, '../xiaobai-book')

  try {
    await mkdir(xiaobaiPath, {recursive: true})
  } catch (error) {
    
  }
  const db = await JSONFilePreset<Rule[]>(path.resolve(xiaobaiPath, './db.json'), []);
  db.data.push({
    a: 1,
  });
  await db.write();
  res.send("2221");
});

app.listen(port, () => {
  console.log(`服务启动成功，端口号为：${port}`);
});
