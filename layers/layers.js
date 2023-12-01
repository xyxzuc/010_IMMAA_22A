var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoad_1 = new ol.layer.Tile({
            'title': 'Google Road',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_2 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Peta_Geologi_3 = new ol.format.GeoJSON();
var features_Peta_Geologi_3 = format_Peta_Geologi_3.readFeatures(json_Peta_Geologi_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Peta_Geologi_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Peta_Geologi_3.addFeatures(features_Peta_Geologi_3);
var lyr_Peta_Geologi_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Peta_Geologi_3, 
                style: style_Peta_Geologi_3,
                interactive: true,
                title: '<img src="styles/legend/Peta_Geologi_3.png" /> Peta_Geologi'
            });

lyr_GoogleTerrain_0.setVisible(true);lyr_GoogleRoad_1.setVisible(true);lyr_GoogleHybrid_2.setVisible(true);lyr_Peta_Geologi_3.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_GoogleRoad_1,lyr_GoogleHybrid_2,lyr_Peta_Geologi_3];
lyr_Peta_Geologi_3.set('fieldAliases', {'SYMBOLS': 'SYMBOLS', 'NAME_BI': 'NAME_BI', 'CLASS_LITH': 'CLASS_LITH', });
lyr_Peta_Geologi_3.set('fieldImages', {'SYMBOLS': '', 'NAME_BI': '', 'CLASS_LITH': '', });
lyr_Peta_Geologi_3.set('fieldLabels', {'SYMBOLS': 'no label', 'NAME_BI': 'no label', 'CLASS_LITH': 'no label', });
lyr_Peta_Geologi_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});