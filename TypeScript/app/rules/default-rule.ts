import { BaseRule } from "@/base-rule";
import { Item } from "../types";

export class DefaultRule extends BaseRule {
  constructor(
    private amounts: { sellIn?: number; quality?: number },
    private names?: string[]
  ) {
    super()
  }

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
