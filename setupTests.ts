// setupTests.ts
import { createTestEnv } from "vitest";
import { JSDOM } from "jsdom";

const dom = new JSDOM("<!doctype html><html><body></body></html>");
global.document = dom.window.document;
global.window = dom.window;
global.navigator = dom.window.navigator;

const { describe, it } = createTestEnv();

export { describe, it };
