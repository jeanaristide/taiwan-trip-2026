// 10-Day Taiwan Scenic & Cultural Journey Data & Interactive Map Engine
// Prepared for Jean Aristide Belleza Aquino & Sister (13–22 Nov 2026)

// 14 Custom Google Maps List Pins + LDS Temple & Major Hubs
const visitedLocations = [
  {
    pinId: 1,
    name: "National Chung Cheng University (CCU)",
    nativeName: "國立中正大學",
    region: "Chiayi County (Minxiong)",
    category: "Alumni Campus Visit",
    color: "#059669",
    coords: [23.558577, 120.4718534],
    day: "Day 3 (15 Nov)",
    desc: "Jean's Master's alma mater in Minxiong. Nostalgic stroll around Tranquility Lake, campus bridges, and grand brick pavilions.",
    gmapsQuery: "National Chung Cheng University, Minxiong, Chiayi"
  },
  {
    pinId: 2,
    name: "Rainbow Village",
    nativeName: "彩虹眷村",
    region: "Taichung City",
    category: "Vibrant Cultural Art",
    color: "#d97706",
    coords: [24.1337152, 120.6098437],
    day: "Day 7 (19 Nov)",
    desc: "Former military dependents' village saved from demolition through vibrant, whimsical folk-art murals painted by Grandpa Rainbow (Huang Yung-fu).",
    gmapsQuery: "Rainbow Village, Taichung"
  },
  {
    pinId: 3,
    name: "Wulai Falls",
    nativeName: "烏來瀑布",
    region: "New Taipei City (Wulai)",
    category: "Scenic Nature & River Gorge",
    color: "#2563eb",
    coords: [24.8474426, 121.5519459],
    day: "Day 2 (14 Nov)",
    desc: "Spectacular 80-meter cascading waterfall plunging into the turquoise Nanshi River, surrounded by forested mountains and misty ravines.",
    gmapsQuery: "Wulai Falls, Wulai, New Taipei"
  },
  {
    pinId: 4,
    name: "Formosan Aboriginal Culture Village",
    nativeName: "九族文化村",
    region: "Nantou County (Yuchi)",
    category: "Indigenous Heritage & Lake Ropeway",
    color: "#d97706",
    coords: [23.865328, 120.948187],
    day: "Day 7 (19 Nov)",
    desc: "Extensive open-air heritage village showcasing authentic architecture, crafts, and ritual dances of Taiwan's indigenous tribes, connected to Sun Moon Lake via panoramic cable car.",
    gmapsQuery: "Formosan Aboriginal Culture Village, Nantou"
  },
  {
    pinId: 5,
    name: "Sun Moon Lake (Xiangshan & Shuishe Pier)",
    nativeName: "日月潭 (向山遊客中心 & 水社碼頭)",
    region: "Nantou County (Yuchi)",
    category: "Alpine Lake & Scenic Cycling",
    color: "#0284c7",
    coords: [23.8517, 120.9022],
    day: "Day 6 (18 Nov)",
    desc: "Taiwan's premier alpine lake. Features the CNN-acclaimed lakeside cycling path to Xiangshan Visitor Center, electric boat cruises, and panoramic lakeside piers.",
    gmapsQuery: "Xiangshan Visitor Center, Sun Moon Lake, Nantou"
  },
  {
    pinId: 6,
    name: "Fenqihu Old Street",
    nativeName: "奮起湖老街",
    region: "Chiayi County (Zhubang)",
    category: "Historic Forest Railway Hub",
    color: "#059669",
    coords: [23.5051199, 120.6949355],
    day: "Day 4 (16 Nov)",
    desc: "High-altitude mountain enclave surrounded by cedar forests, famous for historic railway locomotives and the legendary hot Fenqihu Railway Bento on the ascent to Alishan.",
    gmapsQuery: "Fenqihu Old Street, Chiayi"
  },
  {
    pinId: 7,
    name: "Eryanping Trail",
    nativeName: "二延平步道",
    region: "Chiayi County (Xiding)",
    category: "High Mountain Tea Terraces",
    color: "#059669",
    coords: [23.4175793, 120.650847],
    day: "Day 4 (16 Nov)",
    desc: "Scenic timber boardwalk climbing along ridgeline tea plantations in Xiding, world-famous for dramatic sea-of-clouds vistas and sunsets.",
    gmapsQuery: "Eryanping Trail, Xiding, Chiayi"
  },
  {
    pinId: 8,
    name: "Heping Island GeoPark",
    nativeName: "和平島地質公園",
    region: "Keelung City",
    category: "Pacific Coastal Geology",
    color: "#7c3aed",
    coords: [25.1617376, 121.7644664],
    day: "Day 9 (21 Nov)",
    desc: "Rugged Pacific shoreline featuring millions of years of wave erosion: Tofu rock formations, mushroom rocks, and sea trenches looking out toward Keelung Islet.",
    gmapsQuery: "Heping Island GeoPark, Keelung"
  },
  {
    pinId: 9,
    name: "Shen'ao Rail Bike (Shen'ao / Badouzi Station)",
    nativeName: "深澳鐵道自行車",
    region: "New Taipei & Keelung Coast",
    category: "Coastal Rail Cycling",
    color: "#7c3aed",
    coords: [25.1291794, 121.8144922],
    day: "Day 9 (21 Nov)",
    desc: "Scenic pedal-powered rail bikes on former coastal mining tracks with ocean breezes, illuminated light tunnels, and coastal bluff panoramas.",
    gmapsQuery: "Shen'ao Rail Bike, Ruifang"
  },
  {
    pinId: 10,
    name: "Zhushan Sunrise Trail & Station",
    nativeName: "祝山觀日步道 & 祝山車站",
    region: "Chiayi County (Alishan)",
    category: "Alpine Sunrise & Sea of Clouds",
    color: "#059669",
    coords: [23.5136442, 120.8130844],
    day: "Day 5 (17 Nov)",
    desc: "Taiwan's highest railway station (2,451m) and the iconic 360-degree Ogasawara lookout platform for golden sunrise over Yushan (Jade Mountain).",
    gmapsQuery: "Zhushan Sunrise Platform, Alishan"
  },
  {
    pinId: 11,
    name: "Giant Tree Cluster Trail",
    nativeName: "巨木群棧道",
    region: "Chiayi County (Alishan)",
    category: "Ancient Sacred Red Cypresses",
    color: "#059669",
    coords: [23.5167437, 120.8096083],
    day: "Day 5 (17 Nov)",
    desc: "Peaceful elevated boardwalk winding past 36 preserved ancient Taiwanese red cypresses dating back 800 to 2,000+ years.",
    gmapsQuery: "Giant Tree Cluster Trail, Alishan"
  },
  {
    pinId: 12,
    name: "Alishan National Forest Recreation Area",
    nativeName: "阿里山國家森林遊樂區",
    region: "Chiayi County",
    category: "National Alpine Forest",
    color: "#059669",
    coords: [23.5109539, 120.8034992],
    day: "Days 4 & 5 (16 & 17 Nov)",
    desc: "World-renowned misty alpine reserve at 2,200m elevation featuring 2-night mountain stay, narrow-gauge forest railways, Sister Ponds, and ancient cedar trails.",
    gmapsQuery: "Alishan National Forest Recreation Area"
  },
  {
    pinId: 13,
    name: "Wulai Old Street",
    nativeName: "烏來老街",
    region: "New Taipei City (Wulai)",
    category: "Atayal Indigenous Cuisine & Heritage",
    color: "#2563eb",
    coords: [24.8637067, 121.5514325],
    day: "Day 2 (14 Nov)",
    desc: "Riverside market street showcasing authentic Atayal indigenous foods: wild mountain boar sausage, bamboo tube sticky rice, and millet wine.",
    gmapsQuery: "Wulai Old Street, New Taipei"
  },
  {
    pinId: 14,
    name: "Wulai Scenic Train",
    nativeName: "烏來台車",
    region: "New Taipei City (Wulai)",
    category: "Historic Timber Logging Cart",
    color: "#2563eb",
    coords: [24.8609414, 121.551184],
    day: "Day 2 (14 Nov)",
    desc: "Charming open-air historic pushcart railway running along the lush river canyon between Wulai Old Street and Wulai Waterfall.",
    gmapsQuery: "Wulai Scenic Train, New Taipei"
  },
  {
    pinId: 15,
    name: "Taipei Taiwan LDS Temple & Jinhua St Chapel",
    nativeName: "耶穌基督後期聖徒教會 台灣台北聖殿",
    region: "Taipei City (Da'an)",
    category: "Sacred Sunday Worship & Temple",
    color: "#b45309",
    coords: [25.0298, 121.5284],
    day: "Days 3 & 10 (15 & 22 Nov)",
    desc: "Sacred temple of The Church of Jesus Christ of Latter-day Saints and the Jinhua Street Meetinghouse for Sunday worship services.",
    gmapsQuery: "Taipei Taiwan Temple, Jinhua Street, Taipei"
  }
];

