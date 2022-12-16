import { describe, test, assert, expect } from "vitest";
import { Tips } from "./tips";
test("get unique tips", () => {
    const tips = new Tips();
    const tipsArray = [tips.getTip(), tips.getTip(), tips.getTip(), tips.getTip()];
    const uniqueSet = new Set();

    tipsArray.forEach(tip => {
        expect(uniqueSet.has(tip)).toBe(false);
        uniqueSet.add(tip);
    });

})

test("return tips", () => {
    const tips = new Tips();
    const tipsArray = [tips.getTip(), tips.getTip(), tips.getTip(), tips.getTip()];

    expect(tips.usedTips.length).toBe(4);
    expect(tips.tips.length).toBe(0);

    tipsArray.forEach(tip => {
        tips.returnTip();
    });

    const uniqueSet = new Set(tips.tips);
    tipsArray.forEach(tip => {
        expect(uniqueSet.has(tip)).toBe(true);
    });

});