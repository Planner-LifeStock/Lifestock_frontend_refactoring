import axios from 'axios';

// 토큰을 localStorage에 저장
localStorage.setItem("accessToken", "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdHJpbmciLCJ1c2VySWQiOjEzOSwicm9sZSI6IlVTRVIiLCJpYXQiOjE3MzAxMTk0NTgsImV4cCI6NTMzMDExOTQ1OH0.OSSVC8Ww67g4JT5bE2AwZY-e9whva1vqvmzZNu2LVm8");

// 저장된 토큰을 가져와 Authorization 헤더에 포함
const accessToken = localStorage.getItem("accessToken");

export const API = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    Authorization: `Bearer ${accessToken}`
  }
});