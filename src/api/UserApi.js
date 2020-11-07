export class UserApi {
  /**
   * @static
   * @type {UserApi}
   * @memberof UserApi
   */
  static instance;

  logTag = "[UserApi]";

  get instance() {
    if (UserApi.instance === null) {
      UserApi.instance = new UserApi();
    }

    return UserApi.instance;
  }

  _request(...rest) {
    console.log(this.logTag, "make request", "with params", rest);
    return new Promise((res) => {
      setTimeout(() => {
        console.log(this.logTag, "requset made");
      }, 2.5 * 1000);
    });
  }

  static async fetchUser(userId) {
      return UserApi.instance._request(userId)
  }
}
