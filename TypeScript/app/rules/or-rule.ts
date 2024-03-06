import { BaseRule } from "@/base-rule";
import { Item, Rule } from "../types";

export class OrRule extends BaseRule {
  constructor(private rules: Rule[]) {
    super()
  }

  action(item: Item) {
    const matchedRuleIndex = this.rules.findIndex((rule) =>
      rule.condition(item)
    );

    if (matchedRuleIndex > -1) {
      const rule = this.rules[matchedRuleIndex];
      console.debug(
        `Or rule => Rule condition met for ${rule.constructor.name} (index: ${matchedRuleIndex})`
      );
      return rule.action(item);
    }

    return item;
  }
}
