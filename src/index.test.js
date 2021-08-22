const index = require("./index")
// @ponicode
describe("index.getShoppingCart", () => {
    test("0", () => {
        let callFunction = () => {
            index.getShoppingCart("c466a48309794261b64a4f02cfcc3d64", ["New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart", "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.getShoppingCart("someUser", ["New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart", "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.getShoppingCart("fake_user_id", ["The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design", "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.getShoppingCart("someUser", ["Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles", "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.getShoppingCart("b'nXQpVsglEGFJgfK'", ["The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J", "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index.getShoppingCart(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
