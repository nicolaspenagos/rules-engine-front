import { NUMBER, STRING, BOOLEAN } from '@/model/Column.js';
export function getValidOperands(column) {

    if (column.type == NUMBER) {
        return ['>', '<', '=']
    }

    if (column.type == STRING) {
        return ['≠', '=']
    }

    if (column.type == BOOLEAN) {
        return ['is true?', 'is false?', '=', '≠']
    }

}

export function getValidColumns(selectedColumn, columns) {

    return columns.filter((currentColumn) => {
        return isValid(selectedColumn, currentColumn);
    });

}

function isValid(selectedColumn, currentColumn) {

    if (selectedColumn.name != currentColumn.name && selectedColumn.type == currentColumn.type) {

        return true;
    }
    return false;
}