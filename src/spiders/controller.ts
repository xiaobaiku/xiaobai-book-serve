import { Express } from "express";
import { JSONFilePreset } from 'lowdb/node'

function createSpiderRules(app: Express) {
    app.post('/spiders/rule', async (req, res) => {
        // const db = await JSONFilePreset()
    })
}

export { createSpiderRules };
