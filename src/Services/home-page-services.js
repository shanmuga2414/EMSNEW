import axios from "axios";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/view.php";
//const homePage = http.get(apiEndpoint);

export async function getActivities() {
  return axios.get("http://emsmedia.net/ems_react/view.php");
  // await axios
  //   .get("http://emsmedia.net/ems_react/view.php")
  //   .then(function (response) {
  //     const res = response.data.records;
  //     console.log(response);
  //     return res;
  //   });
}
export async function getWebchannels() {
  return axios.get("http://emsmedia.net/ems_react/channel.php");
}
