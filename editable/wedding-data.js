/**
 * wedding-data.js — Customer-facing editable data layer for marigold-bhavan
 * Edit this file to update couple names, wedding dates, event details, venue, and images.
 */

window.WEDDING_DATA = {
  couple: {
    groom: "Aman",
    bride: "Priti",
  },

  wedding: {
    eventTitle: "Wedding of Aman & Priti",
    dateLabel: "25.11.26",
    dayLine: "Wednesday, 25th November 2026",
    timeLine: "8:00 PM onwards",
    // start and end are ISO local time strings (drives countdown and calendar invites)
    start: "2026-11-25T20:00:00",
    end: "2026-11-25T23:59:00",
    timeZoneOffset: "+05:30",
  },

  invitation: {
    note: "Together with their families, Aman & Priti invite you to share in the joy of their wedding celebration — an evening of blessings, laughter and good food.",
    closing: "See you there",
  },

  venue: {
    name: "GRAND ORCHID WEDDING LAWN",
    address: "Retibunder, Mumbra, Thane, Maharashtra 400605",
    city: "Thane",
    query: "GRAND ORCHID WEDDING LAWN, Retibunder, Mumbra, Thane, Maharashtra 400605",
    lat: 19.1868,
    lng: 73.0189,
    // Custom map links (leave empty to generate automatically from venue query)
    mapSearchUrl: "https://maps.app.goo.gl/FpMJ57J3Gw6539fU9?g_st=ic",
    directionsUrl: "https://maps.app.goo.gl/FpMJ57J3Gw6539fU9?g_st=ic",
  },

  images: {
    // Replace image files in editable/assets/ or point to new URLs/paths
    couple: "./editable/assets/couple.png",
    footerBg: "./editable/assets/footer-bg.jpg",
    map: "./editable/assets/map.jpg",
  },

  bgm: {
    src: "./editable/assets/bgm.mp3",
  },
};
