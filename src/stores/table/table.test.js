import { useTableStore } from '@/stores/table/table.js';
import { assert, beforeEach, describe, expect, test } from "vitest";
import { createPinia, setActivePinia } from 'pinia';
import { Column, NUMBER, STRING, BOOLEAN } from '@/model/Column.js';

describe('Table Store', () => {

    beforeEach(
        () => {
            setActivePinia(createPinia());
        }
    );

    test("columns array is defined", () => {
        const table = useTableStore();
        expect(table.columns).toBeDefined();
    });

    test("columns array is empty", () => {
        const table = useTableStore();
        expect(table.columns.length).toBe(0);
    });

    test("add column", () => {
        const table = useTableStore();
        table.addColumn(new Column("name", "string"));
        expect(table.columns.length).toBe(1);
    });

    test("rejecting objects other than columns", () => {
        const table = useTableStore();
        assert.throws(() => {
            table.addColumn("invalid-column");
        });
    });

    test("replacing the columns array", () => {
        const table = useTableStore();
        const columns = [new Column("name", STRING), new Column("age", NUMBER), new Column("married", BOOLEAN)];
        table.setColumns(columns);
        assert.equal(JSON.stringify(table.columns), JSON.stringify(columns));
    });

    test("rejecting an invalid array", () => {
        const table = useTableStore();
        const columns = [new Column("name", STRING), "invalid-column", new Column("married", BOOLEAN)];
        assert.throws(() => {
            table.setColumns(columns);
        });
    });



})