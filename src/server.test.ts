import assert from "node:assert/strict";
import { test } from "node:test";

import request from "supertest";

import { createApp } from "./server.js";

test("GET /health returns 200 with status not implemented", async () => {
  const response = await request(createApp()).get("/health");

  assert.equal(response.status, 200);
  assert.deepEqual(response.body, { status: "not implemented" });
});
