import axios from "axios";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/view.php";
//const homePage = http.get(apiEndpoint);

export async function getActivities() {
  return axios.get("https://emsmedia.net/ems_react/view.php");
  // await axios
  //   .get("http://emsmedia.net/ems_react/view.php")
  //   .then(function (response) {
  //     const res = response.data.records;
  //     console.log(response);
  //     return res;
  //   });
}
export async function getWebchannels() {
  return axios.get("https://emsmedia.net/ems_react/channel.php");
}

export async function getBooks() {
  return axios.get("https://emsmedia.net/ems_react/book.php");
}

export async function getAllBooks() {
  return axios.get("https://emsmedia.net/ems_react/books_detail.php");
}
export async function getAlbums() {
  return axios.get("https://emsmedia.net/ems_react/gallery.php");
}

export async function getAllvideos() {
  return axios.get("https://emsmedia.net/ems_react/videos.php");
}
export async function getAlbumImages() {
  return axios.get("https://emsmedia.net/ems_react/book_images.php");
}

export async function getAllEvents() {
  return axios.get("https://emsmedia.net/ems_react/news_event.php");
}

export async function getAllAudios() {
  return axios.get("https://emsmedia.net/ems_react/audio.php");
}

export async function getAudioCategory() {
  return axios.get("https://emsmedia.net/ems_react/audio_category.php");
}

export async function getVideoCategory() {
  return axios.get("https://emsmedia.net/ems_react/video_category.php");
}

export async function getBookCategories() {
  return axios.get("https://emsmedia.net/ems_react/book_category.php");
}

export async function getWebTvVideos() {
  return axios.get("https://emsmedia.net/ems_react/web-tv.php");
}

export async function getMenu() {
  return axios.get("http://emsmedia.net/ems_react/menu.php");
}
