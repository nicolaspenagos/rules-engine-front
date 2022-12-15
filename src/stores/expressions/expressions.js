import { defineStore } from "pinia";
export const AND = "And";
export const OR = "Or"

export const useExpressionsStore = defineStore("expressions", {
    state: () => ({
        expressions: []
    }),
    getters: {

    },
    actions: {
        addExpression(newExpression, id, index) {

            // If the expression is a logical group connector, I can add it directly
            if (newExpression == AND || newExpression == OR) return this.expressions.push(newExpression);

            // If the expression is a primitive expression, I need to check if the current scope already exists
            if (this.expressions[index]) return this.expressions[index].set(id, newExpression);

            // Otherwise I create a new scope and add the new primitive expression
            let expressionGroup = new Map().set(id, newExpression);;
            this.expressions.push(expressionGroup)

        },

        deleteExpression(id, index) {
            this.expressions[index].delete(id);
        }



    }
});