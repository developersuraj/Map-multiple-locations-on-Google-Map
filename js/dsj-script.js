/*
/
/ Programming Logic - #3  [Map multiple locations on Google Map]
/ Developer : Suraj Jain
/ Blog : https://developersurajjain.blogspot.com/
/ Website : http://www.surajjain.com/
/ Email : mail.surajjain@gmail.com
/
*/
$(function($) {
	var script = document.createElement('script');
	script.src = "http://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";
	document.body.appendChild(script);	
});

function initialize(loctype) {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap',
    };
    var loctype = $("input[id*=mpo]:checked",parent.document).val();   
	         
    // Display a map on the page
    map = new google.maps.Map(document.getElementById("map_holder"), mapOptions);
    map.setTilt(45);
        
    // Multiple placeholders
    var placeholders = [
        ['location', 'BTM Layout', 12.9147982,77.6119034],
        ['location', 'Lal Bagh', 12.9541,77.585731],
        ['location', 'Iskcon Temple', 13.010473,77.551074],
		['location', 'Bannerghatta National Park', 12.77012,77.56777],
		['location', 'Wonderla Amusement Park', 12.834577,77.400983],
		['location', 'Tippu Sultan\'s Fort', 12.962947,77.576091],
		['location', 'HAL Heritage Museum', 12.955261,77.680992],
		['location', 'Forum Mall', 12.934465,77.611328],
		['location', 'Freedom Park', 12.977518,77.581643],
		['location', 'Cubbon Park', 12.975536,77.591],		
		['school', 'National School of Fashion Arts & Design', 12.9631983,77.646389],
		['school', 'IIPM', 12.9498987,77.6398659],
		['school', 'Orchids The International School', 12.9341306,77.6613236],
		['school', 'IIBS: International Institute of Business Studies', 13.0327392,77.6202321],
		['school', 'SmartKidz Play School', 13.0233318,77.6416039],
		['school', 'Alliance Business School', 12.9739893,77.6659799],
		['school', 'ABBS-ACHARYA BANGALORE B SCHOOL', 13.0032197,77.4847698],		
		['school', 'National Public School', 12.9418885,77.6273895],
        ['school', 'Bethany High School', 12.9406489,77.6209456],
        ['school', 'Chinmaya Vidyalaya', 12.9349986,77.6295317],		
		['hospital', 'Fortis Hospital', 12.8654204, 77.5659759],
		['hospital', 'Apollo Pharmacy', 12.9388413,77.6391792],
		['hospital', 'Insta Health Solutions Private Limited', 12.9478545,77.6385355],
		['hospital', 'Meddiff Technologies Pvt. Ltd', 12.9704229,77.6425696],
		['hospital', 'Max Bupa Health Insurance Co. Ltd', 12.9735071,77.6400805],
		['hospital', 'Hello Health Services Pvt. Ltd', 12.9812228,77.6270771],		
		['hospital', 'Santosh Hospital', 12.9945626,77.6199532],
        ['hospital', 'Devi Eye Hospital', 12.9373409,77.6304329],
        ['hospital', 'Fortis Hospital', 12.9366586,77.6286519],
        ['hospital', 'NYICS', 12.9374298,77.6282979],		
		['mall', 'Garuda Mall', 12.9539974,77.6309395],
		['mall', 'Mantri Square', 12.9745735,77.5808144],
		['mall', 'Phoenix Marketcity', 12.9863664,77.6445007],
		['mall', 'Cosmos Mall', 12.9505759,77.684927],
		['mall', 'Forum Mall', 12.9478075,77.6007271],
		['mall', 'Adarsh Hamilton', 12.9510698,77.6021004],
		['mall', 'World Market', 13.0474128,77.6927376],
		['mall', 'Hyatt Bangalore', 12.9668786,77.6395226],
		['mall', 'IRIS Hotel', 12.9785882,77.6185799],
		['mall', 'Soul Space Arena Mall, Akme Ballet Inner Road', 12.9678823,77.6408959]
    ];     
	         
    // Info Window Content
    var aboutPlaces = [
        ['location', '<div class="info_content">' + '<h3>BTM Layout</h3>' + '<p>Lal Bagh main GateLal Bagh main Gate Hosur Main Road Sudhama Nagar Bengaluru, Karnataka 560027</p>' + '</div>'],
		['location', '<div class="info_content">' + '<h3>Lal Bagh</h3>' + '<p>Iskcon Temple West Of Chord Road, Post Hare Krishna Hill, Rajaji Nagar Bengaluru, Karnataka 560010</p>' + '</div>'],
		['location', '<div class="info_content">' + '<h3>Iskcon Temple</h3>' + '<p>Bannerghatta National Park Bannerghatta Road, Bannerghatta Bengaluru, Karnataka 560083</p>' + '</div>'],
		['location', '<div class="info_content">' + '<h3>Bannerghatta National Park</h3>' + '<p>Bannerghatta National Park Bannerghatta Road, Bannerghatta Bengaluru, Karnataka 560083</p>' + '</div>'],
		['location', '<div class="info_content">' + '<h3>Wonderla Amusement Park</h3>' + '<p>Wonderla Amusement Park 28th km, Mysore Road Bengaluru, Karnataka 562109</p>' + '</div>'],
		['location', '<div class="info_content">' + '<h3>Tippu Sultan\'s Fort</h3>' + '<p>Tippu Sultan\'s Fort AU Bengaluru, Karnataka</p>' + '</div>'],
		['location', '<div class="info_content">' + '<h3>HAL Heritage Museum</h3>' + '<p>HAL Heritage Museum Varthur Road Bengaluru, Karnataka</p>' + '</div>'],
		['location', '<div class="info_content">' + '<h3>Forum Mall</h3>' + '<p>Forum Mall No. 21, Hosur Road, Koramangala Bengaluru, Karnataka 560095</p>' + '</div>'],
		['location', '<div class="info_content">' + '<h3>Freedom Park</h3>' + '<p>Freedom Park Ramachandra Road Gandhi Nagar Bengaluru, Karnataka 560009</p>' + '</div>'],
		['location', '<div class="info_content">' + '<h3>Cubbon Park</h3>' + '<p>Cubbon Park Kasturba Road Bengaluru, Karnataka 560001</p>' + '</div>'],	
		['school', '<div class="info_content">' + '<h3>National School of Fashion Arts & Design</h3>' + '<p>National School of Fashion Arts & Design Bangalore # 216/3, Park View Road Sahakarnagar, Off Bellary Road (New Airport Road) Bengaluru, Karnataka 560092</p>' + '</div>'],
		['school', '<div class="info_content">' + '<h3>IIPM</h3>' + '<p>IIPM 100ft Rd, Koramangala 4 Block Bengaluru, Karnataka 560034</p>' + '</div>'],
		['school', '<div class="info_content">' + '<h3>Orchids The International School</h3>' + '<p>Orchids The International School #13,Survey no. 19, Ambalipura, Varthur Hobli Sarjapur road Bengaluru, Karnataka 562125</p>' + '</div>'],
		['school', '<div class="info_content">' + '<h3>IIBS: International Institute of Business Studies</h3>' + '<p>IIBS: International Institute of Business Studies #70, 2nd Main Road, 3rd Cross Kanaka Nagar, Nagawara Bengaluru, Karnataka 560032</p>' + '</div>'],
		['school', '<div class="info_content">' + '<h3>SmartKidz Play School</h3>' + '<p>SmartKidz Play School #814, 2nd Cross, 8th E-main, HRBR Layout, 1st Block Kalyan Nagar Bengaluru, Karnataka 560043</p>' + '</div>'],
		['school', '<div class="info_content">' + '<h3>Alliance Business School</h3>' + '<p>Alliance Business School 2nd Cross, 36th Main, Dollars Scheme BTM 1st Stage Bengaluru, Karnataka 560068</p>' + '</div>'],
		['school', '<div class="info_content">' + '<h3>ABBS-ACHARYA BANGALORE B SCHOOL</h3>' + '<p>ABBS-ACHARYA BANGALORE B SCHOOL 5th Cross Road Syndicate Bank Employees Housing Society Layout 560091</p>' + '</div>'],
		['school', '<div class="info_content">' + '<h3>National Public School</h3>' + '<p>National Games Village, 80 Feet Main Rd, Koramangala Bengaluru, Karnataka 560047</p>' + '</div>'],
        ['school', '<div class="info_content">' + '<h3>Bethany High School</h3>' + '<p>CA -12, 20th Main, Koramangala, Bengaluru, Karnataka 560095</p>' + '</div>'],
        ['school', '<div class="info_content">' + '<h3>Chinmaya Vidyalaya</h3>' + '<p>Building No. 31 15th Main, 4th block, Koramangala Bengaluru, Karnataka 560034</p>' + '</div>'],		
		['hospital', '<div class="info_content">' + '<h3>Fortis Hospital</h3>' + '<p>Fortis Hospital No. 154/9, Opp IIM-B, Bannerghatta Road, Bilekahalli Bengaluru, Karnataka 560076</p>' + '</div>'],
		['hospital', '<div class="info_content">' + '<h3>Apollo Pharmacy</h3>' + '<p>Apollo Pharmacy, 956, 5th A Main, Near Wipro Park 1st Main Road Koramangala 1st Block Bengaluru, Karnataka</p>' + '</div>'],
		['hospital', '<div class="info_content">' + '<h3>Insta Health Solutions Private Limited</h3>' + '<p>Insta Health Solutions Private Limited 3/4, 2nd Floor, Maruthi Towers, Hosur Main Road Madiwala Bengaluru, Karnataka 560068</p>' + '</div>'],
		['hospital', '<div class="info_content">' + '<h3>Meddiff Technologies Pvt. Ltd</h3>' + '<p>Meddiff Technologies Pvt. Ltd. Salarpuria Palladium, 2nd & 3rd floor, #2021,100 Feet Road,HAL 2ndStage Indira Nagar Bengaluru, Karnataka 560008</p>' + '</div>'],
		['hospital', '<div class="info_content">' + '<h3>Max Bupa Health Insurance Co. Ltd</h3>' + '<p>Max Bupa Health Insurance Co. Ltd., 80 Feet Road HAL 3rd Stage, Kodihalli Bengaluru, Karnataka 560008</p>' + '</div>'],
		['hospital', '<div class="info_content">' + '<h3>Hello Health Services Pvt. Ltd</h3>' + '<p>Hello Health Services Pvt. Ltd. Hello Health Center, 990, 100 feet road, 1st Cross Road, 12th Main, Indiranagar Bengaluru, Karnataka 560038</p>' + '</div>'],
		['hospital', '<div class="info_content">' + '<h3>Santosh Hospital</h3>' + '<p> Santosh Hospital, 6/1, Promenade Road, Behind Near Goodwill School, --560 005, Coles Park Hains Road, Cleveland Town, Pulikeshi Nagar Bengaluru, Karnataka</p>' + '</div>'],
		['hospital', '<div class="info_content">' + '<h3>Devi Eye Hospital</h3>' + '<p>434, Opp. Koramangala Bus Depot, 80 Feet Road, 18th Main, 6th Block,Koramangala Bengaluru, Karnataka 560095</p>' + '</div>'],
        ['hospital', '<div class="info_content">' + '<h3>Fortis Hospital</h3>' + '<p>107, 80 Feet Road, 4th Block, Near-IBP Petrol Bank Koramangala 4th Block Bengaluru, Karnataka 560095</p>' + '</div>'],
        ['hospital', '<div class="info_content">' + '<h3>NYICS</h3>' + '<p>#76, 17th Main, Jyothinivas College Road above Hyderabad House, Koramangala Bengaluru, Karnataka 560095</p>' + '</div>'],		
		['mall', '<div class="info_content">' + '<h3>Garuda Mall</h3>' + '<p>Garuda Mall 15, Magrath Road Ashok Nagar Bengaluru, Karnataka 560025</p>' + '</div>'],
		['mall', '<div class="info_content">' + '<h3>Mantri Square</h3>' + '<p>Mantri Square No 1, Sampige Road, Malleshwaram Bangalore, Karnataka 560003</p>' + '</div>'],
		['mall', '<div class="info_content">' + '<h3>Phoenix Marketcity</h3>' + '<p>Phoenix Marketcity 1st Floor, 106/107, Whitefield Road, Devasandra Industrial Estate, K.R Puram Bengaluru, Karnataka 560048</p>' + '</div>'],
		['mall', '<div class="info_content">' + '<h3>Cosmos Mall</h3>' + '<p>Cosmos Mall Shop No. 6, 1st Floor, Vasswani Matrix, K. R. Puram Hobli, Whitefield Road ITPL Main Road, Aecs Layout, Brookefield Bengaluru, Karnataka 560037</p>' + '</div>'],
		['mall', '<div class="info_content">' + '<h3>Forum Mall</h3>' + '<p>Forum Mall No. 21, Hosur Road, Koramangala Bengaluru, Karnataka 560095</p>' + '</div>'],
		['mall', '<div class="info_content">' + '<h3>Adarsh Hamilton</h3>' + '<p>Adarsh Hamilton 2/4, Langford Garden Road, Richmond Town Bengaluru, Karnataka 560025</p>' + '</div>'],
		['mall', '<div class="info_content">' + '<h3>World Market</h3>' + '<p>World Market Old madras Road, NH 4, Next to BPL Factory, after Toyota showroom Bengaluru, Karnataka 560049</p>' + '</div>'],
		['mall', '<div class="info_content">' + '<h3>Hyatt Bangalore</h3>' + '<p>Hyatt Bangalore MG Road 1/1, Swami Vivekananda Road,Halasuru Bengaluru, Karnataka 560008</p>' + '</div>'],
		['mall', '<div class="info_content">' + '<h3>IRIS Hotel</h3>' + '<p>IRIS Hotel 70, Brigade Rd Shanthala Nagar, Ashok Nagar Bengaluru, Karnataka 560025</p>' + '</div>'],
		['mall', '<div class="info_content">' + '<h3>Soul Space Arena Mall, Akme Ballet Inner Road</h3>' + '<p>Soul Space Arena Mall, Akme Ballet Inner Road, B Chinappa Layout, Dodda Nekkundi Service Road Chinappa Layout, Mahadevapura Bengaluru, Karnataka 560037</p>' + '</div>']
        
    ];
	
	// Info Window Content
    var iconPrefix = {'location':'img/location-icon.png','school':'img/school-icon.png','hospital':'img/hospital-icon.png','mall':'img/bank-icon.png'};
        
    // Display multiple placeholders on a map
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    
    // Loop through our array of placeholders & place each one on the map  
    for( i = 0; i < placeholders.length; i++ ) {
        if(placeholders[i][0] == loctype) {
			var position = new google.maps.LatLng(placeholders[i][2], placeholders[i][3]);
			bounds.extend(position);
			marker = new google.maps.Marker({
				position: position,
				map: map,
				title: placeholders[i][1],
				icon: iconPrefix[loctype]
			});
        
        // Allow each marker to have an info window    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(aboutPlaces[i][1]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        // Automatically center the map fitting all placeholders on the screen
        map.fitBounds(bounds);
		}
    }

    // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(14);
        google.maps.event.removeListener(boundsListener);
    });
    
} 
