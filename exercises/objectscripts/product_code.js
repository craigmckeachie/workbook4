"use strict";

function generatePartCode(partInformation) {
  return `${partInformation.supplierCode}:${partInformation.productNumber}-${partInformation.size}`;
}

//this is the partCode format
//   supplierCode:productNumber-size
//   "XYZ:1234-L"
//   "DALEdfsklflk:3456-S"
function parsePartCode(partCode) {
  //finding the end of the supplier code, aka the colon
  let colonPosition = partCode.indexOf(":");
  let dashPosition = partCode.indexOf("-");

  //getting the part of the partCode that is the supplierCode
  let supplierCode = partCode.substring(0, colonPosition);
  let partNumber = partCode.substring(colonPosition + 1, dashPosition);
  let size = partCode.substring(dashPosition + 1);

  let partInformation = {
    supplierCode: supplierCode,
    productNumber: partNumber,
    size: size,
  };
  return partInformation;
}

let partCode1 = "XYZ:1234-L";
let partInformation = parsePartCode(partCode1);
console.log(partInformation);
console.log(generatePartCode(partInformation));
