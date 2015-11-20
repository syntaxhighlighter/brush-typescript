var BrushBase = require('brush-base');
var regexLib = require('regex-lib');

function Brush() {
  var keywords = 'break case catch class continue ' +
    'default delete do else enum export extends false  ' +
    'for function if implements import in instanceof ' +
    'interface let new null package private protected ' +
    'static return super switch ' +
    'this throw true try typeof var while with yield' +
    ' any bool declare get module number public set string'; // TypeScript-specific, everything above is common with JavaScript

  var r = regexLib;

  this.regexList = [
    {
      regex: r.multiLineDoubleQuotedString,
      css: 'string'
    },
    {
      regex: r.multiLineSingleQuotedString,
      css: 'string'
    },
    {
      regex: r.singleLineCComments,
      css: 'comments'
    },
    {
      regex: r.multiLineCComments,
      css: 'comments'
    },
    {
      regex: new RegExp(this.getKeywords(keywords), 'gm'),
      css: 'keyword'
    }
		];

  this.forHtmlScript(r.scriptScriptTags);
};

Brush.prototype = new BrushBase();
Brush.aliases = ['ts', 'typescript'];
module.exports = Brush;