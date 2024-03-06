import { Item, Rule } from "./types";

export const createRuleApplicator = (rules: Rule[]) => (item: Item) => {
  return rules.reduce((prevItem, rule, index) => {
    if (rule.condition(prevItem)) {
      console.debug(
        `Rule condition met for ${rule.constructor.name} (index: ${index})`
      );

      return rule.action(prevItem);
    }

    return prevItem;
  }, new Item(item.name, item.sellIn, item.quality));
};
