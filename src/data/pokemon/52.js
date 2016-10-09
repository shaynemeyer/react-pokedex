const pokemon = {
	"abilities": [
		{
			"slot": 3,
			"is_hidden": true,
			"ability": {
				"url": "http://pokeapi.co/api/v2/ability/127/",
				"name": "unnerve"
			}
		},
		{
			"slot": 2,
			"is_hidden": false,
			"ability": {
				"url": "http://pokeapi.co/api/v2/ability/101/",
				"name": "technician"
			}
		},
		{
			"slot": 1,
			"is_hidden": false,
			"ability": {
				"url": "http://pokeapi.co/api/v2/ability/53/",
				"name": "pickup"
			}
		}
	],
	"stats": [
		{
			"stat": {
				"url": "http://pokeapi.co/api/v2/stat/6/",
				"name": "speed"
			},
			"effort": 1,
			"base_stat": 90
		},
		{
			"stat": {
				"url": "http://pokeapi.co/api/v2/stat/5/",
				"name": "special-defense"
			},
			"effort": 0,
			"base_stat": 40
		},
		{
			"stat": {
				"url": "http://pokeapi.co/api/v2/stat/4/",
				"name": "special-attack"
			},
			"effort": 0,
			"base_stat": 40
		},
		{
			"stat": {
				"url": "http://pokeapi.co/api/v2/stat/3/",
				"name": "defense"
			},
			"effort": 0,
			"base_stat": 35
		},
		{
			"stat": {
				"url": "http://pokeapi.co/api/v2/stat/2/",
				"name": "attack"
			},
			"effort": 0,
			"base_stat": 45
		},
		{
			"stat": {
				"url": "http://pokeapi.co/api/v2/stat/1/",
				"name": "hp"
			},
			"effort": 0,
			"base_stat": 40
		}
	],
	"name": "meowth",
	"weight": 42,
	"height": 4,
	"id": 52,
	"order": 69,
	"base_experience": 58,
	"types": [
		{
			"slot": 1,
			"type": {
				"url": "http://pokeapi.co/api/v2/type/1/",
				"name": "normal"
			}
		}
	]
};

export {pokemon};
