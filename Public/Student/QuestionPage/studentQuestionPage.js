function MasterControl($scope) {
	$scope.subject = "";
	$scope.path = {
	/*{
		name: "Geometry",
		children: [
			{
				name: "Measurement",
				children: [
					{
						name: "Unit Circle",
						careers: [
							{
								name: "Doctor"
							},
							{
								name: "Engineer"
							}
						]
					}
				]
			}
		]
	},*/
		"Geometry": {
			"Measurement": {
				"Unit Circle": [
					"Doctor",
					"Engineer"
				],
				"Radian": [
					"Doctor",
					"Engineer"
				],
				"Degrees":[
					"Doctor",
					"Engineer"
				]
			},
			"Geometry": {
				"Locus": [
				],
				"Hyperbola": [
				],
				"Ellipse": [
				],
				"Parabola": [
				]

			},
			"Plane": {
				"Circle": [
				],
				"Area of Shapes": [
				],
				"Polygons": [
				],
				"Perimeter": [
				],
				"Construction": [
				],
				"Triangles": [
				],
				"Transformations": [
				]
			},
			"Solid": {
				"Volumes of Solids": [
				]
			},
			"Trigonometry": {
				"Sine, Cosine, Tangent": [
				],
				"Pythagorean Theorem": [
				],
				"Unit Circle": [
				],
				"Graphs": [
				]
			}

		}
	}
	$scope.path2 = {}
	$scope.path3 = {}
	$scope.path4 = {}

	$scope.setSub = function(key){
		$scope.path2 = $scope.path[key];
	}
	$scope.setSub2 = function(key){
		$scope.path3 = $scope.path2[key];
		$scope.path4 = {}
	}
	$scope.setSub3 = function(key){
		$scope.path4 = $scope.path3[key];
	}
	$scope.init = function() {
		var params = $scope.getSearchParameters();
		$scope.setSub(params.subject);
		$scope.subject = params.subject
	}

	$scope.getSearchParameters = getSearchParameters;

}


function getSearchParameters() {
      var prmstr = window.location.search.substr(1);
      return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
}

function transformToAssocArray( prmstr ) {
    var params = {};
    var prmarr = prmstr.split("&");
    for ( var i = 0; i < prmarr.length; i++) {
        var tmparr = prmarr[i].split("=");
        params[tmparr[0]] = tmparr[1];
    }
    return params;
}
