"use strict";
exports.__esModule = true;
exports.testMakePerson = exports.makePerson = void 0;
function makePerson(name, age) {
    return { name: name, age: age };
}
exports.makePerson = makePerson;
function testMakePerson() {
    console.log(makePerson('jane', 22), makePerson('jack', 33));
}
exports.testMakePerson = testMakePerson;
