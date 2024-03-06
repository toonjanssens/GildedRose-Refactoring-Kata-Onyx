import { Item, Rule } from "../types";

export class PastSellingRule implements Rule {
  condition(item: Item) {
    return item.sellIn < 0;
  }

  action(item: Item) {
    item.quality = item.quality - 1;

    return item;
  }
}
