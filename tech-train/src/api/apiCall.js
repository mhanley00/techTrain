import axios from "axios";
const BASEURL = 'https://mapservices.ap.buffalo.edu/mapservices/rest/services/TransitSystemAccess/MapServer/3/query?where=1%3D1&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=*&returnGeometry=false&maxAllowableOffset=&geometryPrecision=&outSR=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&returnTrueCurves=false&resultOffset=&resultRecordCount=&f=json';


// const BASEURL = "https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term="; //https://itunes.apple.com/search?term=jack+johnson&entity=musicVideo
// const ALBUM = "&entity=album"

export default {
  search: function() {
    // return axios.get(BASEURL + query);
    return axios.get(BASEURL)
    .then(function(response){console.log(response);
    return response});
  }
};