// Chronological Itinerary Overview Stops (Top Bar)
const itineraryOverviewStops = [
  { id: "leg1", step: 1, flag: "🏙️", title: "Taipei Base", sub: "13 Nov · Day 1", coords: [25.0441, 121.5085], zoom: 13 },
  { id: "leg2", step: 2, flag: "🌿", title: "Wulai Falls & Train", sub: "14 Nov · Day 2", coords: [24.8550, 121.5515], zoom: 14 },
  { id: "leg3", step: 3, flag: "🎓", title: "LDS Worship & CCU", sub: "15 Nov · Day 3", coords: [23.5586, 120.4719], zoom: 14 },
  { id: "leg4", step: 4, flag: "🌲", title: "Eryanping & Fenqihu", sub: "16 Nov · Day 4", coords: [23.5051, 120.6949], zoom: 13 },
  { id: "leg5", step: 5, flag: "🌅", title: "Zhushan Sunrise & Alishan", sub: "17 Nov · Day 5", coords: [23.5136, 120.8131], zoom: 14 },
  { id: "leg6", step: 6, flag: "🛶", title: "Alishan ➔ Sun Moon Lake", sub: "18 Nov · Day 6", coords: [23.8524, 120.9150], zoom: 13 },
  { id: "leg7", step: 7, flag: "🚡", title: "Formosan Village & Taichung", sub: "19 Nov · Day 7", coords: [23.8653, 120.9482], zoom: 13 },
  { id: "leg8", step: 8, flag: "🚆", title: "Taipei & Alumni Reunion", sub: "20 Nov · Day 8", coords: [25.0441, 121.5085], zoom: 13 },
  { id: "leg9", step: 9, flag: "🌊", title: "Shen'ao Rail & Heping Island", sub: "21 Nov · Day 9", coords: [25.1450, 121.7900], zoom: 13 },
  { id: "leg10", step: 10, flag: "🏛️", title: "Temple Worship & TPE", sub: "22 Nov · Day 10", coords: [25.0298, 121.5284], zoom: 14 }
];

