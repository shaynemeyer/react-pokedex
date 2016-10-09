const pokemon = {
	"abilities": [
		{
			"slot": 3,
			"is_hidden": true,
			"ability": {
				"url": "http://pokeapi.co/api/v2/ability/50/",
				"name": "run-away"
			}
		},
		{
			"slot": 1,
			"is_hidden": false,
			"ability": {
				"url": "http://pokeapi.co/api/v2/ability/34/",
				"name": "chlorophyll"
			}
		}
	],
	"stats": [
		{
			"stat": {
				"url": "http://pokeapi.co/api/v2/stat/6/",
				"name": "speed"
			},
			"effort": 0,
			"base_stat": 30
		},
		{
			"stat": {
				"url": "http://pokeapi.co/api/v2/stat/5/",
				"name": "special-defense"
			},
			"effort": 0,
			"base_stat": 65
		},
		{
			"stat": {
				"url": "http://pokeapi.co/api/v2/stat/4/",
				"name": "special-attack"
			},
			"effort": 1,
			"base_stat": 75
		},
		{
			"stat": {
				"url": "http://pokeapi.co/api/v2/stat/3/",
				"name": "defense"
			},
			"effort": 0,
			"base_stat": 55
		},
		{
			"stat": {
				"url": "http://pokeapi.co/api/v2/stat/2/",
				"name": "attack"
			},
			"effort": 0,
			"base_stat": 50
		},
		{
			"stat": {
				"url": "http://pokeapi.co/api/v2/stat/1/",
				"name": "hp"
			},
			"effort": 0,
			"base_stat": 45
		}
	],
	"name": "oddish",
	"weight": 54,
	"height": 5,
	"id": 43,
	"order": 59,
	"base_experience": 64,
	"types": [
		{
			"slot": 2,
			"type": {
				"url": "http://pokeapi.co/api/v2/type/4/",
				"name": "poison"
			}
		},
		{
			"slot": 1,
			"type": {
				"url": "http://pokeapi.co/api/v2/type/12/",
				"name": "grass"
			}
		}
	]
};

export {pokemon};
