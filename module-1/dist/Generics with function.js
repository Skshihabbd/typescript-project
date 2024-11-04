"use strict";
{
    //
    // function with generics
    const createArray = (param) => {
        return [param];
    };
    const createArrayWithGeneric = (param) => {
        return [param];
    };
    const res1 = createArray("Bangladesh");
    const resGenericObj = createArrayWithGeneric({
        id: 123,
        name: "shihab",
    });
    // create array  with tupple
    const createArrayWithTuple = (param1, param2) => {
        return [param1, param2];
    };
    const result1 = createArrayWithTuple(12, {
        name: "shihab",
    });
    const result2 = createArrayWithTuple(12, "shihab");
    //
    const addCourseToStudent = (students) => {
        const courses = "next level web development";
        return Object.assign(Object.assign({}, students), { courses });
    };
    const students1 = addCourseToStudent({ name: "shihab" });
    console.log(students1);
    //
}
