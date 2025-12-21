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
                popuplayertitle: '小字ラベル',
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> 小字ラベル'
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
                popuplayertitle: '大字ラベル',
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> 大字ラベル'
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
                popuplayertitle: '旧町村ラベル',
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> 旧町村ラベル'
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
                popuplayertitle: '町ラベル',
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> 町ラベル'
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
                popuplayertitle: '市区町村ラベル',
                interactive: true,
                title: '<img src="styles/legend/_5.png" /> 市区町村ラベル'
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
                popuplayertitle: '小字界（変更分）',
                interactive: true,
                title: '<img src="styles/legend/_6.png" /> 小字界（変更分）'
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
                popuplayertitle: '小字界',
                interactive: false,
                title: '<img src="styles/legend/_7.png" /> 小字界'
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
                popuplayertitle: '大字界（変更分）',
                interactive: false,
                title: '<img src="styles/legend/_8.png" /> 大字界（変更分）'
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
                popuplayertitle: '大字界',
                interactive: false,
                title: '<img src="styles/legend/_9.png" /> 大字界'
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
                popuplayertitle: '旧町村界',
                interactive: false,
                title: '<img src="styles/legend/_10.png" /> 旧町村界'
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
                popuplayertitle: '町界',
                interactive: false,
                title: '<img src="styles/legend/_11.png" /> 町界'
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
                popuplayertitle: '町界（変更分）',
                interactive: true,
                title: '<img src="styles/legend/_12.png" /> 町界（変更分）'
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
                popuplayertitle: '市区町村界（字）（変更分）',
                interactive: true,
                title: '<img src="styles/legend/_13.png" /> 市区町村界（字）（変更分）'
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
                popuplayertitle: '市区町村界（字）',
                interactive: false,
                title: '<img src="styles/legend/_14.png" /> 市区町村界（字）'
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
                popuplayertitle: '市区町村界（町）',
                interactive: false,
                title: '<img src="styles/legend/_15.png" /> 市区町村界（町）'
            });
var group_ = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '作業用'});
var group_ = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'その他'});
var group_ = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
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
                                title: '土合村'});
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
var group_ = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '川口町'});
var group_ = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '横曽根村'});
var group_ = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '青木村'});
var group_ = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '南平柳村'});
var group_ = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '芝村'});
var group_ = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '蕨町'});
var group_ = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '戸田村'});
var group_ = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '美谷本村'});
var group_ = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '笹目村'});
var group_ = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '新倉村'});
var group_ = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '白子村'});
var group_ = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '膝折村'});
var group_ = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '内間木村'});
var group_ = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: '志木町'});
var group_ = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '宗岡村'});

