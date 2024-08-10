const map = L.map("map").setView(
  [22.317062807342023, 114.16406017986175],
  11.5
);

L.tileLayer(
  "https://landsd.azure-api.net/dev/osm/xyz/basemap/gs/WGS84/tile/{z}/{x}/{y}.png?key=f4d3e21d4fc14954a1d5930d4dde3809"
).addTo(map);
L.tileLayer(
  "https://mapapi.geodata.gov.hk/gs/api/v1.0.0/xyz/label/hk/en/wgs84/{z}/{x}/{y}.png",
  {
    attribution:
      '<a href="https://api.portal.hkmapservice.gov.hk/disclaimer" target="_blank" class="copyrightDiv">&copy;Map information from Lands Department </a><img src="https://api.hkmapservice.gov.hk/mapapi/landsdlogo.jpg" height=20></img>',
    maxZoom: 18
  }
).addTo(map);

const stations = {
  HOK: { name: "Hong Kong", coords: [22.2849, 114.158917] },
  KOW: { name: "Kowloon", coords: [22.3032, 114.1606] },
  TSY: { name: "Tsing Yi", coords: [22.3563, 114.1092] },
  AIR: { name: "Airport", coords: [22.3152, 113.9344] },
  AWE: { name: "AsiaWorld-Expo", coords: [22.3215, 113.9427] },
  ADM: { name: "Admiralty", coords: [22.2797, 114.1646] },
  OCP: { name: "Ocean Park", coords: [22.24881349458379, 114.17453540443346] },
  WCH: {
    name: "Wong Chuk Hang",
    coords: [22.24797936737361, 114.16796935686534]
  },
  LET: { name: "Lei Tung", coords: [22.2429, 114.1563] },
  SOH: { name: "South Horizons", coords: [22.2405, 114.1521] },
  KET: {
    name: "Kennedy Town",
    coords: [22.28117564021584, 114.12865771328843]
  },
  HKU: { name: "HKU", coords: [22.284023300580323, 114.13506763399747] },
  SYP: {
    name: "Sai Ying Pun",
    coords: [22.285483124781024, 114.14275612875086]
  },
  SHW: { name: "Sheung Wan", coords: [22.286463274439576, 114.15192292968501] },
  CEN: { name: "Central", coords: [22.282090245824126, 114.15827857859333] },
  ADM: { name: "Admiralty", coords: [22.27940135144068, 114.16445585840438] },
  WAC: { name: "Wan Chai", coords: [22.277554863766415, 114.1731287412667] },
  CAB: {
    name: "Causeway Bay",
    coords: [22.280394003234402, 114.18509897528166]
  },
  TIH: { name: "Tin Hau", coords: [22.282381771324765, 114.19170530925007] },
  FOH: {
    name: "Fortress Hill",
    coords: [22.287994335295775, 114.19358836692963]
  },
  NOP: {
    name: "North Point",
    coords: [22.291292204653345, 114.20059915863426]
  },
  QUB: { name: "Quarry Bay", coords: [22.28787341160942, 114.20986876812549] },
  TAK: { name: "Tai Koo", coords: [22.28451451596163, 114.21654547991612] },
  SWH: { name: "Sai Wan Ho", coords: [22.28463447785299, 114.21641583502867] },
  SKW: {
    name: "Shau Kei Wan",
    coords: [22.279236088136386, 114.22892656683014]
  },
  HFC: {
    name: "Heng Fa Chuen",
    coords: [22.276836736880473, 114.24001120484778]
  },
  CHW: { name: "Chai Wan", coords: [22.26459940580302, 114.23715901734555] },
  TST: {
    name: "Tsim Sha Tsui",
    coords: [22.297619770197358, 114.17224051159752]
  },
  JOR: { name: "Jordan", coords: [22.30491709268858, 114.17174755657143] },
  YMT: { name: "Yau Ma Tei", coords: [22.313004513248, 114.17076164640986] },
  MOK: { name: "Mong Kok", coords: [22.319236980078735, 114.16934850863926] },
  PRE: {
    name: "Prince Edward",
    coords: [22.325104365205465, 114.16842832582543]
  },
  SSP: {
    name: "Sham Shui Po",
    coords: [22.330667513014806, 114.16228281930647]
  },
  CSW: {
    name: "Cheung Sha Wan",
    coords: [22.33559208147661, 114.15603872230946]
  },
  LCK: { name: "Lai Chi Kok", coords: [22.33732475864772, 114.14808571409576] },
  MEF: { name: "Mei Foo", coords: [22.33762873497874, 114.1380622947215] },
  LAK: { name: "Lai King", coords: [22.348389066730554, 114.12613278287505] },
  KWF: { name: "Kwai Fong", coords: [22.35686908189873, 114.1278088299619] },
  KWH: { name: "Kwai Hing", coords: [22.363023029334933, 114.13133220317336] },
  TWH: { name: "Tai Wo Hau", coords: [22.370803177199072, 114.1249566513258] },
  TSW: { name: "Tsuen Wan", coords: [22.37384278475198, 114.11774296263253] },
  WKS: { name: "Wu Kai Sha", coords: [22.429229582663364, 114.24387294415405] },
  MOS: { name: "Ma On Shan", coords: [22.424822191597887, 114.2316487651872] },
  HEO: { name: "Heng On", coords: [22.417336863537333, 114.22569438155169] },
  TSH: {
    name: "Tai Shui Hang",
    coords: [22.408403764975308, 114.22270435701544]
  },
  SHM: { name: "Shek Mun", coords: [22.387686046713966, 114.20838364505583] },
  CIO: { name: "City One", coords: [22.383022085008644, 114.20345335590756] },
  STW: { name: "Sha Tin Wai", coords: [22.37713054156765, 114.19514771513639] },
  CKT: {
    name: "Che Kung Temple",
    coords: [22.374710728338265, 114.18589394137192]
  },
  TAW: { name: "Tai Wai", coords: [22.37267664989015, 114.17872605923469] },
  HIK: { name: "Hin Keng", coords: [22.3638736571312, 114.17083759662282] },
  DIH: {
    name: "Diamond Hill",
    coords: [22.339909368735665, 114.20166224885135]
  },
  KAT: { name: "Kai Tak", coords: [22.330683332546002, 114.19946258116653] },
  SUW: {
    name: "Sung Wong Toi",
    coords: [22.325877132658942, 114.1913465668777]
  },
  TKW: { name: "To Kwa Wan", coords: [22.31731677581214, 114.1876678125533] },
  HOM: { name: "Ho Man Tin", coords: [22.309282192543247, 114.18269959795026] },
  HUH: { name: "Hung Hom", coords: [22.3028962990134, 114.181941091904] },
  ETS: {
    name: "East Tsim Sha Tsui",
    coords: [22.294895640514955, 114.17335852265327]
  },
  AUS: { name: "Austin", coords: [22.30522948633707, 114.16618715540653] },
  NAC: { name: "Nam Cheong", coords: [22.326771761771894, 114.15369908516267] },
  TWW: {
    name: "Tsuen Wan West",
    coords: [22.36847425087417, 114.10976415809469]
  },
  KSR: {
    name: "Kam Sheung Road",
    coords: [22.434935160465233, 114.06367709971686]
  },
  YUL: { name: "Yuen Long", coords: [22.44616049460102, 114.03465978941271] },
  LOP: { name: "Long Ping", coords: [22.44766603999573, 114.02551585959529] },
  TIS: { name: "Tin Shui Wai", coords: [22.44820803235771, 114.0047085321762] },
  SIH: { name: "Siu Hong", coords: [22.41177093211456, 113.97894610578254] },
  TUM: { name: "Tuen Mun", coords: [22.39487727286792, 113.97313392722796] },
  WHA: { name: "Whampoa", coords: [22.30498573051942, 114.18976866081653] },
  HOM: { name: "Ho Man Tin", coords: [22.309519675053924, 114.18247548522176] },
  SKM: { name: "Shek Kip Mei", coords: [22.332151495398556, 114.168853839939] },
  KOT: {
    name: "Kowloon Tong",
    coords: [22.337184256361084, 114.17614701528204]
  },
  LOF: { name: "Lok Fu", coords: [22.33807657085907, 114.18687454340554] },
  WTS: {
    name: "Wong Tai Sin",
    coords: [22.341824229489916, 114.19393618923924]
  },
  DIH: {
    name: "Diamond Hill",
    coords: [22.340039642751474, 114.20176960006323]
  },
  CHH: { name: "Choi Hung", coords: [22.334864211891578, 114.2090241871905] },
  KOB: { name: "Kowloon Bay", coords: [22.323513284251206, 114.2141178334909] },
  NTK: {
    name: "Ngau Tau Kok",
    coords: [22.315445711587767, 114.21901853878472]
  },
  KWT: { name: "Kwun Tong", coords: [22.31233992857014, 114.22619594936336] },
  LAT: { name: "Lam Tin", coords: [22.30698496824212, 114.23275594813994] },
  YAT: { name: "Yau Tong", coords: [22.298166686354055, 114.23700065351255] },
  TIK: {
    name: "Tiu Keng Leng",
    coords: [22.304485916544806, 114.25286041631382]
  },
  TKO: { name: "Tseung Kwan O", coords: [22.3077, 114.2601] },
  HAH: { name: "Hang Hau", coords: [22.3227, 114.2579] },
  POA: { name: "Po Lam", coords: [22.3156, 114.2644] },
  EXC: { name: "Exhibition Centre", coords: [22.2821, 114.1755] },
  MKK: { name: "Mong Kok East", coords: [22.3221, 114.1727] },
  SHT: { name: "Sha Tin", coords: [22.3819, 114.1871] },
  FOT: { name: "Fo Tan", coords: [22.3952, 114.1982] },
  UNI: { name: "University", coords: [22.4132, 114.2098] },
  TAP: { name: "Tai Po Market", coords: [22.4447, 114.1704] },
  TWO: { name: "Tai Wo", coords: [22.4511, 114.1613] },
  FAN: { name: "Fanling", coords: [22.4922, 114.1388] },
  SHS: { name: "Sheung Shui", coords: [22.5012, 114.128] },
  LOW: { name: "Lo Wu", coords: [22.528309810437488, 114.11326498525565] },
  OLY: { name: "Olympic", coords: [22.3179, 114.1603] },
  SUN: { name: "Sunny Bay", coords: [22.3319, 114.029] },
  TUC: { name: "Tung Chung", coords: [22.2893, 113.9414] }
};

