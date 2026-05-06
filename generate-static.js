import fs from "fs";
import path from "path";
import server from "./dist/server/server.js";

async function generate() {
  console.log("Generating index.html...");
  const request = new Request("http://localhost/");
  const response = await server.fetch(request, {}, {});
  
  const html = await response.text();
  fs.writeFileSync(path.join(process.cwd(), "dist/client/index.html"), html);
  console.log("Generated index.html successfully.");
}

generate().catch(console.error);
