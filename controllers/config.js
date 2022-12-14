const { Config } = require('../models');

module.exports = {
  //-------------------------------------------Admin---------------------------

  tambah: (req, res) => {
    Config.tambah(req.body)
      .then((config) => res.json(config))
      .catch((err) => res.json(err));
  },

  hapus: (req, res) => {
    Config.destroy({ where: { id: req.params.id } })
      .then(() => res.json({ msg: 'Berhasil hapus' }))
      .catch((err) => res.json(err));
  },

  ubah: (req, res) => {
    Config.edit(req.body, req.params.id)
    .then(()=> res.json({ msg: 'Update berhasil' }) )
    .catch((err) => console.log(err) )
  },

  download_config: (req, res) => {
    Config.findByPk(req.params.id)
    .then((config)=> {
      let h3c = 
`system-view

sysname ${config.nama_perangkat}

line vty 0 4
authentication-mode scheme
user-role network-admin
user-role network-operato 
quit

${config.vlan_nms}
name NMS
quit

vlan ${config.vlan_layanan}
name ${config.layanan}
quit

interface Vlan-interface13
ip address ${config.ip_address} ${config.subnet}
quit

ip route-static 0.0.0.0 0.0.0.0 ${config.ip_route}

interface ${config.port_perangkat}
description ${config.deskripsi_perangkat}
port link-type access
port access vlan 3529
quit

interface ${config.port_trunk}
description Trunk To SBT-${config.deskripsi_trunk}
port link-type trunk
port trunk permit vlan 13 3529
quit

local-user j2m class manage
password simple multimedia123
service-type telnet
authorization-attribute user-role network-admin
authorization-attribute user-role network-operator
quit
 
telnet server enable 

save

undo stp global enable

save`;

let bdcom = 
`enable

config

vlan 13
name NMS
quit

vlan 2807
name ${config.layanan}
quit

interface GigaEthernet0/9
description trunk to SBT-GI.PADANG.PANJANG-ZYXEL.MGS3520-CPE-01
switchport trunk vlan-allowed 13,2807
switchport mode trunk
quit

interface GigaEthernet0/1
description 04000191057 IBBC Diskominfo Kota Padang Panjang SMPN 5 Padang Panjang,Jl. Raya Solok - Padang
switchport mode access
switchport pvid 2807
quit 

interface vlan 13
ip address 172.28.165.73  255.255.255.224
quit

ip route default 172.28.165.65

username j2m password multimedia
service password-encryption

ddm enable

hostname ${config.nama_perangkat}

Line vty 0 4
login authentication default
login authorization default
quit


quit

wr
wr

`

      res.attachment(`${config.nama_customer}.py`);
      res.type('py');
      if(config.jenis_perangkat === "H3C"){
       res.send(h3c); 
      }
      else if (config.jenis_perangkat === "BDCOM"){
        res.send(bdcom); 
      }
      
    })
    .catch((err) => console.log(err) )
  }

};
