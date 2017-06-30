const mod = require('../module');
require('./search-controller.css');
module.exports = function SearchController($scope, $mdSidenav) {

    $scope.attraction = {}
    $scope.roteiro =
        [ // dias
            {
                day: '2017-07-01',
                periods: [ // manhã
                    [ // lista de atrativos
                        {
                            id: 1,
                            name: 'Cataratas do Iguaçu',
                            duration: 2,
                            start_time: new Date("June 29, 2017"),
                            adult_price: 40,
                            adults_only: false,
                            picture: 'images/Cataratas.jpg',
                            place: {
                                id: 1,
                                name: 'Cataratas do Iguaçu',
                                picture: 'url',
                                phone: '0800 450 277',
                                website: 'www.cataratas.com'
                            }
                        }, // inicial
                        {
                            id: 2,
                            name: 'Parque das Aves',
                            duration: 2,
                            start_time: new Date("June 29, 2017"),
                            adult_price: 20,
                            adults_only: false,
                            picture: 'images/Cataratas.jpg',
                            place: {
                                id: 1,
                                name: 'Cataratas do Iguaçu',
                                picture: 'url',
                                phone: '0800 450 277',
                                website: 'www.cataratas.com'
                            }
                        }, // inicial
                    ],
                    [
                        {
                            id: 3,
                            name: 'Itaipu Binacional',
                            duration: 2,
                            start_time: new Date("June 29, 2017"),
                            adult_price: 20,
                            adults_only: false,
                            picture: 'images/Cataratas.jpg',
                            place: {
                                id: 1,
                                name: 'Cataratas do Iguaçu',
                                picture: 'url',
                                phone: '0800 450 277',
                                website: 'www.cataratas.com'
                            }
                        }
                    ], // tarde
                    [] // noite
                ],
            }
        ];

    $scope.toggleMenuSideNavHandler = function () {
        console.log("toggleMenuSideNavHandler");
        // $mdSidenav('menuSideNav').toggle();
    };


    $scope.openDetailsSidenav = function (attraction) {
        $scope.attraction = attraction;
        $mdSidenav('right').toggle();
    }
    $scope.closeDetailsSidenav = function () {
        $mdSidenav('right').toggle();
    }






};