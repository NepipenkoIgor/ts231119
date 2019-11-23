"use strict";
let obj;
function getSubjects(person) {
    if ('lessons' in person) {
        return person.lessons;
    }
    return person.lectures;
}
//# sourceMappingURL=index.js.map