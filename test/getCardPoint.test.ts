import { describe, expect, it, test } from "vitest";
import { getAllHandsPoint, getHandPoint } from "../src/getCardPoint";
import { Card } from "../types/Card";
import { HighestCard } from "../src/hand";

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
  it("should return 40 with a Suite of 5 cards", () => {
    const suiteHand: Card[] = [
      { value: 2, type: "hearts" },
      { value: 3, type: "diamonds" },
      { value: 4, type: "clubs" },
      { value: 5, type: "spades" },
      { value: 6, type: "hearts" },
    ];
    expect(getHandPoint(suiteHand)).toBe(40);
  });

  it("should return 45 for a Couleur", () => {
    const couleurHand: Card[] = [
      { value: 2, type: "hearts" },
      { value: 3, type: "hearts" },
      { value: 4, type: "hearts" },
      { value: 5, type: "hearts" },
      { value: 6, type: "hearts" },
    ];
    expect(getHandPoint(couleurHand)).toBe(45);
  });
  it("should return 50 for a Full", () => {
    const fullhand: Card[] = [
      { value: 2, type: "hearts" },
      { value: 2, type: "diamonds" },
      { value: 2, type: "clubs" },
      { value: 3, type: "spades" },
      { value: 3, type: "hearts" },
    ];
    expect(getHandPoint(fullhand)).toBe(50);
  });
  it("should return 60 for a Carre", () => {
    const carreHand: Card[] = [
      { value: 2, type: "hearts" },
      { value: 2, type: "diamonds" },
      { value: 2, type: "clubs" },
      { value: 2, type: "spades" },
      { value: 3, type: "hearts" },
    ];
    expect(getHandPoint(carreHand)).toBe(60);
  });
  it("should return 70 for a QuinteFlush", () => {
    const quinteFlushHand: Card[] = [
      { value: 2, type: "hearts" },
      { value: 3, type: "hearts" },
      { value: 4, type: "hearts" },
      { value: 5, type: "hearts" },
      { value: 6, type: "hearts" },
    ];
    expect(getHandPoint(quinteFlushHand)).toBe(80);
  });
  it("should return highest card value", () => {
    const hand: Card[] = [
      { value: 2, type: "hearts" },
      { value: 3, type: "diamonds" },
      { value: 4, type: "clubs" },
      { value: 5, type: "spades" },
      { value: 13, type: "hearts" },
    ];
    expect(getHandPoint(hand)).toBe(13);
  });
});

describe("HigestHand", () => {
  test("should return hand[0] with the highest point", () => {
    const hands: Card[][] = [
      [
        { value: 2, type: "hearts" },
        { value: 2, type: "diamonds" },
        { value: 2, type: "clubs" },
        { value: 5, type: "spades" },
        { value: 7, type: "hearts" },
      ],
      [
        { value: 1, type: "hearts" },
        { value: 1, type: "diamonds" },
        { value: 1, type: "clubs" },
        { value: 1, type: "spades" },
        { value: 3, type: "hearts" },
      ],
    ];
    expect(getAllHandsPoint(hands)).toEqual([30, 60]);
  });
});
