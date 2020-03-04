import { roundOffPoints } from "./helpers";

describe("roundOffPoints", () => {
  test("convert to string and round up to 2 decimal places", () => {
    const result = roundOffPoints(4.8267);
    expect(result).toBe("4.83");
  });

  test("convert to string and round down to 2 decimal places", () => {
    const result = roundOffPoints(4.8237);
    expect(result).toBe("4.82");
  });
});
