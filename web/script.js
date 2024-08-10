function styleIsolines(feature) {
  return {
    color: "#ff473d",
    opacity: 0.5,
    fillOpacity: 0.2
  };
}

function highlightIsolines(e) {
  e.target.setStyle({
    fillColor: "#ff473d",
    dashArray: "1,13",
    weight: 4,
    fillOpacity: 0.5,
    opacity: 1
  });
}

function resetIsolines(e) {
  reachabilityControl.isolinesGroup.resetStyle(e.target);
}

function clickIsolines(e) {
  const props = e.target.feature.properties;
  const popupContent = `
    Mode of travel: ${props["Travel mode"]}<br />
    Range: 0 - ${props["Range"]} ${props["Range units"]}<br />
    Area: ${props["Area"]} ${props["Area units"]}<br />
    Population: ${props["Population"]}
    ${
      props["Reach factor"]
        ? `<br />Reach factor: ${props["Reach factor"]}`
        : ""
    }
  `;
  e.target.bindPopup(popupContent).openPopup();
}

function isolinesOrigin(latLng) {
  return L.circleMarker(latLng, {
    radius: 4,
    weight: 2,
    color: "#ff473d",
    fillColor: "#fff",
    fillOpacity: 1
  });
}

const map = L.map("map", {
  center: [22.28063181527956, 114.16514739455307],
  zoom: 15,
  minZoom: 10
});

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

const reachabilityControl = L.control
  .reachability({
    apiKey: "5b3ce3597851110001cf6248c9f85cae50384963b985be5b9d179444", // Replace with your own API key
    styleFn: styleIsolines,
    mouseOverFn: highlightIsolines,
    mouseOutFn: resetIsolines,
    clickFn: clickIsolines,
    markerFn: isolinesOrigin,
    expandButtonContent: "",
    expandButtonStyleClass: "reachability-control-expand-button fa fa-bullseye",
    collapseButtonContent: "",
    collapseButtonStyleClass:
      "reachability-control-collapse-button fa fa-caret-up",
    drawButtonContent: "",
    drawButtonStyleClass: "fa fa-pencil",
    deleteButtonContent: "",
    deleteButtonStyleClass: "fa fa-trash",
    distanceButtonContent: "",
    distanceButtonStyleClass: "fa fa-road",
    timeButtonContent: "",
    timeButtonStyleClass: "fa fa-clock-o",
    travelModeButton1Content: "",
    travelModeButton1StyleClass: "fa fa-car",
    travelModeButton2Content: "",
    travelModeButton2StyleClass: "fa fa-bicycle",
    travelModeButton3Content: "",
    travelModeButton3StyleClass: "fa fa-male",
    travelModeButton4Content: "",
    travelModeButton4StyleClass: "fa fa-wheelchair-alt"
  })
  .addTo(map);

map.on("reachability:error", () => {
  console.error("API call error.");
  alert(
    "Unfortunately, there has been an error calling the API. Check the console for details."
  );
});

map.on("reachability:no_data", () => {
  console.warn("No data received from API.");
  alert("Unfortunately, no data was received from the API.");
});

L.geolet({
  position: "bottomleft"
}).addTo(map);