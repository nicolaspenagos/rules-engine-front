//Valid column data types
export const STRING = "string";
export const NUMBER = "number";
export const BOOLEAN = "boolean";

export class Column {
    constructor(name, type) {
        this.name = name;
        if (type === STRING || type === NUMBER || type === BOOLEAN)
            this.type = type;
        else
            throw new Error("Inavlid column data type")
    }
}