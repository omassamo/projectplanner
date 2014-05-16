module.exports = {

	// Require Modules
	https: require('https'),
	stringify: require('querystring').stringify,
	// API keys
	client: {
		client_id: "joha-cms-login", 
		client_secret: "I33VfXvJuBk8DGbiBD32kFqc88naPgrCB3CVkNprwyQQ90DE1WAYZ44swX2xOgFu"
	},
	// Auth. Credentials
	oauth: {
		access_token: null, 
		refresh_token: null
	},
	// Podio Settings
	config: {
		production_domain: "joha.dk",
		org_id: 420066,
		space_id: 1432315,
		app_id: 7827995
	},

	authenticate: function (callback, code, req) {
		// Login with Podio
		var self = this;
		//
		var post_domain = 'podio.com';  
		var post_port = 443;  
		var post_path = '/oauth/token';

		// grant_type=authorization_code&client_id=YOUR_APP_ID&redirect_uri=YOUR_URL&client_secret=YOUR_APP_SECRET&code=THE_AUTHORIZATION_CODE
		var post_data = self.stringify({  
			'grant_type' : 'authorization_code',  
			'client_id': self.client.client_id ,
			'redirect_uri': process.env.NODE_ENV != "production" ? "http://localhost:1337/oauth" : "http://" + self.config.production_domain + "/oauth",
			'client_secret': self.client.client_secret,
			'code': code
		}); 

		var post_options = {  
			host: post_domain,  
			port: post_port,  
			path: post_path,  
			method: 'POST',  
			headers: {  
				'Content-Type': 'application/x-www-form-urlencoded',  
				'Content-Length': post_data.length  
			}  
		};