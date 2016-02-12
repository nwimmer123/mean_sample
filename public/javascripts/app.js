angular
  .module('sampleApp', ['ui.router'])
  .config(config)
  .controller('HomeController', HomeController);

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
  function config($stateProvider, $urlRouterProvider, $locationProvider) {
    console.log('config');
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('home', {
        url: "/",
        views: {
          'main': {
                    controller: 'HomeController',
                    controllerAs: 'hC',
                    templateUrl: 'templates/home.html'

          },
          'bottom': {
                     controller: 'HomeController',
                      controllerAs: 'hC',
                      templateUrl: 'templates/bottom.html'
          },
          'top': {
                     controller: 'HomeController',
                      controllerAs: 'hC',
                      templateUrl: 'templates/top.html'
          }
        }
       });
  }

  function HomeController() {
    var vm = this;
    vm.hello = 'hi';
    vm.callTest = function() { console.log('called');}
    vm.entryList = [
      {
        date: '2/12/15',
        timeIn: '6:30',
        timeOut: '9:30',
        placeGeneral: 'LindaMar',
        placeSpecific: 'Boatdocks',
        tide: 'low - incoming',
        swell: '9.2 ft @ 18 s',
        direction: 270,
        rating: 'ehhhh',
        session: 'Wumpy closeouts. One Ok right ridden. Tide to low. No shoulders.'
      }
    ];

    console.log(vm);
  }

