var simplemaps_usmap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#d1b5b5",
    background_transparent: "yes",
    border_color: "#000000",
    popups: "detect",
    
    //State defaults
    state_description: "Crude rate is #data#",
    state_color: "Blue",
    state_hover_color: "",
    state_url: "http://montypythoncom/mapdata.js",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Add location markers using latitude and longitude!",
    location_color: "#2041D4",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_url: "",
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#d5ddec",
    label_hover_color: "#d5ddec",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: "no",
    manual_zoom: "Yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: -1,
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "yes",
    images_directory: "/static/lib/simplemaps/map_images/",
    fade_time: 0.1,
    import_labels: "no",
    link_text: "View Website",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    HI: {
      color: "#be9595",
      name: "Hawaii",
      description: "Crude rate is 11.9"
    },
    AK: {
      color: "#543333",
      name: "Alaska",
      description: "Crude rate is 27.5"
    },
    FL: {
      color: "#935a5a",
      name: "Florida",
      description: "Crude rate is 13.7"
    },
    NH: {
      color: "#935a5a",
      name: "New Hampshire",
      description: "Crude rate is 16.7"
    },
    VT: {
      color: "#734747",
      name: "Vermont",
      description: "Crude rate is 18.3"
    },
    ME: {
      color: "#935a5a",
      name: "Maine",
      description: "Crude rate is 16.7"
    },
    RI: {
      color: "#be9595",
      name: "Rhode Island",
      description: "Crude rate is 8.3"
    },
    NY: {
      color: "#be9595",
      name: "New York",
      description: "Crude rate is 7.3"
    },
    PA: {
      color: "#ab7575",
      name: "Pennsylvania",
      description: "Crude rate is 12.8"
    },
    NJ: {
      color: "#be9595",
      name: "New Jersey",
      description: "Crude rate is 7"
    },
    DE: {
      color: "#ab7575",
      name: "Delaware",
      description: "Crude rate is 12"
    },
    MD: {
      color: "#be9595",
      name: "Maryland",
      description: "Crude rate is 9.1"
    },
    VA: {
      color: "#ab7575",
      name: "Virginia",
      description: "Crude rate is 13.6"
    },
    WV: {
      color: "#543333",
      name: "West Virginia",
      description: "Crude rate is 19.1"
    },
    OH: {
      color: "#ab7575",
      name: "Ohio",
      description: "Crude rate is 13.3"
    },
    IN: {
      color: "#935a5a",
      name: "Indiana",
      description: "Crude rate is 14.8"
    },
    IL: {
      color: "#be9595",
      name: "Illinois",
      description: "Crude rate is 9.9"
    },
    CT: {
      color: "#be9595",
      name: "Connecticut",
      description: "Crude rate is 9.4"
    },
    WI: {
      color: "#935a5a",
      name: "Wisconsin",
      description: "Crude rate is 14.2"
    },
    NC: {
      color: "#ab7575",
      name: "North Carolina",
      description: "Crude rate is 13.1"
    },
    DC: {
      color: "#be9595",
      name: "District of Columbia",
      description: "Crude rate is 4.5"
    },
    MA: {
      color: "#be9595",
      name: "Massachusetts",
      description: "Crude rate is 8.3"
    },
    TN: {
      color: "#734747",
      name: "Tennessee",
      description: "Crude rate is 17.2"
    },
    AR: {
      color: "#543333",
      name: "Arkansas",
      description: "Crude rate is 19"
    },
    MO: {
      color: "#734747",
      name: "Missouri",
      description: "Crude rate is 17.7"
    },
    GA: {
      color: "#ab7575",
      name: "Georgia",
      description: "Crude rate is 13.5"
    },
    SC: {
      color: "#935a5a",
      name: "South Carolina",
      description: "Crude rate is 16.1"
    },
    KY: {
      color: "#734747",
      name: "Kentucky",
      description: "Crude rate is 17.5"
    },
    AL: {
      color: "#935a5a",
      name: "Alabama",
      description: "Crude rate is 15.8"
    },
    LA: {
      color: "#ab7575",
      name: "Louisiana",
      description: "Crude rate is 13.4"
    },
    MS: {
      color: "#ab7575",
      name: "Mississippi",
      description: "Crude rate is 13.5"
    },
    IA: {
      color: "#734747",
      name: "Iowa",
      description: "Crude rate is 17"
    },
    MN: {
      color: "#ab7575",
      name: "Minnesota",
      description: "Crude rate is 12.6"
    },
    OK: {
      color: "#543333",
      name: "Oklahoma",
      description: "Crude rate is 21.2"
    },
    TX: {
      color: "#ab7575",
      name: "Texas",
      description: "Crude rate is 12.9"
    },
    NM: {
      color: "#543333",
      name: "New Mexico",
      description: "Crude rate is 23.9"
    },
    KS: {
      color: "#734747",
      name: "Kansas",
      description: "Crude rate is 17.5"
    },
    NE: {
      color: "#935a5a",
      name: "Nebraska",
      description: "Crude rate is 14.3"
    },
    SD: {
      color: "#543333",
      name: "South Dakota",
      description: "Crude rate is 20.7"
    },
    ND: {
      color: "#734747",
      name: "North Dakota",
      description: "Crude rate is 17.2"
    },
    WY: {
      color: "#543333",
      name: "Wyoming",
      description: "Crude rate is 30.7"
    },
    MT: {
      color: "#543333",
      name: "Montana",
      description: "Crude rate is 27.2"
    },
    CO: {
      color: "#543333",
      name: "Colorado",
      description: "Crude rate is 21.5"
    },
    UT: {
      color: "#543333",
      name: "Utah",
      description: "Crude rate is 19"
    },
    AZ: {
      color: "#734747",
      name: "Arizona",
      description: "Crude rate is 17.7"
    },
    NV: {
      color: "#734747",
      name: "Nevada",
      description: "Crude rate is 18.4"
    },
    OR: {
      color: "#734747",
      name: "Oregon",
      description: "Crude rate is 18.6"
    },
    WA: {
      color: "#935a5a",
      name: "Washington",
      description: "Crude rate is 14.9"
    },
    CA: {
      color: "#be9595",
      name: "California",
      description: "Crude rate is 9.5"
    },
    MI: {
      color: "#935a5a",
      name: "Michigan",
      description: "Crude rate is 13.9"
    },
    ID: {
      color: "#543333",
      name: "Idaho",
      description: "Crude rate is 22.1"
    },
    GU: {
      hide: "yes",
      name: "Guam",
      description: " "
    },
    VI: {
      hide: "yes",
      name: "Virgin Islands",
      description: " "
    },
    PR: {
      hide: "yes",
      name: "Puerto Rico",
      description: " "
    },
    MP: {
      hide: "yes",
      name: "Northern Mariana Islands",
      description: " "
    },
    AS: {
      hide: "yes",
      name: "American Samoa",
      description: " "
    }
  },
  locations: {},
  labels: {
    NH: {
      parent_id: "NH",
      x: "932",
      y: "183",
      pill: "yes",
      width: 45,
      display: "all"
    },
    VT: {
      parent_id: "VT",
      x: "883",
      y: "243",
      pill: "yes",
      width: 45,
      display: "all"
    },
    RI: {
      parent_id: "RI",
      x: "932",
      y: "273",
      pill: "yes",
      width: 45,
      display: "all"
    },
    NJ: {
      parent_id: "NJ",
      x: "883",
      y: "273",
      pill: "yes",
      width: 45,
      display: "all"
    },
    DE: {
      parent_id: "DE",
      x: "883",
      y: "303",
      pill: "yes",
      width: 45,
      display: "all"
    },
    MD: {
      parent_id: "MD",
      x: "932",
      y: "303",
      pill: "yes",
      width: 45,
      display: "all"
    },
    DC: {
      parent_id: "DC",
      x: "884",
      y: "332",
      pill: "yes",
      width: 45,
      display: "all"
    },
    MA: {
      parent_id: "MA",
      x: "932",
      y: "213",
      pill: "yes",
      width: 45,
      display: "all"
    },
    CT: {
      parent_id: "CT",
      x: "932",
      y: "243",
      pill: "yes",
      width: 45,
      display: "all"
    },
    HI: {
      parent_id: "HI",
      x: 305,
      y: 565,
      pill: "yes"
    },
    AK: {
      parent_id: "AK",
      x: "113",
      y: "495"
    },
    FL: {
      parent_id: "FL",
      x: "773",
      y: "510"
    },
    ME: {
      parent_id: "ME",
      x: "893",
      y: "85"
    },
    NY: {
      parent_id: "NY",
      x: "815",
      y: "158"
    },
    PA: {
      parent_id: "PA",
      x: "786",
      y: "210"
    },
    VA: {
      parent_id: "VA",
      x: "790",
      y: "282"
    },
    WV: {
      parent_id: "WV",
      x: "744",
      y: "270"
    },
    OH: {
      parent_id: "OH",
      x: "700",
      y: "240"
    },
    IN: {
      parent_id: "IN",
      x: "650",
      y: "250"
    },
    IL: {
      parent_id: "IL",
      x: "600",
      y: "250"
    },
    WI: {
      parent_id: "WI",
      x: "575",
      y: "155"
    },
    NC: {
      parent_id: "NC",
      x: "784",
      y: "326"
    },
    TN: {
      parent_id: "TN",
      x: "655",
      y: "340"
    },
    AR: {
      parent_id: "AR",
      x: "548",
      y: "368"
    },
    MO: {
      parent_id: "MO",
      x: "548",
      y: "293"
    },
    GA: {
      parent_id: "GA",
      x: "718",
      y: "405"
    },
    SC: {
      parent_id: "SC",
      x: "760",
      y: "371"
    },
    KY: {
      parent_id: "KY",
      x: "680",
      y: "300"
    },
    AL: {
      parent_id: "AL",
      x: "655",
      y: "405"
    },
    LA: {
      parent_id: "LA",
      x: "550",
      y: "435"
    },
    MS: {
      parent_id: "MS",
      x: "600",
      y: "405"
    },
    IA: {
      parent_id: "IA",
      x: "525",
      y: "210"
    },
    MN: {
      parent_id: "MN",
      x: "506",
      y: "124"
    },
    OK: {
      parent_id: "OK",
      x: "460",
      y: "360"
    },
    TX: {
      parent_id: "TX",
      x: "425",
      y: "435"
    },
    NM: {
      parent_id: "NM",
      x: "305",
      y: "365"
    },
    KS: {
      parent_id: "KS",
      x: "445",
      y: "290"
    },
    NE: {
      parent_id: "NE",
      x: "420",
      y: "225"
    },
    SD: {
      parent_id: "SD",
      x: "413",
      y: "160"
    },
    ND: {
      parent_id: "ND",
      x: "416",
      y: "96"
    },
    WY: {
      parent_id: "WY",
      x: "300",
      y: "180"
    },
    MT: {
      parent_id: "MT",
      x: "280",
      y: "95"
    },
    CO: {
      parent_id: "CO",
      x: "320",
      y: "275"
    },
    UT: {
      parent_id: "UT",
      x: "223",
      y: "260"
    },
    AZ: {
      parent_id: "AZ",
      x: "205",
      y: "360"
    },
    NV: {
      parent_id: "NV",
      x: "140",
      y: "235"
    },
    OR: {
      parent_id: "OR",
      x: "100",
      y: "120"
    },
    WA: {
      parent_id: "WA",
      x: "130",
      y: "55"
    },
    ID: {
      parent_id: "ID",
      x: "200",
      y: "150"
    },
    CA: {
      parent_id: "CA",
      x: "79",
      y: "285"
    },
    MI: {
      parent_id: "MI",
      x: "663",
      y: "185"
    },
    PR: {
      parent_id: "PR",
      x: "620",
      y: "545"
    },
    GU: {
      parent_id: "GU",
      x: "550",
      y: "540"
    },
    VI: {
      parent_id: "VI",
      x: "680",
      y: "519"
    },
    MP: {
      parent_id: "MP",
      x: "570",
      y: "575"
    },
    AS: {
      parent_id: "AS",
      x: "665",
      y: "580"
    }
  },
  legend: {
    entries: [
      {
        name: "Census Region 1",
        color: "rgb(75, 192, 192)",
        type: "Location",
        shape: "circle",
        ids: ""
      },
      {
        name: "Census Region 2",
        color: "rgb(252, 186, 3)",
        type: "Location",
        shape: "circle",
        ids: ""
      },
      {
        name: "Census Region 3",
        color: "rgb(252, 3, 227)",
        type: "Location",
        shape: "circle",
        ids: ""
      },
      {
        name: "Census Region 4",
        color: "rgb(16, 173, 2)",
        type: "Location",
        shape: "circle",
        ids: ""
      }
    ]
  },
  regions: {
    "0": {
      states: [
        "CT",
        "MA",
        "VT",
        "NH",
        "ME",
        "RI",
        "NJ",
        "NY",
        "PA"
      ],
      name: "Northeast",
      color: "rgb(75, 192, 192)",
      hover_color: "#3b729f",
      description: "Census Region 1",
      zoomable: "Yes",
      url: "http://montypython.com/mapdata.js"
    },
    "1": {
      states: [
        "ND",
        "SD",
        "NE",
        "KS",
        "MN",
        "IA",
        "MO",
        "WI",
        "IL",
        "IN",
        "OH",
        "MI"
      ],
      name: "MidWest",
      color: "rgb(252, 186, 3)",
      hover_color: "#ffa500",
      description: "Census Region 2",
      zoomable: "Yes",
      url: "http://montypython.com/mapdata.js"
    },
    "2": {
      states: [
        "OK",
        "TX",
        "AR",
        "LA",
        "MS",
        "AL",
        "TN",
        "KY",
        "MD",
        "DE",
        "DC",
        "WV",
        "VA",
        "NC",
        "SC",
        "GA",
        "FL"
      ],
      name: "South",
      description: "Census Region 3",
      zoomable: "Yes",
      color: "rgb(252, 3, 227)",
      hover_color: "#d1b5b5",
      url: "http://montypython.com/mapdata.js"
    },
    "3": {
      states: [
        "WA",
        "OR",
        "MT",
        "ID",
        "WY",
        "CA",
        "NV",
        "UT",
        "CO",
        "AZ",
        "NM",
        "AK",
        "HI"
      ],
      name: "West",
      color: "rgb(16, 173, 2)",
      hover_color: "#7b8b79",
      description: "Census Region 4",
      zoomable: "Yes",
      url: "http://montypython.com/mapdata.js"
    }
  },
  data: {
    data: {
      HI: "11.9",
      AK: "27.5",
      FL: "13.7",
      NH: "16.7",
      VT: "18.3",
      ME: "16.7",
      RI: "8.3",
      PA: "12.8",
      NY: "7.3",
      NJ: "7",
      DE: "12",
      MD: "9.1",
      VA: "13.6",
      WV: "19.1",
      OH: "13.3",
      CT: "9.4",
      IL: "9.9",
      IN: "14.8",
      WI: "14.2",
      NC: "13.1",
      DC: "4.5",
      AR: "19",
      TN: "17.2",
      MA: "8.3",
      SC: "16.1",
      GA: "13.5",
      MO: "17.7",
      KY: "17.5",
      AL: "15.8",
      LA: "13.4",
      IA: "17",
      MN: "12.6",
      MS: "13.5",
      OK: "21.2",
      TX: "12.9",
      NM: "23.9",
      SD: "20.7",
      NE: "14.3",
      KS: "17.5",
      ND: "17.2",
      WY: "30.7",
      MT: "27.2",
      AZ: "17.7",
      UT: "19",
      CO: "21.5",
      NV: "18.4",
      OR: "18.6",
      WA: "14.9",
      CA: "9.5",
      MI: "13.9",
      ID: "22.1"
    }
  }
};