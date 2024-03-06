import { BaseRule } from "@/base-rule";
import { Item } from "../types";

export class QualityRangeRule extends BaseRule {
  constructor(private exceptions: string[]) {
    super();
  }

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
