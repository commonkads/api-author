import { createApp } from "./server.js";

const PORT = process.env["PORT"] ?? "3000";
const app = createApp();

app.listen(Number(PORT), () => {
  process.stdout.write(`api-author listening on port ${PORT}\n`);
});
