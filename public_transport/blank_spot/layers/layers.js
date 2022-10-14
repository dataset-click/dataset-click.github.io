ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([144.393374, -38.562599, 146.261118, -37.364496]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_metro_1 = new ol.format.GeoJSON();
var features_metro_1 = format_metro_1.readFeatures(json_metro_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_metro_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_metro_1.addFeatures(features_metro_1);
var lyr_metro_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_metro_1, 
                style: style_metro_1,
                interactive: false,
                title: '<img src="styles/legend/metro_1.png" /> metro'
            });
var format_blankspot_2 = new ol.format.GeoJSON();
var features_blankspot_2 = format_blankspot_2.readFeatures(json_blankspot_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_blankspot_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_blankspot_2.addFeatures(features_blankspot_2);
var lyr_blankspot_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_blankspot_2, 
                style: style_blankspot_2,
                interactive: false,
                title: '<img src="styles/legend/blankspot_2.png" /> blank spot'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_metro_1.setVisible(true);lyr_blankspot_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_metro_1,lyr_blankspot_2];
lyr_metro_1.set('fieldAliases', {'gcc_name16': 'gcc_name16', });
lyr_blankspot_2.set('fieldAliases', {});
lyr_metro_1.set('fieldImages', {'gcc_name16': '', });
lyr_blankspot_2.set('fieldImages', {});
lyr_metro_1.set('fieldLabels', {'gcc_name16': 'no label', });
lyr_blankspot_2.set('fieldLabels', {});
lyr_blankspot_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});