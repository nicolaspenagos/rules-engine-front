import { defineStore } from "pinia";
import { Column, NUMBER, STRING } from "../../model/Column";
import { LOWER, GREATER, EQUAL, DIFFERENT } from '../../model/ExpressionModel';
import { useExpressionsStore } from "../expressions/expressions";
export const useTableStore = defineStore("table", {
    state: () => ({
        columns: [new Column('Age', NUMBER), new Column('Name', STRING), new Column('Lastame', STRING)]
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
                    console.log('aa');
                    return [LOWER, EQUAL, GREATER];
                case STRING:
                    console.log('bb');
                    return [EQUAL, DIFFERENT];
            }
        },
        getColumnsNames() {
            let cols = [];
            this.columns.forEach((col) => {
                cols.push(col.name);
            });

            return cols;
        },

        getColumnType(columnName) {

            console.log(this.searchByName(columnName));
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
        }


    }
});