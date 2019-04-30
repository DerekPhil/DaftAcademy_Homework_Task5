import {fib} from "../src/index.js";
import { Array } from "core-js";

describe("function 'fib'", () => {
    test("type of argument", () => {
        expect(fib("3")).toEqual([]);
    });
    test("start from 0 value from Fibonacci sequence definition", () => {
        expect(fib(5)).toContain(0);
    })
    test("more arguments", () => {
        expect(fib(3, 4)).toEqual([0, 1, 1, [0, 1, 1, 2]]);
    })
    test("no argument", () => {
        expect(fib()).toEqual([])
    })
    test("only argument 'num'", () => {
        expect(fib(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
    })
})