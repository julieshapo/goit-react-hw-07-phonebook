const BASE_URL = 'https://647855a4362560649a2d9138.mockapi.io/api/v1';

export const getContacts = async () => {
  const data = await fetch(`${BASE_URL}/contacts`);
  return data.json();
};

// console.log(getContacts());

// const getContacts = async () => {
//   await fetch('https://6474ab4e7de100807b1b81b3.mockapi.io/contacts/contacts')
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error));
// };