const Eline = [
  "ADM",
  "EXC",
  "HUH",
  "MKK",
  "KOT",
  "TAW",
  "SHT",
  "FOT",
  "UNI",
  "TAP",
  "TWO",
  "FAN",
  "SHS",
  "LOW",
  "LMC"
];
const airportExpressLine = ["HOK", "KOW", "TSY", "AIR", "AWE"];
const southIslandLine = ["ADM", "OCP", "WCH", "LET", "SOH"];
const IslandLine = [
  "KET",
  "HKU",
  "SYP",
  "SHW",
  "CEN",
  "ADM",
  "WAC",
  "CAB",
  "TIH",
  "FOH",
  "NOP",
  "QUB",
  "TAK",
  "SWH",
  "SKW",
  "HFC",
  "CHW"
];
const TWLine = [
  "CEN",
  "ADM",
  "TST",
  "JOR",
  "YMT",
  "MOK",
  "PRE",
  "SSP",
  "CSW",
  "LCK",
  "MEF",
  "LAK",
  "KWF",
  "KWH",
  "TWH",
  "TSW"
];
const TMLine = [
  "WKS",
  "MOS",
  "HEO",
  "TSH",
  "SHM",
  "CIO",
  "STW",
  "CKT",
  "TAW",
  "HIK",
  "DIH",
  "KAT",
  "SUW",
  "TKW",
  "HOM",
  "HUH",
  "ETS",
  "AUS",
  "NAC",
  "MEF",
  "TWW",
  "KSR",
  "YUL",
  "LOP",
  "TIS",
  "SIH",
  "TUM"
];
const TCLine = ["HOK", "KOW", "OLY", "NAC", "LAK", "TSY", "SUN", "TUC"];
const KTLine = [
  "WHA",
  "HOM",
  "YMT",
  "MOK",
  "PRE",
  "SKM",
  "KOT",
  "LOF",
  "WTS",
  "DIH",
  "CHH",
  "KOB",
  "NTK",
  "KWT",
  "LAT",
  "YAT",
  "TIK"
];

