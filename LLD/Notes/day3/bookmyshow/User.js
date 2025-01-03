// user.js

class User {
    constructor(userId, name, email) {
      this.userId = userId;
      this.name = name;
      this.email = email;
    }
  
    getUserDetails() {
      return {
        userId: this.userId,
        name: this.name,
        email: this.email,
      };
    }
  }
  
  export default User;
  