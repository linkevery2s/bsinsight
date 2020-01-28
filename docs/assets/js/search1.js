

{
	$_ = String.prototype;
	
	$_.mReplace = function(pat,flag){
		var temp = this;
		if(!flag){flag=""}
		for(var i in pat){
			var re = new RegExp(i,flag);
			temp = temp.replace(re,pat[i])
		}
		return temp;
	};
}

{
	$_ = Date.prototype;
	
	$_.format = "yyyy-mm-dd HH:MM:SS";
	$_.formatTime = function(format){
		var yy;
		var o = {
			yyyy : ((yy = this.getYear()) < 2000)? yy+1900 : yy,
			mm   : this.getMonth() + 1,
			dd   : this.getDate(),
			HH   : this.getHours(),
			MM   : this.getMinutes(),
			SS   : this.getSeconds()
		}
		for(var i in o){
			if (o[i] < 10) o[i] = "0" + o[i];
		}
		return (format) ? format.mReplace(o) : this.format.mReplace(o);
	}
}