import axios from 'axios';

const baseUrl = 'https://localhost:44396/api/users';

const GetUsersById = (id) => new Promise((resolve, reject) => {
  axios.get(baseUrl)
  .then((res) => {
    resolve(res.data)
  })
  .catch(err => reject(err));
});

const postNewUser = newPet => {
  return axios.post(`${baseUrl}`, newPet)
}

const getByEmail = (email) => {
  // const encodedEmail = encodeURIComponent(petEmail);
  return axios.get(`${baseUrl}/email/${email}`)
}

const states = [
  'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT',
  'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 
  'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 
  'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 
  'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 
  'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN',
  'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 
  'WY'];

  export default {
    states,
    GetUsersById,
    postNewUser,
    getByEmail
  }