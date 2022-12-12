import { defineStore } from "pinia";
import { Expression } from "../../model/Expression";
import { v4 as generateRandomUUID } from 'uuid';

const userExpressionStore = defineStore("expressions", {
    state: () => ({
        expressions: new Map()
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

            const id = generateRandomUUID();
            newExpression.id = id;
            this.expressions.set(id, newExpression)

        },
        getExpression(id) {
            return this.expressions.get(id);
        }

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