(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-041b4cfc"],{1018:function(t,s,o){"use strict";var a=function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"footer"},[o("router-link",{staticClass:"comment-input",attrs:{to:"/post_comment/"+t.post.id}},[t._v("发表评论")]),o("div",{staticClass:"icons"},[o("span",{staticClass:"iconfont icon-pinglun"}),o("i",[t._v(t._s(t.post.comment_length>100?"99+":t.post.comment_length))])]),o("div",{staticClass:"icons",on:{click:t.handleStar}},[o("span",{staticClass:"iconfont icon-shoucang",class:t.post.has_star?"active":""})]),t._m(0)],1)},i=[function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"icons"},[o("span",{staticClass:"iconfont icon-tubiao212"})])}],e={props:["post"],methods:{handleStar:function(){var t=this,s=JSON.parse(localStorage.getItem("userInfo"))||{},o=s.token;this.$axios({url:"/post_star/"+this.post.user.id,headers:{Authorization:o}}).then((function(s){t.post.has_star=!t.post.has_star,t.$toast.success(s.data.message)}))}}},n=e,c=(o("3306"),o("2877")),l=Object(c["a"])(n,a,i,!1,null,"1c92fbaf",null);s["a"]=l.exports},3306:function(t,s,o){"use strict";var a=o("3af4"),i=o.n(a);i.a},"3af4":function(t,s,o){},"3eda":function(t,s,o){},"81a8":function(t,s,o){"use strict";o.r(s);var a=function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",[t.post.content?o("video",{staticClass:"video",attrs:{poster:t.$axios.defaults.baseURL+t.post.cover[0].url,src:t.$axios.defaults.baseURL+t.post.content,controls:""}},[t._v("你的浏览器版本过低,无法正常播放")]):t._e(),o("div",{staticClass:"main"},[o("div",{staticClass:"author"},[o("div",{staticClass:"userInfo"},[o("img",{attrs:{src:t.$axios.defaults.baseURL+t.post.user.head_img,alt:""}}),o("span",[t._v(t._s(t.post.user.nickname))])]),o("div",{staticClass:"right"},[o("span",{staticClass:"follow",class:t.post.has_follow?"":"active",on:{click:t.handleFollow}},[t._v(t._s(t.post.has_follow?"已关注":"关注"))])])]),o("div",{staticClass:"title"},[t._v(t._s(t.post.title))]),o("div",{staticClass:"actions"},[o("div",{staticClass:"actions-item",on:{click:t.handleLike}},[o("span",{staticClass:"iconfont icondianzan"}),o("i",[t._v(t._s(Number(t.post.like_length)))])]),t._m(0)])]),o("ForumPosts",{attrs:{post:t.post}})],1)},i=[function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"actions-item"},[o("span",{staticClass:"iconfont icon-weixin"}),o("i",[t._v("微信")])])}],e=o("1018"),n={data:function(){return{post:{user:{},cover:[{}]},token:""}},components:{ForumPosts:e["a"]},mounted:function(){var t=this,s=this.$route.params.id,o=JSON.parse(localStorage.getItem("userInfo"))||{},a=o.token;this.token=a;var i={url:"/post/"+s};a&&(i.headers={Authorization:a}),this.$axios(i).then((function(s){var o=s.data.data;t.post=o,console.log(t.post)}))},methods:{handleFollow:function(){var t=this,s="";s=this.post.has_follow?"/user_unfollow/"+this.post.user.id:"/user_follows/"+this.post.user.id;var o=JSON.parse(localStorage.getItem("userInfo"))||{},a=o.token;this.$axios({url:s,headers:{Authorization:a}}).then((function(s){t.post.has_follow=!t.post.has_follow,t.$toast.success(t.post.has_follow?"关注成功":"取消关注成功")}))},handleLike:function(){var t=this;this.$axios({url:"/post_like/"+this.post.user.id,headers:{Authorization:this.token}}).then((function(s){t.post.has_like=!t.post.has_like,t.post.has_like?t.post.like_length+=1:t.post.like_length-=1,t.$toast.success(s.data.message)}))},handleStar:function(){var t=this;this.$axios({url:"/post_star/"+this.post.user.id,headers:{Authorization:this.token}}).then((function(s){t.post.has_star=!t.post.has_star,t.$toast.success(s.data.message)}))}}},c=n,l=(o("e2b7"),o("2877")),r=Object(l["a"])(c,a,i,!1,null,"587d8cfb",null);s["default"]=r.exports},e2b7:function(t,s,o){"use strict";var a=o("3eda"),i=o.n(a);i.a}}]);
//# sourceMappingURL=chunk-041b4cfc.19fa8a3c.js.map