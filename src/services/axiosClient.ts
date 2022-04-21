import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
const postUtil = (url:string, data:{} | null) => axios.post(url, data);

const putUtil = (url:string, data:{} | null) =>
  axios({
    method: "put",
    url,
    data,
  });

const patchUtil = (url:string, data:{} | null) =>
  axios({
    method: "patch",
    url,
    data,
  });

const getUtil = (url:string, data?:{} | null) => axios.get(url, { params: data });

const deleteUtil = (url:string, data:{} | null) => axios.delete(url, { params: data });

export { postUtil, getUtil, putUtil, patchUtil, deleteUtil };