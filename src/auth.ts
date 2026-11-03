import { CURRENT_MOCK_USER } from "./mockData";

export const mockUser = CURRENT_MOCK_USER;

// Server-side auth helpers
export const auth = async () => {
  return {
    userId: mockUser.id,
  };
};

export const currentUser = async () => {
  return {
    id: mockUser.id,
    username: mockUser.username,
    displayName: mockUser.displayName,
    imageUrl: mockUser.imageUrl || "/general/noAvatar.png",
    emailAddresses: [{ emailAddress: mockUser.email }],
  };
};

// Client-side hooks
export const useUser = () => {
  return {
    isLoaded: true,
    isSignedIn: true,
    user: {
      id: mockUser.id,
      username: mockUser.username,
      displayName: mockUser.displayName,
      imageUrl: mockUser.imageUrl || "/general/noAvatar.png",
      emailAddresses: [{ emailAddress: mockUser.email }],
    },
  };
};

export const useClerk = () => {
  return {
    signOut: async () => {
      console.log("Logged out (mock mode)");
    },
  };
};

