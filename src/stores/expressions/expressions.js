import { defineStore } from "pinia";
import { Expression } from "../../model/Expression";
import { v4 as generateRandomUUID } from 'uuid';

export const useExpressionsStore = defineStore("expressions", {
    state: () => ({
        expressions: []
    }),
    getters: {

    },
    actions: {
        addExpression(newExpression, id, index) {
            if (newExpression == 'And' || newExpression == 'Or') {
                this.expressions.push(newExpression)

            } else {

                if (this.expressions[index]) {
                    this.expressions[index].set(id, newExpression);
                } else {
                    let expressionGroup = new Map();
                    expressionGroup.set(id, newExpression);
                    this.expressions.push(expressionGroup)
                }

            }

        },



    }
});

/*
["AND",
    {"var1" : "value1"},
    ["OR",
        { "var2" : "value2" },
        { "var3" : "value3" }
    ]
]
*/