// Master Trip Calendar Data (November 2026)
const tripCalendarData = {
  '2026-11-13': {
    dateKey: '2026-11-13',
    dayNum: 13,
    dayLabel: 'Day 1',
    dayBadge: 'D1',
    region: 'taipei',
    regionClass: 'region-taipei',
    regionLabel: 'Taipei Base',
    flag: '🏙️',
    city: 'Taipei (Ximending Base)',
    title: 'Arrival in Taipei & Hotel Base Check-In',
    summary: 'Sister arrives from Sydney (SYD); User arrives from Manila (MNL). Airport MRT Express straight to Taipei Main Station, quick taxi to Just Sleep Taipei Ximending. Unpack, settle in, and evening dinner in Taipei.',
    coords: [25.0441, 121.5085],
    zoom: 14,
    overviewIndex: 0,
    tableDayId: 'Day-1'
  },
  '2026-11-14': {
    dateKey: '2026-11-14',
    dayNum: 14,
    dayLabel: 'Day 2',
    dayBadge: 'D2',
    region: 'taipei',
    regionClass: 'region-taipei',
    regionLabel: 'Wulai Gorge Excursion',
    flag: '🌿',
    city: 'Wulai Gorge & Forest',
    title: 'Wulai Indigenous Valley (DIY) vs Taipingshan Tour',
    summary: 'Bus 849 along the Nanshi River gorge to Wulai Old Street. Ride the historic Wulai Scenic Train to 80m Wulai Falls, savor wild boar roast skewers, bamboo sticky rice, and riverside hot springs (or Klook Taipingshan & Jiuzhize hot springs tour). Return to Taipei.',
    coords: [24.8550, 121.5515],
    zoom: 14,
    overviewIndex: 1,
    tableDayId: 'Day-2'
  },
  '2026-11-15': {
    dateKey: '2026-11-15',
    dayNum: 15,
    dayLabel: 'Day 3',
    dayBadge: 'D3',
    region: 'chiayi-alishan',
    regionClass: 'region-chiayi-alishan',
    regionLabel: 'Chiayi & CCU Alumni Visit',
    flag: '🎓',
    city: 'Taipei ➔ Chiayi & CCU',
    title: 'Sunday LDS Worship ➔ Bullet Train to Chiayi & CCU Campus',
    summary: 'Attend Sunday LDS worship at Taipei Taiwan Temple / Jinhua St Chapel (09:00–12:00). Leave 3 large suitcases in free multi-day luggage storage at Just Sleep Taipei; take 13:00 THSR Bullet Train to Chiayi with only carry-on bags. Drop bags at Chiayi hotel first, then visit CCU Minxiong campus & Wenhua Rd turkey rice dinner.',
    coords: [23.5586, 120.4719],
    zoom: 14,
    overviewIndex: 2,
    tableDayId: 'Day-3'
  },
  '2026-11-16': {
    dateKey: '2026-11-16',
    dayNum: 16,
    dayLabel: 'Day 4',
    dayBadge: 'D4',
    region: 'chiayi-alishan',
    regionClass: 'region-chiayi-alishan',
    regionLabel: 'Fenqihu & Alishan (Night 1)',
    flag: '🌲',
    city: 'Fenqihu & Alishan High Forest',
    title: 'Alishan Forest Railway ➔ Fenqihu Bag Drop ➔ Alishan Sacred Trees',
    summary: 'Board historic Alishan Forest Railway from Chiayi to Fenqihu. Drop carry-on bags at Yeashow Villa front desk first (1 min from station). Savor hot Fenqihu Railway Bento, then shuttle up to Alishan Forest Recreation Area: Zhaoping train, Sister Ponds, and Giant Tree Cluster Trail (800–2,000+ yr red cypresses). Night 1 at Yeashow Villa.',
    coords: [23.5051, 120.6949],
    zoom: 13,
    overviewIndex: 3,
    tableDayId: 'Day-4'
  },
  '2026-11-17': {
    dateKey: '2026-11-17',
    dayNum: 17,
    dayLabel: 'Day 5',
    dayBadge: 'D5',
    region: 'chiayi-alishan',
    regionClass: 'region-chiayi-alishan',
    regionLabel: 'Alishan Forest (Night 2)',
    flag: '🌅',
    city: 'Zhushan Sunrise & Alishan Trails',
    title: 'Zhushan Sunrise over Yushan ➔ Eryanping or Shuishan Cedar Trail',
    summary: 'Dawn Zhushan Sunrise narrow-gauge train to Taiwan\'s highest station (2,451m). Walk to Ogasawara 360° observation deck for golden sunrise illuminating Yushan (Jade Mountain). Daytime choice (bags safely stored at Yeashow Villa): misty tea terraces of Eryanping Trail in Xiding or serene 2,700-yr Shuishan Giant Tree. Night 2 at Yeashow Villa.',
    coords: [23.5136, 120.8131],
    zoom: 14,
    overviewIndex: 4,
    tableDayId: 'Day-5'
  },
  '2026-11-18': {
    dateKey: '2026-11-18',
    dayNum: 18,
    dayLabel: 'Day 6',
    dayBadge: 'D6',
    region: 'taichung-nantou',
    regionClass: 'region-taichung-nantou',
    regionLabel: 'Sun Moon Lake & Taichung Base',
    flag: '🛶',
    city: 'Sun Moon Lake & Taichung',
    title: 'Fast THSR to Taichung (Drop Bags First) ➔ Hands-Free Sun Moon Lake Cruise',
    summary: 'Morning transfer down from Fenqihu to Chiayi THSR; 22-min bullet train to Taichung. Quick taxi to Taichung Hotel Base to deposit carry-ons (100% luggage-free!). Express Bus 6670 to Sun Moon Lake: lake ferry cruise to Ita Thao pier and CNN Top 10 over-water bikeway to Xiangshan Visitor Center. Night 1 at Taichung Hotel Base.',
    coords: [23.8524, 120.9150],
    zoom: 13,
    overviewIndex: 5,
    tableDayId: 'Day-6'
  },
  '2026-11-19': {
    dateKey: '2026-11-19',
    dayNum: 19,
    dayLabel: 'Day 7',
    dayBadge: 'D7',
    region: 'taichung-nantou',
    regionClass: 'region-taichung-nantou',
    regionLabel: 'Formosan Village & Taichung WFH',
    flag: '🚡',
    city: 'Formosan Village & Taichung',
    title: 'Formosan Aboriginal Village & Lake Ropeway ➔ Rainbow Village & WFH Window',
    summary: 'Direct express coach to Formosan Aboriginal Culture Village and alpine Sun Moon Lake Ropeway. Afternoon taxi to colorful Rainbow Village murals. 16:00–17:00 mandatory quiet WFH meeting window at Taichung hotel. Evening stroll to National Taichung Theater & Fengjia Night Market. Night 2 at Taichung Hotel Base.',
    coords: [23.8653, 120.9482],
    zoom: 13,
    overviewIndex: 6,
    tableDayId: 'Day-7'
  },
  '2026-11-20': {
    dateKey: '2026-11-20',
    dayNum: 20,
    dayLabel: 'Day 8',
    dayBadge: 'D8',
    region: 'taipei',
    regionClass: 'region-taipei',
    regionLabel: 'Taipei & Alumni Reunion',
    flag: '🚆',
    city: 'Return to Taipei & Reunion',
    title: 'THSR Bullet Train to Taipei ➔ Alumni Friends Reunion Dinner',
    summary: 'Mid-morning THSR Bullet Train back to Taipei Main Station (45 mins). Quick taxi to Just Sleep Taipei Ximending; check in and retrieve 3 stored large checked suitcases from front desk. Rest and prepare for lively Friday evening dinner reunion with university master\'s friends in Taipei!',
    coords: [25.0441, 121.5085],
    zoom: 14,
    overviewIndex: 7,
    tableDayId: 'Day-8'
  },
  '2026-11-21': {
    dateKey: '2026-11-21',
    dayNum: 21,
    dayLabel: 'Day 9',
    dayBadge: 'D9',
    region: 'keelung',
    regionClass: 'region-keelung',
    regionLabel: 'Northeast Coast Excursion',
    flag: '🌊',
    city: 'Keelung & Northeast Coast',
    title: 'Northeast Coast: Shen\'ao Rail Bike, Heping Island & Miaokou Market',
    summary: 'Spectacular Pacific coastal excursion: pedal along ocean bluffs on Shen\'ao Rail Bike, photograph Zhengbin Port rainbow color houses, and explore Tofu rock formations at Heping Island GeoPark (or Bitou Cape Little Great Wall trail). Feast on fresh seafood at Keelung Miaokou Night Market before returning to Taipei.',
    coords: [25.1450, 121.7900],
    zoom: 13,
    overviewIndex: 8,
    tableDayId: 'Day-9'
  },
  '2026-11-22': {
    dateKey: '2026-11-22',
    dayNum: 22,
    dayLabel: 'Day 10',
    dayBadge: 'D10',
    region: 'taipei',
    regionClass: 'region-taipei',
    regionLabel: 'LDS Worship & TPE Departure',
    flag: '🏛️',
    city: 'Taipei Worship & Airport Departures',
    title: 'Sunday LDS Worship & Temple ➔ Taoyuan Airport Departures',
    summary: 'Sunday morning LDS worship service and temple visit at Taipei Taiwan Temple / Jinhua St Chapel. Final souvenir shopping and beef noodles in Ximending. Retrieve luggage from Just Sleep Taipei, take Airport MRT Express to TPE for evening flights home (Sister to Sydney, Jean to Manila).',
    coords: [25.0298, 121.5284],
    zoom: 14,
    overviewIndex: 9,
    tableDayId: 'Day-10'
  }
};

