"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Tab User + method add, delete, authentification.
var UserList = /** @class */ (function () {
    function UserList() {
        this.user = [];
    }
    //On ajoute un utilisateur.
    UserList.prototype.add = function (userName) {
        this.user.push(userName);
    };
    //On cherche(boucle,condition si = et supprime si ok ou null)
    UserList.prototype.del = function (userName) {
        for (var i = 0; i < this.user.length; i++) {
            if (this.user[i].name === userName) {
                this.user.slice(i, 1);
            }
        }
    };
    //Boucle des argums de id et du pwd 
    UserList.prototype.auth = function (name, password) {
        for (var _i = 0, _a = this.user; _i < _a.length; _i++) {
            var nombre = _a[_i];
            if (nombre.name == name && nombre.getpassword() == password) {
                return nombre; //return number & i want return string.
            }
        }
        //Sinon retourne moi null.
        return null;
    };
    return UserList;
}());
exports.UserList = UserList;
//# sourceMappingURL=userList.js.map