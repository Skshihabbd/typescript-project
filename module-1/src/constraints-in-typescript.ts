{
  //
  // constrainst means force-->>
  // function with generics
  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  type User = { id: number; name: string };
  const res1 = createArray("Bangladesh");
  const resGenericObj = createArrayWithGeneric<User>({
    id: 123,
    name: "shihab",
  });
  // create array  with tupple
  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const result1 = createArrayWithTuple<number, { name: string }>(12, {
    name: "shihab",
  });
  const result2 = createArrayWithTuple<number, string>(12, "shihab");

  //
  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    students: T
  ): T & { courses: string } => {
    const courses = "next level web development";
    return {
      ...students,
      courses,
    };
  };
  type constrainsStudent = {
    id: number;
    name: string;
    email: string;
    dev?: string;
  };

  const students1 = addCourseToStudent<constrainsStudent>({
    id: 222,
    name: "shihab",
    email: "x@gmail.com",
  });

  const student3 = addCourseToStudent<constrainsStudent>({
    email: "y@gmail.com",
    id: 123,
    name: "surzyo",
  });
  console.log(students1);

  //
}
