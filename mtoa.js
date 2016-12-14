console.log("Trumpifying")

function fuck(someShit) {
	// Ripped off from cloud-to-butt, which apparently 
	// ripped it off from http://is.gd/mwZp7e
	
	var thisShit, moreShit;
	switch (someShit.nodeType) {
		case 1:
		case 9:
		case 11:
			thisShit = someShit.firstChild;
			while (thisShit) {
				moreShit = thisShit.nextSibling;
				fuck(thisShit);
				thisShit = moreShit;
			}
			break;
			
		case 3:
			doSomeShit(someShit);
			break;
	}
}

function doSomeShit(thisMotherFucker) {
	var someShit = thisMotherFucker.nodeValue;
	
    someShit = someShit.replace(/\. Donald Trump/, "An orange man");
    someShit = someShit.replace(/\. Trump/, "An orange man");
	someShit = someShit.replace(/\. Donald J. Trump/, "An orange man");
	someShit = someShit.replace(/\. Donald John Trump/, "An orange man");
    someShit = someShit.replace(/^Donald Trump/, "An orange man");
    someShit = someShit.replace(/^Trump/, "An orange man");
    someShit = someShit.replace(/^Donald J. Trump/, "An orange man");
    someShit = someShit.replace(/^Donald John Trump/, "An orange man");
	
    someShit = someShit.replace(/Donald Trump/, "an orange man");
    someShit = someShit.replace(/Trump/, "an orange man");
	someShit = someShit.replace(/Donald J. Trump/, "an orange man");
	someShit = someShit.replace(/Donald John Trump/, "an orange man");

    thisMotherFucker.nodeValue = someShit;
}

var thisShit = document;
fuck(thisShit);