const tambahUser = (email, nama, password, divisi, jabatan, tahun_masuk) => {
  return axios
    .post(API_URL + "/api/tambah_user", {
      email, nama, password, divisi, jabatan, tahun_masuk
    })

};

const deleteUser = (id) => {
  return axios.delete(API_URL + `/api/delete_user/${id}`, {withCredentials: true})
};

const editUser = (email, nama, password, divisi, jabatan, tahun_masuk, id) => {
  return axios.put(API_URL + `/api/edit_user/${id}`,
    {email, nama, password, divisi, jabatan, tahun_masuk},
    {withCredentials: true}
  );
}

const ubahPassword = (password, id) => {
  return axios.put(API_URL + `/api/ubah_password/${id}`,
    {password},
    {withCredentials: true}
  );
}

const tambahConfig = (
    jenis_perangkat, nama_customer, nama_perangkat, layanan, vlan_layanan, vlan_nms, ip_address,
    subnet, ip_route, port_perangkat, deskripsi_perangkat, port_trunk, deskripsi_trunk, id_opearator
  ) => {

  return axios
    .post(API_URL + "/api/tambah_config", {
      jenis_perangkat, nama_customer, nama_perangkat, layanan, vlan_layanan, vlan_nms, ip_address,
      subnet, ip_route, port_perangkat, deskripsi_perangkat, port_trunk, deskripsi_trunk, id_opearator
    })

};

const deleteConfig = (id) => {
  return axios.delete(API_URL + `/api/delete_config/${id}`, {withCredentials: true})
};

const editConfig = (
    jenis_perangkat, nama_customer, nama_perangkat, layanan, vlan_layanan, vlan_nms, ip_address,
    subnet, ip_route, port_perangkat, deskripsi_perangkat, port_trunk, deskripsi_trunk,id
  ) => {

  return axios
    .put(API_URL + `/api/edit_config/${id}`, {
      jenis_perangkat, nama_customer, nama_perangkat, layanan, vlan_layanan, vlan_nms, ip_address,
      subnet, ip_route, port_perangkat, deskripsi_perangkat, port_trunk, deskripsi_trunk
    })

};