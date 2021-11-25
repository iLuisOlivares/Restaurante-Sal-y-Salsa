class AuthData {
  constructor() {}

  login(val, id) {
    localStorage.setItem("isLogin", val);
    localStorage.setItem("ui", id);
  }
}

export default AuthData;
