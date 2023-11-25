<?php

function geocoder($address)
{   
    $lng = null;
    $lat = null;
    $address2 = null;
    $region = null;
    $area = null;
    $city = null;
    $postal_code = null;
    $postal = null;
    
    $addr = urlencode($address);
    
    $res = file_get_contents('https://geocode-maps.yandex.ru/1.x/?geocode=' . $addr.'&apikey='.YANDEX_API_KEY);
    $parse = simplexml_load_string($res);
    @$pos = $parse->GeoObjectCollection->featureMember[0]->GeoObject->Point->pos;
    
    if (!empty($pos)) {
        
        $lt = explode(' ', $pos);
        $lng = $lt[0];
        $lat = $lt[1];
        
        $postal = $parse->GeoObjectCollection->featureMember->GeoObject->metaDataProperty->GeocoderMetaData->Address->postal_code;
        $postal = (array)$postal;
        @$postal_code = $postal[0];
        
        // детали адреса
        $loc = $parse->GeoObjectCollection->featureMember->GeoObject->metaDataProperty->GeocoderMetaData->AddressDetails->Country;
        $loc = (array)$loc;
        
        $address2 = $loc['AddressLine'];
        
        $adm = (array)$loc['AdministrativeArea'];
        @$region = $adm['AdministrativeAreaName'];
        
        $subAdm = (array)$adm['SubAdministrativeArea'];
        @$area = $subAdm['SubAdministrativeAreaName'];
        
        $cityAdm = (array)$subAdm['Locality'];
        @$city = $cityAdm['LocalityName'];
        
        $arr = array(
          'address' => $address2,
          'region' => $region,
          'area' => $area,
          'city' => $city,
          'lng' => $lng,
          'lat' => $lat,
          'postal_code' => $postal_code
        );
        
        return $arr;
    }

    return false;
}


?>