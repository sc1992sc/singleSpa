var fs = require('fs')
var path = require("path")
var configs = require('./apps.config.json')
var apps=configs.apps;
var root=path.join(__dirname,'../main');
var resource = fs.readdirSync(root);


function getResource(config){
    var name=config.name;
    var info = fs.statSync(root+"/"+name)	
    if(info.isDirectory()){
        var childAppResource=fs.readdirSync(root+"/"+name+'/dist/static/js');
        var patters=config.resource.map(function(item){
            return new RegExp("^"+item+".[\\d|\\w]{20}.js$");
        });
        config.resource=[];
        
        for(let i=0;i<childAppResource.length;i++){
            var p1=new RegExp("^"+config.resourceEntryUrl+".[\\d|\\w]{20}.js$");
            if(p1.test(childAppResource[i])){
                config.resourceEntryUrl=childAppResource[i]
            }

            for(let n=0;n<patters.length;n++){
                if(patters[n].test(childAppResource[i])){
                    config.resource.push(childAppResource[i]);
                    break;
                }
            }
            
        }
    }	    
}


module.exports = function setConfigApp(){
    for(var t=0;t<apps.length;t++){
        getResource(apps[t])
    }

    try{
        fs.writeFileSync('./public/apps.config.json',JSON.stringify({apps:apps}));
    }catch(err){
        console.log('配置文件写入失败')
    }
}