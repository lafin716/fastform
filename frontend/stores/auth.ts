import { defineStore } from "pinia";
import { authApi } from "~~/api/authApi";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    id: "",
    email: "",
    name: "",
    accessToken: "",
    refreshToken: "",
    isAuth: false,
    isAutoLogin: false,
  }),

  actions: {
    async autoLogin(accessToken?: string, refreshToken?: string) {
      if (!accessToken || !refreshToken) {
        return;
      }

      const response = await authApi.verifyToken(accessToken);
      if (response.error.value) {
        return;
      }

      const data: any = response.data.value;
      if (!data.result) {
        return;
      }
      console.log("autologin", data.user);

      this.id = data.user._id;
      this.email = data.user.email;
      this.name = data.user.name;
      this.accessToken = accessToken;
      this.refreshToken = refreshToken;
      this.isAuth = true;
    },

    async login(
      _email: string,
      _password: string,
      _autoLogin: boolean = false
    ) {
      const { $toast } = useNuxtApp();
      if (!_email || !_password) {
        $toast.error("이메일과 비밀번호를 입력해주세요.");
        return;
      }
      const response = await authApi.login(_email, _password);
      if (response.error.value) {
        $toast.error("일시적인 오류 입니다. \n" + response.error.value.message);
        return;
      }

      const data: any = response.data.value;
      if (!data.result) {
        $toast.error(data.message);
        return;
      }

      this.id = data._id;
      this.email = data.email;
      this.name = data.name;
      this.accessToken = data.access_token;
      this.refreshToken = data.refresh_token;
      this.isAutoLogin = _autoLogin;
      this.isAuth = true;

      console.log(data.access_token);

      localStorage.setItem("accessToken", data.access_token);
      localStorage.setItem("refreshToken", data.refresh_token);
    },
  },
});
