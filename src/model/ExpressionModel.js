export const GREATER = '>';
export const LOWER = '<';
export const EQUAL = '==';
export const DIFFERENT = '!=';
export const IS_TRUE = 'isTrue';
export const IS_FALSE = 'isFalse';
export const ROOT = 'root';

export class ExpressionModel {
    constructor() {
        this.column = '';
        this.operand = '';
        this.isColumn = '';
        this.value = '';
    }
}