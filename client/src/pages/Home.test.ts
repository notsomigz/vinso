import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const source = readFileSync(new URL("./Home.tsx", import.meta.url), "utf8");

describe("Home direct launch", () => {
  it("delays the launch and keeps the single audio track timed to the scene", () => {
    expect(source).toContain('const [runState, setRunState] = useState<GalaxyRunState>("idle")');
    expect(source).toContain('window.setTimeout(() => {');
    expect(source).toContain('setRunState("launch")');
    expect(source).toContain('autoPlay loop preload="auto"');
    expect(source).toContain('if (isPlaying)');
    expect(source).toContain('void audio.play().catch(() => undefined);');
    expect(source).toContain('Read my note');
    expect(source).toContain('SWEET_TILE_MESSAGES');
    expect(source).toContain('runState={runState}');
    expect(source).toContain('isPlaying={isPlaying}');
    expect(source).not.toContain("question-overlay");
    expect(source).not.toContain("shuffle-control");
    expect(source).not.toContain("shuffle-photo-tiles");
  });
});
