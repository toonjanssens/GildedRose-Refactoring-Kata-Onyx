import { createRuleApplicator } from "./create-rule-applicator";
import { BackstagePassRule } from "./rules/backstage-pass-rule";
import { DefaultRule } from "./rules/default-rule";
import { OrRule } from "./rules/or-rule";
import { PastSellingRule } from "./rules/passed-sellin-rule";
import { QualityRangeRule } from "./rules/quality-range-rule";

const rulesApplicator = createRuleApplicator([
  new OrRule([
    new DefaultRule({ sellIn: -1, quality: 1 }, ["Aged Brie"]),
    new BackstagePassRule(["Backstage passes to a TAFKAL80ETC concert"]),
    new DefaultRule({ quality: -2 }, ["Conjured"]),
    new DefaultRule({}, ["Sulfuras, Hand of Ragnaros"]),
    new DefaultRule({ sellIn: -1, quality: -1 }),
  ]),
  new OrRule([
    new DefaultRule({}, ["Sulfuras, Hand of Ragnaros"]),
    new PastSellingRule(),
  ]),
  new QualityRangeRule(["Sulfuras, Hand of Ragnaros"]),
]);

export default rulesApplicator;
