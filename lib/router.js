FlowRouter.route('/', function(params, queryParams) {
  // do something here maybe later
});

FlowRouter.route('/*', function(params, queryParams) {
  // do something here maybe later
  FlowRouter.go('/');
});
