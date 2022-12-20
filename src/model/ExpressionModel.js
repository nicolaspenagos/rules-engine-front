export const GREATER = '>';
export const LOWER = '<';
export const EQUAL = '==';
export const DIFFERENT = '!=';
export const IS_TRUE = 'is True';
export const IS_FALSE = 'is False';
export const ROOT = 'root';

export class ExpressionModel {

    constructor() {
        this.column = '';
        this.operand = '';
        this.isColumn = '';
        this.value = '';
    }

}