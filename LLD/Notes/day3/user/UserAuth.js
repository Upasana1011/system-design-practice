// userAuth.js

// Class handling user authentication
class UserAuth {
    constructor(isAuthorized = false) {
      this.isAuthorized = isAuthorized;
    }
  
    authorize() {
      return this.isAuthorized;
    }
  }
  
  export default UserAuth;
  