'use strict';

eventsApp.factory('eventDataService', function () {
    return {
        event: {
            sessions: [
            {
                id: 1,
                session: 'Intro a AngularJS',
                date: '2013/11/18',
                time: '19:30',
                speaker: 'Gianni Bortolo Bossini',
                description: 'Superheroic JavaScript MV* Framework',
                location:
                    {
                        name: "Evoluzione Telematica",
                        address: "Via Orzinuovi 34",
                        zipcode: "25100",
                        city: "Brescia",
                        state: "Italy"
                    },
                imageUrl: "./img/AngularJs.jpg",
                level:100,
                upVoteCount: 0
            },
            {
                id: 2,
                session: 'Intro a KnockoutJS',
                date: '2013/11/11',
                time: '19:30',
                speaker: 'Omar Venturi',
                description: 'Simplify dynamic JavaScript UIs with the Model-View-View Model (MVVM) pattern',
                location:
                    {
                        name: "Evoluzione Telematica",
                        address: "Via Orzinuovi 34",
                        zipcode: "25100",
                        city: "Brescia",
                        state: "Italy"
                    },
                imageUrl: "./img/knockout.png",
                level:200,
                upVoteCount: 0
            },
            {
                id: 3,
                session: 'Intro a Durandal',
                date: '2013/11/25',
                time: '19:30',
                speaker: 'Alberto Acerbis',
                description: 'Your search for a SPA framework ends here.',
                location:
                    {
                        name: "Evoluzione Telematica",
                        address: "Via Orzinuovi 34",
                        zipcode: "25100",
                        city: "Brescia",
                        state: "Italy"
                    },
                imageUrl: "./img/durandal.png",
                level:300,
                upVoteCount: 0
            }]
        }
    };
});