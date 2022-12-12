import { defineStore } from "pinia";
import { Expression } from "../../model/Expression";
const userExpressionStore = defineStore("expressions", {
    state: () => ({
        expressions: []
    }),
    getters: {
        getexpressions: (state) => expressions,
    },
    actions: {
        addExpression(newExpression) {

            if (!newExpression instanceof Expression)
                throw new Error("Non-expression object received");

            if (typeof newExpression.column === "undefined" || typeof newExpression.operand === "undefined" ||
                typeof newExpression.typeValue === "undefined" || typeof newExpression.value === "undefined")
                throw new Error("An expression with undefined parameters received");

            this.expressions.push(newExpression);
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