// Chronological Flight and Transit Path Across Taiwan
const chronologicalRouteCoords = [
  [25.0797, 121.2342], // TPE Airport
  [25.0441, 121.5085], // Taipei Ximending
  [24.8637, 121.5514], // Wulai Old Street
  [24.8609, 121.5512], // Wulai Scenic Train
  [24.8474, 121.5519], // Wulai Falls
  [25.0441, 121.5085], // Return Taipei
  [25.0298, 121.5284], // Taipei Taiwan Temple
  [25.0478, 121.5170], // Taipei Main Station (THSR)
  [23.4592, 120.3235], // Chiayi THSR
  [23.5586, 120.4719], // CCU Campus (Minxiong)
  [23.4795, 120.4497], // Chiayi City
  [23.4176, 120.6508], // Eryanping Trail (Xiding)
  [23.5051, 120.6949], // Fenqihu Old Street
  [23.5110, 120.8035], // Alishan Forest Recreation Area (Night 1: 16 Nov)
  [23.5136, 120.8131], // Zhushan Sunrise Lookout (Morning 17 Nov)
  [23.5167, 120.8096], // Giant Tree Cluster Trail & Shuishan (Day 17 Nov, Night 2 in Alishan)
  [23.4850, 120.8800], // Tataka / New Central Cross-Island Highway (Scenic transit to Sun Moon Lake)
  [23.8517, 120.9022], // Sun Moon Lake (Xiangshan & Shuishe) (18 Nov)
  [23.8524, 120.9348], // Sun Moon Lake (Ita Thao)
  [24.1373, 120.6869], // Taichung Central Base (Night 1: 18 Nov)
  [23.8653, 120.9482], // Formosan Aboriginal Culture Village & Ropeway (19 Nov)
  [24.1337, 120.6098], // Rainbow Village (Taichung) & WFH Window (Night 2: 19 Nov)
  [24.1373, 120.6869], // Taichung Base
  [25.0441, 121.5085], // THSR Return to Taipei (20 Nov)
  [25.1292, 121.8145], // Shen'ao Rail Bike (Badouzi)
  [25.1617, 121.7645], // Heping Island GeoPark
  [25.0441, 121.5085], // Return Taipei
  [25.0298, 121.5284], // Taipei Taiwan Temple
  [25.0797, 121.2342]  // TPE Airport Departure
];

