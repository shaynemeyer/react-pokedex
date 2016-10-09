const pokemon = {
	"abilities": [
		{
			"slot": 3,
			"is_hidden": true,
			"ability": {
				"url": "http://pokeapi.co/api/v2/ability/1/",
				"name": "stench"
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
			"base_stat": 40
		},
		{
			"stat": {
				"url": "http://pokeapi.co/api/v2/stat/5/",
				"name": "special-defense"
			},
			"effort": 0,
			"base_stat": 75
		},
		{
			"stat": {
				"url": "http://pokeapi.co/api/v2/stat/4/",
				"name": "special-attack"
			},
			"effort": 2,
			"base_stat": 85
		},
		{
			"stat": {
				"url": "http://pokeapi.co/api/v2/stat/3/",
				"name": "defense"
			},
			"effort": 0,
			"base_stat": 70
		},
		{
			"stat": {
				"url": "http://pokeapi.co/api/v2/stat/2/",
				"name": "attack"
			},
			"effort": 0,
			"base_stat": 65
		},
		{
			"stat": {
				"url": "http://pokeapi.co/api/v2/stat/1/",
				"name": "hp"
			},
			"effort": 0,
			"base_stat": 60
		}
	],
	"name": "gloom",
	"weight": 86,
	"height": 8,
	"id": 44,
	"order": 60,
	"base_experience": 138,
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