const TKOLine = ["NOP", "QUB", "YAT", "TIK", "TKO", "HAH", "POA"];

const ELine = [
  "ADM",
  "EXC",
  "HUH",
  "MKK",
  "KOT",
  "TAW",
  "SHT",
  "FOT",
  "UNI",
  "TAP",
  "TWO",
  "FAN",
  "SHS",
  "LOW"
];

const plotLine = (lineStations, color) => {
  const polylineCoords = lineStations.map(
    (station) => stations[station].coords
  );
  L.polyline(polylineCoords, {
    color: color,
    weight: 6.5,
    opacity: 0.8
  }).addTo(map);

  lineStations.forEach((station) => {
    L.circleMarker(stations[station].coords, {
      radius: 6,
      fillColor: "black",
      color: "black",
      weight: 1,
      opacity: 1,
      fillOpacity: 1
    })
      .addTo(map)
      .bindPopup(stations[station].name);
  });
};

plotLine(airportExpressLine, "#1b7780");
plotLine(southIslandLine, "#a4e336");
plotLine(IslandLine, "#035afc");
plotLine(TWLine, "#ff0011");
plotLine(TMLine, "#633c0c");
plotLine(KTLine, "#0eb01c");
plotLine(TKOLine, "#8502e3");
plotLine(ELine, "#02a0e3");
plotLine(TCLine, "#ffc642");