// Leaflet State
let map;
let googleLayers = {};
let currentLayer = 'roadmap';
let starMarkers = [];
let templeMarker = null;
let routeLine = null;
const DEFAULT_CENTER = [24.1500, 121.0500];
const DEFAULT_ZOOM = 8;

// Create Star SVG Icon
function createStarIcon(color, number) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
    <filter id="starShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" flood-color="#000" flood-opacity="0.35"/>
    </filter>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      fill="${color}" stroke="#ffffff" stroke-width="2" stroke-linejoin="round" filter="url(#starShadow)"/>
  </svg>`;
  return L.divIcon({
    html: svg,
    className: 'sight-star-icon',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -14]
  });
}

// Create Golden Spire Icon for LDS Temple
function createTempleIcon() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="38" viewBox="0 0 32 38">
    <defs>
      <filter id="templeGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#78350f" flood-opacity="0.45"/>
      </filter>
    </defs>
    <g filter="url(#templeGlow)">
      <path d="M16 36 C16 36 29 23 29 14.5 C29 6.8 23.2 1 16 1 C8.8 1 3 6.8 3 14.5 C3 23 16 36 16 36 Z" fill="#b45309" stroke="#ffffff" stroke-width="2"/>
      <circle cx="16" cy="4.5" r="1.5" fill="#fef08a"/>
      <path d="M16 5.5 L14 13 L18 13 Z" fill="#fef3c7"/>
      <polygon points="8,13 16,9 24,13" fill="#fef3c7"/>
      <rect x="9" y="13" width="14" height="10" rx="1" fill="#ffffff"/>
      <rect x="11.5" y="15" width="2" height="8" fill="#b45309"/>
      <rect x="15" y="16.5" width="2" height="6.5" fill="#78350f"/>
      <rect x="18.5" y="15" width="2" height="8" fill="#b45309"/>
    </g>
  </svg>`;
  return L.divIcon({
    html: svg,
    className: 'lds-temple-icon',
    iconSize: [32, 38],
    iconAnchor: [16, 36],
    popupAnchor: [0, -34]
  });
}

