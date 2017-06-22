function StringBuilder(value)
{
    this.strings = new Array("");
    this.append(value);
}
StringBuilder.prototype.append = function (value)
{
    if (value)
    {
        this.strings.push(value);
    }
}
StringBuilder.prototype.clear = function ()
{
    this.strings.length = 1;
}
StringBuilder.prototype.toString = function ()
{
    return this.strings.join("");
}
String.formatmodel = function(str, model) {
	for (var k in model) {
		var re = new RegExp("{" + k + "}", "g");
		str = str.replace(re, model[k]);
	}
	return str;
};