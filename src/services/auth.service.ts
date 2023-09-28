import { setToLocalStorage } from "@/utils/local-storeage";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  setToLocalStorage("accessToken", accessToken);
};
