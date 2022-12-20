export const STRING = "string";
export const NUMBER = "number";
export const BOOLEAN = "boolean";

export class Column {

    constructor(name, type) {

        this.validateParams(name, type);
        this.name = name;
        this.type = type;

    }

    validateParams(name, type) {

        if (name.trim() == "") {
            throw new Error("Invalid column name")
        }
        if (!(type === STRING || type === NUMBER || type === BOOLEAN)) {
            throw new Error("Invalid column data type")
        }

    }

}