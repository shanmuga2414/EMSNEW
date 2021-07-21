import http from "./httpService";
import { apiUrl } from "../config.json";

// const apiEndpoint = apiUrl + "/contact.php";
// const contact = http.get(apiEndpoint);

export function saveContact(user) {
  // console.log("User services log:", data);
  return http.post("http://emsmedia.net/ems_react/contact.php", {
    name: user.name,
    phone: user.phone,
    email: user.email,
    msg: user.msg,
    topic: user.topic,
    // date: user.password,
  });
}
