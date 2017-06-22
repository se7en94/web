(function(window){
	var t={}
	t.getDom = function(){
		var update = new StringBuilder();
        update.append('<li><b>{a}</b></li>');
        update.append('<li><i>{b}</i></li>'); 
		return update.toString();
	}
	window.templete = t;
}(window));