async function fetchSchedule(line, stationCode) {
  try {
    const response = await fetch(
      `https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php?line=${line}&sta=${stationCode}`
    );
    if (!response.ok)
      throw new Error(`Error fetching schedule for station ${stationCode}`);
    return response.json();
  } catch (error) {
    console.error(error);
    return { data: {} };
  }
}

function calculateDistance(p1, p2) {
  const R = 6371000;
  const φ1 = (p1[0] * Math.PI) / 180;
  const φ2 = (p2[0] * Math.PI) / 180;
  const Δφ = ((p2[0] - p1[0]) * Math.PI) / 180;
  const Δλ = ((p2[1] - p1[1]) * Math.PI) / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
}

function calculateTrainPosition(polyline, elapsedTime, totalTime) {
  const ratio = elapsedTime / totalTime;
  const totalLength = calculatePolylineLength(polyline);
  const distance = ratio * totalLength;

  let accumulatedDistance = 0;
  for (let i = 0; i < polyline.length - 1; i++) {
    const segment = [polyline[i], polyline[i + 1]];
    const segmentLength = calculateDistance(segment[0], segment[1]);

    if (accumulatedDistance + segmentLength > distance) {
      const segmentRatio = (distance - accumulatedDistance) / segmentLength;
      const lat =
        segment[0][0] + (segment[1][0] - segment[0][0]) * segmentRatio;
      const lon =
        segment[0][1] + (segment[1][1] - segment[0][1]) * segmentRatio;
      return [lat, lon];
    }

    accumulatedDistance += segmentLength;
  }

  return polyline[polyline.length - 1];
}

function calculatePolylineLength(polyline) {
  let length = 0;
  for (let i = 0; i < polyline.length - 1; i++) {
    length += calculateDistance(polyline[i], polyline[i + 1]);
  }
  return length;
}

async function plotTrains(line, lineStations) {
  const trainMarkers = [];

  for (let i = 0; i < lineStations.length; i++) {
    const currentStation = lineStations[i];
    const nextStation = lineStations[i + 1];

    const scheduleData = await fetchSchedule(line, currentStation);
    const trainDataUp =
      scheduleData.data[`${line}-${currentStation}`]?.UP || [];
    const trainDataDown =
      scheduleData.data[`${line}-${currentStation}`]?.DOWN || [];

    const sortedTrainDataUp = trainDataUp.sort(
      (a, b) => new Date(a.time) - new Date(b.time)
    );
    const sortedTrainDataDown = trainDataDown.sort(
      (a, b) => new Date(a.time) - new Date(b.time)
    );

    if (i < lineStations.length - 1 && sortedTrainDataUp.length > 0) {
      const train = sortedTrainDataUp[0];
      const polyline = [
        stations[currentStation].coords,
        stations[nextStation].coords
      ];
      const marker = L.marker(stations[currentStation].coords, {
        icon: L.divIcon({
          className: "train-rect-up",
          iconSize: [8, 8]
        })
      }).addTo(map);

      marker.bindPopup(
        `Next Station: ${stations[nextStation].name}<br>ETA: ${train.time}`
      );

      trainMarkers.push({
        marker,
        polyline,
        totalTime: parseInt(train.ttnt) * 60,
        elapsedTime: 0,
        isActive: true,
        nextStation: stations[nextStation].name,
        eta: train.time,
        currentStationIndex: i,
        direction: "up"
      });
    }

    if (i > 0 && sortedTrainDataDown.length > 0) {
      const train = sortedTrainDataDown[0];
      const prevStation = lineStations[i - 1];
      const polyline = [
        stations[currentStation].coords,
        stations[prevStation].coords
      ];
      const marker = L.marker(stations[currentStation].coords, {
        icon: L.divIcon({
          className: "train-rect-down",
          iconSize: [8, 8]
        })
      }).addTo(map);

      marker.bindPopup(
        `Next Station: ${stations[prevStation].name}<br>ETA: ${train.time}`
      );

      trainMarkers.push({
        marker,
        polyline,
        totalTime: parseInt(train.ttnt) * 60,
        elapsedTime: 0,
        isActive: true,
        nextStation: stations[prevStation].name,
        eta: train.time,
        currentStationIndex: i,
        direction: "down"
      });
    }
  }

  animateTrains(trainMarkers, line, lineStations);
}

