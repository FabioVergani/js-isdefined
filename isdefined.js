function isdefined(o){return o!=='' && typeof(o)!=='undefined';}
isdefined.array=function(oa){var o=oa;return isdefined(o) && Array.isArray(o);};


console.log(isdefined.array([]));