lyr__0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);lyr__6.setVisible(true);lyr__7.setVisible(true);lyr__8.setVisible(true);lyr__9.setVisible(true);lyr__10.setVisible(true);lyr__11.setVisible(true);lyr__12.setVisible(true);lyr__13.setVisible(true);lyr__14.setVisible(true);lyr__15.setVisible(true);
var layersList = [lyr__0,lyr__1,lyr__2,lyr__3,lyr__4,lyr__5,lyr__6,lyr__7,lyr__8,lyr__9,lyr__10,lyr__11,lyr__12,lyr__13,lyr__14,lyr__15];
lyr__1.set('fieldAliases', {'fid': 'fid', 'koaza_id': 'koaza_id', 'start': 'start', 'end': 'end', '小字マスター_fid': '小字マスター_fid', '小字マスター_shin-choson': '小字マスター_shin-choson', '小字マスター_oaza': '小字マスター_oaza', '小字マスター_name': '小字マスター_name', '小字マスター_reading': '小字マスター_reading', '小字マスター_variants': '小字マスター_variants', '小字マスター_note': '小字マスター_note', '小字マスター_history1': '小字マスター_history1', '小字マスター_history2': '小字マスター_history2', '小字マスター_history3': '小字マスター_history3', '小字マスター_history4': '小字マスター_history4', '小字マスター_history5': '小字マスター_history5', '小字マスター_history6': '小字マスター_history6', '小字マスター_history7': '小字マスター_history7', '小字マスター_history8': '小字マスター_history8', '小字マスター_history9': '小字マスター_history9', '小字マスター_link': '小字マスター_link', '小字マスター_popup': '小字マスター_popup', });
lyr__2.set('fieldAliases', {'fid': 'fid', 'oaza_id': 'oaza_id', 'start': 'start', 'end': 'end', '大字・旧町村マスター_fid': '大字・旧町村マスター_fid', '大字・旧町村マスター_shin-choson': '大字・旧町村マスター_shin-choson', '大字・旧町村マスター_oaza_name': '大字・旧町村マスター_oaza_name', '大字・旧町村マスター_kyu-choson_name': '大字・旧町村マスター_kyu-choson_name', '大字・旧町村マスター_oaza_history': '大字・旧町村マスター_oaza_history', '大字・旧町村マスター_kyu-choson_history': '大字・旧町村マスター_kyu-choson_history', });
lyr__3.set('fieldAliases', {'fid': 'fid', 'oaza_id': 'oaza_id', 'start': 'start', 'end': 'end', '大字・旧町村マスター_fid': '大字・旧町村マスター_fid', '大字・旧町村マスター_shin-choson': '大字・旧町村マスター_shin-choson', '大字・旧町村マスター_oaza_name': '大字・旧町村マスター_oaza_name', '大字・旧町村マスター_kyu-choson_name': '大字・旧町村マスター_kyu-choson_name', '大字・旧町村マスター_oaza_history': '大字・旧町村マスター_oaza_history', '大字・旧町村マスター_kyu-choson_history': '大字・旧町村マスター_kyu-choson_history', });
lyr__4.set('fieldAliases', {'fid': 'fid', 'machi_id': 'machi_id', 'start': 'start', 'end': 'end', '町マスター_fid': '町マスター_fid', '町マスター_shikuchoson': '町マスター_shikuchoson', '町マスター_name': '町マスター_name', '町マスター_history': '町マスター_history', 'name': 'name', });
lyr__5.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'start': 'start', 'end': 'end', '市区町村マスター_fid': '市区町村マスター_fid', '市区町村マスター_history1': '市区町村マスター_history1', '市区町村マスター_history2': '市区町村マスター_history2', '市区町村マスター_history3': '市区町村マスター_history3', '市区町村マスター_history4': '市区町村マスター_history4', '市区町村マスター_history5': '市区町村マスター_history5', '市区町村マスター_history6': '市区町村マスター_history6', '市区町村マスター_history7': '市区町村マスター_history7', '市区町村マスター_history8': '市区町村マスター_history8', '市区町村マスター_history9': '市区町村マスター_history9', '市区町村マスター_popup': '市区町村マスター_popup', });
lyr__6.set('fieldAliases', {'fid': 'fid', 'koaza_start': 'koaza_start', 'koaza_end': 'koaza_end', 'oaza_start': 'oaza_start', 'oaza_end': 'oaza_end', 'kyu-choson_start': 'kyu-choson_start', 'kyu-choson_end': 'kyu-choson_end', 'shikuchoson_start1': 'shikuchoson_start1', 'shikuchoson_end1': 'shikuchoson_end1', 'shikuchoson_start2': 'shikuchoson_start2', 'shikuchoson_end2': 'shikuchoson_end2', 'is_reformed': 'is_reformed', 'reform_info_koaza': 'reform_info_koaza', 'reform_info_shikuchoson': 'reform_info_shikuchoson', 'is_choson': 'is_choson', 'is_oaza': 'is_oaza', 'start': 'start', 'end': 'end', });
lyr__7.set('fieldAliases', {'fid': 'fid', 'koaza_start': 'koaza_start', 'koaza_end': 'koaza_end', 'oaza_start': 'oaza_start', 'oaza_end': 'oaza_end', 'kyu-choson_start': 'kyu-choson_start', 'kyu-choson_end': 'kyu-choson_end', 'shikuchoson_start1': 'shikuchoson_start1', 'shikuchoson_end1': 'shikuchoson_end1', 'shikuchoson_start2': 'shikuchoson_start2', 'shikuchoson_end2': 'shikuchoson_end2', 'is_reformed': 'is_reformed', 'reform_info_koaza': 'reform_info_koaza', 'reform_info_shikuchoson': 'reform_info_shikuchoson', 'is_choson': 'is_choson', 'is_oaza': 'is_oaza', 'start': 'start', 'end': 'end', });
lyr__8.set('fieldAliases', {'fid': 'fid', 'koaza_start': 'koaza_start', 'koaza_end': 'koaza_end', 'oaza_start': 'oaza_start', 'oaza_end': 'oaza_end', 'kyu-choson_start': 'kyu-choson_start', 'kyu-choson_end': 'kyu-choson_end', 'shikuchoson_start1': 'shikuchoson_start1', 'shikuchoson_end1': 'shikuchoson_end1', 'shikuchoson_start2': 'shikuchoson_start2', 'shikuchoson_end2': 'shikuchoson_end2', 'is_reformed': 'is_reformed', 'reform_info_koaza': 'reform_info_koaza', 'reform_info_shikuchoson': 'reform_info_shikuchoson', 'is_choson': 'is_choson', 'is_oaza': 'is_oaza', 'start': 'start', 'end': 'end', });
lyr__9.set('fieldAliases', {'fid': 'fid', 'koaza_start': 'koaza_start', 'koaza_end': 'koaza_end', 'oaza_start': 'oaza_start', 'oaza_end': 'oaza_end', 'kyu-choson_start': 'kyu-choson_start', 'kyu-choson_end': 'kyu-choson_end', 'shikuchoson_start1': 'shikuchoson_start1', 'shikuchoson_end1': 'shikuchoson_end1', 'shikuchoson_start2': 'shikuchoson_start2', 'shikuchoson_end2': 'shikuchoson_end2', 'is_reformed': 'is_reformed', 'reform_info_koaza': 'reform_info_koaza', 'reform_info_shikuchoson': 'reform_info_shikuchoson', 'is_choson': 'is_choson', 'is_oaza': 'is_oaza', 'start': 'start', 'end': 'end', });
lyr__10.set('fieldAliases', {'fid': 'fid', 'koaza_start': 'koaza_start', 'koaza_end': 'koaza_end', 'oaza_start': 'oaza_start', 'oaza_end': 'oaza_end', 'kyu-choson_start': 'kyu-choson_start', 'kyu-choson_end': 'kyu-choson_end', 'shikuchoson_start1': 'shikuchoson_start1', 'shikuchoson_end1': 'shikuchoson_end1', 'shikuchoson_start2': 'shikuchoson_start2', 'shikuchoson_end2': 'shikuchoson_end2', 'is_reformed': 'is_reformed', 'reform_info_koaza': 'reform_info_koaza', 'reform_info_shikuchoson': 'reform_info_shikuchoson', 'is_choson': 'is_choson', 'is_oaza': 'is_oaza', 'start': 'start', 'end': 'end', });
lyr__11.set('fieldAliases', {'fid': 'fid', 'machi_start': 'machi_start', 'machi_end': 'machi_end', 'shikuchoson_start1': 'shikuchoson_start1', 'shikuchoson_end1': 'shikuchoson_end1', 'shikuchoson_start2': 'shikuchoson_start2', 'shikuchoson_end2': 'shikuchoson_end2', 'is_reformed': 'is_reformed', 'reform_info_machi': 'reform_info_machi', 'reform_info_shikuchoson': 'reform_info_shikuchoson', 'shikuchoson': 'shikuchoson', 'start': 'start', 'end': 'end', });
lyr__12.set('fieldAliases', {'fid': 'fid', 'machi_start': 'machi_start', 'machi_end': 'machi_end', 'shikuchoson_start1': 'shikuchoson_start1', 'shikuchoson_end1': 'shikuchoson_end1', 'shikuchoson_start2': 'shikuchoson_start2', 'shikuchoson_end2': 'shikuchoson_end2', 'is_reformed': 'is_reformed', 'reform_info_machi': 'reform_info_machi', 'reform_info_shikuchoson': 'reform_info_shikuchoson', 'shikuchoson': 'shikuchoson', 'start': 'start', 'end': 'end', });
lyr__13.set('fieldAliases', {'fid': 'fid', 'koaza_start': 'koaza_start', 'koaza_end': 'koaza_end', 'oaza_start': 'oaza_start', 'oaza_end': 'oaza_end', 'kyu-choson_start': 'kyu-choson_start', 'kyu-choson_end': 'kyu-choson_end', 'shikuchoson_start1': 'shikuchoson_start1', 'shikuchoson_end1': 'shikuchoson_end1', 'shikuchoson_start2': 'shikuchoson_start2', 'shikuchoson_end2': 'shikuchoson_end2', 'is_reformed': 'is_reformed', 'reform_info_koaza': 'reform_info_koaza', 'reform_info_shikuchoson': 'reform_info_shikuchoson', 'is_choson': 'is_choson', 'is_oaza': 'is_oaza', 'start': 'start', 'end': 'end', 'start2': 'start2', 'end2': 'end2', });
lyr__14.set('fieldAliases', {'fid': 'fid', 'koaza_start': 'koaza_start', 'koaza_end': 'koaza_end', 'oaza_start': 'oaza_start', 'oaza_end': 'oaza_end', 'kyu-choson_start': 'kyu-choson_start', 'kyu-choson_end': 'kyu-choson_end', 'shikuchoson_start1': 'shikuchoson_start1', 'shikuchoson_end1': 'shikuchoson_end1', 'shikuchoson_start2': 'shikuchoson_start2', 'shikuchoson_end2': 'shikuchoson_end2', 'is_reformed': 'is_reformed', 'reform_info_koaza': 'reform_info_koaza', 'reform_info_shikuchoson': 'reform_info_shikuchoson', 'is_choson': 'is_choson', 'is_oaza': 'is_oaza', 'start': 'start', 'end': 'end', 'start2': 'start2', 'end2': 'end2', });
lyr__15.set('fieldAliases', {'fid': 'fid', 'machi_start': 'machi_start', 'machi_end': 'machi_end', 'shikuchoson_start1': 'shikuchoson_start1', 'shikuchoson_end1': 'shikuchoson_end1', 'shikuchoson_start2': 'shikuchoson_start2', 'shikuchoson_end2': 'shikuchoson_end2', 'is_reformed': 'is_reformed', 'reform_info_machi': 'reform_info_machi', 'reform_info_shikuchoson': 'reform_info_shikuchoson', 'shikuchoson': 'shikuchoson', 'start': 'start', 'end': 'end', 'start2': 'start2', 'end2': 'end2', });
lyr__1.set('fieldImages', {'fid': 'TextEdit', 'koaza_id': 'TextEdit', 'start': 'Range', 'end': 'Range', '小字マスター_fid': 'TextEdit', '小字マスター_shin-choson': 'TextEdit', '小字マスター_oaza': 'TextEdit', '小字マスター_name': 'TextEdit', '小字マスター_reading': 'TextEdit', '小字マスター_variants': 'TextEdit', '小字マスター_note': 'TextEdit', '小字マスター_history1': 'TextEdit', '小字マスター_history2': 'TextEdit', '小字マスター_history3': 'TextEdit', '小字マスター_history4': 'TextEdit', '小字マスター_history5': 'TextEdit', '小字マスター_history6': 'TextEdit', '小字マスター_history7': 'TextEdit', '小字マスター_history8': 'TextEdit', '小字マスター_history9': 'TextEdit', '小字マスター_link': 'TextEdit', '小字マスター_popup': 'TextEdit', });
lyr__2.set('fieldImages', {'fid': 'TextEdit', 'oaza_id': 'TextEdit', 'start': 'Range', 'end': 'Range', '大字・旧町村マスター_fid': 'TextEdit', '大字・旧町村マスター_shin-choson': 'TextEdit', '大字・旧町村マスター_oaza_name': 'TextEdit', '大字・旧町村マスター_kyu-choson_name': 'TextEdit', '大字・旧町村マスター_oaza_history': '', '大字・旧町村マスター_kyu-choson_history': '', });
lyr__3.set('fieldImages', {'fid': 'TextEdit', 'oaza_id': 'TextEdit', 'start': 'Range', 'end': 'Range', '大字・旧町村マスター_fid': 'TextEdit', '大字・旧町村マスター_shin-choson': 'TextEdit', '大字・旧町村マスター_oaza_name': 'TextEdit', '大字・旧町村マスター_kyu-choson_name': 'TextEdit', '大字・旧町村マスター_oaza_history': 'TextEdit', '大字・旧町村マスター_kyu-choson_history': 'TextEdit', });
lyr__4.set('fieldImages', {'fid': 'TextEdit', 'machi_id': 'TextEdit', 'start': 'Range', 'end': 'Range', '町マスター_fid': 'TextEdit', '町マスター_shikuchoson': 'TextEdit', '町マスター_name': 'TextEdit', '町マスター_history': 'TextEdit', 'name': 'TextEdit', });
lyr__5.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'start': 'Range', 'end': 'Range', '市区町村マスター_fid': 'TextEdit', '市区町村マスター_history1': 'TextEdit', '市区町村マスター_history2': 'TextEdit', '市区町村マスター_history3': 'TextEdit', '市区町村マスター_history4': 'TextEdit', '市区町村マスター_history5': 'TextEdit', '市区町村マスター_history6': 'TextEdit', '市区町村マスター_history7': 'TextEdit', '市区町村マスター_history8': 'TextEdit', '市区町村マスター_history9': 'TextEdit', '市区町村マスター_popup': 'TextEdit', });
lyr__6.set('fieldImages', {'fid': 'TextEdit', 'koaza_start': 'Range', 'koaza_end': 'Range', 'oaza_start': 'Range', 'oaza_end': 'Range', 'kyu-choson_start': 'Range', 'kyu-choson_end': 'Range', 'shikuchoson_start1': 'Range', 'shikuchoson_end1': 'Range', 'shikuchoson_start2': 'Range', 'shikuchoson_end2': 'Range', 'is_reformed': 'CheckBox', 'reform_info_koaza': 'TextEdit', 'reform_info_shikuchoson': 'TextEdit', 'is_choson': '', 'is_oaza': '', 'start': '', 'end': '', });
lyr__7.set('fieldImages', {'fid': 'TextEdit', 'koaza_start': 'Range', 'koaza_end': 'Range', 'oaza_start': 'Range', 'oaza_end': 'Range', 'kyu-choson_start': 'Range', 'kyu-choson_end': 'Range', 'shikuchoson_start1': 'Range', 'shikuchoson_end1': 'Range', 'shikuchoson_start2': 'Range', 'shikuchoson_end2': 'Range', 'is_reformed': 'CheckBox', 'reform_info_koaza': 'TextEdit', 'reform_info_shikuchoson': 'TextEdit', 'is_choson': '', 'is_oaza': '', 'start': '', 'end': '', });
lyr__8.set('fieldImages', {'fid': 'TextEdit', 'koaza_start': 'Range', 'koaza_end': 'Range', 'oaza_start': 'Range', 'oaza_end': 'Range', 'kyu-choson_start': 'Range', 'kyu-choson_end': 'Range', 'shikuchoson_start1': 'Range', 'shikuchoson_end1': 'Range', 'shikuchoson_start2': 'Range', 'shikuchoson_end2': 'Range', 'is_reformed': 'CheckBox', 'reform_info_koaza': 'TextEdit', 'reform_info_shikuchoson': 'TextEdit', 'is_choson': '', 'is_oaza': '', 'start': '', 'end': '', });
lyr__9.set('fieldImages', {'fid': 'TextEdit', 'koaza_start': 'Range', 'koaza_end': 'Range', 'oaza_start': 'Range', 'oaza_end': 'Range', 'kyu-choson_start': 'Range', 'kyu-choson_end': 'Range', 'shikuchoson_start1': 'Range', 'shikuchoson_end1': 'Range', 'shikuchoson_start2': 'Range', 'shikuchoson_end2': 'Range', 'is_reformed': 'CheckBox', 'reform_info_koaza': 'TextEdit', 'reform_info_shikuchoson': 'TextEdit', 'is_choson': '', 'is_oaza': '', 'start': '', 'end': '', });
lyr__10.set('fieldImages', {'fid': 'TextEdit', 'koaza_start': 'Range', 'koaza_end': 'Range', 'oaza_start': 'Range', 'oaza_end': 'Range', 'kyu-choson_start': 'Range', 'kyu-choson_end': 'Range', 'shikuchoson_start1': 'Range', 'shikuchoson_end1': 'Range', 'shikuchoson_start2': 'Range', 'shikuchoson_end2': 'Range', 'is_reformed': 'CheckBox', 'reform_info_koaza': 'TextEdit', 'reform_info_shikuchoson': 'TextEdit', 'is_choson': '', 'is_oaza': '', 'start': '', 'end': '', });
lyr__11.set('fieldImages', {'fid': 'TextEdit', 'machi_start': 'Range', 'machi_end': 'Range', 'shikuchoson_start1': 'Range', 'shikuchoson_end1': 'Range', 'shikuchoson_start2': 'Range', 'shikuchoson_end2': 'Range', 'is_reformed': 'CheckBox', 'reform_info_machi': 'TextEdit', 'reform_info_shikuchoson': 'TextEdit', 'shikuchoson': '', 'start': '', 'end': '', });
lyr__12.set('fieldImages', {'fid': 'TextEdit', 'machi_start': 'Range', 'machi_end': 'Range', 'shikuchoson_start1': 'Range', 'shikuchoson_end1': 'Range', 'shikuchoson_start2': 'Range', 'shikuchoson_end2': 'Range', 'is_reformed': 'CheckBox', 'reform_info_machi': 'TextEdit', 'reform_info_shikuchoson': 'TextEdit', 'shikuchoson': '', 'start': '', 'end': '', });
lyr__13.set('fieldImages', {'fid': 'TextEdit', 'koaza_start': 'Range', 'koaza_end': 'Range', 'oaza_start': 'Range', 'oaza_end': 'Range', 'kyu-choson_start': 'Range', 'kyu-choson_end': 'Range', 'shikuchoson_start1': 'Range', 'shikuchoson_end1': 'Range', 'shikuchoson_start2': 'Range', 'shikuchoson_end2': 'Range', 'is_reformed': 'CheckBox', 'reform_info_koaza': 'TextEdit', 'reform_info_shikuchoson': 'TextEdit', 'is_choson': '', 'is_oaza': '', 'start': '', 'end': '', 'start2': '', 'end2': '', });
lyr__14.set('fieldImages', {'fid': 'TextEdit', 'koaza_start': 'Range', 'koaza_end': 'Range', 'oaza_start': 'Range', 'oaza_end': 'Range', 'kyu-choson_start': 'Range', 'kyu-choson_end': 'Range', 'shikuchoson_start1': 'Range', 'shikuchoson_end1': 'Range', 'shikuchoson_start2': 'Range', 'shikuchoson_end2': 'Range', 'is_reformed': 'CheckBox', 'reform_info_koaza': 'TextEdit', 'reform_info_shikuchoson': 'TextEdit', 'is_choson': '', 'is_oaza': '', 'start': '', 'end': '', 'start2': '', 'end2': '', });
lyr__15.set('fieldImages', {'fid': 'TextEdit', 'machi_start': 'Range', 'machi_end': 'Range', 'shikuchoson_start1': 'Range', 'shikuchoson_end1': 'Range', 'shikuchoson_start2': 'Range', 'shikuchoson_end2': 'Range', 'is_reformed': 'CheckBox', 'reform_info_machi': 'TextEdit', 'reform_info_shikuchoson': 'TextEdit', 'shikuchoson': '', 'start': '', 'end': '', 'start2': '', 'end2': '', });
lyr__1.set('fieldLabels', {'fid': 'hidden field', 'koaza_id': 'hidden field', 'start': 'hidden field', 'end': 'hidden field', '小字マスター_fid': 'hidden field', '小字マスター_shin-choson': 'hidden field', '小字マスター_oaza': 'hidden field', '小字マスター_name': 'no label', '小字マスター_reading': 'hidden field', '小字マスター_variants': 'hidden field', '小字マスター_note': 'hidden field', '小字マスター_history1': 'hidden field', '小字マスター_history2': 'hidden field', '小字マスター_history3': 'hidden field', '小字マスター_history4': 'hidden field', '小字マスター_history5': 'hidden field', '小字マスター_history6': 'hidden field', '小字マスター_history7': 'hidden field', '小字マスター_history8': 'hidden field', '小字マスター_history9': 'hidden field', '小字マスター_link': 'hidden field', '小字マスター_popup': 'no label', });
lyr__2.set('fieldLabels', {'fid': 'hidden field', 'oaza_id': 'hidden field', 'start': 'hidden field', 'end': 'hidden field', '大字・旧町村マスター_fid': 'hidden field', '大字・旧町村マスター_shin-choson': 'hidden field', '大字・旧町村マスター_oaza_name': 'no label', '大字・旧町村マスター_kyu-choson_name': 'hidden field', '大字・旧町村マスター_oaza_history': 'no label', '大字・旧町村マスター_kyu-choson_history': 'hidden field', });
lyr__3.set('fieldLabels', {'fid': 'hidden field', 'oaza_id': 'hidden field', 'start': 'hidden field', 'end': 'hidden field', '大字・旧町村マスター_fid': 'hidden field', '大字・旧町村マスター_shin-choson': 'hidden field', '大字・旧町村マスター_oaza_name': 'hidden field', '大字・旧町村マスター_kyu-choson_name': 'no label', '大字・旧町村マスター_oaza_history': 'hidden field', '大字・旧町村マスター_kyu-choson_history': 'no label', });
lyr__4.set('fieldLabels', {'fid': 'hidden field', 'machi_id': 'hidden field', 'start': 'hidden field', 'end': 'hidden field', '町マスター_fid': 'hidden field', '町マスター_shikuchoson': 'hidden field', '町マスター_name': 'no label', '町マスター_history': 'no label', 'name': 'hidden field', });
lyr__5.set('fieldLabels', {'fid': 'hidden field', 'name': 'no label', 'start': 'hidden field', 'end': 'hidden field', '市区町村マスター_fid': 'hidden field', '市区町村マスター_history1': 'hidden field', '市区町村マスター_history2': 'hidden field', '市区町村マスター_history3': 'hidden field', '市区町村マスター_history4': 'hidden field', '市区町村マスター_history5': 'hidden field', '市区町村マスター_history6': 'hidden field', '市区町村マスター_history7': 'hidden field', '市区町村マスター_history8': 'hidden field', '市区町村マスター_history9': 'hidden field', '市区町村マスター_popup': 'no label', });
lyr__6.set('fieldLabels', {'fid': 'hidden field', 'koaza_start': 'hidden field', 'koaza_end': 'hidden field', 'oaza_start': 'hidden field', 'oaza_end': 'hidden field', 'kyu-choson_start': 'hidden field', 'kyu-choson_end': 'hidden field', 'shikuchoson_start1': 'hidden field', 'shikuchoson_end1': 'hidden field', 'shikuchoson_start2': 'hidden field', 'shikuchoson_end2': 'hidden field', 'is_reformed': 'hidden field', 'reform_info_koaza': 'no label', 'reform_info_shikuchoson': 'hidden field', 'is_choson': 'hidden field', 'is_oaza': 'hidden field', 'start': 'hidden field', 'end': 'hidden field', });
lyr__7.set('fieldLabels', {'fid': 'no label', 'koaza_start': 'no label', 'koaza_end': 'no label', 'oaza_start': 'no label', 'oaza_end': 'no label', 'kyu-choson_start': 'no label', 'kyu-choson_end': 'no label', 'shikuchoson_start1': 'no label', 'shikuchoson_end1': 'no label', 'shikuchoson_start2': 'no label', 'shikuchoson_end2': 'no label', 'is_reformed': 'no label', 'reform_info_koaza': 'no label', 'reform_info_shikuchoson': 'no label', 'is_choson': 'no label', 'is_oaza': 'no label', 'start': 'no label', 'end': 'no label', });
lyr__8.set('fieldLabels', {'fid': 'hidden field', 'koaza_start': 'hidden field', 'koaza_end': 'hidden field', 'oaza_start': 'hidden field', 'oaza_end': 'hidden field', 'kyu-choson_start': 'hidden field', 'kyu-choson_end': 'hidden field', 'shikuchoson_start1': 'hidden field', 'shikuchoson_end1': 'no label', 'shikuchoson_start2': 'no label', 'shikuchoson_end2': 'no label', 'is_reformed': 'no label', 'reform_info_koaza': 'no label', 'reform_info_shikuchoson': 'no label', 'is_choson': 'no label', 'is_oaza': 'no label', 'start': 'no label', 'end': 'no label', });
lyr__9.set('fieldLabels', {'fid': 'no label', 'koaza_start': 'no label', 'koaza_end': 'no label', 'oaza_start': 'no label', 'oaza_end': 'no label', 'kyu-choson_start': 'no label', 'kyu-choson_end': 'no label', 'shikuchoson_start1': 'no label', 'shikuchoson_end1': 'no label', 'shikuchoson_start2': 'no label', 'shikuchoson_end2': 'no label', 'is_reformed': 'no label', 'reform_info_koaza': 'no label', 'reform_info_shikuchoson': 'no label', 'is_choson': 'no label', 'is_oaza': 'no label', 'start': 'no label', 'end': 'no label', });
lyr__10.set('fieldLabels', {'fid': 'no label', 'koaza_start': 'no label', 'koaza_end': 'no label', 'oaza_start': 'no label', 'oaza_end': 'no label', 'kyu-choson_start': 'no label', 'kyu-choson_end': 'no label', 'shikuchoson_start1': 'no label', 'shikuchoson_end1': 'no label', 'shikuchoson_start2': 'no label', 'shikuchoson_end2': 'no label', 'is_reformed': 'no label', 'reform_info_koaza': 'no label', 'reform_info_shikuchoson': 'no label', 'is_choson': 'no label', 'is_oaza': 'no label', 'start': 'no label', 'end': 'no label', });
lyr__11.set('fieldLabels', {'fid': 'no label', 'machi_start': 'no label', 'machi_end': 'no label', 'shikuchoson_start1': 'no label', 'shikuchoson_end1': 'no label', 'shikuchoson_start2': 'no label', 'shikuchoson_end2': 'no label', 'is_reformed': 'no label', 'reform_info_machi': 'no label', 'reform_info_shikuchoson': 'no label', 'shikuchoson': 'no label', 'start': 'no label', 'end': 'no label', });
lyr__12.set('fieldLabels', {'fid': 'hidden field', 'machi_start': 'hidden field', 'machi_end': 'hidden field', 'shikuchoson_start1': 'hidden field', 'shikuchoson_end1': 'hidden field', 'shikuchoson_start2': 'hidden field', 'shikuchoson_end2': 'hidden field', 'is_reformed': 'hidden field', 'reform_info_machi': 'no label', 'reform_info_shikuchoson': 'hidden field', 'shikuchoson': 'no label', 'start': 'hidden field', 'end': 'hidden field', });
lyr__13.set('fieldLabels', {'fid': 'hidden field', 'koaza_start': 'hidden field', 'koaza_end': 'hidden field', 'oaza_start': 'hidden field', 'oaza_end': 'hidden field', 'kyu-choson_start': 'hidden field', 'kyu-choson_end': 'hidden field', 'shikuchoson_start1': 'hidden field', 'shikuchoson_end1': 'hidden field', 'shikuchoson_start2': 'hidden field', 'shikuchoson_end2': 'hidden field', 'is_reformed': 'hidden field', 'reform_info_koaza': 'hidden field', 'reform_info_shikuchoson': 'no label', 'is_choson': 'hidden field', 'is_oaza': 'hidden field', 'start': 'hidden field', 'end': 'hidden field', 'start2': 'hidden field', 'end2': 'hidden field', });
lyr__14.set('fieldLabels', {'fid': 'no label', 'koaza_start': 'no label', 'koaza_end': 'no label', 'oaza_start': 'no label', 'oaza_end': 'no label', 'kyu-choson_start': 'no label', 'kyu-choson_end': 'no label', 'shikuchoson_start1': 'no label', 'shikuchoson_end1': 'no label', 'shikuchoson_start2': 'no label', 'shikuchoson_end2': 'no label', 'is_reformed': 'no label', 'reform_info_koaza': 'no label', 'reform_info_shikuchoson': 'no label', 'is_choson': 'no label', 'is_oaza': 'no label', 'start': 'no label', 'end': 'no label', 'start2': 'no label', 'end2': 'no label', });
lyr__15.set('fieldLabels', {'fid': 'hidden field', 'machi_start': 'hidden field', 'machi_end': 'hidden field', 'shikuchoson_start1': 'hidden field', 'shikuchoson_end1': 'hidden field', 'shikuchoson_start2': 'hidden field', 'shikuchoson_end2': 'hidden field', 'is_reformed': 'hidden field', 'reform_info_machi': 'hidden field', 'reform_info_shikuchoson': 'hidden field', 'shikuchoson': 'no label', 'start': 'hidden field', 'end': 'hidden field', 'start2': 'no label', 'end2': 'no label', });
lyr__15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});