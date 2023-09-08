/*
 * Mather für Jest.
 *
 * Diese Datei ist nicht zu verändern.
 */
import { JestAssertionError } from "expect"

export { } // enforce this file to be a module

expect.extend({
    toAlmostEqual: toAlmostEqual,
});

declare global {
    namespace jest {
        interface Matchers<R> {
            /**
             * Compares two arrays; undefined, empty strings and empty arrays are equal
             */
            toAlmostEqual(expected: (string|undefined)[][]): CustomMatcherResult;
        }
    }
}

function toAlmostEqual(received: any, expected: string[][]) {
    try {
        if (!(received instanceof Array)) {
            expect(received).toEqual(expected);
        } else {
            const recNormalized: string[][] = [];
            const expNormalized: string[][] = [];
            const maxRow = Math.max(received.length, expected.length);
            for (let row = 0; row < maxRow; row++) {
                const recRow = received[row] ?? [];
                const expRow = expected[row] ?? [];
                recNormalized.push([])
                expNormalized.push([])
                if (recRow instanceof Array) {
                    const maxCol = Math.max(recRow.length, expRow.length);
                    for (let col = 0; col < maxCol; col++) {
                        recNormalized[row][col] = recRow[col] ?? "";
                        expNormalized[row][col] = expRow[col] ?? "";
                    }
                }
            }
            expect(recNormalized).toEqual(expNormalized);
        }
    } catch (err) {
        if (err instanceof JestAssertionError) {
            const jestAssertError = err;
            return { pass: false, message: () => jestAssertError.message }
        } else {
            return { pass: false, message: () => String(err) }
        }

    }
    return { pass: true, message: () => `Arrays were both (almost) equal.` }
}