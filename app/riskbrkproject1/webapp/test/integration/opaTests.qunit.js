sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'riskbrkproject1/test/integration/FirstJourney',
		'riskbrkproject1/test/integration/pages/RisksList',
		'riskbrkproject1/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('riskbrkproject1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRisksList: RisksList,
					onTheRisksObjectPage: RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);