/*! Fabrik */

define(["jquery","fab/elementlist"],function(t,e){return window.FbCheckBox=new Class({Extends:e,type:"checkbox",initialize:function(t,e){this.setPlugin("fabrikcheckbox"),this.parent(t,e),this._getSubElements()},watchAddToggle:function(){var t,e,i=this.getContainer(),n=i.getElement("div.addoption"),s=i.getElement(".toggle-addoption");this.mySlider&&(t=n.clone(),e=i.getElement(".fabrikElement"),n.getParent().destroy(),e.adopt(t),(n=i.getElement("div.addoption")).setStyle("margin",0)),this.mySlider=new Fx.Slide(n,{duration:500}),this.mySlider.hide(),s.addEvent("click",function(t){t.stop(),this.mySlider.toggle()}.bind(this))},getValue:function(){if(!this.options.editable)return this.options.value;var e=[];return this.options.editable?(this._getSubElements().each(function(t){t.checked&&e.push(t.get("value"))}),e):this.options.value},numChecked:function(){return this._getSubElements().filter(function(t){return t.checked}).length},update:function(t){var e,i;if(this.getElement(),"string"===typeOf(t)&&(t=""===t?[]:JSON.parse(t)),!this.options.editable){if((this.element.innerHTML="")===t)return;return e=$H(this.options.data),void t.each(function(t){this.element.innerHTML+=e.get(t)+"<br />"}.bind(this))}this._getSubElements(),this.subElements.each(function(e){i=!1,t.each(function(t){t===e.value&&(i=!0)}.bind(this)),e.checked=i}.bind(this))},cloned:function(t){!0===this.options.allowadd&&!1!==this.options.editable&&(this.watchAddToggle(),this.watchAdd()),this._getSubElements().each(function(t,e){t.id=this.options.element+"__"+e+"_input_"+e;var i=t.getParent("label");i&&(i.htmlFor=t.id)}.bind(this)),this.parent(t)}}),window.FbCheckBox});