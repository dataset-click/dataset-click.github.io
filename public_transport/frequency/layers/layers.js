ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([144.253189, -38.629480, 146.383386, -37.275232]);
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
var format_PTVTransit_1 = new ol.format.GeoJSON();
var features_PTVTransit_1 = format_PTVTransit_1.readFeatures(json_PTVTransit_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PTVTransit_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PTVTransit_1.addFeatures(features_PTVTransit_1);
var lyr_PTVTransit_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PTVTransit_1, 
                style: style_PTVTransit_1,
                interactive: false,
    title: 'PTV Transit<br />\
    <img src="styles/legend/PTVTransit_1_0.png" /> <100<br />\
    <img src="styles/legend/PTVTransit_1_1.png" /> 100 - 150<br />\
    <img src="styles/legend/PTVTransit_1_2.png" /> 150 - 200<br />\
    <img src="styles/legend/PTVTransit_1_3.png" /> 200 - 250<br />\
    <img src="styles/legend/PTVTransit_1_4.png" /> >250<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_PTVTransit_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_PTVTransit_1];
lyr_PTVTransit_1.set('fieldAliases', {'lga_code': 'lga_code', 'lga_name': 'lga_name', 'transit': 'transit', });
lyr_PTVTransit_1.set('fieldImages', {'lga_code': 'TextEdit', 'lga_name': 'TextEdit', 'transit': 'TextEdit', });
lyr_PTVTransit_1.set('fieldLabels', {'lga_code': 'header label', 'lga_name': 'inline label', 'transit': 'inline label', });
lyr_PTVTransit_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});