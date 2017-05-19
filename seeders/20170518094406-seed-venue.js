'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Venues', [{
      name: "Viva Futsal",
      location: "Jakarta Selatan",
      address: "Jl. Prof. Dr. Satrio,Jaksel., RT.4/RW.4, Karet Semanggi, Setia Budi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12930",
      contact: "(021) 96600937",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Viva Futsal 2",
      location: "Jakarta Barat",
      address: "Jl. Kemuning Raya, RT.1/RW.11, Cengkareng Bar., Cengkareng, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11730",
      contact: "(021) 34211150",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "de Kings Arena",
      location: "Jakarta Timur",
      address: "Jl. Manunggal XVII, RT.5/RW.5, Lubang Buaya, Cipayung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13810, Indonesia",
      contact: "(021) 8406505",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "NF Mini Soccer",
      location: "Jakarta Selatan",
      address: "Jl. M. Sa No.9A, RT.1/RW.5, Petukangan Sel., Pesanggrahan, DKI Jakarta, Daerah Khusus Ibukota Jakarta 12270, Indonesia",
      contact: "(021) 73888549",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Pro Arena",
      location: "Jakarta Utara",
      address: " Jl. Mangga Besar No.81 Tangki Tamansari Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11170 ",
      contact: "(021) 62361768",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Jakarta Archery Club",
      location: "Jakarta Selatan",
      address: " Jl. Pintu 7 Gelora Bung Karno",
      contact: "(021) 72631612",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Lapangan Tenis Bintaro Sektor 1",
      location: "Jakarta Selatan",
      address: "Jalan Bintaro Taman Barat, RT.14/RW.8, Bintaro, Pesanggrahan, RT.4/RW.8, Bintaro, Pesanggrahan, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12330, Indonesia",
      contact: "(021) 82781176",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Fath Archery Jakarta",
      location: "Jakarta Selatan",
      address: "Jl. Kebagusan Raya RT.9/RW.7, Ragunan, Pasar Minggu, South Jakarta City, Jakarta 12550",
      contact: "08568771313",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Amped - Trampoline Park",
      location: "Jakarta Utara",
      address: "Jalan Kirana Avenue No.88, Kelapa Gading, Klp. Gading Bar., Klp. Gading, Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14240, Indonesia",
      contact: "(021) 18923812",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Lapangan Tenis Pondok Indah",
      location: "Jakarta Selatan",
      address: "Jalan Sekolah Duta V (Jalan Sekolah Duta Raya)",
      contact: "(021) 28177128",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Lapangan Tenis Hijau Arkadia",
      location: "Jakarta Selatan",
      address: "Perkantoran Hijau Arkadia Kav. 88 Jalan T. B. Simatupang, RT 1/RW 2 Kebagusan, Pasar Minggu",
      contact: "(021) 46572632",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Lapangan Tenis RSPAU Halim",
      location: "Jakarta Timur",
      address: "Halim Perdanakusuma (Belakang RSPAU)",
      contact: "(021) 51998201",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Lapangan Tenis Brata Bakti",
      location: "Jakarta Selatan",
      address: "Jl. Patiunus Blok F4, Kebayoran Baru",
      contact: "(021) 51998201",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Lapangan Tenis The Sultan Hotel Jakarta",
      location: "Jakarta Pusat",
      address: "Jalan Gatot Subroto",
      contact: "(021) 5703600",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Patiunus Court Yard",
      location: "Jakarta Selatan",
      address: "Jl. Pati Unus F4, RT.3/RW.8, Gunung, Kby. Baru",
      contact: "(021) 7392300",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Pejaten Futsal",
      location: "Jakarta Selatan",
      address: "Jalan Pejaten Raya, RT.8/RW.8, Pejaten Bar., Ps. Minggu, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12510",
      contact: "(021) 71790176",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Gelanggang Remaja Kecamatan Cempaka Putih",
      location: "Jakarta Pusat",
      address: "Jl. Cempaka Putih Tengah 31",
      contact: "(021) 4240057",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Venues', null, {})
  }
};
