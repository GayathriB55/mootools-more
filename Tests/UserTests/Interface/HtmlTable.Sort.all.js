{
	tests: [
		{
			title: "HtmlTable.Sort",
			description: "Loads a striped table of data that can be sorted.",
			verify: "Do you see the table? Can you sort it by clicking the headers?",
			before: function(){
				var t = new HtmlTable({
					sortable: true,
					headers: ['fruit', 'colors']
				});
				t.inject(document.body);
				t.push(['apple', 'red']);
				t.push(['lemon', 'yellow']);
				t.push(['plumbs', 'purple']);
				t.push(['grapes', 'green']);
			}
		},
		{
			title: "HtmlTable.Sort - various data types",
			description: "Loads a striped table of data that can be sorted containing various data types.",
			verify: "Do you see the table? Can you sort it by clicking the headers? Do they sort properly?",
			before: function(){

				var data = [
					     {
						     "id":56,
						     "timezone":"Europe/Amsterdam",
						     "name":"Amsterdam",
						     "geolat":52.3789,
						     "geolong":4.90067
						 },
						 {
							 "id":46,
							 "timezone":"America/New_York",
							 "name":"Atlanta",
							 "geolat":33.7525,
							 "geolong":-84.3888
						 },{"id":42,"timezone":"America/Chicago","name":"Austin","geolat":30.2669,"geolong":-97.7428},{"id":63,"timezone":"America/New_York","name":"Baltimore","geolat":39.294255,"geolong":-76.614275},{"id":24,"timezone":"America/New_York","name":"Boston","geolat":42.3583,"geolong":-71.0603},{"id":32,"timezone":"America/Chicago","name":"Chicago","geolat":41.8858,"geolong":-87.6181},{"id":64,"timezone":"America/New_York","name":"Cleveland","geolat":41.499819,"geolong":-81.693716},{"id":43,"timezone":"America/Chicago","name":"Dallas / Fort Worth","geolat":32.7887,"geolong":-96.7676},{"id":25,"timezone":"America/Denver","name":"Denver","geolat":39.734,"geolong":-105.026},{"id":47,"timezone":"America/New_York","name":"Detroit","geolat":42.3333,"geolong":-83.0484},{"id":48,"timezone":"America/Chicago","name":"Houston","geolat":29.7594,"geolong":-95.3594},{"id":66,"timezone":"America/New_York","name":"Indianapolis","geolat":39.767016,"geolong":-86.156255},{"id":65,"timezone":"America/Chicago","name":"Kansas City","geolat":39.090431,"geolong":-94.583644},{"id":49,"timezone":"America/Los_Angeles","name":"Las Vegas","geolat":36.1721,"geolong":-115.122},{"id":61,"timezone":"Europe/London","name":"London","geolat":51.50714,"geolong":-0.126171},{"id":34,"timezone":"America/Los_Angeles","name":"Los Angeles","geolat":34.0443,"geolong":-118.251},{"id":39,"timezone":"America/New_York","name":"Miami","geolat":25.7323,"geolong":-80.2436},{"id":67,"timezone":"America/Chicago","name":"Milwaukee","geolat":43.038902,"geolong":-87.906474},{"id":51,"timezone":"America/Chicago","name":"Minneapolis / St. Paul","geolat":44.9609,"geolong":-93.2642},{"id":70,"timezone":"America/New_York","name":"Montreal","geolat":45.545447,"geolong":-73.639076},{"id":52,"timezone":"America/Chicago","name":"New Orleans","geolat":29.9544,"geolong":-90.075},{"id":22,"timezone":"America/New_York","name":"New York City","geolat":40.7255,"geolong":-73.9983},{"id":72,"timezone":"America/Chicago","name":"Omaha","geolat":41.254006,"geolong":-95.999258},{"id":33,"timezone":"America/New_York","name":"Philadelphia","geolat":39.8694,"geolong":-75.2731},{"id":53,"timezone":"America/Phoenix","name":"Phoenix","geolat":33.4483,"geolong":-112.073},{"id":60,"timezone":"America/New_York","name":"Pittsburgh","geolat":40.4405,"geolong":-79.9961},{"id":37,"timezone":"America/Los_Angeles","name":"Portland","geolat":45.527,"geolong":-122.685},{"id":57,"timezone":"America/New_York","name":"Raleigh / Durham","geolat":35.7797,"geolong":-78.6434},{"id":73,"timezone":"America/New_York","name":"Richmond","geolat":37.542979,"geolong":-77.469092},{"id":71,"timezone":"America/Denver","name":"Salt Lake City","geolat":40.760779,"geolong":-111.891047},{"id":68,"timezone":"America/Chicago","name":"San Antonio","geolat":29.424122,"geolong":-98.493628},{"id":38,"timezone":"America/Los_Angeles","name":"San Diego","geolat":32.7153,"geolong":-117.156},{"id":23,"timezone":"America/Los_Angeles","name":"San Francisco","geolat":37.7587,"geolong":-122.433},{"id":41,"timezone":"America/Los_Angeles","name":"Seattle","geolat":47.6036,"geolong":-122.326},{"id":62,"timezone":"America/Chicago","name":"St. Louis","geolat":38.627491,"geolong":-90.198417},{"id":69,"timezone":"America/New_York","name":"Toronto","geolat":43.670233,"geolong":-79.386755},{"id":59,"timezone":"America/Vancouver","name":"Vancouver","geolat":49.259515,"geolong":-123.103867},{"id":31,"timezone":"America/New_York","name":"Washington, DC","geolat":38.8964,"geolong":-77.0447}];
				var myArray = data.map(function(item){
					return [item.id, item.name, item.timezone, item.geolat, item.geolong];
				});

				var myTable = new HtmlTable({

					properties : {
						border : 1,
						cellspacing : 0,
						cellpadding : 5
					},
					rows : myArray,
					headers : ['ID', 'TimeZone', 'Name', 'GEO Latitude', 'GEO Longitude'],
					classHeadSort : 'sorted-up',
					classHeadSortRev: 'sorted-down',
					sortable : true,
					classSortSpan : 'sort-order',
					parsers : ['number', 'string', 'string', 'float', 'float']

				});
				$(myTable).inject(document.body);
			}
		}
	]
}