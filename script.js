var unsupportedImageTypes = new Set();
var unsupportedVideoTypes = new Set();
let webpSize = 20.8;
let jpgSize = 24.9;
let mp4Size = 384;
let webmSize = 229;

function init(){
	let webpImageCaption = document.getElementById('webp-direct-caption');
	let jpgImageCaption = document.getElementById('jpg-direct-caption');
	let dynamicImageCaption = document.getElementById('dynamic-direct-caption');

	let webmVideoCaption = document.getElementById('webm-direct-caption');
	let mp4VideoCaption = document.getElementById('mp4-direct-caption');
	

	calculateImageSize(webpImageCaption,'webp');
	calculateImageSize(jpgImageCaption,'jpg');
	calculateImageSize(dynamicImageCaption,'dynamic');

	calculateVideoSize(webmVideoCaption,'webm');
	calculateVideoSize(mp4VideoCaption,'mp4');
}

function calculateVideoSize(element,type){
	if(unsupportedVideoTypes.has(type))return;
	let size = "";
	if(type == "webm"){
		size = webmSize + " kB";
	} else if(type == "mp4"){
		size = mp4Size + " kB";
	}
	if(type == "dynamic"){
		if(unsupportedVideoTypes.size>0)return;
		
		element.innerText = "Your browser has saved " + (mp4Size - webmSize).toFixed(2) + " kB by loading WebM";
		return;
	}
	console.log(size);
	element.innerText = "Video Size: " + size;
}


function calculateImageSize(element,type){
	if(unsupportedImageTypes.has(type))return;
	let size = "";
	if(type == "webp"){
		size = webpSize + " kB";
	} else if(type == "jpg"){
		size = jpgSize + " kB";
	}
	if(type == "dynamic"){
		if(unsupportedImageTypes.size>0)return;
		
		element.innerText = "Your browser has saved " + (jpgSize - webpSize).toFixed(2) + " kB by loading WebP";
		return;
	}
	console.log(size);
	element.innerText = "Image Size: " + size;
}


function imageNotSupported(type){
	unsupportedImageTypes.add(type);
}

function videoNotSupported(type){
	unsupportedVideoTypes.add(type);
	console.log('unsupported video');
}

function dynamicLoad(){
	console.log('Dynamic Load');
	let dynamicVideoCaption = document.getElementById('dynamic-vid-direct-caption');
	calculateVideoSize(dynamicVideoCaption,'dynamic');

}