// Initialize Leaflet Map
function initMap() {
  const mapElem = document.getElementById('leafletMap');
  if (!mapElem || typeof L === 'undefined') return;

  googleLayers = {
    roadmap: L.tileLayer('https://mt{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      subdomains: ['0', '1', '2', '3'],
      attribution: '&copy; Google Maps',
      maxZoom: 20
    }),
    terrain: L.tileLayer('https://mt{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}', {
      subdomains: ['0', '1', '2', '3'],
      attribution: '&copy; Google Maps (Terrain)',
      maxZoom: 20
    }),
    satellite: L.tileLayer('https://mt{s}.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
      subdomains: ['0', '1', '2', '3'],
      attribution: '&copy; Google Maps (Satellite)',
      maxZoom: 20
    })
  };

  map = L.map('leafletMap', {
    scrollWheelZoom: true,
    doubleClickZoom: false,
    tap: false,
    zoomControl: true
  }).setView(DEFAULT_CENTER, DEFAULT_ZOOM);

  googleLayers.roadmap.addTo(map);

  // 1. Draw Chronological Polyline
  routeLine = L.polyline(chronologicalRouteCoords, {
    color: '#2563eb',
    weight: 3.5,
    opacity: 0.85,
    dashArray: '8, 8',
    smoothFactor: 1
  }).addTo(map);

  // 2. Add All Visited Sight Star Markers
  visitedLocations.forEach(loc => {
    const isTemple = loc.pinId === 15;
    const marker = L.marker(loc.coords, {
      icon: isTemple ? createTempleIcon() : createStarIcon(loc.color, loc.pinId),
      zIndexOffset: isTemple ? 750 : 600,
      title: loc.name
    }).addTo(map);

    // Hover Tooltip
    marker.bindTooltip(`⭐ ${loc.name} · ${loc.day}`, {
      permanent: false,
      direction: 'top',
      offset: [0, -14],
      className: 'sight-star-tooltip'
    });

    // Rich Popup
    const encodedQuery = encodeURIComponent(loc.gmapsQuery);
    const pinBadgeText = isTemple ? '🏛️ LDS Temple & Worship' : `PIN #${loc.pinId} · ${loc.region}`;
    const popupHtml = `
      <div class="popup-inner-card">
        <span class="popup-tag-badge" style="background: ${loc.color};">${pinBadgeText}</span>
        <h4 class="popup-pin-title">${loc.name}</h4>
        <div style="font-size: 11px; color: #64748b; font-weight: 700; margin-bottom: 4px;">${loc.nativeName} · ${loc.day}</div>
        <p class="popup-pin-desc">${loc.desc}</p>
        <a href="https://www.google.com/maps/search/?api=1&query=${encodedQuery}" target="_blank" rel="noopener noreferrer" class="popup-gmaps-link">
          ⭐ Live Google Reviews &amp; Photos ↗
        </a>
      </div>
    `;

    marker.bindPopup(popupHtml, {
      maxWidth: 260,
      minWidth: 210,
      className: 'custom-sight-popup'
    });

    if (isTemple) {
      templeMarker = marker;
    } else {
      starMarkers.push(marker);
    }
  });

  // Fit view comfortably
  map.fitBounds(routeLine.getBounds(), { padding: [40, 40] });
}

// Render Top Route Overview Bar with Navigation Chips
function renderItineraryNavBar() {
  const bar = document.getElementById('itineraryNavBar');
  if (!bar) return;
  bar.innerHTML = '';

  itineraryOverviewStops.forEach((stop, index) => {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = `itinerary-stop-chip ${index === 0 ? 'active' : ''}`;
    chip.setAttribute('data-index', index);
    chip.setAttribute('title', `Click to focus map on ${stop.title}`);

    chip.innerHTML = `
      <span class="itinerary-step-num" style="background: #2563eb;">${stop.step}</span>
      <div class="itinerary-stop-text">
        <span class="itinerary-stop-title">${stop.flag} ${stop.title}</span>
        <span class="itinerary-stop-sub">${stop.sub}</span>
      </div>
    `;

    chip.addEventListener('click', () => {
      focusOverviewStop(index);
    });

    bar.appendChild(chip);

    // Arrow between stops
    if (index < itineraryOverviewStops.length - 1) {
      const arrow = document.createElement('span');
      arrow.className = 'itinerary-arrow';
      arrow.innerHTML = '➔';
      bar.appendChild(arrow);
    }
  });
}

