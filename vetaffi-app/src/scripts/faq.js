var app = angular.module('vetaffiApp');

app.controller('faqCtrl', function($scope) {

    $scope.onClickSubtopic = function(topic) {
        if (topic.show) {
            topic.show = false;
        } else {
            topic.show = true;
        }
    };

    $scope.sections = [
        {
            title: 'Applying for Health Care Benefits',
            subtopics: [
                {
                    subtitle: 'How do I start?',
                    show: false,
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum"
                },
                {
                    subtitle: 'What benefits am I eligible for?',
                    show: false,
                    content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et"
                },
            ]
        },

        {
            title: 'Managing my Claims',
            subtopics: [
                {
                    subtitle: 'View my past claims',
                    show: false,
                    content: "beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
                }
            ]
        },
    ];
});

