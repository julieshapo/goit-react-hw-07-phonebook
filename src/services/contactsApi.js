const BASE_URL = 'https://647855a4362560649a2d9138.mockapi.io/api/v1';

export const getContacts = async () => {
  const data = await fetch(`${BASE_URL}/contacts`);
  return data.json();
};

export const addContact = async data => {
  const res = await fetch(`${BASE_URL}/contacts`, {
    body: JSON.stringify(data),
  });

  return res.json();
};

export const deleteContact = async id => {
  const res = await fetch(`${BASE_URL}/contacts/${id}`);
  return await res.json();
};
