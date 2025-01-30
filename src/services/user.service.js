import { createHttp } from "./base.service";

const http = createHttp();

export const getUsers = () => http.get("/users");

export const createUser = (user) => http.post("/users", user);

export const updateUser = (id, user) => http.patch(`/users/${id}`, user);

export const getUser = (id) => http.get(`/users/${id}`);
