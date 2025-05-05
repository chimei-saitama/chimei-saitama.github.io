var wms_layers = [];

var format_l_0 = new ol.format.GeoJSON();
var features_l_0 = format_l_0.readFeatures(json_l_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_l_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_l_0.addFeatures(features_l_0);
var lyr_l_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_l_0, 
                style: style_l_0,
                popuplayertitle: '石原l',
                interactive: true,
                title: '<img src="styles/legend/l_0.png" /> 石原l'
            });

lyr_l_0.setVisible(true);
var layersList = [lyr_l_0];
lyr_l_0.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_l_0.set('fieldImages', {'id': '', 'type': '', });
lyr_l_0.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_l_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});