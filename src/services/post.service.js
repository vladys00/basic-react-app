import { createHttp } from "./base.service";

const authenticatedHttp = createHttp(true);

export const getFeed = () => authenticatedHttp.get("/posts");
export const getImages = () => authenticatedHttp.get("/images");


export const createPost = (post) => authenticatedHttp.post("/posts", post);
