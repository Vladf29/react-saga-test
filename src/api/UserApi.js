export class UserApi {
  /**
   * @static
   * @type {UserApi}
   * @memberof UserApi
   */
  static _instance;

  logTag = "[UserApi]";

  /**
   * @readonly
   * @static
   * @memberof UserApi
   * @return {UserApi}
   */
  static get instance() {
    if (UserApi._instance == null) UserApi._instance = new UserApi();

    return UserApi._instance;
  }

  _request(...rest) {
    console.log(this.logTag, "make request", "with params", rest);
    return new Promise((res) => {
      setTimeout(() => {
        console.log(this.logTag, "requset made");
        res({'message':"some data"});
      }, 2.5 * 1000);
    });
  }

  static async fetchUser(userId) {
    return UserApi.instance._request(userId);
  }
}
