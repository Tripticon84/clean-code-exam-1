import { Card } from "../types/Card";

export function HandIsBrelan(hand: Card[]): boolean {
  let isBrelan: boolean = false;

  for (let card of hand) {
    if (hand.filter((c) => c.value === card.value).length === 3) {
      isBrelan = true;
    }
  }
  return isBrelan;
}
