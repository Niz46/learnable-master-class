class PhoneNumberObserver {
  notify(phoneNumber) {
    console.log(`Phone number dialed: ${phoneNumber}`);
  }
}

module.exports = PhoneNumberObserver;