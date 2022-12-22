import { QueryClient, QueryClientProvider, useQuery } from "react-query";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
type Comment = {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
};

export const usePosts = () => {
  return useQuery<Post[]>(
    "posts",
    async () =>
      await fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
      )
  );
};

export const usePost = (postId: string) => {
  return useQuery<Post>(
    ["post", postId],
    async () =>
      await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(
        (res) => res.json()
      )
  );
};

export const useComments = (postId: string) => {
  return useQuery<Comment[]>(
    ["comment", postId],
    async () =>
      await fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
      ).then((res) => res.json())
  );
};
