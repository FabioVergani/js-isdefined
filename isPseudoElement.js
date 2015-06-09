
function isDefined(e){return e!=='' && typeof(e)!=='undefined';}

function isPseudoElement(s){return isDefined(s) && s.length<15 && /::?(after|before|first-(letter|line))|::(selection|backdrop)/i.test(s);}

console.log(isPseudoElement("::first-letter"));
