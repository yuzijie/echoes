define(["jquery","underscore","backbone","views/youtube_search_results","views/youtube_playlists_results"],function(e,t,n,r,i){var s=n.View.extend({el:"#search-results",switcher:{key:"filter",views:{videos:r,playlists:i}}});return s});