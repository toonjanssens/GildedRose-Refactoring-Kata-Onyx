import rulesApplicator from "./rule-applicator";
import { Item } from "./types";
export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    return this.items.map(rulesApplicator);
  }
}
