var wms_layers = [];


        var lyr__0 = new ol.layer.Tile({
            'title': '地理院地図（淡色地図）',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png'
            })
        });
var format___1 = new ol.format.GeoJSON();
var features___1 = format___1.readFeatures(json___1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___1.addFeatures(features___1);
var lyr___1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___1, 
                style: style___1,
                popuplayertitle: '小字ラベル_出力',
                interactive: true,
                title: '<img src="styles/legend/__1.png" /> 小字ラベル_出力'
            });
var format___2 = new ol.format.GeoJSON();
var features___2 = format___2.readFeatures(json___2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___2.addFeatures(features___2);
var lyr___2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___2, 
                style: style___2,
                popuplayertitle: '大字ラベル_出力',
                interactive: true,
                title: '<img src="styles/legend/__2.png" /> 大字ラベル_出力'
            });
var format___3 = new ol.format.GeoJSON();
var features___3 = format___3.readFeatures(json___3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___3.addFeatures(features___3);
var lyr___3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___3, 
                style: style___3,
                popuplayertitle: '旧町村ラベル_出力',
                interactive: true,
                title: '<img src="styles/legend/__3.png" /> 旧町村ラベル_出力'
            });
var format___4 = new ol.format.GeoJSON();
var features___4 = format___4.readFeatures(json___4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___4.addFeatures(features___4);
var lyr___4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___4, 
                style: style___4,
                popuplayertitle: '町ラベル_出力',
                interactive: true,
                title: '<img src="styles/legend/__4.png" /> 町ラベル_出力'
            });
var format___5 = new ol.format.GeoJSON();
var features___5 = format___5.readFeatures(json___5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___5.addFeatures(features___5);
var lyr___5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___5, 
                style: style___5,
                popuplayertitle: '市区町村ラベル_出力',
                interactive: true,
                title: '<img src="styles/legend/__5.png" /> 市区町村ラベル_出力'
            });
var format___6 = new ol.format.GeoJSON();
var features___6 = format___6.readFeatures(json___6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___6.addFeatures(features___6);
var lyr___6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___6, 
                style: style___6,
                popuplayertitle: '小字界（変更分）_出力',
                interactive: true,
                title: '<img src="styles/legend/__6.png" /> 小字界（変更分）_出力'
            });
var format___7 = new ol.format.GeoJSON();
var features___7 = format___7.readFeatures(json___7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___7.addFeatures(features___7);
var lyr___7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___7, 
                style: style___7,
                popuplayertitle: '小字界_出力',
                interactive: false,
                title: '<img src="styles/legend/__7.png" /> 小字界_出力'
            });
var format___8 = new ol.format.GeoJSON();
var features___8 = format___8.readFeatures(json___8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___8.addFeatures(features___8);
var lyr___8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___8, 
                style: style___8,
                popuplayertitle: '大字界（変更分）_出力',
                interactive: false,
                title: '<img src="styles/legend/__8.png" /> 大字界（変更分）_出力'
            });
var format___9 = new ol.format.GeoJSON();
var features___9 = format___9.readFeatures(json___9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___9.addFeatures(features___9);
var lyr___9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___9, 
                style: style___9,
                popuplayertitle: '大字界_出力',
                interactive: false,
                title: '<img src="styles/legend/__9.png" /> 大字界_出力'
            });
var format___10 = new ol.format.GeoJSON();
var features___10 = format___10.readFeatures(json___10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___10.addFeatures(features___10);
var lyr___10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___10, 
                style: style___10,
                popuplayertitle: '旧町村界_出力',
                interactive: false,
                title: '<img src="styles/legend/__10.png" /> 旧町村界_出力'
            });
var format___11 = new ol.format.GeoJSON();
var features___11 = format___11.readFeatures(json___11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___11.addFeatures(features___11);
var lyr___11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___11, 
                style: style___11,
                popuplayertitle: '町界（変更分）_出力',
                interactive: true,
                title: '<img src="styles/legend/__11.png" /> 町界（変更分）_出力'
            });
var format___12 = new ol.format.GeoJSON();
var features___12 = format___12.readFeatures(json___12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___12.addFeatures(features___12);
var lyr___12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___12, 
                style: style___12,
                popuplayertitle: '町界_出力',
                interactive: false,
                title: '<img src="styles/legend/__12.png" /> 町界_出力'
            });
var format___13 = new ol.format.GeoJSON();
var features___13 = format___13.readFeatures(json___13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___13.addFeatures(features___13);
var lyr___13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___13, 
                style: style___13,
                popuplayertitle: '市区町村界（字）（変更分）_出力',
                interactive: true,
                title: '<img src="styles/legend/__13.png" /> 市区町村界（字）（変更分）_出力'
            });
