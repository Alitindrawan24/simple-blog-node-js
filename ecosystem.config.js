module.exports = {
  apps : [{
	name: "Simple Blog",
	script: "./app.js",
	exec_mode: "cluster",
	watch: true,
	ignore_watch: [
		'node_modules'

	],
	instances:"max"

  }],

};
