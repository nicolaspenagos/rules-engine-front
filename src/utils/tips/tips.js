export class Tips {
    constructor() {
        const tip1 = 'You can only have one logical connector per group';
        const tip2 = 'Expressions are evaluated from top to bottom (left to right)';
        const tip3 = 'Change the order of the groups to get any expression';
        const tip4 = 'Values​​ on the left must always be columns';

        this.tips = this.shuffle([tip1, tip2, tip3, tip4]);
        this.usedTips = [];


    }

    shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    getTip() {
        const temp = this.tips.pop();
        this.usedTips.push(temp);
        return temp;
    }

    returnTip() {
        this.tips.push(this.usedTips.pop());
    }

}