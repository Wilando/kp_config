const API_URL = "http://localhost:8000";

const login = (email, password) => {
  return axios
    .post(API_URL + "/api/login", {
      email,
      password,
    })

};

const logout = () => {
  return axios.get(API_URL + "/api/logout", {withCredentials: true})
};