// Focus Map on Stop
function focusOverviewStop(index, skipCalendarSync = false) {
  const stop = itineraryOverviewStops[index];
  if (!stop || !map) return;

  // Active chip state
  document.querySelectorAll('.itinerary-stop-chip').forEach(c => {
    c.classList.toggle('active', parseInt(c.getAttribute('data-index'), 10) === index);
  });

  map.flyTo(stop.coords, stop.zoom, {
    duration: 1.0,
    easeLinearity: 0.25
  });

  if (!skipCalendarSync) {
    const matchingDateKey = Object.keys(tripCalendarData).find(k => tripCalendarData[k].overviewIndex === index);
    if (matchingDateKey) {
      document.querySelectorAll('.cal-day-cell').forEach(c => c.classList.remove('is-selected'));
      const cell = document.querySelector(`.cal-day-cell[data-date="${matchingDateKey}"]`);
      if (cell) cell.classList.add('is-selected');
      updateCalendarDrawer(tripCalendarData[matchingDateKey]);
    }
  }
}

// Render Master Trip Calendar (November 2026)
function renderTripCalendar() {
  const novGrid = document.getElementById('calGridNov');
  if (!novGrid) return;

  novGrid.innerHTML = '';

  // November 2026 (Sun to Sat grid: 1 Nov 2026 is Sunday -> 0 leading pad days)
  for (let d = 1; d <= 30; d++) {
    const dateKey = `2026-11-${String(d).padStart(2, '0')}`;
    const cell = document.createElement('div');
    const info = tripCalendarData[dateKey];

    if (info) {
      cell.className = `cal-day-cell ${info.regionClass}`;
      cell.setAttribute('data-date', dateKey);
      cell.setAttribute('data-region', info.region);
      cell.setAttribute('title', `${info.dayLabel}: ${info.city}`);
      cell.innerHTML = `
        <div class="cal-day-top">
          <span class="cal-day-num">${d}</span>
          <span class="cal-day-badge">${info.dayBadge}</span>
        </div>
        <div class="cal-day-body">
          <span class="cal-day-flag">${info.flag}</span>
          <span class="cal-day-city">${info.city}</span>
        </div>
      `;
      cell.addEventListener('click', () => {
        selectCalendarDay(dateKey);
      });
    } else {
      cell.className = 'cal-day-cell non-trip-day';
      cell.setAttribute('title', `${d} Nov 2026`);
      cell.innerHTML = `
        <div class="cal-day-top">
          <span class="cal-day-num">${d}</span>
        </div>
      `;
    }
    novGrid.appendChild(cell);
  }

  // Trailing pad days for Nov (Nov 30 is Monday -> Tue 1 to Sat 5 Dec to complete 5th week: 35 cells)
  const novPadPost = [1, 2, 3, 4, 5];
  novPadPost.forEach(num => {
    const pad = document.createElement('div');
    pad.className = 'cal-day-cell pad-day';
    pad.innerHTML = `<div class="cal-day-top"><span class="cal-day-num">${num}</span></div>`;
    novGrid.appendChild(pad);
  });

  // Setup Legend Region Filter Chips
  const legendChips = document.querySelectorAll('#calLegendBar .cal-legend-chip');
  legendChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const region = chip.getAttribute('data-region');
      filterCalendarByRegion(region);
    });
  });

  // Select Day 1 by default on initial page load
  const defaultDate = '2026-11-13';
  const defaultCell = document.querySelector(`.cal-day-cell[data-date="${defaultDate}"]`);
  if (defaultCell) {
    defaultCell.classList.add('is-selected');
    updateCalendarDrawer(tripCalendarData[defaultDate]);
  }

  // Support URL query parameters ?day=YYYY-MM-DD or ?day=1..10
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const qDay = urlParams.get('day');
    if (qDay) {
      if (tripCalendarData[qDay]) {
        selectCalendarDay(qDay);
      } else if (!isNaN(parseInt(qDay, 10))) {
        const dayNum = parseInt(qDay, 10);
        const targetDate = `2026-11-${String(dayNum + 12).padStart(2, '0')}`;
        if (tripCalendarData[targetDate]) {
          selectCalendarDay(targetDate);
        }
      }
    }
  } catch (e) {
    // ignore
  }
}

// Select a day in the calendar
function selectCalendarDay(dateKey, shouldScrollTable = false) {
  const info = tripCalendarData[dateKey];
  if (!info) return;

  document.querySelectorAll('.cal-day-cell').forEach(c => c.classList.remove('is-selected'));
  const activeCells = document.querySelectorAll(`.cal-day-cell[data-date="${dateKey}"]`);
  activeCells.forEach(c => c.classList.add('is-selected'));

  updateCalendarDrawer(info);

  if (info.coords && map) {
    map.flyTo(info.coords, info.zoom || 13, {
      duration: 1.0,
      easeLinearity: 0.25
    });
  }

  // Synchronize top route overview chip
  if (typeof info.overviewIndex === 'number') {
    document.querySelectorAll('.itinerary-stop-chip').forEach(c => {
      c.classList.toggle('active', parseInt(c.getAttribute('data-index'), 10) === info.overviewIndex);
    });
  }

  if (shouldScrollTable && info.tableDayId) {
    scrollToItineraryDay(info.tableDayId);
  }
}

