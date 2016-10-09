const pokemon = {
	"abilities": [
		{
			"slot": 3,
			"is_hidden": true,
			"ability": {
				"url": "http://pokeapi.co/api/v2/ability/143/",
				"name": "poison-touch"
			}
		},
		{
			"slot": 2,
			"is_hidden": false,
			"ability": {
				"url": "http://pokeapi.co/api/v2/ability/60/",
				"name": "sticky-hold"
			}
		},
		{
			"slot": 1,
			"is_hidden": false,
			"ability": {
				"url": "http://pokeapi.co/api/v2/ability/1/",
				"name": "stench"
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
			"base_stat": 25
		},
		{
			"stat": {
				"url": "http://pokeapi.co/api/v2/stat/5/",
				"name": "special-defense"
			},
			"effort": 0,
			"base_stat": 50
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
			"base_stat": 50
		},
		{
			"stat": {
				"url": "http://pokeapi.co/api/v2/stat/2/",
				"name": "attack"
			},
			"effort": 0,
			"base_stat": 80
		},
		{
			"stat": {
				"url": "http://pokeapi.co/api/v2/stat/1/",
				"name": "hp"
			},
			"effort": 1,
			"base_stat": 80
		}
	],
	"name": "grimer",
	"weight": 300,
	"height": 9,
	"id": 88,
	"order": 110,
	"base_experience": 65,
	"types": [
		{
			"slot": 1,
			"type": {
				"url": "http://pokeapi.co/api/v2/type/4/",
				"name": "poison"
			}
		}
	]
};

export {pokemon};
