import rulesApplicator from "./rule-applicator";
import { Item } from "./types";
export class GildedRose {
  constructor(private items:Array<Item> = []) {
    this.items = items;
  }

  updateQuality() {
    return this.items.map(rulesApplicator);
  }
}
