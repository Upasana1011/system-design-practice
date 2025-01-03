// userSetting.js

import UserAuth from './userAuth';

// Class for managing user settings
class UserSetting {
  constructor(user, userAuth) {
    this.user = user;
    this.userAuth = userAuth;
  }

  changeSettings(newSettings) {
    if (this.userAuth.authorize()) {
      // Logic to apply user settings
      console.log(`Settings updated for user: ${this.user.name}`);
      // Example: Object.assign(this.user, newSettings);
    } else {
      console.log('Authorization failed. Cannot change settings.');
    }
  }

  displaySettings() {
    console.log(`Current settings for ${this.user.name}:`);
    console.log(this.user);
  }
}

export default UserSetting;

// Example usage in a separate file
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

const user = new User('John Doe', 'john.doe@example.com');
const userAuth = new UserAuth(true); // Set to true to simulate successful authorization
const userSetting = new UserSetting(user, userAuth);

userSetting.displaySettings();
userSetting.changeSettings({ email: 'new.email@example.com' });
