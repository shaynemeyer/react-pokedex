const pokemon = {
	"abilities": [
		{
			"slot": 3,
			"is_hidden": true,
			"ability": {
				"url": "http://pokeapi.co/api/v2/ability/144/",
				"name": "regenerator"
			}
		},
		{
			"slot": 2,
			"is_hidden": false,
			"ability": {
				"url": "http://pokeapi.co/api/v2/ability/20/",
				"name": "own-tempo"
			}
		},
		{
			"slot": 1,
			"is_hidden": false,
			"ability": {
				"url": "http://pokeapi.co/api/v2/ability/12/",
				"name": "oblivious"
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
			"base_stat": 80
		},
		{
			"stat": {
				"url": "http://pokeapi.co/api/v2/stat/4/",
				"name": "special-attack"
			},
			"effort": 0,
			"base_stat": 100
		},
		{
			"stat": {
				"url": "http://pokeapi.co/api/v2/stat/3/",
				"name": "defense"
			},
			"effort": 2,
			"base_stat": 110
		},
		{
			"stat": {
				"url": "http://pokeapi.co/api/v2/stat/2/",
				"name": "attack"
			},
			"effort": 0,
			"base_stat": 75
		},
		{
			"stat": {
				"url": "http://pokeapi.co/api/v2/stat/1/",
				"name": "hp"
			},
			"effort": 0,
			"base_stat": 95
		}
	],
	"name": "slowbro",
	"weight": 785,
	"height": 16,
	"id": 80,
	"order": 99,
	"base_experience": 172,
	"types": [
		{
			"slot": 2,
			"type": {
				"url": "http://pokeapi.co/api/v2/type/14/",
				"name": "psychic"
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
