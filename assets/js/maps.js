/*
function initMap() {
            var map = new google.maps.Map(document.getElementById("map"), {  //view of map on refresh
                zoom: 6,
                center: {
                    lat: 53.619261,
                    lng: -7.0134766
                }
            });
            
            var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";      //labels for markers

            var locations = [                               //array of locations containing objects composed of lat and long
                { lat: 53.525932, lng: -7.338138 },     //mullingar
                { lat: 52.67472, lng: -6.2925 },        // gorey
                { lat: 54.17841, lng: -6.33739 },       //newry
                { lat: 53.321443, lng: -8.783835},      //athenry
                { lat: 51.850334, lng: -8.294286},     //cobh
                { lat: 52.189332576, lng: -10.08366}    //dingle
            ];
            
             var markers = locations.map(function(location, i) {  //pass in location and index
                 return new google.maps.Marker({
                     position: location,        //long and lat
                     label: labels[i % labels.length]
                 });
             });                                             //iterating over those locations and applying labels to them
             
             var markerCluster = new MarkerClusterer(map, markers, {
                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
            });
            
            //https://simplestepscode.com/store-locator-api-tutorial/#step6
            marker.addListener('click', function(){ //for responding to a click on a map marker
            	alert('Marker was clicked!');
            });
 */
 
/*
function initMap() {
	var myMapCenter = {lat: 53.619261, lng: -7.0134766};

	// Create a map object and specify the DOM element for display.
	var map = new google.maps.Map(document.getElementById('map'), {
		center: myMapCenter,
		zoom: 6
	});
 
            
function markStore(storeInfo) {
    
    var marker = new google.maps.Marker({
        map: map,                               //this creates a marker and sets its position
        position: storeInfo.location,
        title: storeInfo.name
    });
    
    marker.addListener('click', function() {
        showStoreInfo(storeInfo);                //display store info when marker clicked
    });

    
function showStoreInfo(storeInfo) {
    var info_div = document.getElementById("info_div");
    info_div.innerHTML = 'Store name: '
    +storeInfo.name
    + '<br>Hours: ' + storeInfo.hours;
}

var stores = [
                {
                    name: 'High Hill Farm Mullingar',
                    location: { lat: 53.525932, lng: -7.338138 }, 
                    hours: '8AM to 6PM'
                },
                
                {
                    name: "Low Hill Farm Gorey",
                    location: { lat: 52.67472, lng: -6.2925 },
                    hours: "9AM to 5PM"
                },
                
                {
                    name: "Medium Hill Farm Newry",
                    location: { lat: 54.17841, lng: -6.33739 },
                    hours: "8AM to 10PM"
                },
                
                {
                    name: "Big Dip Farm Athenry",
                    location: { lat: 53.321443, lng: -8.783835},
                    hours: "7AM - 6PM"
                },
                
                {
                    name: "Little Dip Farm Cobs",
                    location: { lat: 51.850334, lng: -8.294286},
                    hours: "7AM-9PM"
                },
                
                {
                   name: "Medium Dip Farm Dingle",
                   location: { lat: 52.189332576, lng: -10.08366},
                   hours: "10AM-10PM"
                }
            ];

stores.forEach(function(store){
	markStore(store);
});


}
             
        
}
*/

function initMap() {
	var myMapCenter = {lat: 53.619261, lng: -7.0134766};

	// Create a map object and specify the DOM element for display.
	var map = new google.maps.Map(document.getElementById('map'), {
		center: myMapCenter,
		zoom: 6
	});


	function markStore(storeInfo){

		// Create a marker and set its position.
		var marker = new google.maps.Marker({
			map: map,
			position: storeInfo.location,
			title: storeInfo.name
		});

		// show store info when marker is clicked
		marker.addListener('click', function(){
			showStoreInfo(storeInfo);
		});
	}

	// show store info in text box
	function showStoreInfo(storeInfo){
		var info_div = document.getElementById('info_div');
		info_div.innerHTML = 'Store name: '
			+ storeInfo.name
			+ '<br>Hours: ' + storeInfo.hours;
	}

	var stores = [
                {
                    name: 'High Hill Farm Mullingar',
                    location: { lat: 53.525932, lng: -7.338138 }, 
                    hours: '8AM to 6PM'
                },
                
                {
                    name: "Low Hill Farm Gorey",
                    location: { lat: 52.67472, lng: -6.2925 },
                    hours: "9AM to 5PM"
                },
                
                {
                    name: "Medium Hill Farm Newry",
                    location: { lat: 54.17841, lng: -6.33739 },
                    hours: "8AM to 10PM"
                },
                
                {
                    name: "Big Dip Farm Athenry",
                    location: { lat: 53.321443, lng: -8.783835},
                    hours: "7AM - 6PM"
                },
                
                {
                    name: "Little Dip Farm Cobh",
                    location: { lat: 51.850334, lng: -8.294286},
                    hours: "7AM-9PM"
                },
                
                {
                   name: "Medium Dip Farm Dingle",
                   location: { lat: 52.189332576, lng: -10.08366},
                   hours: "10AM-10PM"
                }
            ];

	stores.forEach(function(store){
		markStore(store);
	});

}