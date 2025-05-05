var wms_layers = [];

var format__0 = new ol.format.GeoJSON();
var features__0 = format__0.readFeatures(json__0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__0.addFeatures(features__0);
var lyr__0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__0, 
                style: style__0,
                popuplayertitle: '市町村名',
                interactive: true,
                title: '<img src="styles/legend/_0.png" /> 市町村名'
            });
var group_ = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: '作業用'});
var group_ = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: '浦和町'});
var group_ = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: '木崎村'});
var group_ = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: '谷田村'});

lyr__0.setVisible(true);
var layersList = [lyr__0];
lyr__0.set('fieldAliases', {'id': 'id', 'name': 'name', 'start': 'start', 'end': 'end', 'info': 'info', });
lyr__0.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'start': 'Range', 'end': 'Range', 'info': 'TextEdit', });
lyr__0.set('fieldLabels', {'id': 'hidden field', 'name': 'no label', 'start': 'hidden field', 'end': 'hidden field', 'info': 'no label', });
lyr__0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});