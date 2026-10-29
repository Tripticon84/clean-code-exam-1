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

export function HandIsSuite(hand: Card[]): boolean {
  let isSuite: boolean = false;
  const sortedHand = hand.sort((a, b) => a.value - b.value);
  for (let i = 0; i < sortedHand.length - 3; i++) {
    if (
      sortedHand[i].value + 1 === sortedHand[i + 1].value &&
      sortedHand[i + 1].value + 1 === sortedHand[i + 2].value &&
      sortedHand[i + 2].value + 1 === sortedHand[i + 3].value
    ) {
      isSuite = true;
    }
  }

  return isSuite;
}

export function HandIsCouleur(hand: Card[]): boolean {
  if (hand.length === 0) {
    return false;
  }

  let isCouleur: boolean = true;
  const firstCardType = hand[0].type;

  for (let i = 1; i < hand.length; i++) {
    if (hand[i].type !== firstCardType) {
      isCouleur = false;
      break;
    }
  }

  return isCouleur;
}
