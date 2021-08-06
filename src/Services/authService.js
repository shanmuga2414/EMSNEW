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
  return http.post(`${apiUrl}register.php`, {
    alternateNo: user.alternateNo,
    contactNo: user.contactNo,
    bloodGroup: user.bloodGroup,
    country: user.country,
    state: user.state,
    city: user.city,
    dateOfBirth: user.dateOfBirth,
    dateOfBaiyath: user.dateOfBaiyath,
    email: user.email,
    fatherName: user.fatherName,
    gender: user.gender,
    name: user.name,
    password: user.password,
    permanentAddress: user.permanentAddress,
    presentAddress: user.presentAddress,
    ug: user.ug,
    pg: user.pg,
    qualification: user.qualification,
    yaseeni: user.yaseeni,
    username: user.username,
  });
}

// export default {
//   // login,
//   // getCurrentUser,
//   // logout,
// };
