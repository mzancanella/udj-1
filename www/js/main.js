window.Router = Backbone.Router.extend({

	routes: {
	},

	initialize: function () {
		this.headerView = new HeaderView();
		$('.header').html(this.headerView.render().el);
	}
});

templateLoader.load(["HeaderView"],
	function() {
		app = new Router();
});
