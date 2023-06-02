import axios from "axios";

axios.defaults.baseURL = 'https://6479ecbfa455e257fa64114e.mockapi.io';

export async function fetchTweets(page = 1) {
  const response = await axios.get(`/users?page=${page}&limit=3`);
  return response.data;
}

export async function updateFollowers(id, followers) {
  const response = await axios.put(`/users/${id}`, followers);
  return response.data;
}