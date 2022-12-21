import { defineStore } from "pinia";
import { BOOLEAN, Column, NUMBER, STRING } from "../../model/Column";
import { LOWER, GREATER, EQUAL, DIFFERENT } from '../../model/ExpressionModel';
import { IS_FALSE, IS_TRUE } from "../../model/Rule";
import { CRUDService, METADATA } from "../../service/CRUDService";
import { v4 as generateRandomUUID } from "uuid";
export const useTableStore = defineStore("table", {
    state: () => ({
        //columns: [new Column('Age', NUMBER), new Column('Name', STRING), new Column('Lastame', STRING), new Column('Married', BOOLEAN), new Column("Kilograms", NUMBER), new Column('BoOl', BOOLEAN)]
        columns: [],
        id: generateRandomUUID()
    }),
    getters: {

    },
    actions: {

        addColumn(newColumn) {

            if (!newColumn instanceof Column)
                throw new Error("Non-column object received");

            if (typeof newColumn.name === "undefined" || typeof newColumn.type === "undefined")
                throw new Error("A column with undefined parameters received");

            this.columns.push(newColumn);
        },
        setColumns(columns) {
            // To verify that each element in the array is a valid column using the addColumn function
            columns.forEach(col => {
                this.addColumn(col);
            });
        },
        isValidColumn(column) {
            return this.getColumnsNames().includes(column);
        },

        getOperands(type) {


            if (type == '')
                return [];

            switch (type) {
                case NUMBER:
                    return [LOWER, EQUAL, GREATER];
                case STRING:
                    return [EQUAL, DIFFERENT];
                case BOOLEAN:
                    return [EQUAL, DIFFERENT, IS_FALSE, IS_TRUE];
            }
        },
        getColumnsNames() {
            let cols = [];
            this.columns.forEach((col) => {
                cols.push(col.name);
            });




            return cols;
        },
        getColumnsNamesValue(column) {
            let cols = [];
            this.columns.forEach((col) => {
                if (col.name != column && this.getColumnType(col.name) == this.getColumnType(column))
                    cols.push(col.name);
            });

            return cols;
        },

        getColumnType(columnName) {

            if (columnName != '' && this.searchByName(columnName) != -1)
                return this.columns[this.searchByName(columnName)].type;
            return '';
        },
        searchByName(columnName) {

            for (let i = 0; i < this.columns.length; i++) {
                if (this.columns[i].name == columnName) {
                    return i;
                }
            }

            return -1;
        },
        laodColumns() {

            return CRUDService.get(METADATA, "data").then(data => {
                return this.columns = data;

            })
        }


    }
});