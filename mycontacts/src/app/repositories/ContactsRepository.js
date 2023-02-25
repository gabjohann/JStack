const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Lucas Johann',
    email: 'lucasjohann.dev@gmail.com',
    phone: '998250020',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve, reject) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactsRepository();
