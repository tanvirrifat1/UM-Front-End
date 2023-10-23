import { authKey } from "@/Constants/storageKey";
import { getToLocalStorage, setToLocalStorage } from "@/utils/local-storeage";
import jwtDecode from "jwt-decode";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage(authKey, accessToken);
};

export const getUserInfo = () => {
  const authToken = getToLocalStorage(authKey);

  if (authToken) {
    const decodedToken = jwtDecode(authToken as string);

    return decodedToken;
  } else {
    return "";
  }
};

export const isLoggedIn = () => {
  const authToken = getToLocalStorage(authKey);
  return !!authToken;
};

export const removeUserInfo = (key: string) => {
  return localStorage.removeItem(key);
};
