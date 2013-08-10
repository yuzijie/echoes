define(["underscore","backbone","./user_profile_manager","./youtube_media_provider","./youtube_profile_service","./youtube_player"],function(e,t,n,r,i,s){var o=t.Model.extend({defaults:{query:"",layout:"video",filter:"videos",route:null,play:null,mediaId:null,mediaOptions:{type:"video"},user:null,youtube:null,player:null},safe:"EchoesPlayerApp-v20130202",initialize:function(){this.set("youtube",new r),this.set("user",new i),this.set("player",new s),this.set("play",null),this.set("route",null),this.set("mediaId",null),this.on("change:filter",this.onFilterChange),this.on("change:query",this.onQueryChange),this.youtube().set({feedType:this.get("filter")},{silent:!0}),this.youtube().query({query:this.get("query")})},onFilterChange:function(e,t){this.youtube().set("feedType",t)},onQueryChange:function(e,t){this.youtube().query({query:t})},user:function(){return this.get("user")},connectUser:function(){this.user().fetch()},connect:function(e){this.user().setToken(e)},getSignin:function(){return this.user().urls.signin},getSignout:function(){return this.user().urls.signout},youtube:function(){return this.get("youtube")},route:function(e){if(!e)return this.get("route");this.set("route",e)},playMedia:function(e){this.get("player").setOptions(e)},fetchCurrentMediaInfo:function(){this.youtube().fetchMediaById(this.get("player").get("mediaId"))},fetchPlaylistInfo:function(e){this.youtube().fetchPlaylistInfo(this.get("player").get("nowPlayingId"))}});return o});