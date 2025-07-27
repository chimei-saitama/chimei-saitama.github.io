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
                popuplayertitle: '小字名',
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> 小字名'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: '小字界（変更分）',
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> 小字界（変更分）'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: '小字界',
                interactive: false,
                title: '<img src="styles/legend/_3.png" /> 小字界'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: '大字名',
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> 大字名'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__5, 
                style: style__5,
                popuplayertitle: '大字界（変更分）',
                interactive: false,
                title: '<img src="styles/legend/_5.png" /> 大字界（変更分）'
            });
var format__6 = new ol.format.GeoJSON();
var features__6 = format__6.readFeatures(json__6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__6.addFeatures(features__6);
var lyr__6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__6, 
                style: style__6,
                popuplayertitle: '大字界',
                interactive: false,
                title: '<img src="styles/legend/_6.png" /> 大字界'
            });
var format__7 = new ol.format.GeoJSON();
var features__7 = format__7.readFeatures(json__7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__7.addFeatures(features__7);
var lyr__7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__7, 
                style: style__7,
                popuplayertitle: '町名',
                interactive: true,
                title: '<img src="styles/legend/_7.png" /> 町名'
            });
var format__8 = new ol.format.GeoJSON();
var features__8 = format__8.readFeatures(json__8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__8.addFeatures(features__8);
var lyr__8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__8, 
                style: style__8,
                popuplayertitle: '町界（変更分）',
                interactive: true,
                title: '<img src="styles/legend/_8.png" /> 町界（変更分）'
            });
var format__9 = new ol.format.GeoJSON();
var features__9 = format__9.readFeatures(json__9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__9.addFeatures(features__9);
var lyr__9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__9, 
                style: style__9,
                popuplayertitle: '町界',
                interactive: false,
                title: '<img src="styles/legend/_9.png" /> 町界'
            });
var format__10 = new ol.format.GeoJSON();
var features__10 = format__10.readFeatures(json__10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__10.addFeatures(features__10);
var lyr__10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__10, 
                style: style__10,
                popuplayertitle: '市町村名',
                interactive: true,
                title: '<img src="styles/legend/_10.png" /> 市町村名'
            });
var format__11 = new ol.format.GeoJSON();
var features__11 = format__11.readFeatures(json__11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__11.addFeatures(features__11);
var lyr__11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__11, 
                style: style__11,
                popuplayertitle: 'さいたま市区割り',
                interactive: false,
                title: '<img src="styles/legend/_11.png" /> さいたま市区割り'
            });
var format__12 = new ol.format.GeoJSON();
var features__12 = format__12.readFeatures(json__12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__12.addFeatures(features__12);
var lyr__12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__12, 
                style: style__12,
                popuplayertitle: '市町村界（変更分）',
                interactive: true,
                title: '<img src="styles/legend/_12.png" /> 市町村界（変更分）'
            });
var format__13 = new ol.format.GeoJSON();
var features__13 = format__13.readFeatures(json__13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__13.addFeatures(features__13);
var lyr__13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__13, 
                style: style__13,
                popuplayertitle: '市町村界',
                interactive: false,
                title: '<img src="styles/legend/_13.png" /> 市町村界'
            });
var format__14 = new ol.format.GeoJSON();
var features__14 = format__14.readFeatures(json__14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__14.addFeatures(features__14);
var lyr__14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__14, 
                style: style__14,
                popuplayertitle: '市町村名（町村制以前）',
                interactive: true,
                title: '<img src="styles/legend/_14.png" /> 市町村名（町村制以前）'
            });
var format__15 = new ol.format.GeoJSON();
var features__15 = format__15.readFeatures(json__15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__15.addFeatures(features__15);
var lyr__15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__15, 
                style: style__15,
                popuplayertitle: '市町村界（町村制以前）',
                interactive: false,
                title: '<img src="styles/legend/_15.png" /> 市町村界（町村制以前）'
            });
var group_ = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: '作業用'});
var group_ = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'その他'});
var group_ = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: '浦和町'});
var group_ = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '木崎村'});
var group_ = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '谷田村'});
var group_ = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '三室村'});
var group_ = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '尾間木村'});
var group_ = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '六辻村'});
var group_ = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '与野町'});
var group_ = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '大宮町'});
var group_ = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '三橋村'});
var group_ = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '日進村'});

