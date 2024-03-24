const Telephone = require("./telePhone");
const PhoneNumberObserver = require("./phoneNumberObserver");
const CustomObserver = require("./customObserver");

function main() {
  const telephone = new Telephone();
  const observer1 = new PhoneNumberObserver();
  const observer2 = new CustomObserver();

  telephone.addObserver(observer1);
  telephone.addObserver(observer2);

  telephone.showMenu();
}

main();
