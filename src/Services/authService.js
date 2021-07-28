// import jwtDecode from "jwt-decode";
import http from "./httpService";
import { apiUrl } from "../config.json";

// const apiEndpoint = apiUrl + "/auth";
// const tokenKey = "token";

// export async function login(email, password) {
//   const { data: jwt } = await http.post(apiEndpoint, { email, password });
//   localStorage.setItem(tokenKey, jwt);
// }

// export function getCurrentUser() {
//   try {
//     const jwt = localStorage.getItem(tokenKey);
//     return jwtDecode(jwt);
//   } catch (ex) {
//     return null;
//   }
// }

// export function logout() {
//   localStorage.removeItem(tokenKey);
// }
export function saveUser(user) {
  // console.log("User services log:", data);
  return http.post("https://emsmedia.net/ems_react/register.php", {
    data: user,
  });
}

// export default {
//   // login,
//   // getCurrentUser,
//   // logout,
// };
