{
  //
  // union type
  type FrontendDeveloper = "fakibazDeveloper" | "juniorDeveloper";
  type FullstackDeveloper = "frontendDeveloper" | "expertDeveloper";
  type MixedDeveloper = FrontendDeveloper | FullstackDeveloper;
  const newDeveloper: MixedDeveloper = "frontendDeveloper";

  type User = {
    name: string;
    email?: string;
    gender: "male" | "female";
    bloodGroup: "o+" | "A+" | "AB+";
  };
  const user1: User = {
    name: "shihab",
    gender: "male",
    bloodGroup: "AB+",
  };

  {
    //   intersection type
    type FrontendDeveloper = {
      skills: string[];
      designation1: "FrontendDeveloper";
    };
    type BackendDeveloper = {
      skills: string[];
      designation2: "backend developer";
    };

    type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;
    const fullstackDeveloper: FullstackDeveloper = {
      skills: ["HTML", "CSS", "NODE"],
      designation1: "FrontendDeveloper",
      designation2: "backend developer",
    };
  }
  //
}
