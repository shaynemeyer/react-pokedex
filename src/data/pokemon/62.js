const pokemon = {
	"abilities": [
		{
			"slot": 3,
			"is_hidden": true,
			"ability": {
				"url": "http://pokeapi.co/api/v2/ability/33/",
				"name": "swift-swim"
			}
		},
		{
			"slot": 2,
			"is_hidden": false,
			"ability": {
				"url": "http://pokeapi.co/api/v2/ability/6/",
				"name": "damp"
			}
		},
		{
			"slot": 1,
			"is_hidden": false,
			"ability": {
				"url": "http://pokeapi.co/api/v2/ability/11/",
				"name": "water-absorb"
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
			"base_stat": 90
		},
		{
			"stat": {
				"url": "http://pokeapi.co/api/v2/stat/4/",
				"name": "special-attack"
			},
			"effort": 0,
			"base_stat": 70
		},
		{
			"stat": {
				"url": "http://pokeapi.co/api/v2/stat/3/",
				"name": "defense"
			},
			"effort": 3,
			"base_stat": 95
		},
		{
			"stat": {
				"url": "http://pokeapi.co/api/v2/stat/2/",
				"name": "attack"
			},
			"effort": 0,
			"base_stat": 95
		},
		{
			"stat": {
				"url": "http://pokeapi.co/api/v2/stat/1/",
				"name": "hp"
			},
			"effort": 0,
			"base_stat": 90
		}
	],
	"name": "poliwrath",
	"weight": 540,
	"height": 13,
	"id": 62,
	"order": 79,
	"base_experience": 230,
	"types": [
		{
			"slot": 2,
			"type": {
				"url": "http://pokeapi.co/api/v2/type/2/",
				"name": "fighting"
			}
		},
		{
			"slot": 1,
			"type": {
				"url": "http://pokeapi.co/api/v2/type/11/",
				"name": "water"
			}
		}
	]
};

export {pokemon};
