export const PRIMITIVE = 'prim';
export const GREATER = '>';
export const LOWER = '<';
export const EQUAL = '=';
export const DIFFERENT = '≠';
export const IS_TRUE = 'isTrue';
export const IS_FALSE = 'isFalse';
export const AND = 'and';
export const OR = 'or';
export const ROOT = 'root';

export class Rule {
    constructor(expressionBody, expression1, expression2, expression3, expression4) {
        this.expressionBody = "";
        this.expression1 = "";
        this.expression2 = "";
        this.expression3 = ""
        this.expression4 = ""
    }
}