var text = ['je staat in een kamer met een gesloten deur voor je, om de schat te vinden moet je daar door heen. Je gaat de sleutel proberen te vinden, waar ga je kijken achter het schilderij of onder de bloempot? Typ schilderij of bloempot.', 'helaas de sleutel zat niet achter het schilderij, maar omdat dit de eerste deur was mag je de geheime deur achter het behang nemen. achter de deur zit nog een kamer, in die kamer staan 2 potten een rode en een blauwe. welke gooi je kapot? typ rood of blauw', 'goed geraden de sleutel lag inderdaad onder de bloempot, je mag de deur door. Achter de deur zit nog een kamer, in die kamer staan 2 potten een rode en een blauwe. welke gooi je kapot? typ rood of blauw', 'je hebt de rode pot kapotgegooid en er liggen een hoop scherven op de grond, maar tussen die scherven liggen twee sleutels. de eerste is de sleutel van de kluis waar de schat in zit verstopt, de tweede is een geheim. toch moet je eerst door de volgende deur heen. Je ziet een luciferdoosje en een hamer liggen wat pak je. typ luciferdoosje of hamer', 'je hebt de blauwe pot kapotgegooid helaas mis je nu iets wat je later nodig hebt maar daar kom je zo wel achter. Je ziet een luciferdoosje en een hamer liggen wat pak je. typ luciferdoosje of hamer', 'je hebt de rode pot kapotgegooid en er liggen een hoop scherven op de grond, maar tussen die scherven ligt een sleutel. dat is de sleutel van de kluis waar de schat in zit verstopt. toch moet je eerst door de volgende deur heen. Je ziet een luciferdoosje en een hamer liggen wat pak je. typ luciferdoosje of hamer', 'je hebt de blauwe pot kapotgegooid helaas mis je nu iets wat je later nodig hebt maar daar kom je zo wel achter. Je ziet een luciferdoosje en een hamer liggen wat pak je. typ luciferdoosje of hamer'];
do {
	var text1 = prompt(text[0]);
	//while text1 != 'schilderij' && text1 != 'bloempot'
	//array
	if (text1 == 'schilderij' || text1 == 'bloempot') {
		if (text1 == 'schilderij'){
			var text2 = prompt(text[1]);
			if (text2 == "rood"){
				var text6 = prompt(text[5]);
			}	else {
				var text7 = prompt(text[6]);
				}
				if (text7 == "luciferdoosje"){
					alert("Je hebt gekozen voor het luciferdoosje daarmee heb je geprobeerd de deur open te branden, helaas is het hele huis en de schat verbrandt. Geen schat voor jou!");
				}	else {
					alert("Je hebt gekozen voor de hamer en het is je gelukt de deur open te breken, achter de deur ligt de schat. Om die te openen had je alleen nog een sleutel nodig, en die heb je niet gevonden. Jammer!");
					}					
					if (text6 == "luciferdoosje"){
						alert("Je hebt gekozen voor het luciferdoosje daarmee heb je geprobeerd de deur open te branden, helaas is het hele huis en de schat verbrandt. Geen schat voor jou!");
					}	else {
						alert("Je hebt gekozen voor de hamer en het is je gelukt de deur open te breken, achter de deur ligt de schat. Om die te openen had je alleen nog een sleutel nodig, gelukkig had je die nog op zak. Het is je gelukt, Gefeliciteerd!");
							}
		} else {
			var text3 = prompt(text[2]);
		}
			if (text3 == "rood"){
				var text4 = prompt(text[3]);
			}	else {
				var text5 = prompt(text[4]);
				}
				if (text4 == "luciferdoosje"){
					alert("Je hebt gekozen voor het luciferdoosje daarmee heb je geprobeerd de deur open te branden, helaas is het hele huis en de schat verbrandt. Geen schat voor jou!");
				}	else {
					alert("Je hebt gekozen voor de hamer en het is je gelukt de deur open te breken, achter de deur ligt de schat. Om die te openen had je alleen nog een sleutel nodig, gelukkig had je die nog op zak. Ook had je nog een tweede sleutel gevonden, dat is voor iets in de schat. Het is je gelukt, Gefeliciteerd!");
					}
					if (text5 == "luciferdoosje"){
						alert("Je hebt gekozen voor het luciferdoosje daarmee heb je geprobeerd de deur open te branden, helaas is het hele huis en de schat verbrandt. Geen schat voor jou!");
					}	else {
						alert("Je hebt gekozen voor de hamer en het is je gelukt de deur open te breken, achter de deur ligt de schat. Om die te openen had je alleen nog een sleutel nodig, gelukkig had je die nog op zak. Het is je gelukt, Gefeliciteerd!");
							}
	}
} while (text1 != 'schilderij' && text1 != 'bloempot');

				
