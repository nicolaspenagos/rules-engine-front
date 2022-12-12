import { describe, test, assert } from "vitest";
import { BOOLEAN, Column, NUMBER, STRING } from "../../model/Column";
import { getValidColumns, getValidOperands } from "./validators";


describe("Validators", () => {

    test("string operand validator (getValidOperands)", () => {
        const column = new Column("name", STRING);
        const validOperands = getValidOperands(column);
        assert.equal(JSON.stringify(validOperands), JSON.stringify(['≠', '=']))
    })

    test("boolean operand validator (getValidOperands)", () => {
        const column = new Column("married", BOOLEAN);
        const validOperands = getValidOperands(column);
        assert.equal(JSON.stringify(validOperands), JSON.stringify(['is true?', 'is false?', '=', '≠']))
    })

    test("number operand validator (getValidOperands)", () => {
        const column = new Column("age", NUMBER);
        const validOperands = getValidOperands(column);
        assert.equal(JSON.stringify(validOperands), JSON.stringify(['>', '<', '=']))
    })

    test("valid columns validator getValidColumns()", () => {
        const column = new Column("age", NUMBER);
        const columns = [new Column("name", STRING), new Column("address", STRING), new Column("age", NUMBER),
            new Column("numberOfCars", NUMBER), new Column("married", BOOLEAN), new Column("numberOfHouses", NUMBER)
        ]
        const validColumns = getValidColumns(column, columns);
        assert.equal(JSON.stringify(validColumns), JSON.stringify(
            [new Column("numberOfCars", NUMBER), new Column("numberOfHouses", NUMBER)]));
    })

})