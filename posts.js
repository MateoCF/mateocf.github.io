var posts = {
	"post0": {
		"imgweb": "./images/makingmontessoriymca.png",
		"imgclient": "./images/metamedialogo.jpg",
		"title": "Making + Montesorri",
		"desc": "This is a website made for the partnership between the private co-educational school Chiaravalle Montesorri and MetaMedia, a organization from the McGaw YMCA."
	},
};


var clientbox = document.getElementById('clients');
var workbox = document.getElementById('work');

function clientCMS () {
	for(var post in posts)  {
		clientbox.innerHTML += '<img src="' + posts[post].imgclient + '">'
	}
}

function workCMS () {
	for(var post in posts)  {
		workbox.innerHTML += '<div class="websitework"><div class="websiteworkimg"><img src="' + posts[post].imgweb + '"></div><div class="websiteworkdesc"><h3>' + posts[post].title + '</h3><hr><h4>'+ posts[post].desc + '</h4></div><div class="clearfloat"></div></div>'
	}
}

clientCMS();
workCMS();
