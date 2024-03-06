import { Item, Rule } from "../types";

export class BackstagePassRule implements Rule {
  constructor(private names: string[]) {}

  condition(item: Item) {
    return this.names.includes(item.name);
  }

  action(item: Item) {
    item.sellIn--;

    if (item.sellIn <= 0) {
      item.quality = 0;
      return item;
    }

    item.quality++;

    if (item.sellIn <= 10) {
      item.quality++;
    }

    if (item.sellIn <= 5) {
      item.quality++;
    }

    return item;
  }
}
