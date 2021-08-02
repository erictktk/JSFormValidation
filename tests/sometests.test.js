import { expect, test } from "@jest/globals";

import BasicStuff from "../FormValidation/BasicStuff.js";
import * as Validation from "../FormValidation/FormValidation.js";

describe("tests for BasicStuff utilObject", () => {
    test("basic stuff has correct array length", ()=> {
        const utilObj = new BasicStuff();

        expect(utilObj.basicCharacters.length).toBe(36);
    });

    test("basic stuff has no uppercase", () => {
        const utilObj = new BasicStuff();

        expect(utilObj.basicCharacters.includes('a')).toBe(true);
        expect(utilObj.basicCharacters.includes('A')).toBe(false);
    });
});

