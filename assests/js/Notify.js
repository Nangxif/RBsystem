!function($){
	var Notify = function(){
		this.default={
			type:"default",
			content:"这是一个Notify提示框"
		}
		this.index = 0;
	}
	Notify.prototype.createNotify = function(obj){//btn属性必须传递，不传报错
		if(obj){
			var def = Object.assign({},this.default,obj);
		}else{
			var def = this.default;
		}
		var that = this;
		if(def.btn){
			$(def.btn).on("click",function(){
				$("body .readboy-notify").append(`<div class="readboy-notify-item ${def.type}" data-target="${def.btn}">
							  ${def.content}
						  </div><br/>`);
				$(".readboy-notify-item[data-target='#"+$(this).attr("id")+"']").addClass("readboy-notify-last-status").delay(5500).fadeOut(200,function(){
					$(this).next().remove();
					$(this).remove();
				})
			})
		}
	}

	Notify.prototype.showNotify = function(obj){
		var that = this;
		if(obj){
			var def = Object.assign({},this.default,obj);
		}else{
			var def = this.default;
		}
		$("body .readboy-notify").append(`<div class="readboy-notify-item ${def.type}" data-target="${this.index}">
					  ${def.content}
				  </div><br/>`);
		$(".readboy-notify-item[data-target='"+that.index+"']").addClass("readboy-notify-last-status").delay(5500).fadeOut(200,function(){
			$(this).next().remove();
			$(this).remove();
		})
	}

	Notify.prototype.init = function(){
		$("body").append(`<div class="readboy-notify"></div>`);
	}

	$.Notify = new Notify;
	$.Notify.init();
}(jQuery);