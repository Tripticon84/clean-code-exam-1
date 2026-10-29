export type CardType = "hearts" | "diamonds" | "clubs" | "spades";

export type Card = {
  value: number;
  type: CardType;
};
