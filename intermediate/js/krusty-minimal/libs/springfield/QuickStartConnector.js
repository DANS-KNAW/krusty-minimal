define(["libs/springfield/BartConnector",],function(b){function a(d){var e={success:null,uri:null};var g=b(),c={url:null,type:"POST",accepts:"text/xml",contentType:"text/xml",data:"<fsxml mimetype='application/fscommand' id='dynamic'><properties><handler>/dynamic/presentation/playout/html5</handler></properties></fsxml>"};var h=function(){if(e.uri===null){throw"No URI given!"}return true};var f=function(){if(typeof e.success=="function"){c.success=e.success}g.request(c)};$.extend(e,d);c.url=e.uri;h();f()}return a});