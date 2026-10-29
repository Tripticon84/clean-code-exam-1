import { Card } from "../types/Card";
import { HandIsBrelan, HandIsCouleur, HandIsSuite } from "./hand";

export function getHandPoint(hand: Card[]): number {
  let result = 0;

  if (HandIsBrelan(hand)) {
    result = 30;
  }

  if (HandIsSuite(hand)) {
    result = 40;
  }

  if (HandIsCouleur(hand)) {
    result = 45;
  }

  return result;
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
