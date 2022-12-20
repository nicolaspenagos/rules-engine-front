import { defineStore } from "pinia";
import { DIFFERENT, EQUAL, GREATER, IS_FALSE, IS_TRUE, LOWER, Rule } from "../../model/Rule";
import { Tips } from "../../utils/tips/tips";

export const AND = "And";
export const OR = "Or"
export const EXPRESSIONS_LIMIT = 4;
export const useExpressionsStore = defineStore("expressions", {
    state: () => ({
        expressions: [],
        expressionsCounter: 0,
        tips: new Tips(),
        innerConectors: new Map()
    }),
    getters: {

    },
    actions: {
        clear() {
            this.expressions = [];
            this.expressionsCounter = 0;
            this.tips = new Tips();
            this.innerConectors = new Map();
        },
        addExpression(newExpression, id, index) {


            // If the expression is a logical group connector, I can add it directly
            if (newExpression == AND || newExpression == OR) return this.expressions.push(newExpression);

            this.expressionsCounter++;
            // If the expression is a primitive expression, I need to check if the current scope already exists
            if (this.expressions[index]) return this.expressions[index].set(id, newExpression);

            // Otherwise I create a new scope and add the new primitive expression
            let expressionGroup = new Map().set(id, newExpression);

            this.expressions.push(expressionGroup);

            this.innerConectors.set(id, AND);



        },

        deleteExpression(id, index) {
            this.expressions[index].delete(id);
            this.expressionsCounter--;
        },

        deleteExpressionGroup(index) {

            for (let [key, value] of this.expressions[index]) {
                if (this.innerConectors.has(key))
                    this.innerConectors.delete(key);
            }

            this.returnTip();
            this.expressionsCounter -= this.expressions[index].size;
            this.expressions.splice(index - 1, index);

        },

        buildRule() {

            let expressionBody = '';
            let expressionCounter = 0;
            let tempMap = new Map();
            let singleExpressions = new Map();
            let groupCounter = 1;

            for (let i = 0; i < this.expressions.length; i++) {

                let current = this.expressions[i];


                if (current != AND && current != OR) {

                    expressionBody += '( '

                    let innerCounter = 0;
                    for (let [key, value] of current) {

                        if (value != AND && value != OR) {
                            expressionCounter++;

                            expressionBody += 'Exp' + expressionCounter + ' ';
                            singleExpressions.set('Exp' + expressionCounter, this.builSingleExpression(value))
                            if (innerCounter + 1 < current.size)
                                expressionBody += 'Exp' + groupCounter + '$ ';


                            if (this.innerConectors.has(key)) {
                                tempMap.set('Exp' + groupCounter, this.innerConectors.get(key))
                            }
                        }
                        innerCounter++;
                    }

                    groupCounter++;
                    expressionBody += ') '

                } else {
                    expressionBody += current + ' ';
                }

            }

            for (let [key, value] of tempMap) {

                expressionBody = expressionBody.replaceAll(key + '$', value);

            }



            let rule = new Rule(expressionBody.trim(), JSON.stringify(singleExpressions.get('Exp1')), JSON.stringify(singleExpressions.get('Exp2')), JSON.stringify(singleExpressions.get('Exp3')), JSON.stringify(singleExpressions.get('Exp4')));

            alert(JSON.stringify(rule));
        },

        builSingleExpression(exp) {

            let expression;

            switch (exp.operand) {
                case EQUAL:
                    expression = { '==': [exp.column, exp.value] };
                    break;
                case GREATER:
                    expression = { '>': [exp.column, exp.value] };
                    break;
                case LOWER:
                    expression = { '<': [exp.column, exp.value] };
                    break;
                case DIFFERENT:
                    expression = { '!=': [exp.column, exp.value] };
                    break;
                case IS_FALSE:
                    expression = { '==': [exp.column, false] };
                    break;
                case IS_TRUE:
                    expression = { '==': [exp.column, true] };
                    break;

            }

            let isColumn = exp.isColumn;
            return { expression, isColumn }

        },

        getTip() {
            return this.tips.getTip();
        },

        returnTip() {
            return this.tips.returnTip();
        },

        setColumn(index, id, column) {

            const currentExpression = this.getCurrentExpression(index, id);
            currentExpression.column = column;
            currentExpression.isColumn = '';
            currentExpression.operand = '';
            currentExpression.value = '';

        },
        getCurrentExpression(index, id) {
            return this.expressions[index].get(id);
        },
        setOperand(index, id, operand) {
            this.getCurrentExpression(index, id).operand = operand;

            if (operand == IS_FALSE || operand == IS_TRUE)
                this.getCurrentExpression(index, id).isColumn = false;
        },
        setValue(index, id, value) {

            this.getCurrentExpression(index, id).value = value;
        },
        changeExpressionOperator(index, operator) {
            for (let [key, value] of this.expressions[index]) {
                if (this.innerConectors.has(key))
                    this.innerConectors.set(key, operator);
            }
        },
        setIsColumn(index, id, isColumn) {
            this.getCurrentExpression(index, id).isColumn = isColumn;
        },
        isValidRule() {

            for (let i = 0; i < this.expressions.length; i++) {

                if (this.expressions[i] != AND && this.expressions[i] != OR) {

                    for (let [key, exp] of this.expressions[i]) {

                        if (exp.column == '' || typeof exp.isColumn === 'string' && exp.isColumn == '' || exp.operand == '' || this.value == '') {
                            return false;
                        }
                    }
                }

            }

            return true;

        }

    }
});