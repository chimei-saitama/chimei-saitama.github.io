var size = 0;
var placement = 'point';

var style__3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "18.2px \'Noto Sans JP\', sans-serif";
    var labelFill = "#007f00";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("大字・旧町村マスター_kyu-choson_name") !== null && resolution > 0 && resolution < 14) {
        labelText = String(feature.get("大字・旧町村マスター_kyu-choson_name"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.0 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(213,180,60,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
