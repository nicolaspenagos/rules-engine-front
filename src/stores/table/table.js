import { defineStore } from "pinia";
import { Column } from "../../model/Column";
export const useTableStore = defineStore("table", {
    state: () => ({
        columns: []
    }),
    getters: {
        getColumns: (state) => columns,
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
        }
    }
});