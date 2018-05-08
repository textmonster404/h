(function(){I.AdminTagEditor=function(){function AdminTagEditor(el,opts){var slug_input;this.opts=opts;this.el=$(el);this.el.find("form").remote_submit(function(_this){return function(res){if(res.errors){I.flash.apply(I,res.errors);return}if(res.tag_editor){return _this.el.replaceWith(res.tag_editor)}}}(this),null,[{name:"json",value:"1"}]);slug_input=this.el.find(".slug_input");slug_input.textext({plugins:"autocomplete suggestions",suggestions:this.opts.slugs||[],ext:{core:{serializeData:function(_this){return function(data){return data}}(this)}}});this.el.dispatch("click",{feature_tag_btn:function(_this){return function(btn){var slug;slug=btn.closest("[data-slug]").data("slug");return slug_input.val(slug).trigger("keyup").focus()}}(this),close_btn:function(_this){return function(){return _this.el.remove()}}(this)})}return AdminTagEditor}()}).call(this);(function(){var extend=function(child,parent){for(var key in parent){if(hasProp.call(parent,key))child[key]=parent[key]}function ctor(){this.constructor=child}ctor.prototype=parent.prototype;child.prototype=new ctor;child.__super__=parent.prototype;return child},hasProp={}.hasOwnProperty,bind=function(fn,me){return function(){return fn.apply(me,arguments)}};I.setup_layout=function(){$("#inner_column").max_height($("#admin_panel").outerHeight(true)||0);$(window).on("message",function(_this){return function(e){var message,origin;origin=new RegExp("\\/\\/"+$(document.body).data("host")+"\\/");if(!e.originalEvent.origin.match){return}message=e.originalEvent.data;switch(message.name){case"dimensions":return parent.postMessage({width:$(document).width(),height:$(document).height()},"*")}}}(this));return new I.ViewGameFooter("#view_game_footer")};I.EmbedGameLightbox=function(superClass){extend(EmbedGameLightbox,superClass);function EmbedGameLightbox(){return EmbedGameLightbox.__super__.constructor.apply(this,arguments)}return EmbedGameLightbox}(I.Lightbox);I.ReportGameLightbox=function(superClass){extend(ReportGameLightbox,superClass);function ReportGameLightbox(){return ReportGameLightbox.__super__.constructor.apply(this,arguments)}ReportGameLightbox.prototype.init=function(){var form,update_state;I.event2("view report game lightbox");form=this.el.find("form").remote_submit(function(_this){return function(res){if(res.errors){alert(res.errors.join(", "));return}return _this.el.addClass("submitted")}}(this),function(_this){return function(form){form.removeClass("has_error");if(!form.find("input[name='report[reason]']:checked").length){form.addClass("has_error");return false}return true}}(this));update_state=function(_this){return function(){var selected;selected=form.find("input[name='report[reason]']:checked").val();return _this.el.toggleClass("show_classifications",selected==="miscategorized")}}(this);return form.on("change",update_state)};return ReportGameLightbox}(I.Lightbox);I.ViewGameFooter=function(){function ViewGameFooter(el){this.el=$(el);this.el.dispatch("click",{embed_game_btn:function(_this){return function(btn){return I.Lightbox.open_remote(btn.data("lightbox_url"),I.EmbedGameLightbox)}}(this),report_game_btn:function(_this){return function(btn){return I.Lightbox.open_remote(btn.data("lightbox_url"),I.ReportGameLightbox)}}(this)})}return ViewGameFooter}();I.GameUserTools=function(){function GameUserTools(el){this.el=$(el);$(document.body).on("i:rating_updated",function(_this){return function(e,res){if(res.created){_this.el.find(".rate_game_btn").addClass("has_rating")}if(res.removed){return _this.el.find(".rate_game_btn").removeClass("has_rating")}}}(this));I.tracked_links(this.el,"view_game","user_tools");I.has_follow_button(this.el);this.el.dispatch("click",{add_to_collection_btn:function(_this){return function(btn){return I.Lightbox.open_remote(btn.attr("href"),I.CollectionLightbox)}}(this),rate_game_btn:function(_this){return function(btn){return I.Lightbox.open_remote(btn.data("lightbox_url"),I.RateGameLightbox)}}(this)});setTimeout(function(_this){return function(){return _this.el.removeClass("hidden")}}(this),200)}return GameUserTools}();I.FirstGameLightbox=function(superClass){extend(FirstGameLightbox,superClass);function FirstGameLightbox(){this.first_show=bind(this.first_show,this);return FirstGameLightbox.__super__.constructor.apply(this,arguments)}FirstGameLightbox.prototype.first_show=function(){I.event("view_game","first_game_lb","show");I.add_facebook(function(_this){return function(){var cat;cat="view_game";FB.Event.subscribe("edge.create",function(url){return I.event(cat,"fb","like")});FB.Event.subscribe("edge.remove",function(url){return I.event(cat,"fb","unlike")});return FB.Event.subscribe("message.send",function(url){return I.event(cat,"fb","share")})}}(this));return I.add_twitter()};return FirstGameLightbox}(I.Lightbox);I.GameGoalBanner=function(){function GameGoalBanner(el){this.el=$(el);this.el.dispatch("click",{buy_btn:function(_this){return function(btn){I.event("view_game","goal_banner","contribute_btn");if(I.is_mobile()){btn.attr("href",I.add_params(btn.attr("href"),{initiator:"mobile"}));return"continue"}return $(".buy_row a.buy_btn").click()}}(this)})}return GameGoalBanner}()}).call(this);(function(){var bind=function(fn,me){return function(){return fn.apply(me,arguments)}};I.GameDevlogPost=function(){GameDevlogPost.prototype.vote_counts_template=I.lazy_template(GameDevlogPost,"like_button");function GameDevlogPost(el,opts){this.render_like_button=bind(this.render_like_button,this);this.el=$(el);this.image_viewer=new I.ImageViewer(el);this.el.dispatch("click",{add_to_collection_btn:function(_this){return function(btn){if(!I.current_user){return"continue"}return I.Lightbox.open_remote(btn.attr("href"),I.CollectionLightbox)}}(this)});this.render_like_button()}GameDevlogPost.prototype.render_like_button=function(s){var child,drop;drop=this.el.find(".like_button_drop");this.like_button_state||(this.like_button_state=drop.data("init"));if(s){$.extend(this.like_button_state,s)}child=drop.html(this.vote_counts_template(this.like_button_state)).children();return child.find("form").remote_submit(function(_this){return function(res){return _this.render_like_button({liked:!_this.like_button_state.liked,likes_count:res.likes_count})}}(this))};return GameDevlogPost}()}).call(this);(function(){var extend=function(child,parent){for(var key in parent){if(hasProp.call(parent,key))child[key]=parent[key]}function ctor(){this.constructor=child}ctor.prototype=parent.prototype;child.prototype=new ctor;child.__super__=parent.prototype;return child},hasProp={}.hasOwnProperty;I.GameHeader=function(superClass){extend(GameHeader,superClass);function GameHeader(){GameHeader.__super__.constructor.apply(this,arguments);this.el.dispatch("click",{edit_theme_btn:function(_this){return function(){return _this.toggle_theme_editor()}}(this)});if(window.location.hash.match(/\bedit_theme\b/)){_.defer(function(_this){return function(){return _this.toggle_theme_editor()}}(this))}}GameHeader.prototype.toggle_theme_editor=function(){var new_open;new_open=!I.theme_editor.state.open;I.theme_editor.setState({open:new_open});return $(document.body).toggleClass("theme_editor_open",new_open)};return GameHeader}(I.Header)}).call(this);(function(){var bind=function(fn,me){return function(){return fn.apply(me,arguments)}};I.HtmlEmbed=function(){HtmlEmbed.current=$.Deferred().done(function(){return window.addEventListener("popstate",function(e){var state;state=e.state||{};return I.HtmlEmbed.current.done(function(embed){return embed.synchronize_state(state)})})});HtmlEmbed.prototype.ping_time=1e3;function HtmlEmbed(el,opts){this.opts=opts;this.load_frame=bind(this.load_frame,this);this.el=$(el);if(I.HtmlEmbed.current.state()==="resolved"){I.HtmlEmbed.current=$.Deferred().resolve(this)}else{I.HtmlEmbed.current.resolve(this)}this.load_archive();if(window.history.state){this.synchronize_state(window.history.state)}if(this.opts.width){I.ViewGame.current.then(function(_this){return function(view){return view.fit_to_width(_this.opts.width)}}(this))}this.el.dispatch("click",{load_iframe_btn:function(_this){return function(btn){return _this.load_frame().done(function(){if(I.is_mobile()){return _this.enter_fullscreen()}else if(_this.opts.start_maximized){return _this.enter_maximized()}})}}(this),fullscreen_btn:function(_this){return function(btn){return _this.enter_fullscreen()}}(this),restore_btn:function(_this){return function(btn){if(I.is_mobile()){return _this.enter_fullscreen()}else{return _this.enter_maximized()}}}(this)})}HtmlEmbed.prototype.synchronize_state=function(state){if(state.maximized){return this.enter_maximized(false)}else{return this.exit_maximized()}};HtmlEmbed.prototype.load_archive=function(){if(!this.opts.load_url){return}return $.get(this.opts.load_url,function(_this){return function(res){if(res.html){_this.el.replaceWith(res.html);return}if(res.errors){_this.el.replaceWith($('<div class="missing_game"></div>').text(res.errors.join(", ")));return}switch(res.status){case"complete":return _this.el.closest(".view_game_page").addClass("ready");case"extracting":return setTimeout(function(){_this.ping_time+=100;return _this.load_archive()},_this.ping_time)}}}(this))};HtmlEmbed.prototype.mobile_orientation=function(){var ratio;if(!(this.opts.width&&this.opts.height)){return"landscape"}ratio=this.opts.width/this.opts.height;if(ratio>=1.4){return"landscape"}else if(ratio<=1.7){return"portrait"}};HtmlEmbed.prototype.load_frame=function(){return this._loaded_frame||(this._loaded_frame=$.Deferred(function(_this){return function(d){var placeholder;placeholder=_this.el.find(".iframe_placeholder");placeholder.replaceWith(placeholder.data("iframe"));_this.iframe=_this.el.find("#game_drop");_this.el.find(".game_frame").addClass("game_loaded").removeClass("game_pending");return d.resolve(_this.iframe)}}(this)))};HtmlEmbed.prototype.enter_maximized=function(push_history){if(push_history==null){push_history=true}if(this.maximized){return}this.maximized=true;return this.load_frame().done(function(_this){return function(){if(window.history&&push_history){window.history.pushState({maximized:true},document.title)}_this.el.find(".game_frame").addClass("maximized");return $(document.body).addClass("frame_maximized")}}(this))};HtmlEmbed.prototype.exit_maximized=function(){if(!this.maximized){return}this.maximized=false;this.el.find(".game_frame").removeClass("maximized");return $(document.body).removeClass("frame_maximized")};HtmlEmbed.prototype.enter_fullscreen=function(){var frame,orientation;frame=this.el.find(".game_frame iframe");if(!frame[0]){return}orientation=this.mobile_orientation();if(I.is_fullscreen()){return}if(!I.request_fullscreen(frame[0],orientation)){return this.enter_maximized()}};return HtmlEmbed}()}).call(this);(function(){var bind=function(fn,me){return function(){return fn.apply(me,arguments)}};I.ImageViewer=function(){ImageViewer.prototype.margin=40;ImageViewer.prototype._template=function(){return'<div class="screenshot_lightbox lightbox loading">\n  <div class="screenshot_container">\n    <div class="loader"></div>\n\n    <div class="prev_image_btn">\n      <span class="icon-arrow-left"></span>\n    </div>\n\n    <img class="lb_screenshot hidden" width="400" height="315">\n\n    <div class="next_image_btn">\n      <span class="icon-arrow-right"></span>\n    </div>\n  </div>\n</div>'};ImageViewer.prototype.size_image=function(){};function ImageViewer(el){this.size_image=bind(this.size_image,this);this.el=$(el);this.el.on("click","[data-image_lightbox]",function(_this){return function(e){var all_links,current_image,goto_image,goto_next_image,goto_prev_image,lb,on_image_load,source_link;if(I.is_mobile()){return}if(!Image){return}source_link=$(e.currentTarget);all_links=source_link.parent().find("[data-image_lightbox]");I.event("view_game","screenshots","show");lb=I.Lightbox.open(_this._template(),I.CenterLighbox);lb.el.toggleClass("no_tools",all_links.length<2);current_image=null;on_image_load=function(image){var $window,ar,h,screenshot,w,window_height,window_width;current_image=image;$window=$(window);window_width=$window.width()-(_this.margin+20)*2;window_height=$window.height()-_this.margin*2;w=image.naturalWidth;h=image.naturalHeight;ar=w/h;if(w>window_width){w=window_width;h=window_width/ar}if(h>window_height){w=window_height*ar;h=window_height}screenshot=lb.el.find(".lb_screenshot");screenshot.attr("src",image.src);if(w!==image.naturalWidth||h!==image.naturalHeight){screenshot.attr("width",Math.floor(w)).attr("height",Math.floor(h))}else{screenshot.attr("width",image.naturalWidth).attr("height",image.naturalHeight)}lb.position();screenshot.removeClass("hidden");return lb.el.removeClass("loading")};goto_image=function(elem){var image;lb.el.addClass("loading");source_link=elem;image=new Image;image.onload=function(_this){return function(){return on_image_load(image)}}(this);return image.src=$(elem).attr("href")};goto_prev_image=function(){var prev;prev=source_link.prev("[data-image_lightbox]");if(!prev.length){prev=$(all_links[all_links.length-1])}return goto_image(prev)};goto_next_image=function(){var next;next=source_link.next("[data-image_lightbox]");if(!next.length){next=$(all_links[0])}return goto_image(next)};lb.el.dispatch("click",{lb_screenshot:function(btn){if(all_links.length<2){return I.Lightbox.close()}else{I.event("view_game","screenshots","click_screenshot");return goto_next_image()}},prev_image_btn:function(btn){I.event("view_game","screenshots","prev_image_btn");return goto_prev_image()},next_image_btn:function(btn){I.event("view_game","screenshots","next_image_btn");return goto_next_image()}});lb.el.on("i:lightbox_keydown",function(e,ke){switch(ke.keyCode){case 37:I.event("view_game","screenshots","keyboard_left");return goto_prev_image();case 39:I.event("view_game","screenshots","keyboard_right");return goto_next_image();case 32:I.event("view_game","screenshots","Keyboard_space");return goto_next_image()}});lb.el.on("i:lightbox_resize",function(){if(current_image){return on_image_load(current_image)}});goto_image(source_link);return false}}(this))}return ImageViewer}()}).call(this);(function(){var bind=function(fn,me){return function(){return fn.apply(me,arguments)}},extend=function(child,parent){for(var key in parent){if(hasProp.call(parent,key))child[key]=parent[key]}function ctor(){this.constructor=child}ctor.prototype=parent.prototype;child.prototype=new ctor;child.__super__=parent.prototype;return child},hasProp={}.hasOwnProperty;I.ViewGame=function(){ViewGame.current=$.Deferred();function ViewGame(el,game1,opts1){var form;this.game=game1;this.opts=opts1;this.setup_hiding=bind(this.setup_hiding,this);this.setup_buy_on_top=bind(this.setup_buy_on_top,this);this.register_play=bind(this.register_play,this);I.event2("view game",{type:this.game.type_name,paid:this.game.actual_price>0});I.ViewGame.current.resolve(this);I.tracked_links($(".jam_banner"),"view_game","jam_banner");form=$(".devlog_banner").find("form").remote_submit(function(_this){return function(res){return form.end().slideUp("fast")}}(this),null,[{name:"json",value:"1"}]);this.el=$(el);this.setup_uploads();this.setup_buy_on_top();I.tracked_links(this.el,"view_game","main_column");if(this.game.hit_url){$.get(this.game.hit_url)}if(this.game.play_url){this.register_play()}this.el.dispatch("click",{add_to_collection_btn:function(_this){return function(btn){if(I.is_mobile()||!I.current_user){return"continue"}return I.Lightbox.open_remote(btn.attr("href"),I.CollectionLightbox)}}(this),toggle_info_btn:function(_this){return function(el){el.closest(".more_information_toggle").toggleClass("open");return _this.el.find(".info_panel_wrapper").slideToggle()}}(this),download_btn:function(_this){return function(btn){var opts;I.event("view_game","download",""+_this.game.id);opts={};if(!btn.closest(".for_demo").length){opts.after_download_lightbox=true}I.ConversionTracker.download("1:"+_this.game.id);I.ConversionTracker.flush_now();return _this.prepare_download(btn.data("upload_id"),function(url,res){if(res.lightbox){I.start_download(res);return I.Lightbox.open(res.lightbox,I.AfterDownloadLightbox,_this.game)}else{return window.location=url}},opts)}}(this),buy_btn:function(_this){return function(btn){I.event("view_game","buy",""+_this.game.id);if(I.is_mobile()){btn.attr("href",I.add_params(btn.attr("href"),{initiator:"mobile"}));return"continue"}return I.Lightbox.open_remote(btn.attr("href"),I.BuyGameLightbox,_this.game,{is_donate:false})}}(this),reward_btn:function(_this){return function(btn){var $quantity,$reward,href;I.event("view_game","buy_reward",""+_this.game.id);href=btn.attr("href");$reward=btn.closest(".reward_footer");$quantity=$reward.find(".quantity_input");if($quantity){href=I.add_params(href,{quantity:$quantity.val()})}return I.Lightbox.open_remote(href,I.BuyGameLightbox,_this.game,{is_donate:false})}}(this),donate_btn:function(_this){return function(btn){I.event("view_game","donate",""+_this.game.id);if(I.is_mobile()){btn.attr("href",I.add_params(btn.attr("href"),{initiator:"mobile"}));return"continue"}return I.Lightbox.open_remote(btn.attr("href"),I.BuyGameLightbox,_this.game,{is_donate:btn.data("donate")})}}(this)});this.image_viewer=new I.ImageViewer(el);this.setup_referrer();if(this.opts.first_view){I.Lightbox.open_tpl("first_game_lightbox",I.FirstGameLightbox)}}ViewGame.prototype.register_play=function(){return window.setTimeout(function(_this){return function(){return $.get(_this.game.play_url)}}(this),(this.game.play_after+3)*1e3)};ViewGame.prototype.prepare_download=function(upload_id,fn,params){if(params==null){params={}}return I.prepare_download(this.game.slug,upload_id,null,fn,params)};ViewGame.prototype.setup_buy_on_top=function(){var h;h=this.el.find(".formatted_description").outerHeight(true);if(h<$(window).height()-100){return this.el.removeClass("buy_on_top")}};ViewGame.prototype.setup_uploads=function(){var el,i,len,ref1,results,size;this.uploads=this.el.find(".uploads");ref1=this.uploads.find(".upload");results=[];for(i=0,len=ref1.length;i<len;i++){el=ref1[i];size=$(el).find(".file_size_value");results.push(size.html(_.str.formatBytes(parseInt(size.html()))))}return results};ViewGame.prototype.setup_hiding=function(el){$(document.body).on("i:lightbox_open",function(_this){return function(){return $(el).css({visibility:"hidden"})}}(this));return $(document.body).on("i:lightbox_close",function(_this){return function(){return $(el).css({visibility:"visible"})}}(this))};ViewGame.prototype.fit_to_width=function(width){if(!(width>920)){return}if(this.opts.responsive||I.is_mobile()){return $("#inner_column").css({width:"auto",maxWidth:width+"px"})}else{return $("#inner_column").css({width:width+"px",maxWidth:width+"px"})}};ViewGame.prototype.setup_referrer=function(){var host,ref;if(I.ReferrerTracker.has_ref("game",this.game.id)){return}host=$(document.body).data("host");ref=document.referrer;if(!ref){return}if(ref.indexOf(host)>=0){return}return I.ReferrerTracker.push("game",this.game.id,"game:"+ref)};return ViewGame}();I.ViewFlashGame=function(superClass){extend(ViewFlashGame,superClass);function ViewFlashGame(el,game,swf,opts){this.swf=swf;ViewFlashGame.__super__.constructor.call(this,el,game,opts);this.embed_game();this.setup_hiding("#swf_drop")}ViewFlashGame.prototype.get_size=function(fn){return $.get("/"+this.game.slug+"/swf_size/"+this.swf.id,function(_this){return function(res){_this.swf.data.swf=res.swf;return typeof fn==="function"?fn():void 0}}(this))};ViewFlashGame.prototype.embed_game=function(skip_remote){var flash_version,height,ref1,width;if(!this.swf){return}if(!this.swf.data.swf&&!skip_remote){return this.get_size(function(_this){return function(){return _this.embed_game(true)}}(this))}ref1=this.swf.data.swf,width=ref1.width,height=ref1.height;flash_version=swfobject.getFlashPlayerVersion();if((flash_version!=null?flash_version.major:void 0)===0&&!window.location.hash.match(/\bforce_flash\b/)){this.el.addClass("ready no_flash");return $(document.body).addClass("embed_disabled")}else{swfobject.embedSWF(this.swf.url,"swf_drop",width,height,"11.0.0",false,{},{wmode:"direct",allowfullscreen:"true"});this.swf_drop=$("#swf_drop");this.swf_drop.parent().width(width).height(height);this.fit_to_width(width);return this.el.addClass("ready")}};return ViewFlashGame}(I.ViewGame);I.ViewUnityGame=function(superClass){extend(ViewUnityGame,superClass);function ViewUnityGame(el,game,unity1,opts){this.unity=unity1;ViewUnityGame.__super__.constructor.call(this,el,game,opts);this.embed_game();this.setup_hiding("#unity_drop embed")}ViewUnityGame.prototype.embed_game=function(){var drop,track_unity,unity,width;if(!this.unity){return}drop=$("#unity_drop");width=drop.width();if(width>920){$("#inner_column").width(width+40)}unity=new UnityObject2({params:{disableContextMenu:true}});track_unity=_.once(function(status){return I.event("view_game","unity",""+status)});unity.observeProgress(function(_this){return function(progress){track_unity(progress.pluginStatus);if(progress.pluginStatus==="unsupported"){drop.width("").height("");$("#inner_column").width("");return _this.el.addClass("unity_unsupported")}else{return $(document.body).removeClass("responsive")}}}(this));return unity.initPlugin(drop[0],this.unity.url)};return ViewUnityGame}(I.ViewGame);I.ViewJavaGame=function(superClass){extend(ViewJavaGame,superClass);function ViewJavaGame(el,game,jar,opts){this.jar=jar;this.setup_hiding("#jar_drop applet");ViewJavaGame.__super__.constructor.call(this,el,game,opts)}return ViewJavaGame}(I.ViewGame);I.ViewHtmlGame=function(superClass){extend(ViewHtmlGame,superClass);function ViewHtmlGame(){return ViewHtmlGame.__super__.constructor.apply(this,arguments)}return ViewHtmlGame}(I.ViewGame)}).call(this);(function(){var bind=function(fn,me){return function(){return fn.apply(me,arguments)}},extend=function(child,parent){for(var key in parent){if(hasProp.call(parent,key))child[key]=parent[key]}function ctor(){this.constructor=child}ctor.prototype=parent.prototype;child.prototype=new ctor;child.__super__=parent.prototype;return child},hasProp={}.hasOwnProperty;I.CommunityArchiveTopicLightbox=function(superClass){extend(CommunityArchiveTopicLightbox,superClass);function CommunityArchiveTopicLightbox(){this.init=bind(this.init,this);return CommunityArchiveTopicLightbox.__super__.constructor.apply(this,arguments)}CommunityArchiveTopicLightbox.prototype.init=function(){var form;this.with_redactor(function(_this){return function(){return I.redactor(_this.el.find("textarea"),{minHeight:100,source:false})}}(this));return form=this.el.find("form").remote_submit(function(_this){return function(res){form.set_form_errors(res.errors);if(res.errors){return}return window.location.reload()}}(this))};return CommunityArchiveTopicLightbox}(I.Lightbox)}).call(this);(function(){var bind=function(fn,me){return function(){return fn.apply(me,arguments)}},extend=function(child,parent){for(var key in parent){if(hasProp.call(parent,key))child[key]=parent[key]}function ctor(){this.constructor=child}ctor.prototype=parent.prototype;child.prototype=new ctor;child.__super__=parent.prototype;return child},hasProp={}.hasOwnProperty;I.CommunityBanLightbox=function(superClass){extend(CommunityBanLightbox,superClass);function CommunityBanLightbox(){this.init=bind(this.init,this);return CommunityBanLightbox.__super__.constructor.apply(this,arguments)}CommunityBanLightbox.prototype.init=function(){var form;this.with_redactor(function(_this){return function(){return I.redactor(_this.el.find("textarea"),{minHeight:100,source:false})}}(this));return form=this.el.find("form").remote_submit(function(_this){return function(res){form.set_form_errors(res.errors);if(res.errors){return}return _this.el.addClass("after_ban")}}(this))};return CommunityBanLightbox}(I.Lightbox)}).call(this);(function(){I.CommunityBlocks=function(){function CommunityBlocks(el){this.el=$(el);this.el.remote_link(function(_this){return function(res){if(res.errors){I.flash(res.erorrs.join(", "),"error")}if(res.redirect_to){return window.location=res.redirect_to}}}(this))}return CommunityBlocks}()}).call(this);(function(){I.CommunityCategory=function(){function CommunityCategory(el){this.el=$(el);this.el.dispatch("click",{rules_link:function(_this){return function(){return _this.el.addClass("rules_visible")}}(this)})}return CommunityCategory}()}).call(this);(function(){I.CommunityCategoryBans=function(){function CommunityCategoryBans(el){this.el=$(el);this.el.remote_link(function(_this){return function(res){if(res.errors){alert(res.errors.join("\n"));return}return window.location.reload()}}(this))}return CommunityCategoryBans}()}).call(this);(function(){I.CommunityCategoryModerators=function(){function CommunityCategoryModerators(el){this.el=$(el);this.el.remote_link(function(_this){return function(res,el){if(res.return_to){return window.location=res.return_to}}}(this))}return CommunityCategoryModerators}()}).call(this);(function(){I.CommunityProfile=function(){function CommunityProfile(el,opts){var c;this.el=$(el);I.has_follow_button(this.el);this.carousels=function(){var i,len,ref,results;ref=this.el.find(".game_carousel_widget");results=[];for(i=0,len=ref.length;i<len;i++){c=ref[i];results.push(new I.GameCarousel($(c)))}return results}.call(this);new I.CommunityViewTopic(this.el.find(".recent_posts"),opts)}return CommunityProfile}()}).call(this);(function(){I.CommunityEditCategory=function(){function CommunityEditCategory(el){var form;this.el=$(el);I.redactor(this.el.find("textarea"),{minHeight:100});this.setup_tag_editor();form=this.el.find("form").remote_submit(function(_this){return function(res){if(res.errors){form.set_form_errors(res.errors);return}if(res.redirect_to){return window.location=res.redirect_to}}}(this))}CommunityEditCategory.prototype.setup_tag_editor=function(){var tag_editor,tags;tag_editor=this.el.find(".category_tag_editor");if(!tag_editor.length){return}tags=tag_editor.data("tags");return ReactDOM.render(R.Community.CategoryEditTags({tags:tags}),tag_editor[0])};return CommunityEditCategory}()}).call(this);(function(){var bind=function(fn,me){return function(){return fn.apply(me,arguments)}},extend=function(child,parent){for(var key in parent){if(hasProp.call(parent,key))child[key]=parent[key]}function ctor(){this.constructor=child}ctor.prototype=parent.prototype;child.prototype=new ctor;child.__super__=parent.prototype;return child},hasProp={}.hasOwnProperty;I.CommunityLockTopicLightbox=function(superClass){extend(CommunityLockTopicLightbox,superClass);function CommunityLockTopicLightbox(){this.init=bind(this.init,this);return CommunityLockTopicLightbox.__super__.constructor.apply(this,arguments)}CommunityLockTopicLightbox.prototype.init=function(){var form;this.with_redactor(function(_this){return function(){return I.redactor(_this.el.find("textarea"),{minHeight:100,source:false})}}(this));return form=this.el.find("form").remote_submit(function(_this){return function(res){form.set_form_errors(res.errors);if(res.errors){return}return window.location.reload()}}(this))};return CommunityLockTopicLightbox}(I.Lightbox)}).call(this);(function(){I.CommunityNewTopic=function(){function CommunityNewTopic(el,opts){var form;this.el=$(el);I.redactor(this.el.find("textarea"),$.extend({minHeight:100},opts.redactor_opts));try{this.el.find("input[name=offset]").val((new Date).getTimezoneOffset())}catch(error){}this.set_fingerprint();form=this.el.find("form").remote_submit(function(_this){return function(res){if(res.errors){if(I.add_recaptcha_if_necessary(form,res.errors)){return}form.set_form_errors(res.errors);return}if(res.redirect_to){return window.location=res.redirect_to}}}(this))}CommunityNewTopic.prototype.set_fingerprint=function(){if(!window.Fingerprint2){return false}this.set_fingerprint=function(){};return(new Fingerprint2).get(function(_this){return function(res){if(res){return _this.el.find("input[name=bfp]").val(res)}}}(this))};return CommunityNewTopic}()}).call(this);(function(){I.CommunityPostForm=function(){function CommunityPostForm(el,opts){var form;if(opts==null){opts={}}this.el=$(el);I.with_redactor(function(_this){return function(){return I.redactor(_this.el.find("textarea"),$.extend({minHeight:50,focus:!!opts.focus},opts.redactor_opts))}}(this));form=this.el.find("form").remote_submit(function(_this){return function(res){if(res.errors){if(I.add_recaptcha_if_necessary(form,res.errors)){return}form.set_form_errors(res.errors);return}if(res.redirect_to){window.location=res.redirect_to}if(res.flash){return I.flash(res.flash)}}}(this))}return CommunityPostForm}()}).call(this);(function(){var bind=function(fn,me){return function(){return fn.apply(me,arguments)}},extend=function(child,parent){for(var key in parent){if(hasProp.call(parent,key))child[key]=parent[key]}function ctor(){this.constructor=child}ctor.prototype=parent.prototype;child.prototype=new ctor;child.__super__=parent.prototype;return child},hasProp={}.hasOwnProperty;I.CommunityReportPostLightbox=function(superClass){extend(CommunityReportPostLightbox,superClass);function CommunityReportPostLightbox(){this.init=bind(this.init,this);return CommunityReportPostLightbox.__super__.constructor.apply(this,arguments)}CommunityReportPostLightbox.prototype.init=function(){var form;return form=this.el.find("form").remote_submit(function(_this){return function(res){if(res.errors){form.set_form_errors(res.errors);return}return _this.el.addClass("submitted_report")}}(this))};return CommunityReportPostLightbox}(I.Lightbox)}).call(this);(function(){var bind=function(fn,me){return function(){return fn.apply(me,arguments)}},extend=function(child,parent){for(var key in parent){if(hasProp.call(parent,key))child[key]=parent[key]}function ctor(){this.constructor=child}ctor.prototype=parent.prototype;child.prototype=new ctor;child.__super__=parent.prototype;return child},hasProp={}.hasOwnProperty;I.CommunityStickTopicLightbox=function(superClass){extend(CommunityStickTopicLightbox,superClass);function CommunityStickTopicLightbox(){this.init=bind(this.init,this);return CommunityStickTopicLightbox.__super__.constructor.apply(this,arguments)}CommunityStickTopicLightbox.prototype.init=function(){var form;this.with_redactor(function(_this){return function(){return I.redactor(_this.el.find("textarea"),{minHeight:100,source:false})}}(this));return form=this.el.find("form").remote_submit(function(_this){return function(res){form.set_form_errors(res.errors);if(res.errors){return}return window.location.reload()}}(this))};return CommunityStickTopicLightbox}(I.Lightbox)}).call(this);(function(){var bind=function(fn,me){return function(){return fn.apply(me,arguments)}};I.CommunityTopicHeader=function(){function CommunityTopicHeader(el,opts){var moderation;this.opts=opts;this.render_topic_voter=bind(this.render_topic_voter,this);this.el=$(el);moderation=this.el.find(".moderation_tools");if(moderation.length){new I.CommunityTopicModerationTools(moderation,this.opts.moderation)}this.render_topic_voter()}CommunityTopicHeader.prototype.render_topic_voter=function(){var props,ref,voter;if(!(typeof R!=="undefined"&&R!==null?(ref=R.Community)!=null?ref.TopicVoter:void 0:void 0)){return}voter=this.el.find(".community_topic_voter_widget");if(!voter.length){return}props=voter.data("p");props.vote_url=this.opts.vote_url;return ReactDOM.render(R.Community.TopicVoter(props),voter[0])};return CommunityTopicHeader}()}).call(this);(function(){I.CommunityTopicList=function(){function CommunityTopicList(el,opts){this.opts=opts;this.el=$(el);new I.CommunityTopicModerationTools(el,this.opts);this.el.lazy_images({selector:"[data-background_image]"});this.render_topic_voters();this.el.has_tooltips();new I.GamePopups(this.el)}CommunityTopicList.prototype.render_topic_voters=function(){var i,len,props,ref,ref1,results,voter;if(!(typeof R!=="undefined"&&R!==null?(ref=R.Community)!=null?ref.TopicVoter:void 0:void 0)){return}ref1=this.el.find(".community_topic_voter_widget");results=[];for(i=0,len=ref1.length;i<len;i++){voter=ref1[i];props=$(voter).data("p");props.vote_url=this.opts.vote_url;results.push(ReactDOM.render(R.Community.TopicVoter(props),voter))}return results};return CommunityTopicList}()}).call(this);(function(){var bind=function(fn,me){return function(){return fn.apply(me,arguments)}};I.CommunityTopicModerationTools=function(){CommunityTopicModerationTools.prototype.topic_url=function(route,topic_id){return this.opts.urls[route].replace(/:topic_id\b/,topic_id)};function CommunityTopicModerationTools(el,opts){this.opts=opts;this.topic_url=bind(this.topic_url,this);this.el=$(el);new I.FilterPickers(el);this.el.on("click",".filter_option",function(_this){return function(e){var target,topic_id,value;if($(e.target).is("a")){return}e.preventDefault();target=$(e.currentTarget).trigger("i:close_filter_pickers");topic_id=target.closest("[data-topic_id]").data("topic_id");value=target.data("value");switch(value){case"archive":case"unarchive":return I.Lightbox.open_remote(_this.topic_url("archive_topic",topic_id),I.CommunityArchiveTopicLightbox);case"lock":case"unlock":return I.Lightbox.open_remote(_this.topic_url("lock_topic",topic_id),I.CommunityLockTopicLightbox);case"stick":case"unstick":return I.Lightbox.open_remote(_this.topic_url("stick_topic",topic_id),I.CommunityStickTopicLightbox);case"delete":if(confirm("Are you sure you want to delete this topic?")){return $.ajax({url:_this.topic_url("delete_topic",topic_id),data:I.with_csrf(),type:"post",xhrFields:{withCredentials:true}}).done(function(res){if(res.errors){return alert(res.errors.join())}return window.location.reload()})}}}}(this))}return CommunityTopicModerationTools}()}).call(this);(function(){var bind=function(fn,me){return function(){return fn.apply(me,arguments)}};I.CommunityViewTopic=function(){CommunityViewTopic.prototype.vote_counts_template=I.lazy_template(CommunityViewTopic,"vote_counts");function CommunityViewTopic(el,opts){this.opts=opts;this.update_votes=bind(this.update_votes,this);this.el=$(el);this.el.remote_link(function(_this){return function(res,el){if(el.is(".vote_btn")){if(res.errors){alert(res.errors.join(", "));return}_this.update_votes(el,res);return}if(res.redirect_to){return window.location=res.redirect_to}}}(this));this.el.dispatch("click",{ban_user_btn:function(_this){return function(btn){var ban_url,post;post=btn.closest(".community_post").data("post");ban_url=_this.opts.ban_url+("?banned_user_id="+post.user_id);return I.Lightbox.open_remote(ban_url,I.CommunityBanLightbox)}}(this),stick_topic_btn:function(_this){return function(btn){return I.Lightbox.open_remote(btn.data("href"),I.CommunityStickTopicLightbox)}}(this),lock_topic_btn:function(_this){return function(btn){return I.Lightbox.open_remote(btn.data("href"),I.CommunityLockTopicLightbox)}}(this),report_post_btn:function(_this){return function(btn){var post,url;post=btn.closest(".community_post").data("post");url=_this.opts.report_url.replace(/:post_id/,post.id);return I.Lightbox.open_remote(url,I.CommunityReportPostLightbox)}}(this)})}CommunityViewTopic.prototype.update_votes=function(el,res){var i,len,like_button,post,v,voters;post=el.closest(".community_post");voters=post.find(".vote_btn");like_button=voters.filter(".post_action");like_button.removeClass("animate_bounce animate_drop_down");setTimeout(function(_this){return function(){return like_button.removeClass("animate_bounce animate_drop_down")}}(this),500);if(el.is(".voted")){_.defer(function(_this){return function(){return like_button.addClass("animate_drop_down")}}(this));el.removeClass("voted")}else{_.defer(function(_this){return function(){return like_button.addClass("animate_bounce")}}(this));voters.removeClass("voted").filter(el).addClass("voted")}for(i=0,len=voters.length;i<len;i++){v=voters[i];v=$(v);if(v.is(".voted")){v.data("params").action="remove"}else{delete v.data("params").action}}return post.find(".vote_counts").html(this.vote_counts_template({up_score:res.up_score+Math.max(0,res.score_adjustment),down_score:res.down_score+Math.abs(Math.min(0,res.score_adjustment))}))};return CommunityViewTopic}()}).call(this);
