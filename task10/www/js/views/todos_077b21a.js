var TodoView=Backbone.View.extend({tagName:"li",template:function(obj){{var __t,__p="";Array.prototype.join}with(obj||{})__p+='<div class="view">\n    <input class="toggle" type="checkbox" '+(null==(__t=completed?"checked":"")?"":__t)+'>\n    <label class="icon_'+(null==(__t=Math.ceil(5*Math.random()))?"":_.escape(__t))+'">'+(null==(__t=title)?"":_.escape(__t))+'</label>\n    <button class="destroy"></button>\n</div>\n<input class="edit" value="'+(null==(__t=title)?"":_.escape(__t))+'">';return __p},events:{"click .toggle":"toggleCompleted","dblclick label":"edit","click .destroy":"clear","keypress .edit":"updateOnEnter","blur .edit":"close"},initialize:function(){this.listenTo(this.model,"change",this.render),this.listenTo(this.model,"destroy",this.remove),this.listenTo(this.model,"visible",this.toggleVisible)},render:function(){return this.$el.html(this.template(this.model.toJSON())),this.$el.toggleClass("completed",this.model.get("completed")),this.toggleVisible(),this.$input=this.$(".edit"),this},toggleVisible:function(){this.$el.toggleClass("hidden",this.isHidden())},isHidden:function(){var t=this.model.get("completed");return!t&&"completed"===common.TodoFilter||t&&"active"===common.TodoFilter},toggleCompleted:function(){this.model.toggle()},edit:function(){this.$el.addClass("editing"),this.$input.focus()},close:function(){var t=this.$input.val().trim();t?this.model.save({title:t}):this.clear(),this.$el.removeClass("editing")},updateOnEnter:function(t){t.which===common.ENTER_KEY&&this.close()},clear:function(){this.model.destroy()}});