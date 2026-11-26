import express from "express";

export function createApp(): express.Application {
  const app = express();
  app.use(express.json());

  // TODO: wire authoring endpoints (follow-on issue)
  app.get("/health", (_req, res) => {
    res.json({ status: "not implemented" });
  });

  return app;
}
