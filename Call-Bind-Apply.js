// call apply bind

let getFullDetails = function (city) {
  return (
    `Name: ${this.name}` +
    `Branch: ${this.branch}` +
    `Number_of_employees: ${this.employeeCount}` +
    `city:${city}`
  );
};

const ObjectData1 = {
  name: "WebO",
  branch: "bhatar",
  employeeCount: 20,
};
const ObjectData2 = {
  name: "WebO",
  branch: "Adajan",
  employeeCount: 60,
};

const result1 = getFullDetails.call(ObjectData1, ["surat"]);
const result2 = getFullDetails.apply(ObjectData2, ["rajkot"]);
const result3 = getFullDetails.bind(ObjectData1, ["surat"]);
console.log(result1);
console.log(result2);
console.log(result3());
