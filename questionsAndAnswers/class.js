class BaseController {
    constructor(options = {baseURL: "https://jsonplaceholder.typicode.com"}) {
        this.baseURL = options.baseURL;
    }
}

class UserController extends BaseController {
    _GET_USER_PATH = "/users";
    _GET_USER_BY_PATH = (id) => `/users/${id}`;

    constructor(options) {
        super(options);
    }

    fetchById(id) {
        return fetch(`${this.baseURL}${this._GET_USER_BY_PATH(id)}`)
        .then(res => res.json());
    }
}

const userController = new UserController();
const user = await userController.fetchById(12);