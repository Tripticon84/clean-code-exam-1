import { describe, expect, it, test } from "vitest";
import { getHandPoint } from "../src/getCardPoint";
import { Card } from "../types/Card";

const hands: Card[][] = [];

describe("getHandPoint", () => {
  it("should return 0 with an empty Hand", () => {
    expect(getHandPoint([])).toBe(0);
  });
});
