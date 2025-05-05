var wms_layers = [];


        var lyr__0 = new ol.layer.Tile({
            'title': '地理院地図（淡色地図）',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png'
            })
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
