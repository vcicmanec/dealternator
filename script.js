var patterns = [
    ["", " can't", "Nazis can't"],
    ["can the ", " be", "can the Nazis be"],
    ["", " hates", "Nazis hate"],
    ["with the ", "", "with the Nazis"],
    ["", " is", "Nazis are"],
    ["and the ", "", "and the Nazis"],
    ["for the ", "", "for the Nazis"],
    ["in the ", "", "among the Nazis"],
    ["joining ", "", "Nazis"],
    ["(\w+) of the", "", "Nazi kokot $1"],
    ["", "makes", "Nazis make"],
    ["", " &", 'Nazis &'],
    ["(a)n ", "", "$1 Nazi"],
    ["", " and", 'Nazis and'],
    ["", ",", 'Nazis,'],
    ["", "", 'Nazi']
];

var wordForms = [
    "‘alt\-right’", "'alt\-right'", "alt\-right", "alt right", "altright"
]

function dealternate(content){
    if(!content)
        return '';

    var contentCopy = content.concat("");

    for(var i = 0, count = patterns.length; i < count; i++){
        var before = patterns[i][0];
        var after = patterns[i][1];
        var replacement = patterns[i][2];

        for(var j = 0, countt = wordForms.length; j < countt; j++){

            var regex = new RegExp(before + wordForms[j] + after, "gi");
            contentCopy = contentCopy.replace(regex, replacement);
        }

    }

    return contentCopy;
}

function parseDoc(element){
    if(element.childNodes && element.childNodes.length > 0){
        for(var i = 0, count = element.childNodes.length; i < count; i++){
            var child = element.childNodes.item(i);
            if(child && child.nodeType == Node.TEXT_NODE){
                child.textContent = dealternate(child.textContent);
            }else if(child.nodeType == Node.ELEMENT_NODE){
                parseDoc(child)
            }
        }
    }
}

parseDoc(document.body);