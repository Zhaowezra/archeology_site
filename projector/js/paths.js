
let params  = getJsonFromUrl(window.location.search);



//var file = "/static/projector/w2vdata/" + params.basew2vmodel + ".json"

var file = "all_arch_w2v.json"

ldanames = params.ldamodels.split(",")
var ldafiles = { "None": ""}


ldanames.forEach(function(d){
	ldafiles[d] = "dfr_data/" + d + "/"
})


/*
var files = {
    "USA": "/USA_model_normalized.json", 
    "Ecuador" : "/ecuador_model_normalized.json"
  }

var ldafiles = {
  "None": "",
  "test1" : "/testmodel1/",
  "test2" : "/testmodel2/",
  "test3" : "/testmodel3/"
};*/

//should make this a call to a file, should be updated whenever another model is added



/*"test1" : "/dfr_data/tw1.json",
  "test2" : "/dfr_data/tw2.json",


var PATHS = {
	"file" : file,
	"ldafiles" : ["test1" : "/dfr_data/tw1.json", "test2" : "/dfr_data/tw2.json", "test3" : "/dfr_data/tw3.json"],
          "/dfr_data/ecuador_dfr_dt.json"
}*/