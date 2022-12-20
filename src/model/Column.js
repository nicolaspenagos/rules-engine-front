export const STRING = "varchar";
export const NUMBER = "int4";
export const BOOLEAN = "bool";

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