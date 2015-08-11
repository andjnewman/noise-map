// Define a Proj4Leaflet crs instance configured for British National Grid
// (EPSG:27700) and the resolutions of our base map
var crs = new L.Proj.CRS(
    'EPSG:27700',
    '+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +datum=OSGB36 +units=m +no_defs',
    {
        resolutions: [1600,800,400,200,100,50,25,10,5,2.5,1,0.5,0.25,0.125,0.0625]
    }
);

// Define a standard Leaflet map specifying our crs instance and define a WMS
// base map

var osLayer = L.tileLayer.wms('http://t0.ads.astuntechnology.com/open/osopen/service', {
            layers: 'osopen',
            format: 'image/png',
            maxZoom: 14,
            minZoom: 0,
            continuousWorld: true,
            attribution: 'Astun Data Service &copy; Ordnance Survey.'
        })


var agglomerations = L.tileLayer.wms('http://www.geostore.com/OGC/OGCInterface?SERVICE=WMS&UID=UDATAGOV2011&PASSWORD=datagov2011&INTERFACE=ENVIRONMENT&LC=40000000000000000', {
    layers: 'eainspire2011-wms-neinest00020090',
    tiled: true,
    format: 'image/png',
    transparent: true,
    maxZoom: 14,
    minZoom: 0,
    continuousWorld: true,
    attribution: 'Contains public sector information licensed under the Open Government Licence v3.0.'
})


var map = new L.Map('map', {
    crs: crs,
    layers: [osLayer, agglomerations]
});

map.setView([52.5, -1.8], 0);



// -- Load noise WMS layer (Using AONB data for now) --

var noiseLayer = L.tileLayer.wms('http://www.geostore.com/OGC/OGCInterface?SERVICE=WMS&UID=UDATAGOV2011&PASSWORD=datagov2011&INTERFACE=ENVIRONMENT&LC=40000000000000000', {
    layers: 'eainspire2011-wms-areas_of_onb_inspire',
    tiled: true,
    format: 'image/png',
    transparent: true,
    maxZoom: 14,
    minZoom: 0,
    continuousWorld: true,
    attribution: 'Contains public sector information licensed under the Open Government Licence v3.0.'
})

// -- Load noise WMS layer (Using National parks data for now) --

var noiseLayer2 = L.tileLayer.wms('http://www.geostore.com/OGC/OGCInterface?SERVICE=WMS&UID=UDATAGOV2011&PASSWORD=datagov2011&INTERFACE=ENVIRONMENT&LC=40000000000000000', {
    layers: 'eainspire2011-wms-nationalparks_eng_inspire',
    tiled: true,
    format: 'image/png',
    transparent: true,
    maxZoom: 14,
    minZoom: 0,
    continuousWorld: true,
    attribution: 'Contains public sector information licensed under the Open Government Licence v3.0.'
})

var impAreas = L.tileLayer.wms('http://www.geostore.com/OGC/OGCInterface?SERVICE=WMS&UID=UDATAGOV2011&PASSWORD=datagov2011&INTERFACE=ENVIRONMENT&LC=40000000000000000', {
    layers: 'ea-wms-eaieaew00020043',
    tiled: true,
    format: 'image/png',
    transparent: true,
    maxZoom: 14,
    minZoom: 0,
    continuousWorld: true,
    attribution: 'Contains public sector information licensed under the Open Government Licence v3.0.'
})


var noiseMaps = {
    "AONBs": noiseLayer,
    "National Parks": noiseLayer2
};


var overlayMaps = {
    "Agglomerations": agglomerations,
    "Important Areas": impAreas
};

L.control.layers(noiseMaps, overlayMaps).addTo(map);