lyr__0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);lyr__6.setVisible(true);lyr__7.setVisible(true);lyr__8.setVisible(true);lyr__9.setVisible(true);lyr__10.setVisible(true);lyr__11.setVisible(true);lyr__12.setVisible(true);lyr__13.setVisible(true);lyr__14.setVisible(true);lyr__15.setVisible(true);
var layersList = [lyr__0,lyr__1,lyr__2,lyr__3,lyr__4,lyr__5,lyr__6,lyr__7,lyr__8,lyr__9,lyr__10,lyr__11,lyr__12,lyr__13,lyr__14,lyr__15];
lyr__1.set('fieldAliases', {'id': 'id', 'name': 'name', 'start': 'start', 'end': 'end', 'info1': 'info1', 'info2': 'info2', 'info3': 'info3', 'link': 'link', });
lyr__2.set('fieldAliases', {'id': 'id', 'start': 'start', 'end': 'end', 'info': 'info', });
lyr__3.set('fieldAliases', {'id': 'id', 'start': 'start', 'end': 'end', });
lyr__4.set('fieldAliases', {'id': 'id', 'name': 'name', 'start': 'start', 'end': 'end', 'info': 'info', });
lyr__5.set('fieldAliases', {'id': 'id', 'start': 'start', 'end': 'end', });
lyr__6.set('fieldAliases', {'id': 'id', 'start': 'start', 'end': 'end', });
lyr__7.set('fieldAliases', {'id': 'id', 'name': 'name', 'start': 'start', 'end': 'end', 'info': 'info', });
lyr__8.set('fieldAliases', {'id': 'id', 'start': 'start', 'end': 'end', 'info': 'info', });
lyr__9.set('fieldAliases', {'id': 'id', 'start': 'start', 'end': 'end', });
lyr__10.set('fieldAliases', {'id': 'id', 'name': 'name', 'start': 'start', 'end': 'end', 'info1': 'info1', 'info2': 'info2', });
lyr__11.set('fieldAliases', {'id': 'id', 'start': 'start', 'end': 'end', });
lyr__12.set('fieldAliases', {'id': 'id', 'start': 'start', 'end': 'end', 'info': 'info', });
lyr__13.set('fieldAliases', {'id': 'id', 'start': 'start', 'end': 'end', });
lyr__14.set('fieldAliases', {'id': 'id', 'name': 'name', 'start': 'start', 'end': 'end', 'info': 'info', });
lyr__15.set('fieldAliases', {'id': 'id', 'start': 'start', 'end': 'end', });
lyr__1.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'start': 'Range', 'end': 'Range', 'info1': 'TextEdit', 'info2': 'TextEdit', 'info3': 'TextEdit', 'link': 'TextEdit', });
lyr__2.set('fieldImages', {'id': 'TextEdit', 'start': 'Range', 'end': 'Range', 'info': 'TextEdit', });
lyr__3.set('fieldImages', {'id': 'TextEdit', 'start': 'Range', 'end': 'Range', });
lyr__4.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'start': 'Range', 'end': 'Range', 'info': 'TextEdit', });
lyr__5.set('fieldImages', {'id': 'TextEdit', 'start': 'Range', 'end': 'Range', });
lyr__6.set('fieldImages', {'id': 'TextEdit', 'start': 'Range', 'end': 'Range', });
lyr__7.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'start': 'Range', 'end': 'Range', 'info': 'TextEdit', });
lyr__8.set('fieldImages', {'id': 'TextEdit', 'start': 'Range', 'end': 'Range', 'info': '', });
lyr__9.set('fieldImages', {'id': 'TextEdit', 'start': 'Range', 'end': 'Range', });
lyr__10.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'start': 'Range', 'end': 'Range', 'info1': 'TextEdit', 'info2': 'TextEdit', });
lyr__11.set('fieldImages', {'id': 'TextEdit', 'start': 'Range', 'end': 'Range', });
lyr__12.set('fieldImages', {'id': 'TextEdit', 'start': 'Range', 'end': 'Range', 'info': '', });
lyr__13.set('fieldImages', {'id': 'TextEdit', 'start': 'Range', 'end': 'Range', });
lyr__14.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'start': 'Range', 'end': 'Range', 'info': 'TextEdit', });
lyr__15.set('fieldImages', {'id': 'TextEdit', 'start': 'Range', 'end': 'Range', });
lyr__1.set('fieldLabels', {'id': 'hidden field', 'name': 'no label', 'start': 'hidden field', 'end': 'hidden field', 'info1': 'no label', 'info2': 'no label', 'info3': 'no label', 'link': 'no label', });
lyr__2.set('fieldLabels', {'id': 'hidden field', 'start': 'hidden field', 'end': 'hidden field', 'info': 'no label', });
lyr__3.set('fieldLabels', {'id': 'no label', 'start': 'no label', 'end': 'no label', });
lyr__4.set('fieldLabels', {'id': 'hidden field', 'name': 'no label', 'start': 'hidden field', 'end': 'hidden field', 'info': 'no label', });
lyr__5.set('fieldLabels', {'id': 'hidden field', 'start': 'hidden field', 'end': 'hidden field', });
lyr__6.set('fieldLabels', {'id': 'no label', 'start': 'no label', 'end': 'no label', });
lyr__7.set('fieldLabels', {'id': 'hidden field', 'name': 'no label', 'start': 'hidden field', 'end': 'hidden field', 'info': 'no label', });
lyr__8.set('fieldLabels', {'id': 'hidden field', 'start': 'hidden field', 'end': 'hidden field', 'info': 'no label', });
lyr__9.set('fieldLabels', {'id': 'no label', 'start': 'no label', 'end': 'no label', });
lyr__10.set('fieldLabels', {'id': 'hidden field', 'name': 'no label', 'start': 'hidden field', 'end': 'hidden field', 'info1': 'no label', 'info2': 'no label', });
lyr__11.set('fieldLabels', {'id': 'no label', 'start': 'no label', 'end': 'no label', });
lyr__12.set('fieldLabels', {'id': 'hidden field', 'start': 'hidden field', 'end': 'hidden field', 'info': 'no label', });
lyr__13.set('fieldLabels', {'id': 'no label', 'start': 'no label', 'end': 'no label', });
lyr__14.set('fieldLabels', {'id': 'hidden field', 'name': 'no label', 'start': 'hidden field', 'end': 'hidden field', 'info': 'no label', });
lyr__15.set('fieldLabels', {'id': 'no label', 'start': 'no label', 'end': 'no label', });
lyr__15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});