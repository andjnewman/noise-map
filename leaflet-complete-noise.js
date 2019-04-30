// Define a Proj4Leaflet crs instance configured for British National Grid
// (EPSG:27700) and the resolutions of our base map
var crs = new L.Proj.CRS(
    'EPSG:27700',
    '+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +datum=OSGB36 +units=m +no_defs',
    {
        resolutions: [1600,800,400,200,100,50,25,10,5,2.5,1,0.5,0.25,0.125,0.0625]
    }
);

// base map

var osLayer = L.tileLayer.wms('http://t0.ads.astuntechnology.com/open/osopen/service', {
            layers: 'osopen',
            format: 'image/png',
            maxZoom: 14,
            minZoom: 0,
            continuousWorld: true,
            attribution: 'Astun Data Service &copy; Ordnance Survey.'
        })


// -- Load Agglomerations WMS layer--


var agglomerations = L.tileLayer.wms('http://www.geostore.com/OGC/OGCInterface?SERVICE=WMS&UID=UDATAGOV2011&PASSWORD=datagov2011&INTERFACE=ENVIRONMENT&LC=40000000000000000', {
    layers: 'eainspire2011-wms-env_noise_dir_aggloms',
    tiled: true,
    format: 'image/png',
    transparent: true,
    maxZoom: 14,
    minZoom: 0,
    continuousWorld: true,
    attribution: 'Contains public sector information licensed under the Open Government Licence v3.0.'
})



// -- Load imp areas WMS layer--

var impAreas = L.tileLayer.wms('http://www.geostore.com/OGC/OGCInterface?SERVICE=WMS&UID=UDATAGOV2011&PASSWORD=datagov2011&INTERFACE=ENVIRONMENT&LC=40000000000000000', {
    layers: 'eainspire2011-wms-noise_action_plan_imp_areas',
    tiled: true,
    format: 'image/png',
    transparent: true,
    maxZoom: 14,
    minZoom: 0,
    continuousWorld: true,
    attribution: 'Contains public sector information licensed under the Open Government Licence v3.0.'
})

// -- Load noise WMS layer--

var roadlden = L.tileLayer.wms('https://environment.data.gov.uk/spatialdata/road-noise-lden-england-round-2/wms', {
    layers: 'eainspire2011-wms-rd_noise_eng_lden',
    tiled: true,
    format: 'image/png',
    transparent: true,
    maxZoom: 14,
    minZoom: 0,
    continuousWorld: true,
    attribution: 'Contains public sector information licensed under the Open Government Licence v3.0.'
})


// -- Load noise WMS layer--

var roadlnight = L.tileLayer.wms('http://www.geostore.com/OGC/OGCInterface?SERVICE=WMS&UID=UDATAGOV2011&PASSWORD=datagov2011&INTERFACE=ENVIRONMENT&LC=40000000000000000', {
    layers: 'eainspire2011-wms-rd_noise_eng_lngt',
    tiled: true,
    format: 'image/png',
    transparent: true,
    maxZoom: 14,
    minZoom: 0,
    continuousWorld: true,
    attribution: 'Contains public sector information licensed under the Open Government Licence v3.0.'
})

// -- Load noise WMS layer--

var roadlq16 = L.tileLayer.wms('http://www.geostore.com/OGC/OGCInterface?SERVICE=WMS&UID=UDATAGOV2011&PASSWORD=datagov2011&INTERFACE=ENVIRONMENT&LC=40000000000000000', {
    layers: 'eainspire2011-wms-rd_noise_eng_lq16',
    tiled: true,
    format: 'image/png',
    transparent: true,
    maxZoom: 14,
    minZoom: 0,
    continuousWorld: true,
    attribution: 'Contains public sector information licensed under the Open Government Licence v3.0.'
})

// -- Load noise WMS layer--

var raillden = L.tileLayer.wms('http://www.geostore.com/OGC/OGCInterface?SERVICE=WMS&UID=UDATAGOV2011&PASSWORD=datagov2011&INTERFACE=ENVIRONMENT&LC=40000000000000000', {
    layers: 'eainspire2011-wms-rl_noise_eng_lden',
    tiled: true,
    format: 'image/png',
    transparent: true,
    maxZoom: 14,
    minZoom: 0,
    continuousWorld: true,
    attribution: 'Contains public sector information licensed under the Open Government Licence v3.0.'
})


// -- Load noise WMS layer--

var raillnight = L.tileLayer.wms('http://www.geostore.com/OGC/OGCInterface?SERVICE=WMS&UID=UDATAGOV2011&PASSWORD=datagov2011&INTERFACE=ENVIRONMENT&LC=40000000000000000', {
    layers: 'eainspire2011-wms-rl_noise_eng_lngt',
    tiled: true,
    format: 'image/png',
    transparent: true,
    maxZoom: 14,
    minZoom: 0,
    continuousWorld: true,
    attribution: 'Contains public sector information licensed under the Open Government Licence v3.0.'
})

// -- Load noise WMS layer--

var raillq16 = L.tileLayer.wms('http://www.geostore.com/OGC/OGCInterface?SERVICE=WMS&UID=UDATAGOV2011&PASSWORD=datagov2011&INTERFACE=ENVIRONMENT&LC=40000000000000000', {
    layers: 'eainspire2011-wms-rl_noise_eng_lq16',
    tiled: true,
    format: 'image/png',
    transparent: true,
    maxZoom: 14,
    minZoom: 0,
    continuousWorld: true,
    attribution: 'Contains public sector information licensed under the Open Government Licence v3.0.'
})

var noiseMaps = {
    "Important Areas": impAreas,
    "Roads Lden": roadlden,
    "Roads Lnight": roadlnight,
    "Roads Laeq16h": roadlq16,
    "Rail Lden": raillden,
    "Rail Lnight": raillnight,
    "Rail Laeq16h": raillq16,
    "Agglomerations": agglomerations,
    "OS Map": osLayer
}

var map = new L.Map('map', {
    crs: crs,
    layers: [agglomerations, osLayer]
});

map.setView([52.5, -1.8], 0);

L.control.layers(null,noiseMaps).addTo(map);
