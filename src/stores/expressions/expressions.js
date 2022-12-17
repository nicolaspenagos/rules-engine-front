import { defineStore } from "pinia";
import { Tips } from "../../utils/tips/tips";
export const AND = "And";
export const OR = "Or"
export const EXPRESSIONS_LIMIT = 4;
export const useExpressionsStore = defineStore("expressions", {
    state: () => ({
        expressions: [],
        expressionsCounter: 0,
        tips: new Tips()
    }),
    getters: {

    },
    actions: {
        addExpression(newExpression, id, index) {

            // If the expression is a logical group connector, I can add it directly
            if (newExpression == AND || newExpression == OR) return this.expressions.push(newExpression);

            this.expressionsCounter++;
            // If the expression is a primitive expression, I need to check if the current scope already exists
            if (this.expressions[index]) return this.expressions[index].set(id, newExpression);

            // Otherwise I create a new scope and add the new primitive expression
            let expressionGroup = new Map().set(id, newExpression);;
            this.expressions.push(expressionGroup)

        },

        deleteExpression(id, index) {
            this.expressions[index].delete(id);
            this.expressionsCounter--;
        },

        deleteExpressionGroup(index) {

            this.returnTip();
            this.expressionsCounter -= this.expressions[index].size;
            this.expressions.splice(index - 1, index);


        },

        buildRule() {

            let expressionBody = '';
            this.expressions.forEach(exp => {

            });
        },

        getTip() {
            return this.tips.getTip();
        },

        returnTip() {
            return this.tips.returnTip();
        },

        setColumn(index, id, column) {
            this.expressions[index].get(id).column = column;
        }



    }
});