import { Item, Rule } from "../types";

export class QualityRangeRule implements Rule {
  constructor(private exceptions: string[]) {}

  condition(item: Item) {
    return (
      !this.exceptions.includes(item.name) &&
      (item.quality < 0 || item.quality > 50)
    );
  }

  action(item: Item) {
    item.quality = item.quality > 50 ? 50 : 0;
    return item;
  }
}
