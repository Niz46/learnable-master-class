
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Sneaker {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}

const sneakerMenu = [
  new Sneaker('Adidas Ultraboost', 150, 10),
  new Sneaker('Nike Air Max', 120, 8),
  new Sneaker('Puma RS-X', 100, 12),
  new Sneaker('New Balance 990', 130,  15),
  new Sneaker('Reebok Classic Leather', 90,  7),
  new Sneaker('Converse Chuck Taylor', 60,  20),
  new Sneaker('Vans Old Skool', 70,  18)
];

console.log('========================= Welcome to Favs Sneakers Store! ============================');
console.log('================================================================================');
console.log(`------------------------- Sneaker Menu ------------------------`);
console.log(`Sneaker                   Price            Quantity`);
console.log(`--------------------------------------------------------`);
sneakerMenu.forEach((sneaker, index) => {
  console.log(`${index + 1}. ${sneaker.name.padEnd(25)} $${sneaker.price}          ${sneaker.quantity}`);
});
console.log('--------------------------------------------------------');
console.log('================================================================================');
console.log('========================= What Sneaker Do you Want to Order Today?? ===============');

let total = 0;
const orderHistory = [];

function processOrder(choice) {
  const selectedSneaker = sneakerMenu[choice - 1];
  if (selectedSneaker.quantity > 0) {
    console.log(`You have selected ${selectedSneaker.name}`);
    rl.question('Enter the desired Quantity: ', (quantity) => {
      const itemTotal = quantity * selectedSneaker.price;
      total += itemTotal;
      selectedSneaker.quantity -= quantity;
      orderHistory.push({ name: selectedSneaker.name, quantity, total: itemTotal });
      console.log(`Your total bill is: $${total}`);
      askToContinueShopping();
    });
  } else {
    console.log(`Sorry, ${selectedSneaker.name} is out of stock. Please choose another sneaker.`);
    setTimeout(() => {
      displaySneakerMenu();
      rl.question('Enter Your Choice: ', handleUserInput);
    }, 2000); // 2000 milliseconds delay
  }
}

function askToContinueShopping() {
  rl.question('Do you want to order another sneaker? (yes/no): ', (answer) => {
    if (answer.toLowerCase() === 'yes') {
      setTimeout(() => {
        process.stdout.clearLine(); // Clear the current line
        process.stdout.cursorTo(0); // Move the cursor to the beginning of the line
        displaySneakerMenu();
        console.log('========================= What Sneaker Do you Want to Order Today?? ===============');
        rl.question('Enter Your Choice: ', handleUserInput);
      }, 2000); // 2000 milliseconds delay
    } else {
      console.log(`Thank you for shopping with us!`);
      if (total > 0) {
        console.log(`Please proceed to payment. Your total bill is: $${total}. Pay to My Account Favour Nzeh \n Bank Number: 7047872574 \n Bank Name: Opay`);
        console.log(`Order History:`);
        orderHistory.forEach((item) => {
          console.log(`${item.quantity} ${item.name}(s) - $${item.total}`);
        });
      } else {
        console.log(`You haven't ordered anything. Have a great day!`);
      }
      rl.close();
    }
  });
}

function displaySneakerMenu() {
  console.log(`------------------------- Sneaker Menu ------------------------`);
  console.log(`Sneaker                   Price          Quantity`);
  console.log(`--------------------------------------------------------`);
  sneakerMenu.forEach((sneaker, index) => {
    console.log(`${index + 1}. ${sneaker.name.padEnd(25)} $${sneaker.price}          ${sneaker.quantity}`);
  });
  console.log('--------------------------------------------------------');
}

function handleUserInput(choice) {
  const numericChoice = parseInt(choice);
  if (!isNaN(numericChoice) && numericChoice >= 1 && numericChoice <= sneakerMenu.length) {
    processOrder(numericChoice);
  } else {
    console.log('Invalid Choice');
    askToContinueShopping();
  }
}

rl.question('Enter Your Choice: ', handleUserInput);
