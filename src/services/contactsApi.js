// const BASE_URL = 'https://647855a4362560649a2d9138.mockapi.io/api/v1';

// export const getContacts = async () => {
//   try {
//     const data = await fetch(`${BASE_URL}/contacts`);
//     return data.json();
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const addContact = async data => {
//   try {
//     const res = await fetch(`${BASE_URL}/contacts`, {
//       method: 'POST',
//       body: JSON.stringify(data),
//     });

//     return res.json();
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const deleteContact = async id => {
//   try {
//     const res = await fetch(`${BASE_URL}/contacts/${id}`);
//     return await res.json();
//   } catch (error) {
//     console.log(error);
//   }
// };
