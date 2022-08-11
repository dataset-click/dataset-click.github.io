var wms_layers = [];


        var lyr_Wikimediaunlabelledlayer_0 = new ol.layer.Tile({
            'title': 'Wikimedia unlabelled layer',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://maps.wikimedia.org/osm/{z}/{x}/{y}.png'
            })
        });
var format_Victoria_1 = new ol.format.GeoJSON();
var features_Victoria_1 = format_Victoria_1.readFeatures(json_Victoria_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Victoria_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Victoria_1.addFeatures(features_Victoria_1);
var lyr_Victoria_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Victoria_1, 
                style: style_Victoria_1,
                interactive: true,
                title: '<img src="styles/legend/Victoria_1.png" /> Victoria'
            });
var format_MetropolitanLGA_2 = new ol.format.GeoJSON();
var features_MetropolitanLGA_2 = format_MetropolitanLGA_2.readFeatures(json_MetropolitanLGA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MetropolitanLGA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MetropolitanLGA_2.addFeatures(features_MetropolitanLGA_2);
var lyr_MetropolitanLGA_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MetropolitanLGA_2, 
                style: style_MetropolitanLGA_2,
                interactive: true,
    title: 'Metropolitan LGA<br />\
    <img src="styles/legend/MetropolitanLGA_2_0.png" /> 20660<br />\
    <img src="styles/legend/MetropolitanLGA_2_1.png" /> 20910<br />\
    <img src="styles/legend/MetropolitanLGA_2_2.png" /> 21110<br />\
    <img src="styles/legend/MetropolitanLGA_2_3.png" /> 21180<br />\
    <img src="styles/legend/MetropolitanLGA_2_4.png" /> 21450<br />\
    <img src="styles/legend/MetropolitanLGA_2_5.png" /> 21610<br />\
    <img src="styles/legend/MetropolitanLGA_2_6.png" /> 21890<br />\
    <img src="styles/legend/MetropolitanLGA_2_7.png" /> 22170<br />\
    <img src="styles/legend/MetropolitanLGA_2_8.png" /> 22310<br />\
    <img src="styles/legend/MetropolitanLGA_2_9.png" /> 22670<br />\
    <img src="styles/legend/MetropolitanLGA_2_10.png" /> 23110<br />\
    <img src="styles/legend/MetropolitanLGA_2_11.png" /> 23270<br />\
    <img src="styles/legend/MetropolitanLGA_2_12.png" /> 23430<br />\
    <img src="styles/legend/MetropolitanLGA_2_13.png" /> 23670<br />\
    <img src="styles/legend/MetropolitanLGA_2_14.png" /> 24210<br />\
    <img src="styles/legend/MetropolitanLGA_2_15.png" /> 24330<br />\
    <img src="styles/legend/MetropolitanLGA_2_16.png" /> 24410<br />\
    <img src="styles/legend/MetropolitanLGA_2_17.png" /> 24600<br />\
    <img src="styles/legend/MetropolitanLGA_2_18.png" /> 24650<br />\
    <img src="styles/legend/MetropolitanLGA_2_19.png" /> 24970<br />\
    <img src="styles/legend/MetropolitanLGA_2_20.png" /> 25060<br />\
    <img src="styles/legend/MetropolitanLGA_2_21.png" /> 25250<br />\
    <img src="styles/legend/MetropolitanLGA_2_22.png" /> 25340<br />\
    <img src="styles/legend/MetropolitanLGA_2_23.png" /> 25710<br />\
    <img src="styles/legend/MetropolitanLGA_2_24.png" /> 25900<br />\
    <img src="styles/legend/MetropolitanLGA_2_25.png" /> 26350<br />\
    <img src="styles/legend/MetropolitanLGA_2_26.png" /> 26980<br />\
    <img src="styles/legend/MetropolitanLGA_2_27.png" /> 27070<br />\
    <img src="styles/legend/MetropolitanLGA_2_28.png" /> 27260<br />\
    <img src="styles/legend/MetropolitanLGA_2_29.png" /> 27350<br />\
    <img src="styles/legend/MetropolitanLGA_2_30.png" /> 27450<br />\
    <img src="styles/legend/MetropolitanLGA_2_31.png" /> <br />'
        });

lyr_Wikimediaunlabelledlayer_0.setVisible(true);lyr_Victoria_1.setVisible(true);lyr_MetropolitanLGA_2.setVisible(true);
var layersList = [lyr_Wikimediaunlabelledlayer_0,lyr_Victoria_1,lyr_MetropolitanLGA_2];
lyr_Victoria_1.set('fieldAliases', {'id': 'id', 'name': 'name', 'description': 'description', });
lyr_MetropolitanLGA_2.set('fieldAliases', {'id': 'id', 'lga_code20': 'lga_code20', 'lga_name20': 'lga_name20', 'ste_code16': 'ste_code16', 'ste_name16': 'ste_name16', 'areasqkm20': 'areasqkm20', 'metropolitan': 'metropolitan', });
lyr_Victoria_1.set('fieldImages', {'id': '', 'name': '', 'description': '', });
lyr_MetropolitanLGA_2.set('fieldImages', {'id': 'Range', 'lga_code20': 'TextEdit', 'lga_name20': 'TextEdit', 'ste_code16': 'TextEdit', 'ste_name16': 'TextEdit', 'areasqkm20': 'TextEdit', 'metropolitan': 'TextEdit', });
lyr_Victoria_1.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'description': 'no label', });
lyr_MetropolitanLGA_2.set('fieldLabels', {'id': 'no label', 'lga_code20': 'no label', 'lga_name20': 'header label', 'ste_code16': 'no label', 'ste_name16': 'no label', 'areasqkm20': 'no label', 'metropolitan': 'no label', });
lyr_MetropolitanLGA_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});