angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */

    $scope.addListing = function () {

      var code_in = document.getElementById("code").value;
      var name_in = document.getElementById("name").value;
      var address_in = document.getElementById("address").value;
      var lat_in = document.getElementById("lat").value;
      var long_in = document.getElementById("long").value;
      var add = true;

      for (var i = 0; i < $scope.listings.length; i++) {
        var code = $scope.listings[i]["code"];
        var name = $scope.listings[i]["name"];
        if((code_in == code) || (name_in == name)){
            add = false;
        }
      }

      if(add == true){

          $scope.listings.push({        
            code: code_in,
            name: name_in,
            address: address_in,
            coordinates:{ 
              latitude: lat_in,
              longitude: long_in}
          });
      }

    };

    $scope.deleteListing = function (index) {

          $scope.listings.splice(index, 1);

    };

    $scope.showDetails = function(index) {

     $scope.detailedInfo = $scope.listings[index];
     document.getElementById("display_add").innerHTML = "Address: " + $scope.listings[index]["address"];
     document.getElementById("display_lat").innerHTML = "Latitude:  " + $scope.listings[index]["coordinates"]["latitude"];
     document.getElementById("display_long").innerHTML = "Longitude: " + $scope.listings[index]["coordinates"]["longitude"];
 
    };

    $scope.search = function() {

    };


  }

]);

