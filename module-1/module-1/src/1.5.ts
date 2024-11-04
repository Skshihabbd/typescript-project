// reference type data
const user: {
  firstName: string;
  middleName?: string; //optional type
  lastName: string;
  isMarried: boolean;
  company: string;
  fixedValue: "Programming Hero"; //this is called -->literall type
  readonly onlyRead: "PH Hero"; //readonly type
} = {
  firstName: "shaikh",
  lastName: "shihab",
  isMarried: true,
  company: "programming hero",
  fixedValue: "Programming Hero",
  onlyRead: "PH Hero",
};
// user.onlyRead = "PH Hero"; //-->readonly property value not assignable
