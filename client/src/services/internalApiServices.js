import axios from 'axios';

import Constants from "expo-constants";

const { manifest } = Constants;

const uri = `http://${manifest.debuggerHost.split(':').shift()}:8000/api`;

const http = axios.create({
	// baseURL: "https://10.0.2.2:8000/api",
    baseURL: uri
    // baseURL: "http://localhost:8000/api",
	// withCredentials: true,
});

export const test = async () => {
    console.log(uri);
    try {
        const res = await http.get('/test')
        return res.data;
    } catch (error) {
        console.log(error);
    }
}


// export const test = async () => {
//     axios({
//         method: "get",
//         url: "http://localhost:8000/api/test"
//     })
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
// }
