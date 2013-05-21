define(["jquery","underscore","backbone","stackmob","text!templates/signup/signupTemplate.html","libs/app/util"],function(e,t,n,r,i,s){var o=n.View.extend({className:"signup",events:{"click #signupBtn":"signup","change #photo":"saveImage"},initialize:function(){this.collection=this.options.collection,this.router=this.options.router,this.render(),this.photoBase64},saveImage:function(t){var n=t.target.files[0];if(n.type.match("image.*")){var r=new FileReader;r.readAsDataURL(n),r.onload=function(t){var r=t.target.result.substring(t.target.result.indexOf(",")+1,t.target.result.length);e(".latest img").attr("src",t.target.result).fadeIn(),e(".latest img").attr("data-base64",r),e(".latest img").attr("data-name",n.name),e(".latest img").attr("data-type",n.type)}}else console.log("not valid image handle exception");return this},render:function(){var e=this.$el;return e.empty(),e.append(i),e.attr("data-role","dialog"),e.attr("data-theme","b"),this},signup:function(t){var n=this.collection,r=e("#signupForm").serializeObject(),i=this.router;t.preventDefault();if(r.username!==""&&r.password!==""){e("#signupBtn").addClass("disabled"),e("#signupBtn").attr("disabled",!0);var s=new StackMob.User(r),o=e(".latest img").attr("data-base64"),u=e(".latest img").attr("data-name"),a=e(".latest img").attr("data-type");u!==undefined&&s.setBinaryFile("pic",u,a,o),e.mobile.loading("show",{text:"Signing Up!",textVisible:!0,theme:"b"}),s.create({success:function(t){var n=new StackMob.User(t.toJSON());n.login(!1,{success:function(t){e.mobile.loading("hide"),e("input.usernameSignup").val(""),e("input.passwordSignup").val(""),e("input.imagePickerSignup").val(""),e(".latest img").attr("src",""),i.navigate("#justsaying",{trigger:!0})},error:function(t){e.mobile.loading("hide")}})},error:function(t){e("#signupBtn").removeClass("disabled"),e("#signupBtn").attr("disabled",!1),e.mobile.loading("hide")}})}return this}});return o});