const fs = require('fs');
const https = require('https');
const cheerio = require("cheerio");
const axios = require("axios");
const appRoot = require('app-root-path');
const parseString = require('xml2js').parseString;
var moment = require('moment');
moment.locale('cs');
const url = 'https://pkr.kr-stredocesky.cz/pkr/zasahy-jpo/feed.xml';

const pattern = /([a-žA-Ž]+:\s*)(\d{1,2}\.\s*[a-žA-Ž]+\s*\d{4},\s*\d{1,2}:\d{1,2})/;

/* Helper for match 'ukonceni' from description */
let pregMatchAll = (search, pattern) => {
    let match, obj = {};   
    match = pattern.exec(search);
    if(match !== null){
        for (let i = 0; i < match.length; ) {
            obj[i] = match[i];
            i++;
        }
        return obj;}
    else{return false;}
};

const itemXtype = null;
/* Model */
const item = (() => {
    let item = {};
        item.id = {};
        item.id.type = null;
        item.id.unique = true;  
        item.eventRegistrationDate = null;    
        item.originDate = null;
        item.statusId = null;
        item.typeId = {};
        item.typeId.type = itemXtype;
        item.typeId.ref = 'Type';      
        item.type = null;
        item.subtypeId = {};
        item.subtypeId.type = itemXtype;
        item.subtypeId.ref = 'Subtype';      
        item.subtype = null;        
        item.noteForMedia =  null;
        item.regionId = {};
        item.regionId.type = itemXtype;
        item.regionId.ref = 'Region';       
        item.region = 'Středočeský';
        item.districtId = {};
        item.districtId.type = itemXtype;
        item.districtId.ref = 'District';         
        item.districtId = null;       
        item.village = null;     
        item.partOfVillage = null;
        item.ORP = null;        
        item.street = null;       
        item.road = null;
        item.detail={};
        item.detail.detail = null;
        return item;
})();

/* XML reader */
https.get(url , (resp) => {
    let data = '';
    resp.on('data', (chunk) => {
        data += chunk;
    });

    resp.on('end', () => {
        parseString(data, function (err, obj) {
            let allEvent = obj.rss.channel[0].item;
            let descript = null;
            let stopEventDate = null;
            let startEventDate = moment(new Date()).format("DD.MM.YYYY HH:mm");
            var arr = [];
            var type = null;
            var subtype = null;
            var obec = null;
            var okres = null;

            for (var i = 0; i < allEvent.length; ) {
                let title = allEvent[i].title[0].trim();
                let parseDescription = allEvent[i].description[0].trim();
    
                var str =  title;
                var o = str.split(' - ');
                var keys = o.keys();

                /* get type from title (first key) */   
                for (key of keys) {
                    if (key == 0 ){
                        var type = o[key]; 
                    }
                }

                var str =  title;
                var o = str.split(' - ');
                var keys = o.keys();

                /* get subtype from title (second key) */
                for (key of keys) {
                    if (key == 1 ){
                        var subtype = o[key]; 
                    }
                }

                var str =  title;
                var o = str.split(' - ');
                var keys = o.keys();

                /* get obec from title (last key) */
                for (key of keys) {
                    if (key > 1 ){
                        var obec = o[o.length-1]; 
                    }
                }

                startEventDate = moment(allEvent[i].pubDate[0].trim()).format("DD.MM.YYYY HH:mm");

                /* get stopEvantDate, if exist 'ukonceni' from descroption */
                if (parseDescription){
                    let parseDescriptionTrue = parseDescription;        
                    if(pregMatchAll(parseDescriptionTrue, pattern)){
                        let descAll = pregMatchAll(parseDescriptionTrue, pattern)[0];
                        let descStopEvent = pregMatchAll(parseDescriptionTrue, pattern)[1];
                        let descCzDate = pregMatchAll(parseDescriptionTrue, pattern)[2];
                        stopEventDate = moment(descCzDate,'DD. MMMM YYYY, HH:mm', 'cs').format("DD.MM.YYYY HH:mm");
                        //startEventDate = moment(allEvent[i].pubDate[0].trim()).format("DD.MM.YYYY HH:mm");
                        descript = parseDescriptionTrue;//.replace(descAll, '');
                    }
                    if(descript == null){
                        descript = parseDescriptionTrue;
                    }
                    descript = descript.replace(/[<]br[^>]*[>]/gi," ");
                    descript = descript.trim();
                }

                var str = descript;
                var o = str.split(' okres ');
                var keys = o.keys();

                /* get okres from description (last key) */
                for (key of keys) {
                    if (key == 1 ){
                        okres = o[key]; 
                    }
                }

                arr[i] = {};
                arr[i]['type']          = type;
                arr[i]['subtype']       = subtype;
                arr[i]['obec']          = obec;
                arr[i]['okres']         = okres;
                arr[i]['title']         = title;
                arr[i]['link']          = allEvent[i].link[0].trim();
                arr[i]['description']   = descript;
                arr[i]['stopEventDate'] = stopEventDate;
                arr[i]['pubDate']       = startEventDate;
                arr[i]['guid']          = allEvent[i].guid[0].trim();
                i++;
            }
            //console.log(arr[0]);

            /* [0] == last event */
            var i = 0; 
            item.id.type = arr[i]['guid']; // or Date.parse(new Date());
            item.eventRegistrationDate = arr[i]['pubDate']; 
            item.type = arr[i]['type'];
            item.subtype = arr[i]['subtype'];
            item.noteForMedia = arr[i]['title']+', '+arr[i]['description'];
            item.districtId = arr[i]['okres'];
            item.village = arr[i]['obec'];
            finalOutput(item);
        });
    });
}).on("error", (err) => {
    console.log("Error: " + err.message);
});

let finalOutput = (item) => {
    console.log(item);
}// ¯\_(ツ)_/¯