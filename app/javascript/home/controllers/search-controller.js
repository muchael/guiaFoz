const mod = require('../module');
require('./search-controller.css');
module.exports = function SearchController($scope, $mdSidenav) {

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

    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');

    function buildToggler(componentId) {
        return function () {
            $mdSidenav(componentId).toggle();
        };
    }

    $scope.attraction = {
        id: 1,
        name: "Vista Panorâmica ",
        duration: "02:00",
        start_time: "10:00",
        description: "A Usina Hidrelétrica de Itaipu é um dos projetos de engenharia mais ambiciosos do mundo. Uma usina que fornece 16,4% da energia consumida no Brasil e abastece 71,3% do consumo paraguaio. Construída para reter o curso do Rio Paraná, a barragem é uma imensa estrutura de concreto de oito quilômetros de comprimento por 167 metros de altura, que contorna o reservatório da Itaipu Binacional e sobre a qual estão instalados os dutos e as unidades geradoras de energia elétrica.",
        observations: "Não é permitido entrar com bolsas e mochilas no Circuito Especial. Há armários no Centro de Recepção de Visitantes para alugar.",
        adult_price: 36.00,
        adults_only: false,
        picture: "https://www.turismoitaipu.com.br/sites/default/files/atracoes/foto_grande.jpg",
        place: {
            id: 1,
            name: "ITAIPU BINACIONAL",
            picture: "http://www.loumarturismo.com.br/passeios/imagens/00008/1066-1-copy.jpg",
            phone: "(45) 98805-9556",
            website: "https://www.turismoitaipu.com.br/"
        }
    }

};