// Update the Selected Day Drawer
function updateCalendarDrawer(info) {
  const drawer = document.getElementById('calSelectedDrawer');
  const drawerContent = document.getElementById('calDrawerContent');
  if (!drawer || !drawerContent || !info) return;

  const dateParts = info.dateKey.split('-');
  const dateFormatted = `${parseInt(dateParts[2], 10)} Nov 2026`;

  drawerContent.innerHTML = `
    <div class="cal-drawer-inner">
      <div class="cal-drawer-info">
        <div class="cal-drawer-title-row">
          <span class="cal-drawer-tag ${info.regionClass}">${info.flag} ${info.dayLabel} · ${info.regionLabel}</span>
          <span class="cal-drawer-title">${dateFormatted}: ${info.city}</span>
        </div>
        <div class="cal-drawer-desc">
          <strong>${info.title}:</strong> ${info.summary}
        </div>
      </div>
      <div class="cal-drawer-actions">
        <button type="button" class="cal-action-btn btn-primary" id="calBtnFlyMap">
          <span>🗺️ Focus Map on ${info.city.split('➔')[0].trim()}</span>
        </button>
        ${info.tableDayId ? `
        <button type="button" class="cal-action-btn" id="calBtnScrollTable">
          <span>📋 View Schedule in Table</span>
        </button>` : ''}
      </div>
    </div>
  `;

  drawer.classList.add('active');

  const flyBtn = document.getElementById('calBtnFlyMap');
  if (flyBtn) {
    flyBtn.addEventListener('click', () => {
      if (typeof info.overviewIndex === 'number') {
        focusOverviewStop(info.overviewIndex);
      } else if (info.coords && map) {
        map.flyTo(info.coords, info.zoom || 13, {
          duration: 1.0,
          easeLinearity: 0.25
        });
      }
    });
  }

  const scrollBtn = document.getElementById('calBtnScrollTable');
  if (scrollBtn && info.tableDayId) {
    scrollBtn.addEventListener('click', () => {
      scrollToItineraryDay(info.tableDayId);
    });
  }
}

// Filter Calendar Days by Region
function filterCalendarByRegion(region) {
  const chips = document.querySelectorAll('#calLegendBar .cal-legend-chip');
  chips.forEach(chip => {
    const chipRegion = chip.getAttribute('data-region');
    chip.classList.toggle('active', chipRegion === region);
  });

  const dayCells = document.querySelectorAll('.cal-day-cell[data-region]');
  if (region === 'all') {
    dayCells.forEach(cell => cell.classList.remove('is-dimmed'));
    return;
  }

  dayCells.forEach(cell => {
    const cellRegion = cell.getAttribute('data-region');
    cell.classList.toggle('is-dimmed', cellRegion !== region);
  });

  // Automatically focus on the first day of that region
  const firstMatchingDate = Object.keys(tripCalendarData).find(key => tripCalendarData[key].region === region);
  if (firstMatchingDate) {
    selectCalendarDay(firstMatchingDate);
  }
}

// Scroll to Itinerary Day in Master Table
function scrollToItineraryDay(dayId) {
  // Reset table filter button to 'all' if the row might be filtered out
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    if (btn.getAttribute('data-filter') === 'all') {
      btn.click();
    }
  });

  const cleanDayStr = dayId.replace('-', ' ').trim().toLowerCase();
  let row = document.getElementById(`tableRow-${dayId}`);
  if (!row) {
    const rows = document.querySelectorAll('.itinerary-table-row');
    row = Array.from(rows).find(r => {
      const badge = r.querySelector('.day-badge');
      return badge && badge.textContent.trim().toLowerCase() === cleanDayStr;
    });
  }

  if (row) {
    row.scrollIntoView({ behavior: 'smooth', block: 'center' });
    row.classList.add('table-row-highlight');
    setTimeout(() => {
      row.classList.remove('table-row-highlight');
    }, 2500);
  }
}

// Setup Map Layer Buttons
function setupMapToggles() {
  const buttons = document.querySelectorAll('.map-layer-toggles .layer-btn:not(.temple-toggle-btn)');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const layerKey = btn.getAttribute('data-layer');
      if (!layerKey || !googleLayers[layerKey] || layerKey === currentLayer) return;

      map.removeLayer(googleLayers[currentLayer]);
      googleLayers[layerKey].addTo(map);
      currentLayer = layerKey;

      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Temple Toggle Button
  const templeBtn = document.getElementById('templeToggleBtn');
  if (templeBtn && templeMarker) {
    templeBtn.addEventListener('click', () => {
      const isActive = templeBtn.classList.toggle('active');
      if (isActive) {
        templeMarker.addTo(map);
      } else {
        map.removeLayer(templeMarker);
      }
    });
  }
}

// Setup Table Filter Tabs
function setupTableFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const rows = document.querySelectorAll('.itinerary-table-row');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      rows.forEach(row => {
        if (filter === 'all') {
          row.style.display = '';
        } else {
          const region = row.getAttribute('data-region');
          row.style.display = (region === filter) ? '' : 'none';
        }
      });
    });
  });
}

// DOM Ready Init
document.addEventListener('DOMContentLoaded', () => {
  renderItineraryNavBar();
  renderTripCalendar();
  initMap();
  setupMapToggles();
  setupTableFilters();
});
