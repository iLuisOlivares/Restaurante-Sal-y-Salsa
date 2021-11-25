class AuthData {
  constructor() {}

  login(val, id) {
    localStorage.setItem("isLogin", val);
    localStorage.setItem("ui", id);
  }

  loginAdmin(val, id) {
    localStorage.setItem("isAdmin", val);
    localStorage.setItem("ui", id);
  }
}

export default AuthData;
