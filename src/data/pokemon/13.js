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
			"url": "http://pokeapi.co/api/v2/ability/19/",
			"name": "shield-dust"
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
		"base_stat": 50
	},
	{
		"stat": {
			"url": "http://pokeapi.co/api/v2/stat/5/",
			"name": "special-defense"
		},
		"effort": 0,
		"base_stat": 20
	},
	{
		"stat": {
			"url": "http://pokeapi.co/api/v2/stat/4/",
			"name": "special-attack"
		},
		"effort": 0,
		"base_stat": 20
	},
	{
		"stat": {
			"url": "http://pokeapi.co/api/v2/stat/3/",
			"name": "defense"
		},
		"effort": 0,
		"base_stat": 30
	},
	{
		"stat": {
			"url": "http://pokeapi.co/api/v2/stat/2/",
			"name": "attack"
		},
		"effort": 0,
		"base_stat": 35
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
	"name": "weedle",
	"weight": 32,
	"height": 3,
	"id": 13,
	"order": 17,
	"base_experience": 39,
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
			"url": "http://pokeapi.co/api/v2/type/7/",
			"name": "bug"
		}
	}
]
};

export {pokemon};
