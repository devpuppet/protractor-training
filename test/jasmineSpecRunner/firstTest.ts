describe("First test", () => {

    it("Should pass", () => {
        let a = 12;
        expect(a).toBe(12);
    });

    it("Should not pass", () => {
            let u;
            expect(u).toBeDefined("Not defined!")
    });

});