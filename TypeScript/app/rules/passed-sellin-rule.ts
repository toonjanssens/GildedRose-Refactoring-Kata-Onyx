import { BaseRule } from "@/base-rule";
import { Item } from "../types";

export class PastSellingRule extends BaseRule {
  condition(item: Item) {
    return item.sellIn < 0;
  }

  action(item: Item) {
    item.quality = item.quality - 1;

    return item;
  }
}
