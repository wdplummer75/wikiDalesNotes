!function(e){foswiki.Form={KEYVALUEPAIR_DELIMITER:";",formData2QueryString:function(e,t){if(!e)return null;var o,s=t||{},a="",l="";for(i=0;i<e.elements.length;i++)switch((o=e.elements[i]).type){case"text":case"hidden":case"password":case"textarea":case"select-one":a+=o.name+"="+encodeURI(o.value)+foswiki.Form.KEYVALUEPAIR_DELIMITER;break;case"select-multiple":for(var n=!1,u=0;u<o.options.length;u++){var c=o.options[u];c.selected&&(s.collapseMulti?n?a+=","+encodeURI(c.text):(a+=o.name+"="+encodeURI(c.text),n=!0):a+=o.name+"="+encodeURI(c.text)+foswiki.Form.KEYVALUEPAIR_DELIMITER)}s.collapseMulti&&(a+=foswiki.Form.KEYVALUEPAIR_DELIMITER);break;case"radio":o.checked&&(a+=o.name+"="+encodeURI(o.value)+foswiki.Form.KEYVALUEPAIR_DELIMITER);break;case"checkbox":o.checked&&(s.collapseMulti&&o.name===l?(a.lastIndexOf("&")==a.length-1&&(a=a.substr(0,a.length-1)),a+=","+encodeURI(o.value)):a+=o.name+"="+encodeURI(o.value),a+=foswiki.Form.KEYVALUEPAIR_DELIMITER,l=o.name)}return a=a.substr(0,a.length-1)},makeSafeForTableEntry:function(e){if(!e)return null;var t;for(i=0;i<e.elements.length;i++)switch((t=e.elements[i]).type){case"text":case"password":case"textarea":t.value=foswiki.String.makeTextSafeForTableEntry(t.value)}},getFormElement:function(e,t){return document[e][t]},setFocus:function(e,t){try{foswiki.Form.getFormElement(e,t).focus()}catch(e){}},initBeforeFocusText:function(e,t){e.FP_defaultValue=t,e.value&&e.value!=t||foswiki.Form._setDefaultStyle(e)},clearBeforeFocusText:function(t){t.FP_defaultValue||(t.FP_defaultValue=t.value),t.FP_defaultValue==t.value&&(t.value=""),e(t).addClass("foswikiInputFieldFocus").removeClass("foswikiInputFieldBeforeFocus")},restoreBeforeFocusText:function(t){!t.value&&t.FP_defaultValue&&foswiki.Form._setDefaultStyle(t),e(t).removeClass("foswikiInputFieldFocus")},_setDefaultStyle:function(t){t.value=t.FP_defaultValue,e(t).addClass("foswikiInputFieldBeforeFocus")}}}(jQuery),jQuery(document).ready((function(e){e('input[type="text"].foswikiDefaultText').each((function(e,t){foswiki.Form.initBeforeFocusText(this,this.title)})).focus((function(){foswiki.Form.clearBeforeFocusText(this)})).blur((function(){foswiki.Form.restoreBeforeFocusText(this)})),e(".foswikiCheckAllOn").click((function(t){var o=e(this).parents("form:first");e(".foswikiCheckBox",o).attr("checked",!0)})),e(".foswikiCheckAllOff").click((function(t){var o=e(this).parents("form:first");e(".foswikiCheckBox",o).attr("checked",!1)}))}));
