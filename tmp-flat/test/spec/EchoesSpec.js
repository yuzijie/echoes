describe("Echoes Player",function(){var e,t;describe(":: Youtube Item Model",function(){beforeEach(function(){t=new PlayerApp.Models.YoutubeItemSearchResult,t.set(YoutubeResponse.data.items[0])}),it("should have an id",function(){expect(t.get("id")).toBeDefined()}),it("should have a High Qaulty thumbnail",function(){expect(t.get("thumbnail").hqDefault).toBeDefined()}),it("should be longer than 0 seconds",function(){expect(t.get("duration")).toBeGreaterThan(0)})}),describe(":: Youtube Item View",function(){beforeEach(function(){e=new PlayerApp.Views.YoutubeItemSearchResult,e.model=t}),it("Should render this.model and add tooltip",function(){e.render(),expect(e.$el).toBeTruthy()}),it("Should trigger 'media-clicked' event",function(){var t;e.on("media-clicked",function(e){t=e}),expect(e.model.toJSON()).toMatch(t)})})});