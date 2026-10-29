import { Card } from "../types/Card";

export function getHandPoint(hand: Card[]): number {
  return 0;
}

export function getAllHandsPoint(hands: Card[][]): [number, number] {
  let result: [number, number];
  let i = 0;
  for (const hand of hands) {
    i = 0;
    result[i] = getHandPoint(hand);
  }

  return result;
}
