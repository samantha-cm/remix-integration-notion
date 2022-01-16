//Solamente se va a ejecutar en el servidor por la notacion de .server

import dotenv from "dotenv";
const { Client } = require("@notionhq/client");
dotenv.config();

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getNotionDB = () => process.env.NOTION_DB;

export default notion;
