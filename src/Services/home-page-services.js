import axios from "axios";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/view.php";
//const homePage = http.get(apiEndpoint);

export async function getActivities() {
  await axios
    .get("http:emsmedia.net/ems_react/view.php")
    .then(function (response) {
      // handle success
      console.log(response);
      console.log("sdfsdfsdf");
      console.log("sdkfhsdkfj");
    });
}
