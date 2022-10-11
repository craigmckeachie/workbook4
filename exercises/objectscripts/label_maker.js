let contact = {
  name: "Craig McKeachie",
  addressLine1: "302 Vinwood Ln.",
  city: "Powell",
  state: "Ohio",
  zip: 43065,
};

function printContact(myInfo) {
  console.log(myInfo.name);
  console.log(myInfo.addressLine1);
  //   console.log(myInfo.city + ", " + myInfo.state + " " + myInfo.zip);
  console.log(`${myInfo.city}, ${myInfo.state} ${myInfo.zip}`);
}

printContact(contact);
