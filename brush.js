var BrushBase = require('@alexgorbatchev/brush-base');
var regexLib = require('@alexgorbatchev/regex-lib');

function Brush() {
  var keywords = 'break case catch class continue ' +
    'default delete do else enum export extends false  ' +
    'for function if implements import in instanceof ' +
    'interface let new null package private protected ' +
    'static return super switch ' +
    'this throw true try typeof var while with yield' +
    ' any bool declare get module number public set string'; // TypeScript-specific, everything above is common with JavaScript

  this.regexList = [
    {
      regex: regexLib.multiLineDoubleQuotedString,
      css: 'string'
    },
    {
      regex: regexLib.multiLineSingleQuotedString,
      css: 'string'
    },
    {
      regex: regexLib.singleLineCComments,
      css: 'comments'
    },
    {
      regex: regexLib.multiLineCComments,
      css: 'comments'
    },
    {
      regex: new RegExp(this.getKeywords(keywords), 'gm'),
      css: 'keyword'
    }
	];

  this.forHtmlScript(regexLib.scriptScriptTags);
};

Brush.prototype = new BrushBase();
Brush.aliases = ['ts', 'typescript'];
module.exports = Brush;
