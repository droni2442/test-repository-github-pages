import { TUser } from "../types/types";

const usersBaseUrl = "https://jsonplaceholder.typicode.com";

export const api = {
  getUsers: async (): Promise<TUser[]> => {
    const getUsersUrl = `${usersBaseUrl}/users`;

    const response = await fetch(getUsersUrl);

    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }

    return response.json();
  },

  getUser: async (userId: number): Promise<TUser> => {
    const getUserUrl = `${usersBaseUrl}/users/${userId}`;

    const response = await fetch(getUserUrl);

    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }

    return response.json();
  },
};
