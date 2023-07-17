import axios from "axios";

import BASE_URL from "../config/APIConfig";
let POSTS_ROUTE = "/posts";
let SINGLE_POST_ROUTE = "/posts/:id";

// Modify the routes to add the BASE_URL
POSTS_ROUTE = `${BASE_URL}${POSTS_ROUTE}`;
SINGLE_POST_ROUTE = `${BASE_URL}${SINGLE_POST_ROUTE}`;

export const getPosts = () => axios.get(POSTS_ROUTE);
export const getPost = (id) => axios.get(`${SINGLE_POST_ROUTE.replace(':id', id)}`);
export const createPost = (newPost) => axios.post(POSTS_ROUTE, newPost);
export const updatePost = (id, updatedPost) =>
  axios.put(`${SINGLE_POST_ROUTE.replace(':id', id)}`, updatedPost);
export const deletePost = (id) => axios.delete(`${SINGLE_POST_ROUTE.replace(':id', id)}`);