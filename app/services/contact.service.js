const { ObjectId } = require("mongodb");

class ContactService {
  constructor(client) {
    this.Contact = client.db().collection("contacts");
  }
  //   Định nghĩa các phương thức truy xuất database sử dụng mongodb API
}

module.exports = ContactService;
