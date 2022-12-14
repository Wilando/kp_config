  // ----------------
  $("#cekNamaCustomer").hide();
  let namaCustomerError = true;
  $("#namaCustomer").keyup(function () {
    validateNamaCustomer();
  });
 
  function validateNamaCustomer() {

    if ($("#namaCustomer").val().length == "") {
      $("#cekNamaCustomer").show();
      $("#namaCustomer").addClass("is-invalid");
      namaCustomerError = true;
      
    } else {
      $("#namaCustomer").removeClass("is-invalid");
      $("#cekNamaCustomer").hide();
      namaCustomerError = false;
    }
  }

  // ----------------
  $("#cekSubnet").hide();
  let subnetError = true;
  $("#subnet").keyup(function () {
    validateSubnet();
  });
 
  function validateSubnet() {

    if ($("#subnet").val().length == "") {
      $("#cekSubnet").show();
      $("#subnet").addClass("is-invalid");
      subnetError = true;
      
    } else {
      $("#subnet").removeClass("is-invalid");
      $("#cekSubnet").hide();
      subnetError = false;
    }
  }

  // ----------------
  $("#cekNamaPerangkat").hide();
  let namaPerangkatError = true;
  $("#namaPerangkat").keyup(function () {
    validateCekNamaPerangkat();
  });
 
  function validateCekNamaPerangkat() {

    if ($("#namaPerangkat").val().length == "") {
      $("#cekNamaPerangkat").show();
      $("#namaPerangkat").addClass("is-invalid");
      namaPerangkatError = true;
      
    } else {
      $("#namaPerangkat").removeClass("is-invalid");
      $("#cekNamaPerangkat").hide();
      namaPerangkatError = false;
    }
  }

  // ----------------
  $("#cekIpRoute").hide();
  let ipRouteError = true;
  $("#ipRoute").keyup(function () {
    validateIpRoute();
  });
 
  function validateIpRoute() {

    if ($("#ipRoute").val().length == "") {
      $("#cekIpRoute").show();
      $("#ipRoute").addClass("is-invalid");
      ipRouteError = true;
      
    } else {
      $("#ipRoute").removeClass("is-invalid");
      $("#cekIpRoute").hide();
      ipRouteError = false;
    }
  }

  // ----------------
  $("#cekLayanan").hide();
  let layananError = true;
  $("#layanan").keyup(function () {
    validateLayanan();
  });
 
  function validateLayanan() {

    if ($("#layanan").val().length == "") {
      $("#cekLayanan").show();
      $("#layanan").addClass("is-invalid");
      layananError = true;
      
    } else {
      $("#layanan").removeClass("is-invalid");
      $("#cekLayanan").hide();
      layananError = false;
    }
  }

  // ----------------
  $("#cekPortPerangkat").hide();
  let portPerangkatError = true;
  $("#portPerangkat").keyup(function () {
    validatePortPerangkat();
  });
 
  function validatePortPerangkat() {

    if ($("#portPerangkat").val().length == "") {
      $("#cekPortPerangkat").show();
      $("#portPerangkat").addClass("is-invalid");
      portPerangkatError = true;
      
    } else {
      $("#portPerangkat").removeClass("is-invalid");
      $("#cekPortPerangkat").hide();
      portPerangkatError = false;
    }
  }

  // ----------------
  $("#cekVlanLayanan").hide();
  let vlanLayananError = true;
  $("#vlanLayanan").keyup(function () {
    validateVlanLayanan();
  });
 
  function validateVlanLayanan() {

    if ($("#vlanLayanan").val().length == "") {
      $("#cekVlanLayanan").show();
      $("#vlanLayanan").addClass("is-invalid");
      vlanLayananError = true;
      
    } else {
      $("#vlanLayanan").removeClass("is-invalid");
      $("#cekVlanLayanan").hide();
      vlanLayananError = false;
    }
  }

  // ----------------
  $("#cekVlanNms").hide();
  let vlanNmsError = true;
  $("#vlanNms").keyup(function () {
    validateVlanNms();
  });
 
  function validateVlanNms() {

    if ($("#vlanNms").val().length == "") {
      $("#cekVlanNms").show();
      $("#vlanNms").addClass("is-invalid");
      vlanNmsError = true;
      
    } else {
      $("#vlanNms").removeClass("is-invalid");
      $("#cekVlanNms").hide();
      vlanNmsError = false;
    }
  }

  // ----------------
  $("#cekPortTrunk").hide();
  let portTrunkError = true;
  $("#portTrunk").keyup(function () {
    validatePortTrunk();
  });
 
  function validatePortTrunk() {

    if ($("#portTrunk").val().length == "") {
      $("#cekPortTrunk").show();
      $("#portTrunk").addClass("is-invalid");
      portTrunkError = true;
      
    } else {
      $("#portTrunk").removeClass("is-invalid");
      $("#cekPortTrunk").hide();
      portTrunkError = false;
    }
  }

  // ----------------
  $("#cekIpAddress").hide();
  let ipAddressError = true;
  $("#ipAddress").keyup(function () {
    validateIpAddress();
  });
 
  function validateIpAddress() {

    if ($("#ipAddress").val().length == "") {
      $("#cekIpAddress").show();
      $("#ipAddress").addClass("is-invalid");
      ipAddressError = true;
      
    } else {
      $("#ipAddress").removeClass("is-invalid");
      $("#cekIpAddress").hide();
      ipAddressError = false;
    }
  }

  // ----------------
  $("#cekJenisPerangkat").hide();
  let jenis_perangkatError = true;
  $("#jenis_perangkat").blur(function () {
    validatejenis_perangkat();
  });
 
  function validatejenis_perangkat() {

    if ($("#jenis_perangkat").val().length == "") {
      $("#cekJenisPerangkat").show();
      $("#jenis_perangkat").addClass("is-invalid");
      jenis_perangkatError = true;
      
    } else {
      $("#jenis_perangkat").removeClass("is-invalid");
      $("#cekJenisPerangkat").hide();
      jenis_perangkatError = false;
    }
  }