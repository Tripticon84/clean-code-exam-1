import { describe, expect, it, test } from "vitest";
import { getHandPoint } from "../src/getCardPoint";
import { Card } from "../types/Card";

const hands: Card[][] = [
  [
    { value: 2, type: "hearts" },
    { value: 2, type: "diamonds" },
    { value: 2, type: "clubs" },
    { value: 5, type: "spades" },
    { value: 7, type: "hearts" },
  ],
];

describe("getHandPoint", () => {
  it("should return 0 with an empty Hand", () => {
    expect(getHandPoint([])).toBe(0);
  });
  it("should return 30 with a Brelan", () => {
    expect(getHandPoint(hands[0])).toBe(30);
  });
});
