/**
 * @author Robson Alviani
 * @version 0.0.1
 */
'use strict';

var i18n = function(options){
	if (typeof options == "undefined")
		options = {};

    if (!options.language)
        options.language = "pt-BR";

	this.options = options;
};

i18n.prototype.get = function(node){
	if (!i18nFile || !i18nFile[this.options.language])
		throw new Error('Invalid language file!');

	if (node == undefined)
		return i18nFile[this.options.language].invalidPhrase;

	var aux, arrNodes = node.toString().split(".");
	for (var i in arrNodes){
		aux = !aux ? i18nFile[this.options.language][arrNodes[i]] : aux[arrNodes[i]];

		if (!aux)
			return i18nFile[this.options.language].invalidPhrase;
	}

	return aux;
};