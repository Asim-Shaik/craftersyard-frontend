import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDdmZmUyNDY5NDRhMzljY2M3MGJhNCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDkzNTM4NjAsImV4cCI6MTY0OTYxMzA2MH0.3dvMnCWtve9FY9983qYNc08F_LufoXsByJf50T7uvfs";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
