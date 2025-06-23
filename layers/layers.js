var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_VIASA072024_1 = new ol.format.GeoJSON();
var features_VIASA072024_1 = format_VIASA072024_1.readFeatures(json_VIASA072024_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VIASA072024_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VIASA072024_1.addFeatures(features_VIASA072024_1);
var lyr_VIASA072024_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VIASA072024_1, 
                style: style_VIASA072024_1,
                popuplayertitle: 'VIAS-A-07-2024',
                interactive: true,
                title: '<img src="styles/legend/VIASA072024_1.png" /> VIAS-A-07-2024'
            });
var group_VIAS = new ol.layer.Group({
                                layers: [lyr_VIASA072024_1,],
                                fold: 'close',
                                title: 'VIAS'});

lyr_GoogleSatellite_0.setVisible(true);lyr_VIASA072024_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_VIAS];
lyr_VIASA072024_1.set('fieldAliases', {'cod3aa101': 'cod3aa101', 'tex_descri': 'tex_descri', 'revestimie': 'revestimie', 'descripcio': 'descripcio', 'Zona': 'Zona', 'nombre': 'nombre', 'OBJECTID': 'OBJECTID', 'ONEWAY': 'ONEWAY', 'OID_': 'OID_', 'FID_1': 'FID_1', 'FT_MINUTES': 'FT_MINUTES', 'TF_MINUTES': 'TF_MINUTES', 'NAME': 'NAME', 'REVEST': 'REVEST', 'ESTADO': 'ESTADO', 'CARRILES': 'CARRILES', 'ANCH_VIA_M': 'ANCH_VIA_M', 'OBSER': 'OBSER', 'ONEWAY_1': 'ONEWAY_1', 'METERS': 'METERS', 'HIERARCHY': 'HIERARCHY', });
lyr_VIASA072024_1.set('fieldImages', {'cod3aa101': 'TextEdit', 'tex_descri': 'TextEdit', 'revestimie': 'TextEdit', 'descripcio': 'TextEdit', 'Zona': 'TextEdit', 'nombre': 'TextEdit', 'OBJECTID': 'Range', 'ONEWAY': 'TextEdit', 'OID_': 'Range', 'FID_1': 'TextEdit', 'FT_MINUTES': 'TextEdit', 'TF_MINUTES': 'TextEdit', 'NAME': 'TextEdit', 'REVEST': 'TextEdit', 'ESTADO': 'TextEdit', 'CARRILES': 'TextEdit', 'ANCH_VIA_M': 'TextEdit', 'OBSER': 'TextEdit', 'ONEWAY_1': 'TextEdit', 'METERS': 'TextEdit', 'HIERARCHY': 'TextEdit', });
lyr_VIASA072024_1.set('fieldLabels', {'cod3aa101': 'no label', 'tex_descri': 'no label', 'revestimie': 'no label', 'descripcio': 'no label', 'Zona': 'no label', 'nombre': 'no label', 'OBJECTID': 'no label', 'ONEWAY': 'no label', 'OID_': 'no label', 'FID_1': 'no label', 'FT_MINUTES': 'no label', 'TF_MINUTES': 'no label', 'NAME': 'no label', 'REVEST': 'no label', 'ESTADO': 'no label', 'CARRILES': 'no label', 'ANCH_VIA_M': 'no label', 'OBSER': 'no label', 'ONEWAY_1': 'no label', 'METERS': 'no label', 'HIERARCHY': 'no label', });
lyr_VIASA072024_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});