var format___14 = new ol.format.GeoJSON();
var features___14 = format___14.readFeatures(json___14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___14.addFeatures(features___14);
var lyr___14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___14, 
                style: style___14,
                popuplayertitle: '市区町村界（字）_出力',
                interactive: false,
                title: '<img src="styles/legend/__14.png" /> 市区町村界（字）_出力'
            });
var format___15 = new ol.format.GeoJSON();
var features___15 = format___15.readFeatures(json___15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___15.addFeatures(features___15);
var lyr___15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___15, 
                style: style___15,
                popuplayertitle: '市区町村界（町）_出力',
                interactive: false,
                title: '<img src="styles/legend/__15.png" /> 市区町村界（町）_出力'
            });

lyr__0.setVisible(true);lyr___1.setVisible(true);lyr___2.setVisible(true);lyr___3.setVisible(true);lyr___4.setVisible(true);lyr___5.setVisible(true);lyr___6.setVisible(true);lyr___7.setVisible(true);lyr___8.setVisible(true);lyr___9.setVisible(true);lyr___10.setVisible(true);lyr___11.setVisible(true);lyr___12.setVisible(true);lyr___13.setVisible(true);lyr___14.setVisible(true);lyr___15.setVisible(true);
var layersList = [lyr__0,lyr___1,lyr___2,lyr___3,lyr___4,lyr___5,lyr___6,lyr___7,lyr___8,lyr___9,lyr___10,lyr___11,lyr___12,lyr___13,lyr___14,lyr___15];
lyr___1.set('fieldAliases', {'fid': 'fid', 'koaza_id': 'koaza_id', 'start': 'start', 'end': 'end', '小字マスター_fid': '小字マスター_fid', '小字マスター_shin-choson': '小字マスター_shin-choson', '小字マスター_oaza': '小字マスター_oaza', '小字マスター_name': '小字マスター_name', '小字マスター_reading': '小字マスター_reading', '小字マスター_variants': '小字マスター_variants', '小字マスター_note': '小字マスター_note', '小字マスター_history1': '小字マスター_history1', '小字マスター_history2': '小字マスター_history2', '小字マスター_history3': '小字マスター_history3', '小字マスター_history4': '小字マスター_history4', '小字マスター_history5': '小字マスター_history5', '小字マスター_history6': '小字マスター_history6', '小字マスター_history7': '小字マスター_history7', '小字マスター_history8': '小字マスター_history8', '小字マスター_history9': '小字マスター_history9', '小字マスター_link': '小字マスター_link', 'display_name': 'display_name', 'popup_title': 'popup_title', 'popup_text': 'popup_text', });
lyr___2.set('fieldAliases', {'fid': 'fid', 'oaza_id': 'oaza_id', 'start': 'start', 'end': 'end', '大字・旧町村マスター_fid': '大字・旧町村マスター_fid', '大字・旧町村マスター_shin-choson': '大字・旧町村マスター_shin-choson', '大字・旧町村マスター_oaza_name': '大字・旧町村マスター_oaza_name', '大字・旧町村マスター_kyu-choson_name': '大字・旧町村マスター_kyu-choson_name', '大字・旧町村マスター_oaza_history': '大字・旧町村マスター_oaza_history', '大字・旧町村マスター_kyu-choson_history': '大字・旧町村マスター_kyu-choson_history', 'display_name': 'display_name', 'popup_title': 'popup_title', 'popup_text': 'popup_text', });
lyr___3.set('fieldAliases', {'fid': 'fid', 'oaza_id': 'oaza_id', 'start': 'start', 'end': 'end', '大字・旧町村マスター_fid': '大字・旧町村マスター_fid', '大字・旧町村マスター_shin-choson': '大字・旧町村マスター_shin-choson', '大字・旧町村マスター_oaza_name': '大字・旧町村マスター_oaza_name', '大字・旧町村マスター_kyu-choson_name': '大字・旧町村マスター_kyu-choson_name', '大字・旧町村マスター_oaza_history': '大字・旧町村マスター_oaza_history', '大字・旧町村マスター_kyu-choson_history': '大字・旧町村マスター_kyu-choson_history', 'display_name': 'display_name', 'popup_title': 'popup_title', 'popup_text': 'popup_text', });
lyr___4.set('fieldAliases', {'fid': 'fid', 'machi_id': 'machi_id', 'start': 'start', 'end': 'end', '町マスター_fid': '町マスター_fid', '町マスター_shikuchoson': '町マスター_shikuchoson', '町マスター_name': '町マスター_name', '町マスター_history': '町マスター_history', 'display_name': 'display_name', 'popup_title': 'popup_title', 'popup_text': 'popup_text', });
lyr___5.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'start': 'start', 'end': 'end', '市区町村マスター_fid': '市区町村マスター_fid', '市区町村マスター_history1': '市区町村マスター_history1', '市区町村マスター_history2': '市区町村マスター_history2', '市区町村マスター_history3': '市区町村マスター_history3', '市区町村マスター_history4': '市区町村マスター_history4', '市区町村マスター_history5': '市区町村マスター_history5', '市区町村マスター_history6': '市区町村マスター_history6', '市区町村マスター_history7': '市区町村マスター_history7', '市区町村マスター_history8': '市区町村マスター_history8', '市区町村マスター_history9': '市区町村マスター_history9', 'display_name': 'display_name', 'popup_title': 'popup_title', 'popup_text': 'popup_text', });
lyr___6.set('fieldAliases', {'fid': 'fid', 'koaza_start': 'koaza_start', 'koaza_end': 'koaza_end', 'oaza_start': 'oaza_start', 'oaza_end': 'oaza_end', 'kyu-choson_start': 'kyu-choson_start', 'kyu-choson_end': 'kyu-choson_end', 'shikuchoson_start1': 'shikuchoson_start1', 'shikuchoson_end1': 'shikuchoson_end1', 'shikuchoson_start2': 'shikuchoson_start2', 'shikuchoson_end2': 'shikuchoson_end2', 'is_reformed': 'is_reformed', 'reform_info_koaza': 'reform_info_koaza', 'reform_info_shikuchoson': 'reform_info_shikuchoson', 'is_choson': 'is_choson', 'is_oaza': 'is_oaza', 'start': 'start', 'end': 'end', 'popup_title': 'popup_title', 'popup_text': 'popup_text', });
lyr___7.set('fieldAliases', {'fid': 'fid', 'koaza_start': 'koaza_start', 'koaza_end': 'koaza_end', 'oaza_start': 'oaza_start', 'oaza_end': 'oaza_end', 'kyu-choson_start': 'kyu-choson_start', 'kyu-choson_end': 'kyu-choson_end', 'shikuchoson_start1': 'shikuchoson_start1', 'shikuchoson_end1': 'shikuchoson_end1', 'shikuchoson_start2': 'shikuchoson_start2', 'shikuchoson_end2': 'shikuchoson_end2', 'is_reformed': 'is_reformed', 'reform_info_koaza': 'reform_info_koaza', 'reform_info_shikuchoson': 'reform_info_shikuchoson', 'is_choson': 'is_choson', 'is_oaza': 'is_oaza', 'start': 'start', 'end': 'end', });
lyr___8.set('fieldAliases', {'fid': 'fid', 'koaza_start': 'koaza_start', 'koaza_end': 'koaza_end', 'oaza_start': 'oaza_start', 'oaza_end': 'oaza_end', 'kyu-choson_start': 'kyu-choson_start', 'kyu-choson_end': 'kyu-choson_end', 'shikuchoson_start1': 'shikuchoson_start1', 'shikuchoson_end1': 'shikuchoson_end1', 'shikuchoson_start2': 'shikuchoson_start2', 'shikuchoson_end2': 'shikuchoson_end2', 'is_reformed': 'is_reformed', 'reform_info_koaza': 'reform_info_koaza', 'reform_info_shikuchoson': 'reform_info_shikuchoson', 'is_choson': 'is_choson', 'is_oaza': 'is_oaza', 'start': 'start', 'end': 'end', });
lyr___9.set('fieldAliases', {'fid': 'fid', 'koaza_start': 'koaza_start', 'koaza_end': 'koaza_end', 'oaza_start': 'oaza_start', 'oaza_end': 'oaza_end', 'kyu-choson_start': 'kyu-choson_start', 'kyu-choson_end': 'kyu-choson_end', 'shikuchoson_start1': 'shikuchoson_start1', 'shikuchoson_end1': 'shikuchoson_end1', 'shikuchoson_start2': 'shikuchoson_start2', 'shikuchoson_end2': 'shikuchoson_end2', 'is_reformed': 'is_reformed', 'reform_info_koaza': 'reform_info_koaza', 'reform_info_shikuchoson': 'reform_info_shikuchoson', 'is_choson': 'is_choson', 'is_oaza': 'is_oaza', 'start': 'start', 'end': 'end', });
lyr___10.set('fieldAliases', {'fid': 'fid', 'koaza_start': 'koaza_start', 'koaza_end': 'koaza_end', 'oaza_start': 'oaza_start', 'oaza_end': 'oaza_end', 'kyu-choson_start': 'kyu-choson_start', 'kyu-choson_end': 'kyu-choson_end', 'shikuchoson_start1': 'shikuchoson_start1', 'shikuchoson_end1': 'shikuchoson_end1', 'shikuchoson_start2': 'shikuchoson_start2', 'shikuchoson_end2': 'shikuchoson_end2', 'is_reformed': 'is_reformed', 'reform_info_koaza': 'reform_info_koaza', 'reform_info_shikuchoson': 'reform_info_shikuchoson', 'is_choson': 'is_choson', 'is_oaza': 'is_oaza', 'start': 'start', 'end': 'end', });
lyr___11.set('fieldAliases', {'fid': 'fid', 'machi_start': 'machi_start', 'machi_end': 'machi_end', 'shikuchoson_start1': 'shikuchoson_start1', 'shikuchoson_end1': 'shikuchoson_end1', 'shikuchoson_start2': 'shikuchoson_start2', 'shikuchoson_end2': 'shikuchoson_end2', 'is_reformed': 'is_reformed', 'reform_info_machi': 'reform_info_machi', 'shikuchoson': 'shikuchoson', 'start': 'start', 'end': 'end', 'popup_title': 'popup_title', 'popup_text': 'popup_text', });
lyr___12.set('fieldAliases', {'fid': 'fid', 'machi_start': 'machi_start', 'machi_end': 'machi_end', 'shikuchoson_start1': 'shikuchoson_start1', 'shikuchoson_end1': 'shikuchoson_end1', 'shikuchoson_start2': 'shikuchoson_start2', 'shikuchoson_end2': 'shikuchoson_end2', 'is_reformed': 'is_reformed', 'reform_info_machi': 'reform_info_machi', 'shikuchoson': 'shikuchoson', 'start': 'start', 'end': 'end', });
lyr___13.set('fieldAliases', {'fid': 'fid', 'koaza_start': 'koaza_start', 'koaza_end': 'koaza_end', 'oaza_start': 'oaza_start', 'oaza_end': 'oaza_end', 'kyu-choson_start': 'kyu-choson_start', 'kyu-choson_end': 'kyu-choson_end', 'shikuchoson_start1': 'shikuchoson_start1', 'shikuchoson_end1': 'shikuchoson_end1', 'shikuchoson_start2': 'shikuchoson_start2', 'shikuchoson_end2': 'shikuchoson_end2', 'is_reformed': 'is_reformed', 'reform_info_koaza': 'reform_info_koaza', 'reform_info_shikuchoson': 'reform_info_shikuchoson', 'is_choson': 'is_choson', 'is_oaza': 'is_oaza', 'start': 'start', 'end': 'end', 'start2': 'start2', 'end2': 'end2', 'popup_title': 'popup_title', 'popup_text': 'popup_text', });
lyr___14.set('fieldAliases', {'fid': 'fid', 'koaza_start': 'koaza_start', 'koaza_end': 'koaza_end', 'oaza_start': 'oaza_start', 'oaza_end': 'oaza_end', 'kyu-choson_start': 'kyu-choson_start', 'kyu-choson_end': 'kyu-choson_end', 'shikuchoson_start1': 'shikuchoson_start1', 'shikuchoson_end1': 'shikuchoson_end1', 'shikuchoson_start2': 'shikuchoson_start2', 'shikuchoson_end2': 'shikuchoson_end2', 'is_reformed': 'is_reformed', 'reform_info_koaza': 'reform_info_koaza', 'reform_info_shikuchoson': 'reform_info_shikuchoson', 'is_choson': 'is_choson', 'is_oaza': 'is_oaza', 'start': 'start', 'end': 'end', 'start2': 'start2', 'end2': 'end2', });
lyr___15.set('fieldAliases', {'fid': 'fid', 'machi_start': 'machi_start', 'machi_end': 'machi_end', 'shikuchoson_start1': 'shikuchoson_start1', 'shikuchoson_end1': 'shikuchoson_end1', 'shikuchoson_start2': 'shikuchoson_start2', 'shikuchoson_end2': 'shikuchoson_end2', 'is_reformed': 'is_reformed', 'reform_info_machi': 'reform_info_machi', 'shikuchoson': 'shikuchoson', 'start': 'start', 'end': 'end', 'start2': 'start2', 'end2': 'end2', });
lyr___1.set('fieldImages', {'fid': 'TextEdit', 'koaza_id': 'TextEdit', 'start': 'Range', 'end': 'Range', '小字マスター_fid': 'TextEdit', '小字マスター_shin-choson': 'TextEdit', '小字マスター_oaza': 'TextEdit', '小字マスター_name': 'TextEdit', '小字マスター_reading': 'TextEdit', '小字マスター_variants': 'TextEdit', '小字マスター_note': 'TextEdit', '小字マスター_history1': 'TextEdit', '小字マスター_history2': 'TextEdit', '小字マスター_history3': 'TextEdit', '小字マスター_history4': 'TextEdit', '小字マスター_history5': 'TextEdit', '小字マスター_history6': 'TextEdit', '小字マスター_history7': 'TextEdit', '小字マスター_history8': 'TextEdit', '小字マスター_history9': 'TextEdit', '小字マスター_link': 'TextEdit', 'display_name': 'TextEdit', 'popup_title': 'TextEdit', 'popup_text': 'TextEdit', });
lyr___2.set('fieldImages', {'fid': 'TextEdit', 'oaza_id': 'TextEdit', 'start': 'Range', 'end': 'Range', '大字・旧町村マスター_fid': 'TextEdit', '大字・旧町村マスター_shin-choson': 'TextEdit', '大字・旧町村マスター_oaza_name': 'TextEdit', '大字・旧町村マスター_kyu-choson_name': 'TextEdit', '大字・旧町村マスター_oaza_history': 'TextEdit', '大字・旧町村マスター_kyu-choson_history': 'TextEdit', 'display_name': 'TextEdit', 'popup_title': 'TextEdit', 'popup_text': 'TextEdit', });
lyr___3.set('fieldImages', {'fid': 'TextEdit', 'oaza_id': 'TextEdit', 'start': 'Range', 'end': 'Range', '大字・旧町村マスター_fid': 'TextEdit', '大字・旧町村マスター_shin-choson': 'TextEdit', '大字・旧町村マスター_oaza_name': 'TextEdit', '大字・旧町村マスター_kyu-choson_name': 'TextEdit', '大字・旧町村マスター_oaza_history': 'TextEdit', '大字・旧町村マスター_kyu-choson_history': 'TextEdit', 'display_name': 'TextEdit', 'popup_title': 'TextEdit', 'popup_text': 'TextEdit', });
lyr___4.set('fieldImages', {'fid': 'TextEdit', 'machi_id': 'TextEdit', 'start': 'Range', 'end': 'Range', '町マスター_fid': 'TextEdit', '町マスター_shikuchoson': 'TextEdit', '町マスター_name': 'TextEdit', '町マスター_history': 'TextEdit', 'display_name': 'TextEdit', 'popup_title': 'TextEdit', 'popup_text': 'TextEdit', });
lyr___5.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'start': 'Range', 'end': 'Range', '市区町村マスター_fid': 'TextEdit', '市区町村マスター_history1': 'TextEdit', '市区町村マスター_history2': 'TextEdit', '市区町村マスター_history3': 'TextEdit', '市区町村マスター_history4': 'TextEdit', '市区町村マスター_history5': 'TextEdit', '市区町村マスター_history6': 'TextEdit', '市区町村マスター_history7': 'TextEdit', '市区町村マスター_history8': 'TextEdit', '市区町村マスター_history9': 'TextEdit', 'display_name': 'TextEdit', 'popup_title': 'TextEdit', 'popup_text': 'TextEdit', });
lyr___6.set('fieldImages', {'fid': 'TextEdit', 'koaza_start': 'Range', 'koaza_end': 'Range', 'oaza_start': 'Range', 'oaza_end': 'Range', 'kyu-choson_start': 'Range', 'kyu-choson_end': 'Range', 'shikuchoson_start1': 'Range', 'shikuchoson_end1': 'Range', 'shikuchoson_start2': 'Range', 'shikuchoson_end2': 'Range', 'is_reformed': 'CheckBox', 'reform_info_koaza': 'TextEdit', 'reform_info_shikuchoson': 'TextEdit', 'is_choson': '', 'is_oaza': '', 'start': '', 'end': '', 'popup_title': '', 'popup_text': '', });
lyr___7.set('fieldImages', {'fid': 'TextEdit', 'koaza_start': 'Range', 'koaza_end': 'Range', 'oaza_start': 'Range', 'oaza_end': 'Range', 'kyu-choson_start': 'Range', 'kyu-choson_end': 'Range', 'shikuchoson_start1': 'Range', 'shikuchoson_end1': 'Range', 'shikuchoson_start2': 'Range', 'shikuchoson_end2': 'Range', 'is_reformed': 'CheckBox', 'reform_info_koaza': 'TextEdit', 'reform_info_shikuchoson': 'TextEdit', 'is_choson': '', 'is_oaza': '', 'start': '', 'end': '', });
lyr___8.set('fieldImages', {'fid': 'TextEdit', 'koaza_start': 'Range', 'koaza_end': 'Range', 'oaza_start': 'Range', 'oaza_end': 'Range', 'kyu-choson_start': 'Range', 'kyu-choson_end': 'Range', 'shikuchoson_start1': 'Range', 'shikuchoson_end1': 'Range', 'shikuchoson_start2': 'Range', 'shikuchoson_end2': 'Range', 'is_reformed': 'CheckBox', 'reform_info_koaza': 'TextEdit', 'reform_info_shikuchoson': 'TextEdit', 'is_choson': '', 'is_oaza': '', 'start': '', 'end': '', });
lyr___9.set('fieldImages', {'fid': 'TextEdit', 'koaza_start': 'Range', 'koaza_end': 'Range', 'oaza_start': 'Range', 'oaza_end': 'Range', 'kyu-choson_start': 'Range', 'kyu-choson_end': 'Range', 'shikuchoson_start1': 'Range', 'shikuchoson_end1': 'Range', 'shikuchoson_start2': 'Range', 'shikuchoson_end2': 'Range', 'is_reformed': 'CheckBox', 'reform_info_koaza': 'TextEdit', 'reform_info_shikuchoson': 'TextEdit', 'is_choson': '', 'is_oaza': '', 'start': '', 'end': '', });
lyr___10.set('fieldImages', {'fid': 'TextEdit', 'koaza_start': 'Range', 'koaza_end': 'Range', 'oaza_start': 'Range', 'oaza_end': 'Range', 'kyu-choson_start': 'Range', 'kyu-choson_end': 'Range', 'shikuchoson_start1': 'Range', 'shikuchoson_end1': 'Range', 'shikuchoson_start2': 'Range', 'shikuchoson_end2': 'Range', 'is_reformed': 'CheckBox', 'reform_info_koaza': 'TextEdit', 'reform_info_shikuchoson': 'TextEdit', 'is_choson': '', 'is_oaza': '', 'start': '', 'end': '', });
lyr___11.set('fieldImages', {'fid': 'TextEdit', 'machi_start': 'Range', 'machi_end': 'Range', 'shikuchoson_start1': 'Range', 'shikuchoson_end1': 'Range', 'shikuchoson_start2': 'Range', 'shikuchoson_end2': 'Range', 'is_reformed': 'CheckBox', 'reform_info_machi': 'TextEdit', 'shikuchoson': '', 'start': '', 'end': '', 'popup_title': '', 'popup_text': '', });
lyr___12.set('fieldImages', {'fid': 'TextEdit', 'machi_start': 'Range', 'machi_end': 'Range', 'shikuchoson_start1': 'Range', 'shikuchoson_end1': 'Range', 'shikuchoson_start2': 'Range', 'shikuchoson_end2': 'Range', 'is_reformed': 'CheckBox', 'reform_info_machi': 'TextEdit', 'shikuchoson': '', 'start': '', 'end': '', });
lyr___13.set('fieldImages', {'fid': 'TextEdit', 'koaza_start': 'Range', 'koaza_end': 'Range', 'oaza_start': 'Range', 'oaza_end': 'Range', 'kyu-choson_start': 'Range', 'kyu-choson_end': 'Range', 'shikuchoson_start1': 'Range', 'shikuchoson_end1': 'Range', 'shikuchoson_start2': 'Range', 'shikuchoson_end2': 'Range', 'is_reformed': 'CheckBox', 'reform_info_koaza': 'TextEdit', 'reform_info_shikuchoson': 'TextEdit', 'is_choson': '', 'is_oaza': '', 'start': '', 'end': '', 'start2': '', 'end2': '', 'popup_title': '', 'popup_text': '', });
lyr___14.set('fieldImages', {'fid': 'TextEdit', 'koaza_start': 'Range', 'koaza_end': 'Range', 'oaza_start': 'Range', 'oaza_end': 'Range', 'kyu-choson_start': 'Range', 'kyu-choson_end': 'Range', 'shikuchoson_start1': 'Range', 'shikuchoson_end1': 'Range', 'shikuchoson_start2': 'Range', 'shikuchoson_end2': 'Range', 'is_reformed': 'CheckBox', 'reform_info_koaza': 'TextEdit', 'reform_info_shikuchoson': 'TextEdit', 'is_choson': '', 'is_oaza': '', 'start': '', 'end': '', 'start2': '', 'end2': '', });
lyr___15.set('fieldImages', {'fid': 'TextEdit', 'machi_start': 'Range', 'machi_end': 'Range', 'shikuchoson_start1': 'Range', 'shikuchoson_end1': 'Range', 'shikuchoson_start2': 'Range', 'shikuchoson_end2': 'Range', 'is_reformed': 'CheckBox', 'reform_info_machi': 'TextEdit', 'shikuchoson': '', 'start': '', 'end': '', 'start2': '', 'end2': '', });
lyr___1.set('fieldLabels', {'fid': 'hidden field', 'koaza_id': 'hidden field', 'start': 'hidden field', 'end': 'hidden field', '小字マスター_fid': 'hidden field', '小字マスター_shin-choson': 'hidden field', '小字マスター_oaza': 'hidden field', '小字マスター_name': 'hidden field', '小字マスター_reading': 'hidden field', '小字マスター_variants': 'hidden field', '小字マスター_note': 'hidden field', '小字マスター_history1': 'hidden field', '小字マスター_history2': 'hidden field', '小字マスター_history3': 'hidden field', '小字マスター_history4': 'hidden field', '小字マスター_history5': 'hidden field', '小字マスター_history6': 'hidden field', '小字マスター_history7': 'hidden field', '小字マスター_history8': 'hidden field', '小字マスター_history9': 'hidden field', '小字マスター_link': 'hidden field', 'display_name': 'hidden field', 'popup_title': 'hidden field', 'popup_text': 'no label', });
lyr___2.set('fieldLabels', {'fid': 'hidden field', 'oaza_id': 'hidden field', 'start': 'hidden field', 'end': 'hidden field', '大字・旧町村マスター_fid': 'hidden field', '大字・旧町村マスター_shin-choson': 'hidden field', '大字・旧町村マスター_oaza_name': 'hidden field', '大字・旧町村マスター_kyu-choson_name': 'hidden field', '大字・旧町村マスター_oaza_history': 'hidden field', '大字・旧町村マスター_kyu-choson_history': 'hidden field', 'display_name': 'hidden field', 'popup_title': 'hidden field', 'popup_text': 'no label', });
lyr___3.set('fieldLabels', {'fid': 'hidden field', 'oaza_id': 'hidden field', 'start': 'hidden field', 'end': 'hidden field', '大字・旧町村マスター_fid': 'hidden field', '大字・旧町村マスター_shin-choson': 'hidden field', '大字・旧町村マスター_oaza_name': 'hidden field', '大字・旧町村マスター_kyu-choson_name': 'hidden field', '大字・旧町村マスター_oaza_history': 'hidden field', '大字・旧町村マスター_kyu-choson_history': 'hidden field', 'display_name': 'hidden field', 'popup_title': 'hidden field', 'popup_text': 'no label', });
lyr___4.set('fieldLabels', {'fid': 'hidden field', 'machi_id': 'hidden field', 'start': 'hidden field', 'end': 'hidden field', '町マスター_fid': 'hidden field', '町マスター_shikuchoson': 'hidden field', '町マスター_name': 'hidden field', '町マスター_history': 'hidden field', 'display_name': 'hidden field', 'popup_title': 'hidden field', 'popup_text': 'no label', });
lyr___5.set('fieldLabels', {'fid': 'hidden field', 'name': 'hidden field', 'start': 'hidden field', 'end': 'hidden field', '市区町村マスター_fid': 'hidden field', '市区町村マスター_history1': 'hidden field', '市区町村マスター_history2': 'hidden field', '市区町村マスター_history3': 'hidden field', '市区町村マスター_history4': 'hidden field', '市区町村マスター_history5': 'hidden field', '市区町村マスター_history6': 'hidden field', '市区町村マスター_history7': 'hidden field', '市区町村マスター_history8': 'hidden field', '市区町村マスター_history9': 'hidden field', 'display_name': 'hidden field', 'popup_title': 'hidden field', 'popup_text': 'no label', });
lyr___6.set('fieldLabels', {'fid': 'hidden field', 'koaza_start': 'hidden field', 'koaza_end': 'hidden field', 'oaza_start': 'hidden field', 'oaza_end': 'hidden field', 'kyu-choson_start': 'hidden field', 'kyu-choson_end': 'hidden field', 'shikuchoson_start1': 'hidden field', 'shikuchoson_end1': 'hidden field', 'shikuchoson_start2': 'hidden field', 'shikuchoson_end2': 'hidden field', 'is_reformed': 'hidden field', 'reform_info_koaza': 'hidden field', 'reform_info_shikuchoson': 'hidden field', 'is_choson': 'hidden field', 'is_oaza': 'hidden field', 'start': 'hidden field', 'end': 'hidden field', 'popup_title': 'hidden field', 'popup_text': 'no label', });
lyr___7.set('fieldLabels', {'fid': 'no label', 'koaza_start': 'no label', 'koaza_end': 'no label', 'oaza_start': 'no label', 'oaza_end': 'no label', 'kyu-choson_start': 'no label', 'kyu-choson_end': 'no label', 'shikuchoson_start1': 'no label', 'shikuchoson_end1': 'no label', 'shikuchoson_start2': 'no label', 'shikuchoson_end2': 'no label', 'is_reformed': 'no label', 'reform_info_koaza': 'no label', 'reform_info_shikuchoson': 'no label', 'is_choson': 'no label', 'is_oaza': 'no label', 'start': 'no label', 'end': 'no label', });
lyr___8.set('fieldLabels', {'fid': 'hidden field', 'koaza_start': 'hidden field', 'koaza_end': 'hidden field', 'oaza_start': 'hidden field', 'oaza_end': 'hidden field', 'kyu-choson_start': 'hidden field', 'kyu-choson_end': 'hidden field', 'shikuchoson_start1': 'hidden field', 'shikuchoson_end1': 'no label', 'shikuchoson_start2': 'no label', 'shikuchoson_end2': 'no label', 'is_reformed': 'no label', 'reform_info_koaza': 'no label', 'reform_info_shikuchoson': 'no label', 'is_choson': 'no label', 'is_oaza': 'no label', 'start': 'no label', 'end': 'no label', });
lyr___9.set('fieldLabels', {'fid': 'no label', 'koaza_start': 'no label', 'koaza_end': 'no label', 'oaza_start': 'no label', 'oaza_end': 'no label', 'kyu-choson_start': 'no label', 'kyu-choson_end': 'no label', 'shikuchoson_start1': 'no label', 'shikuchoson_end1': 'no label', 'shikuchoson_start2': 'no label', 'shikuchoson_end2': 'no label', 'is_reformed': 'no label', 'reform_info_koaza': 'no label', 'reform_info_shikuchoson': 'no label', 'is_choson': 'no label', 'is_oaza': 'no label', 'start': 'no label', 'end': 'no label', });
lyr___10.set('fieldLabels', {'fid': 'no label', 'koaza_start': 'no label', 'koaza_end': 'no label', 'oaza_start': 'no label', 'oaza_end': 'no label', 'kyu-choson_start': 'no label', 'kyu-choson_end': 'no label', 'shikuchoson_start1': 'no label', 'shikuchoson_end1': 'no label', 'shikuchoson_start2': 'no label', 'shikuchoson_end2': 'no label', 'is_reformed': 'no label', 'reform_info_koaza': 'no label', 'reform_info_shikuchoson': 'no label', 'is_choson': 'no label', 'is_oaza': 'no label', 'start': 'no label', 'end': 'no label', });
lyr___11.set('fieldLabels', {'fid': 'hidden field', 'machi_start': 'hidden field', 'machi_end': 'hidden field', 'shikuchoson_start1': 'hidden field', 'shikuchoson_end1': 'hidden field', 'shikuchoson_start2': 'hidden field', 'shikuchoson_end2': 'hidden field', 'is_reformed': 'hidden field', 'reform_info_machi': 'hidden field', 'shikuchoson': 'hidden field', 'start': 'hidden field', 'end': 'hidden field', 'popup_title': 'hidden field', 'popup_text': 'no label', });
lyr___12.set('fieldLabels', {'fid': 'no label', 'machi_start': 'no label', 'machi_end': 'no label', 'shikuchoson_start1': 'no label', 'shikuchoson_end1': 'no label', 'shikuchoson_start2': 'no label', 'shikuchoson_end2': 'no label', 'is_reformed': 'no label', 'reform_info_machi': 'no label', 'shikuchoson': 'no label', 'start': 'no label', 'end': 'no label', });
lyr___13.set('fieldLabels', {'fid': 'hidden field', 'koaza_start': 'hidden field', 'koaza_end': 'hidden field', 'oaza_start': 'hidden field', 'oaza_end': 'hidden field', 'kyu-choson_start': 'hidden field', 'kyu-choson_end': 'hidden field', 'shikuchoson_start1': 'hidden field', 'shikuchoson_end1': 'hidden field', 'shikuchoson_start2': 'hidden field', 'shikuchoson_end2': 'hidden field', 'is_reformed': 'hidden field', 'reform_info_koaza': 'hidden field', 'reform_info_shikuchoson': 'hidden field', 'is_choson': 'hidden field', 'is_oaza': 'hidden field', 'start': 'hidden field', 'end': 'hidden field', 'start2': 'hidden field', 'end2': 'hidden field', 'popup_title': 'hidden field', 'popup_text': 'no label', });
lyr___14.set('fieldLabels', {'fid': 'no label', 'koaza_start': 'no label', 'koaza_end': 'no label', 'oaza_start': 'no label', 'oaza_end': 'no label', 'kyu-choson_start': 'no label', 'kyu-choson_end': 'no label', 'shikuchoson_start1': 'no label', 'shikuchoson_end1': 'no label', 'shikuchoson_start2': 'no label', 'shikuchoson_end2': 'no label', 'is_reformed': 'no label', 'reform_info_koaza': 'no label', 'reform_info_shikuchoson': 'no label', 'is_choson': 'no label', 'is_oaza': 'no label', 'start': 'no label', 'end': 'no label', 'start2': 'no label', 'end2': 'no label', });
lyr___15.set('fieldLabels', {'fid': 'hidden field', 'machi_start': 'hidden field', 'machi_end': 'hidden field', 'shikuchoson_start1': 'hidden field', 'shikuchoson_end1': 'hidden field', 'shikuchoson_start2': 'hidden field', 'shikuchoson_end2': 'hidden field', 'is_reformed': 'hidden field', 'reform_info_machi': 'hidden field', 'shikuchoson': 'no label', 'start': 'hidden field', 'end': 'hidden field', 'start2': 'no label', 'end2': 'no label', });
lyr___15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});