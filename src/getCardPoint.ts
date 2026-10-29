import { Card } from "../types/Card";
import {
  HandIsBrelan,
  HandIsCarre,
  HandIsCouleur,
  HandisFull,
  HandIsSuite,
} from "./hand";

export function getHandPoint(hand: Card[]): number {
  let result = 0;

  if (HandisFull(hand)) {
    return 50;
  }
  if (HandIsCouleur(hand)) {
    return 45;
  }
  if (HandIsBrelan(hand)) {
    return 30;
  }
  if (HandIsCarre(hand)) {
    return 60;
  }
  if (HandIsSuite(hand)) {
    return 40;
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
