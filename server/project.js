var loopback=require('loopback');
module.exports = function(Project) {
    
    Project.observe('before save', function updateTimestamp(ctx, next) {
    	var ctx1 = loopback.getCurrentContext();
     var currentUser = ctx1 && ctx1.get('currentUser');
     console.log('currentUser: ', ctx1); 
     console.log('currentUser.username: ', currentUser); 
    	if (ctx.instance) {
    		ctx.instance.updated = new Date();
    	} else {
    		ctx.data.updated = new Date();
    	}
    	next();
    });
};
