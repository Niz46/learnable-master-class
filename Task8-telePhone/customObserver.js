class CustomObserver {
  notify(phoneNumber) {
    console.log(`Calling Dialed ${phoneNumber}`);
  }
}

module.exports = CustomObserver;