import { useExpressionsStore, AND } from '@/stores/expressions/expressions.js';
import { assert, beforeEach, describe, expect, test } from "vitest";
import { createPinia, setActivePinia } from 'pinia';
import { v4 as generateRandomUUID } from "uuid";

describe('Expressions Store', () => {

    beforeEach(
        () => {
            setActivePinia(createPinia());
        }
    );

    test("expressions array is defined", () => {
        const expressions = useExpressionsStore();
        expect(expressions.expressions).toBeDefined();
    });

    test("add first expression group", () => {

        const expressions = useExpressionsStore();
        const testId = generateRandomUUID();
        const expresison = "Exp";
        const testExpressionGroup = new Map().set(testId, expresison);

        expressions.addExpression(expresison, testId, 0);
        assert.equal(JSON.stringify(Array.from(expressions.expressions[0])), JSON.stringify(Array.from(testExpressionGroup)));

    });

    test("add logical a group connector", () => {

        const expressions = useExpressionsStore();
        const testId = generateRandomUUID();

        expressions.addExpression(AND, testId, 0);
        assert.equal(JSON.stringify(Array.from(expressions.expressions[0])), JSON.stringify(Array.from(AND)));

    });

    test("add a primitive expression", () => {

        const expressions = useExpressionsStore();
        const expresison = "Exp";
        const testId = generateRandomUUID();
        const testId2 = generateRandomUUID();
        const testArray = [new Map().set(testId, expresison)];
        testArray[0].set(testId2, expresison)

        expressions.expressions = [new Map().set(testId, expresison)];
        expressions.addExpression(expresison, testId2, 0);
        assert.equal(JSON.stringify(Array.from(testArray[0])), JSON.stringify(Array.from(expressions.expressions[0])));

    });

    test("delete a primitive operation", () => {

        const expressions = useExpressionsStore();
        const testId = generateRandomUUID();
        expressions.expressions = [new Map().set(testId, "Exp")];

        expressions.deleteExpression(testId, 0);
        assert.equal("[]", JSON.stringify(Array.from(expressions.expressions[0])));
    });

    test("expressions counter when adding", () => {

        const expressions = useExpressionsStore();
        expressions.addExpression("Exp", "id1", 0);
        expressions.addExpression("Exp", "id2", 0);
        expressions.addExpression("Exp", "id2", 1);
        expect(expressions.expressionsCounter).toBe(3);

    })

    test("expressions counter when deleting", () => {

        const expressions = useExpressionsStore();
        expressions.addExpression("Exp", "id1", 0);
        expressions.addExpression("Exp", "id2", 0);
        expressions.addExpression("Exp", "id2", 1);
        expressions.deleteExpression("id2", 0);
        expect(expressions.expressionsCounter).toBe(2);



    })


})