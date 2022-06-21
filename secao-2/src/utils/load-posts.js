import React from "react";

export const loadPosts = async () => {
  const urlPosts = "https://jsonplaceholder.typicode.com/posts";
  const urlPhotos = "https://jsonplaceholder.typicode.com/photos";
  const postsResponse = fetch(urlPosts);
  const photosResponse = fetch(urlPhotos);

  const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

  const postsJson = await posts.json();
  const photosJson = await photos.json();

  // unindo dois arrays
  const postsAndPhotos = postsJson.map((post, index) => {
    return { ...post, cover: photosJson[index].url };
  });

  return postsAndPhotos;
};
