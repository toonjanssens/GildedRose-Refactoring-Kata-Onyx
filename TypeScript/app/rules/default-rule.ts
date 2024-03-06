import { Item, Rule } from "../types";

export class DefaultRule implements Rule {
  constructor(
    private amounts: { sellIn?: number; quality?: number },
    private names?: string[]
  ) {}

  condition(item: Item) {
    return this.names === undefined || this.names.includes(item.name);
  }

  action(item: Item) {
    if (this.amounts.sellIn) {
      item.sellIn = item.sellIn + this.amounts.sellIn;
    }

    if (this.amounts.quality) {
      item.quality = item.quality + this.amounts.quality;
    }

    return item;
  }
}
