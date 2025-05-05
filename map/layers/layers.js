var wms_layers = [];


        var lyr__0 = new ol.layer.Tile({
            'title': '地理院地図（淡色地図）',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: '市町村界（町村制以前）',
                interactive: false,
                title: '<img src="styles/legend/_1.png" /> 市町村界（町村制以前）'
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

lyr__0.setVisible(true);lyr__1.setVisible(true);
var layersList = [lyr__0,lyr__1];
lyr__1.set('fieldAliases', {'id': 'id', 'start': 'start', 'end': 'end', });
lyr__1.set('fieldImages', {'id': 'TextEdit', 'start': 'Range', 'end': 'Range', });
lyr__1.set('fieldLabels', {'id': 'no label', 'start': 'no label', 'end': 'no label', });
lyr__1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});