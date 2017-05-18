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
    return queryInterface.bulkInsert('Sports', [{
      id: 1,
      venue_id: 1,
      name: "Futsal",
      img: "http://2.bp.blogspot.com/-em-YjCnRo34/UZKL9nzWV7I/AAAAAAAAADE/BPu2JpBx6g0/s640/lapangan+futsal.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      venue_id: 2,
      name: "Futsal",
      img: "http://richarder.web.unej.ac.id/wp-content/uploads/sites/537/2015/06/lapangan_futsal11.jpeg",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      venue_id: 3,
      name: "Futsal",
      img: "http://hargalapanganfutsal.com/wp-content/uploads/2013/05/Yanitra-Futsal-Sukodono-resize-1.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 4,
      venue_id: 4,
      name: "Basketball",
      img: "https://nicepromise.files.wordpress.com/2012/08/lapagan-basket.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 5,
      venue_id: 5,
      name: "Futsal",
      img: "http://4.bp.blogspot.com/-CMqf9LjWAuw/VYaDpdpcL3I/AAAAAAAAAss/zgZpAaZRqeE/s1600/Sewa%2BLapangan%2BFutsal.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 6,
      venue_id: 5,
      name: "Mini Soccer",
      img: "https://media-cdn.tripadvisor.com/media/photo-s/05/22/b7/13/negroponte-resort-eretria.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 7,
      venue_id: 6,
      name: "Archery",
      img: "http://www.jakartaarchery.club/utama/wp-content/uploads/2016/05/10tahunJAC_hari_ke_1.png",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 8,
      venue_id: 7,
      name: "Tennis",
      img: "https://prasso.files.wordpress.com/2007/12/indexgrasscourt400x300.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 9,
      venue_id: 8,
      name: "Archery",
      img: "http://a.okezone.com/photos/2016/09/16/28626/175941_large.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 10,
      venue_id: 9,
      name: "Trampoline",
      img: "http://www.altituderochester.com/userfiles/images/IMG_2922.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 11,
      venue_id: 10,
      name: "Tennis",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStZ8csG-UJ44Qyoz2GaT43HPOMKQGSgUGr2M0CbIpvp-YO_-Z-Jw",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 12,
      venue_id: 11,
      name: "Tennis",
      img: "https://3.bp.blogspot.com/-3B-K_npqVhw/V8qjXOJqqMI/AAAAAAAAALA/ZFhf2uPDb549gAbkBFafAH6eehBl3hwHwCLcB/s1600/IMG-20160807-WA0008.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 13,
      venue_id: 12,
      name: "Tennis",
      img: "http://3.bp.blogspot.com/-m5JM8pQDNhQ/VhIz_crxhOI/AAAAAAAAA7k/KslrKlrrSK8/s1600/20141114_085730.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 14,
      venue_id: 13,
      name: "Tennis",
      img: "http://i944.photobucket.com/albums/ad283/puridepokmas/LapanganTenisPuriDepokMas.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 15,
      venue_id: 14,
      name: "Tennis",
      img: "https://3.bp.blogspot.com/-edR1-p2xyL4/VujjIUuEZ8I/AAAAAAAAAFQ/rXxCAmU8qrY7R_e14RqW-Bv0gKWvfQgNg/s1600/1.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 16,
      venue_id: 15,
      name: "Futsal",
      img: "http://www.texmura.com/images/foto/futsal/album32/2.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 17,
      venue_id: 15,
      name: "Basketball",
      img: "http://4.bp.blogspot.com/-tpd3eBGgFYc/VcBbX3mBMcI/AAAAAAAAAAk/LRtsqJ6lxpA/s640/jasa%252Bpengecatan%252Blapangan%252Bbasket.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 18,
      venue_id: 16,
      name: "Futsal",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqIuc0Yk2kVeCOwdX7PhXcgicXUJhNbDxT5nAD0-quYte3ssZxJA",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 19,
      venue_id: 17,
      name: "Volleyball",
      img: "http://1.bp.blogspot.com/-mNKWukU-iEg/VjleBKPpAjI/AAAAAAAAAhg/TBScoJgyU5c/s1600/net%2Bindor.JPG",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 20,
      venue_id: 17,
      name: "Badminton",
      img: "https://adefahrizal24.files.wordpress.com/2013/01/badminton-court.jpg",
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
  }
};
