import axios from 'axios';
import { url } from 'inspector';
const urlwine = 'http://51.20.82.31:2000/wines';
const urlcustomer = 'http://51.20.82.31:2000/customers';

export function GetAllWines() {
  return axios.get(urlwine);
}

export function GetWinesById(id: number) {
  return axios.get(`${urlwine}/${id}`);
}

export function GetWinesByCategory(category: string) {
  return axios.get(`${urlwine}/category/${encodeURIComponent(category)}`);
}

export function AddWineReview(id: string, reviewObj: { clientId: string, clientName: string, comment: string }) {
  return axios.post(`${urlwine}/${id}/review`, reviewObj);
}


export function UploadWineImage(file: File) {
  const formData = new FormData();
  formData.append('image', file);
  return axios.post(`${urlwine}/upload-image`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
}


export function AddWine(wineData: {
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
}) {
  return axios.post(urlwine, wineData);
}

export function DeleteWine(id: string) {
  return axios.delete(`${urlwine}/${id}`);
}

export function CheckCustomer(email: string, password: string) {
  return axios.post(`${urlcustomer}/login`, {
    email,
    password
  });
}

export function AddCustomer(name:string, email: string, password: string) {
  return axios.post(`${urlcustomer}/signUp`, {
    name,
    email,
    password
  });
}

export function updateCustomer(id: string, name: string, email: string, password: string, isAdmin: boolean) {
  return axios.put(`${urlcustomer}/${id}`, {
    id,
    name,
    email,
    password,
    isAdmin
  });

}

export function deleteWineReview(wineId: string, reviewIndex: number) {
  return axios.delete(`${urlwine}/${wineId}/review/${reviewIndex}`);
}