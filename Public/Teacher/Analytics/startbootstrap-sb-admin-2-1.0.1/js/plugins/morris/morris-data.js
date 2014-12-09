$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2013-08',
            ConceptQ: 5,
            ShortAnswer: 40,
        }, {
            period: '2013-09',
            ConceptQ: 15,
            ShortAnswer: 45,
        }, {
            period: '2013-10',
            ConceptQ: 20,
            ShortAnswer: 50,
        }, {
            period: '2013-11',
            ConceptQ: 22,
            ShortAnswer: 55,
        }, {
            period: '2013-12',
            ConceptQ: 20,
            ShortAnswer: 53,
        }, {
            period: '2014-01',
            ConceptQ: 24,
            ShortAnswer: 50,
        }, {
            period: '2014-02',
            ConceptQ: 21,
            ShortAnswer: 60,
        }, {
            period: '2014-03',
            ConceptQ: 23,
            ShortAnswer: 66,
        }, {
            period: '2014-04',
            ConceptQ: 21,
            ShortAnswer: 70,
        }, {
            period: '2014-05',
            ConceptQ: 25,
            ShortAnswer: 75,
        }],
        xkey: 'period',
        xLabels: 'month',
        ykeys: ['ConceptQ', 'ShortAnswer'],
        labels: ['ConceptQ', 'ShortAnswer'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Astronaut",
            value: 40
        }, {
            label: "Doctor",
            value: 30
        }, {
            label: "Engineer",
            value: 20
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: 'August',
            classA: 50,
            classB: 60
        }, {
            y: 'September',
            classA: 55,
            classB: 68
        }, {
            y: 'October',
            classA: 69,
            classB: 65
        }, {
            y: 'November',
            classA: 75,
            classB: 71
        }, {
            y: 'December',
            classA: 78,
            classB: 75
        }, {
            y: 'January',
            classA: 81,
            classB: 85
        }, {
            y: 'Febuary',
            classA: 100,
            classB: 100
        }],
        xkey: 'y',
        ykeys: ['classA', 'classB'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });

});
