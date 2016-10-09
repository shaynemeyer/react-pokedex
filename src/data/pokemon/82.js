const pokemon = {
	"abilities": [
		{
			"slot": 3,
			"is_hidden": true,
			"ability": {
				"url": "http://pokeapi.co/api/v2/ability/148/",
				"name": "analytic"
			}
		},
		{
			"slot": 2,
			"is_hidden": false,
			"ability": {
				"url": "http://pokeapi.co/api/v2/ability/5/",
				"name": "sturdy"
			}
		},
		{
			"slot": 1,
			"is_hidden": false,
			"ability": {
				"url": "http://pokeapi.co/api/v2/ability/42/",
				"name": "magnet-pull"
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
			"base_stat": 70
		},
		{
			"stat": {
				"url": "http://pokeapi.co/api/v2/stat/5/",
				"name": "special-defense"
			},
			"effort": 0,
			"base_stat": 70
		},
		{
			"stat": {
				"url": "http://pokeapi.co/api/v2/stat/4/",
				"name": "special-attack"
			},
			"effort": 2,
			"base_stat": 120
		},
		{
			"stat": {
				"url": "http://pokeapi.co/api/v2/stat/3/",
				"name": "defense"
			},
			"effort": 0,
			"base_stat": 95
		},
		{
			"stat": {
				"url": "http://pokeapi.co/api/v2/stat/2/",
				"name": "attack"
			},
			"effort": 0,
			"base_stat": 60
		},
		{
			"stat": {
				"url": "http://pokeapi.co/api/v2/stat/1/",
				"name": "hp"
			},
			"effort": 0,
			"base_stat": 50
		}
	],
	"name": "magneton",
	"weight": 600,
	"height": 10,
	"id": 82,
	"order": 103,
	"base_experience": 163,
	"types": [
		{
			"slot": 2,
			"type": {
				"url": "http://pokeapi.co/api/v2/type/9/",
				"name": "steel"
			}
		},
		{
			"slot": 1,
			"type": {
				"url": "http://pokeapi.co/api/v2/type/13/",
				"name": "electric"
			}
		}
	]
};

export {pokemon};
