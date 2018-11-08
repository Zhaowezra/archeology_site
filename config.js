$("#index-description").text("Archeology")


let dfrFolders = ["all_dfr", "bone_dfr", "cerampotterpottery_dfr", "jade_dfr", "lithic_dfr", "obsidian_dfr"]
let modelsoptions = d3.select('#dfr_models')
console.log(modelsoptions)
modelsoptions.selectAll(".a")
	.data(dfrFolders)
	.enter()
	.append("a")
	.style("class", "dropdown-item")
	.attr("href", function(d){
		console.log(d)
		return d
	})