function animateTrains(trainMarkers, line, lineStations) {
  setInterval(() => {
    trainMarkers.forEach(async (trainMarker) => {
      if (trainMarker.isActive) {
        trainMarker.elapsedTime += 1;

        if (trainMarker.elapsedTime >= trainMarker.totalTime) {
          // Train has arrived at the next station
          let nextStationIndex;
          if (trainMarker.direction === "up") {
            nextStationIndex = trainMarker.currentStationIndex + 1;
          } else {
            nextStationIndex = trainMarker.currentStationIndex - 1;
          }

          if (nextStationIndex >= 0 && nextStationIndex < lineStations.length) {
            // Move to the next station
            const nextStation = lineStations[nextStationIndex];
            const scheduleData = await fetchSchedule(line, nextStation);
            const trainData =
              trainMarker.direction === "up"
                ? scheduleData.data[`${line}-${nextStation}`]?.UP || []
                : scheduleData.data[`${line}-${nextStation}`]?.DOWN || [];

            const sortedTrainData = trainData.sort(
              (a, b) => new Date(a.time) - new Date(b.time)
            );

            if (sortedTrainData.length > 0) {
              const train = sortedTrainData[0];
              const nextNextStation =
                trainMarker.direction === "up"
                  ? lineStations[nextStationIndex + 1]
                  : lineStations[nextStationIndex - 1];

              if (nextNextStation) {
                trainMarker.polyline = [
                  stations[nextStation].coords,
                  stations[nextNextStation].coords
                ];
                trainMarker.totalTime = parseInt(train.ttnt) * 60;
                trainMarker.elapsedTime = 0;
                trainMarker.nextStation = stations[nextNextStation].name;
                trainMarker.eta = train.time;
                trainMarker.currentStationIndex = nextStationIndex;

                trainMarker.marker.setLatLng(stations[nextStation].coords);
                trainMarker.marker.setPopupContent(
                  `Next Station: ${trainMarker.nextStation}<br>ETA: ${trainMarker.eta}`
                );
              } else {
                trainMarker.isActive = false;
                map.removeLayer(trainMarker.marker);
              }
            } else {
              // No more trains scheduled
              trainMarker.isActive = false;
              map.removeLayer(trainMarker.marker);
            }
          } else {
            // End of the line
            trainMarker.isActive = false;
            map.removeLayer(trainMarker.marker);
          }
        } else {
          const position = calculateTrainPosition(
            trainMarker.polyline,
            trainMarker.elapsedTime,
            trainMarker.totalTime
          );
          trainMarker.marker.setLatLng(position);

          const remainingTime = Math.max(
            0,
            trainMarker.totalTime - trainMarker.elapsedTime
          );
          const nextStation = trainMarker.nextStation;
          trainMarker.marker.setPopupContent(
            `Next Station: ${nextStation}<br>ETA: ${Math.ceil(
              remainingTime / 60
            )} minutes`
          );
        }
      }
    });
  }, 1000);
}

// Plot trains for both lines
plotTrains("AEL", airportExpressLine);
plotTrains("SIL", southIslandLine);
plotTrains("ISL", IslandLine);
plotTrains("TWL", TWLine);
plotTrains("TML", TMLine);
plotTrains("KTL", KTLine);
plotTrains("TKL", TKOLine);
plotTrains("EAL", ELine);
plotTrains("TCL", TCLine);
