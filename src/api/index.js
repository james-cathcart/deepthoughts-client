import axios from "axios";

const API_BASE_URL = 'http://localhost:8080';

const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export function fetchNotes() {
  return client.get('http://localhost:8080/api/v1/note');
}
