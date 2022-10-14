ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([144.253189, -38.635585, 146.383386, -37.269127]);
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
var format_victoria_1 = new ol.format.GeoJSON();
var features_victoria_1 = format_victoria_1.readFeatures(json_victoria_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_victoria_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_victoria_1.addFeatures(features_victoria_1);
var lyr_victoria_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_victoria_1, 
                style: style_victoria_1,
                interactive: false,
                title: '<img src="styles/legend/victoria_1.png" /> victoria'
            });
var format_PTVTransit_2 = new ol.format.GeoJSON();
var features_PTVTransit_2 = format_PTVTransit_2.readFeatures(json_PTVTransit_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PTVTransit_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PTVTransit_2.addFeatures(features_PTVTransit_2);
var lyr_PTVTransit_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PTVTransit_2, 
                style: style_PTVTransit_2,
                interactive: true,
    title: 'PTV Transit<br />\
    <img src="styles/legend/PTVTransit_2_0.png" /> <100<br />\
    <img src="styles/legend/PTVTransit_2_1.png" /> 100 - 150<br />\
    <img src="styles/legend/PTVTransit_2_2.png" /> 150 - 200<br />\
    <img src="styles/legend/PTVTransit_2_3.png" /> 200 - 250<br />\
    <img src="styles/legend/PTVTransit_2_4.png" /> >250<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_victoria_1.setVisible(false);lyr_PTVTransit_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_victoria_1,lyr_PTVTransit_2];
lyr_victoria_1.set('fieldAliases', {'id': 'id', 'name': 'name', 'description': 'description', });
lyr_PTVTransit_2.set('fieldAliases', {'lga_code': 'lga_code', 'lga_name': 'lga_name', 'transit': 'transit', });
lyr_victoria_1.set('fieldImages', {'id': '', 'name': '', 'description': '', });
lyr_PTVTransit_2.set('fieldImages', {'lga_code': 'TextEdit', 'lga_name': 'TextEdit', 'transit': 'TextEdit', });
lyr_victoria_1.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'description': 'no label', });
lyr_PTVTransit_2.set('fieldLabels', {'lga_code': 'header label', 'lga_name': 'inline label', 'transit': 'inline label', });
lyr_PTVTransit_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});