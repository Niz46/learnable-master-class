const readline = require("readline");

class Telephone {
  constructor() {
    this.phoneNumbers = new Set();
    this.observers = [];
  }

  addPhoneNumber(phoneNumber) {
    this.phoneNumbers.add(phoneNumber);
  }

  removePhoneNumber(phoneNumber) {
    this.phoneNumbers.delete(phoneNumber);
  }

  dialPhoneNumber(phoneNumber, rl) {
    if (this.phoneNumbers.has(phoneNumber)) {
      this.showDialingAnimation(phoneNumber);
      this.notifyObservers(phoneNumber);
      setTimeout(() => {
        console.clear();
        console.log("\nHello Pls Who Am I Speaking With");
        console.log(`\nTone Tone!!! Call With ${phoneNumber} Ended`);
        rl.close();
        this.showMenu();
      }, 4000);
    } else {
      console.log(`Phone number ${phoneNumber} not found.`);
      this.showMenu();
    }
  }
  

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(phoneNumber) {
    for (const observer of this.observers) {
      observer.notify(phoneNumber);
    }
  }

  showMenu() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    console.log(
      `\n╔════════════════════════════════════════════════════════════╗`
    );
    console.log(
      `║                   Welcome to Telephone Menu                ║`
    );
    console.log(
      `╠════════════════════════════════════════════════════════════╣`
    );
    console.log(
      `║ 1. Add Phone Number                                        ║`
    );
    console.log(
      `║ 2. Remove Phone Number                                     ║`
    );
    console.log(
      `║ 3. Dial Phone Number                                       ║`
    );
    console.log(
      `║ 4. Display Numbers                                         ║`
    );
    console.log(
      `║ 5. Exit                                                    ║`
    );
    console.log(
      `╚════════════════════════════════════════════════════════════╝`
    );

    rl.question("\nPlease enter your name: ", (name) => {
      console.log(`\nWelcome, ${name}!`);
      rl.setPrompt("\nEnter your choice: ");
      rl.prompt();

      rl.on("line", (choice) => {
        switch (choice.trim()) {
          case "1":
            rl.question(
              "\nEnter the phone number to add: ",
              (phoneNumberToAdd) => {
                this.addPhoneNumber(phoneNumberToAdd);
                console.log(`Phone number ${phoneNumberToAdd} added.`);
                rl.prompt();
              }
            );
            break;
          case "2":
            rl.question(
              "\nEnter the phone number to remove: ",
              (phoneNumberToRemove) => {
                this.removePhoneNumber(phoneNumberToRemove);
                console.log(`Phone number ${phoneNumberToRemove} removed.`);
                rl.prompt();
              }
            );
            break;
          case "3":
            rl.question(
              "\nEnter the phone number to dial: ",
              (phoneNumberToDial) => {
                this.dialPhoneNumber(phoneNumberToDial, rl);
              }
            );
            break;
          case "4":
            this.displayPhoneNumberList();
            rl.prompt();
            break;
          case "5":
            console.log("\nExiting. Goodbye!");
            rl.close();
            break;
          default:
            console.log("\nInvalid choice. Please select a valid option.");
            rl.prompt();
        }
      });
    });
  }

  displayPhoneNumberList() {
    console.log("\nPhone Numbers:");
    console.log("╔═══════════════════════════════╗");
    if (this.phoneNumbers.size === 0) {
      console.log("No phone numbers added.");
    } else {
      let index = 1;
      const maxLength = Math.max(
        ...Array.from(this.phoneNumbers).map(
          (phoneNumber) => phoneNumber.length
        )
      );
      this.phoneNumbers.forEach((phoneNumber) => {
        const padding = " ".repeat(maxLength - phoneNumber.length);
        console.log(`[${index}] ${phoneNumber}${padding}`);
        index++;
      });
      console.log("╚═══════════════════════════════╝");
    }
  }

  showDialingAnimation(phoneNumber) {
    console.log(`\nCalling ${phoneNumber}...`);
    const dots = [".", "..", "..."];
    let i = 0;
    const intervalId = setInterval(() => {
      process.stdout.write(`\r${dots[i]}`);
      i = (i + 1) % dots.length;
    }, 1000);

    setTimeout(() => {
      clearInterval(intervalId);
    }, 4000);
  }
}

module.exports = Telephone;
