import { Express } from "express";
import { JSONFilePreset } from "lowdb/node";
import { xiaobaiPath } from "../config.ts";
import path from "node:path";

function createSpiderRules(app: Express) {
  app.post("/spiders/rule", async (req, res) => {
    // const db = await JSONFilePreset()
  });
}

function querySpiderRules(app: Express) {
  app.get("/spiders/rule", async (req, res) => {
    const db = await JSONFilePreset(path.resolve(xiaobaiPath, "./db.json"), []);
    
  });
}

export { createSpiderRules };
