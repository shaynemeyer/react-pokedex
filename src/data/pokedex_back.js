let pokedex = [
  {
    pid: 1,
    name: 'bulbasaur',
    next: 2,
    prev: 720,
  },
  { pid: 2, name: 'ivysaur', next: 3, prev: 1 },
  { pid: 3, name: 'venusaur', next: 4, prev: 2 },
  { pid: 4, name: 'charmander', next: 5, prev: 3 },
  { pid: 5, name: 'charmeleon', next: 6, prev: 4 },
  { pid: 6, name: 'charizard', next: 7, prev: 5 },
  { pid: 7, name: 'squirtle', next: 8, prev: 6 },
  { pid: 8, name: 'wartortle', next: 9, prev: 7 },
  { pid: 9, name: 'blastoise', next: 10, prev: 8 },
  { pid: 10, name: 'caterpie', next: 11, prev: 9 },
  { pid: 11, name: 'metapod', next: 12, prev: 10 },
  { pid: 12, name: 'butterfree', next: 13, prev: 11 },
  { pid: 13, name: 'weedle', next: 14, prev: 12 },
  { pid: 14, name: 'kakuna', next: 15, prev: 13 },
  { pid: 15, name: 'beedrill', next: 16, prev: 14 },
  { pid: 16, name: 'pidgey', next: 17, prev: 15 },
  { pid: 17, name: 'pidgeotto', next: 18, prev: 16 },
  { pid: 18, name: 'pidgeot', next: 19, prev: 17 },
  { pid: 19, name: 'rattata', next: 20, prev: 18 },
  { pid: 20, name: 'raticate', next: 21, prev: 19 },
  { pid: 21, name: 'spearow', next: 22, prev: 20 },
  { pid: 22, name: 'fearow', next: 23, prev: 21 },
  { pid: 23, name: 'ekans', next: 24, prev: 22 },
  { pid: 24, name: 'arbok', next: 25, prev: 23 },
  { pid: 25, name: 'pikachu', next: 26, prev: 24 },
  { pid: 26, name: 'raichu', next: 27, prev: 25 },
  { pid: 27, name: 'sandshrew', next: 28, prev: 26 },
  { pid: 28, name: 'sandslash', next: 29, prev: 27 },
  { pid: 29, name: 'nidoran-f', next: 30, prev: 28 },
  { pid: 30, name: 'nidorina', next: 31, prev: 29 },
  { pid: 31, name: 'nidoqueen', next: 32, prev: 30 },
  { pid: 32, name: 'nidoran-m', next: 33, prev: 31 },
  { pid: 33, name: 'nidorino', next: 34, prev: 32 },
  { pid: 34, name: 'nidoking', next: 35, prev: 33 },
  { pid: 35, name: 'clefairy', next: 36, prev: 34 },
  { pid: 36, name: 'clefable', next: 37, prev: 35 },
  { pid: 37, name: 'vulpix', next: 38, prev: 36 },
  { pid: 38, name: 'ninetales', next: 39, prev: 37 },
  { pid: 39, name: 'jigglypuff', next: 40, prev: 38 },
  { pid: 40, name: 'wigglytuff', next: 41, prev: 39 },
  { pid: 41, name: 'zubat', next: 42, prev: 40 },
  { pid: 42, name: 'golbat', next: 43, prev: 41 },
  { pid: 43, name: 'oddish', next: 44, prev: 42 },
  { pid: 44, name: 'gloom', next: 45, prev: 43 },
  { pid: 45, name: 'vileplume', next: 46, prev: 44 },
  { pid: 46, name: 'paras', next: 47, prev: 45 },
  { pid: 47, name: 'parasect', next: 48, prev: 46 },
  { pid: 48, name: 'venonat', next: 49, prev: 47 },
  { pid: 49, name: 'venomoth', next: 50, prev: 48 },
  { pid: 50, name: 'diglett', next: 51, prev: 49 },
  { pid: 51, name: 'dugtrio', next: 52, prev: 50 },
  { pid: 52, name: 'meowth', next: 53, prev: 51 },
  { pid: 53, name: 'persian', next: 54, prev: 52 },
  { pid: 54, name: 'psyduck', next: 55, prev: 53 },
  { pid: 55, name: 'golduck', next: 56, prev: 54 },
  { pid: 56, name: 'mankey', next: 57, prev: 55 },
  { pid: 57, name: 'primeape', next: 58, prev: 56 },
  { pid: 58, name: 'growlithe', next: 59, prev: 57 },
  { pid: 59, name: 'arcanine', next: 60, prev: 58 },
  { pid: 60, name: 'poliwag', next: 61, prev: 59 },
  { pid: 61, name: 'poliwhirl', next: 62, prev: 60 },
  { pid: 62, name: 'poliwrath', next: 63, prev: 61 },
  { pid: 63, name: 'abra', next: 64, prev: 62 },
  { pid: 64, name: 'kadabra', next: 65, prev: 63 },
  { pid: 65, name: 'alakazam', next: 66, prev: 64 },
  { pid: 66, name: 'machop', next: 67, prev: 65 },
  { pid: 67, name: 'machoke', next: 68, prev: 66 },
  { pid: 68, name: 'machamp', next: 69, prev: 67 },
  { pid: 69, name: 'bellsprout', next: 70, prev: 68 },
  { pid: 70, name: 'weepinbell', next: 71, prev: 69 },
  { pid: 71, name: 'victreebel', next: 72, prev: 70 },
  { pid: 72, name: 'tentacool', next: 73, prev: 71 },
  { pid: 73, name: 'tentacruel', next: 74, prev: 72 },
  { pid: 74, name: 'geodude', next: 75, prev: 73 },
  { pid: 75, name: 'graveler', next: 76, prev: 74 },
  { pid: 76, name: 'golem', next: 77, prev: 75 },
  { pid: 77, name: 'ponyta', next: 78, prev: 76 },
  { pid: 78, name: 'rapidash', next: 79, prev: 77 },
  { pid: 79, name: 'slowpoke', next: 80, prev: 78 },
  { pid: 80, name: 'slowbro', next: 81, prev: 79 },
  { pid: 81, name: 'magnemite', next: 82, prev: 80 },
  { pid: 82, name: 'magneton', next: 83, prev: 81 },
  { pid: 83, name: 'farfetchd', next: 84, prev: 82 },
  { pid: 84, name: 'doduo', next: 85, prev: 83 },
  { pid: 85, name: 'dodrio', next: 86, prev: 84 },
  { pid: 86, name: 'seel', next: 87, prev: 85 },
  { pid: 87, name: 'dewgong', next: 88, prev: 86 },
  { pid: 88, name: 'grimer', next: 89, prev: 87 },
  { pid: 89, name: 'muk', next: 90, prev: 88 },
  { pid: 90, name: 'shellder', next: 91, prev: 89 },
  { pid: 91, name: 'cloyster', next: 92, prev: 90 },
  { pid: 92, name: 'gastly', next: 93, prev: 91 },
  { pid: 93, name: 'haunter', next: 94, prev: 92 },
  { pid: 94, name: 'gengar', next: 95, prev: 93 },
  { pid: 95, name: 'onix', next: 96, prev: 94 },
  { pid: 96, name: 'drowzee', next: 97, prev: 95 },
  { pid: 97, name: 'hypno', next: 98, prev: 96 },
  { pid: 98, name: 'krabby', next: 99, prev: 97 },
  { pid: 99, name: 'kingler', next: 100, prev: 98 },
  { pid: 100, name: 'voltorb', next: 101, prev: 99 },
  { pid: 101, name: 'electrode', next: 102, prev: 100 },
  { pid: 102, name: 'exeggcute', next: 103, prev: 101 },
  { pid: 103, name: 'exeggutor', next: 104, prev: 102 },
  { pid: 104, name: 'cubone', next: 105, prev: 103 },
  { pid: 105, name: 'marowak', next: 106, prev: 104 },
  { pid: 106, name: 'hitmonlee', next: 107, prev: 105 },
  { pid: 107, name: 'hitmonchan', next: 108, prev: 106 },
  { pid: 108, name: 'lickitung', next: 109, prev: 107 },
  { pid: 109, name: 'koffing', next: 110, prev: 108 },
  { pid: 110, name: 'weezing', next: 111, prev: 109 },
  { pid: 111, name: 'rhyhorn', next: 112, prev: 110 },
  { pid: 112, name: 'rhydon', next: 113, prev: 111 },
  { pid: 113, name: 'chansey', next: 114, prev: 112 },
  { pid: 114, name: 'tangela', next: 115, prev: 113 },
  { pid: 115, name: 'kangaskhan', next: 116, prev: 114 },
  { pid: 116, name: 'horsea', next: 117, prev: 115 },
  { pid: 117, name: 'seadra', next: 118, prev: 116 },
  { pid: 118, name: 'goldeen', next: 119, prev: 117 },
  { pid: 119, name: 'seaking', next: 120, prev: 118 },
  { pid: 120, name: 'staryu', next: 121, prev: 119 },
  { pid: 121, name: 'starmie', next: 122, prev: 120 },
  { pid: 122, name: 'mr-mime', next: 123, prev: 121 },
  { pid: 123, name: 'scyther', next: 124, prev: 122 },
  { pid: 124, name: 'jynx', next: 125, prev: 123 },
  { pid: 125, name: 'electabuzz', next: 126, prev: 124 },
  { pid: 126, name: 'magmar', next: 127, prev: 125 },
  { pid: 127, name: 'pinsir', next: 128, prev: 126 },
  { pid: 128, name: 'tauros', next: 129, prev: 127 },
  { pid: 129, name: 'magikarp', next: 130, prev: 128 },
  { pid: 130, name: 'gyarados', next: 131, prev: 129 },
  { pid: 131, name: 'lapras', next: 132, prev: 130 },
  { pid: 132, name: 'ditto', next: 133, prev: 131 },
  { pid: 133, name: 'eevee', next: 134, prev: 132 },
  { pid: 134, name: 'vaporeon', next: 135, prev: 133 },
  { pid: 135, name: 'jolteon', next: 136, prev: 134 },
  { pid: 136, name: 'flareon', next: 137, prev: 135 },
  { pid: 137, name: 'porygon', next: 138, prev: 136 },
  { pid: 138, name: 'omanyte', next: 139, prev: 137 },
  { pid: 139, name: 'omastar', next: 140, prev: 138 },
  { pid: 140, name: 'kabuto', next: 141, prev: 139 },
  { pid: 141, name: 'kabutops', next: 142, prev: 140 },
  { pid: 142, name: 'aerodactyl', next: 143, prev: 141 },
  { pid: 143, name: 'snorlax', next: 144, prev: 142 },
  { pid: 144, name: 'articuno', next: 145, prev: 143 },
  { pid: 145, name: 'zapdos', next: 146, prev: 144 },
  { pid: 146, name: 'moltres', next: 147, prev: 145 },
  { pid: 147, name: 'dratini', next: 148, prev: 146 },
  { pid: 148, name: 'dragonair', next: 149, prev: 147 },
  { pid: 149, name: 'dragonite', next: 150, prev: 148 },
  { pid: 150, name: 'mewtwo', next: 151, prev: 149 },
  { pid: 151, name: 'mew', next: 152, prev: 150 },
  { pid: 152, name: 'chikorita', next: 153, prev: 151 },
  { pid: 153, name: 'bayleef', next: 154, prev: 152 },
  { pid: 154, name: 'meganium', next: 155, prev: 153 },
  { pid: 155, name: 'cyndaquil', next: 156, prev: 154 },
  { pid: 156, name: 'quilava', next: 157, prev: 155 },
  { pid: 157, name: 'typhlosion', next: 158, prev: 156 },
  { pid: 158, name: 'totodile', next: 159, prev: 157 },
  { pid: 159, name: 'croconaw', next: 160, prev: 158 },
  { pid: 160, name: 'feraligatr', next: 161, prev: 159 },
  { pid: 161, name: 'sentret', next: 162, prev: 160 },
  { pid: 162, name: 'furret', next: 163, prev: 161 },
  { pid: 163, name: 'hoothoot', next: 164, prev: 162 },
  { pid: 164, name: 'noctowl', next: 165, prev: 163 },
  { pid: 165, name: 'ledyba', next: 166, prev: 164 },
  { pid: 166, name: 'ledian', next: 167, prev: 165 },
  { pid: 167, name: 'spinarak', next: 168, prev: 166 },
  { pid: 168, name: 'ariados', next: 169, prev: 167 },
  { pid: 169, name: 'crobat', next: 170, prev: 168 },
  { pid: 170, name: 'chinchou', next: 171, prev: 169 },
  { pid: 171, name: 'lanturn', next: 172, prev: 170 },
  { pid: 172, name: 'pichu', next: 173, prev: 171 },
  { pid: 173, name: 'cleffa', next: 174, prev: 172 },
  { pid: 174, name: 'igglybuff', next: 175, prev: 173 },
  { pid: 175, name: 'togepi', next: 176, prev: 174 },
  { pid: 176, name: 'togetic', next: 177, prev: 175 },
  { pid: 177, name: 'natu', next: 178, prev: 176 },
  { pid: 178, name: 'xatu', next: 179, prev: 177 },
  { pid: 179, name: 'mareep', next: 180, prev: 178 },
  { pid: 180, name: 'flaaffy', next: 181, prev: 179 },
  { pid: 181, name: 'ampharos', next: 182, prev: 180 },
  { pid: 182, name: 'bellossom', next: 183, prev: 181 },
  { pid: 183, name: 'marill', next: 184, prev: 182 },
  { pid: 184, name: 'azumarill', next: 185, prev: 183 },
  { pid: 185, name: 'sudowoodo', next: 186, prev: 184 },
  { pid: 186, name: 'politoed', next: 187, prev: 185 },
  { pid: 187, name: 'hoppip', next: 188, prev: 186 },
  { pid: 188, name: 'skiploom', next: 189, prev: 187 },
  { pid: 189, name: 'jumpluff', next: 190, prev: 188 },
  { pid: 190, name: 'aipom', next: 191, prev: 189 },
  { pid: 191, name: 'sunkern', next: 192, prev: 190 },
  { pid: 192, name: 'sunflora', next: 193, prev: 191 },
  { pid: 193, name: 'yanma', next: 194, prev: 192 },
  { pid: 194, name: 'wooper', next: 195, prev: 193 },
  { pid: 195, name: 'quagsire', next: 196, prev: 194 },
  { pid: 196, name: 'espeon', next: 197, prev: 195 },
  { pid: 197, name: 'umbreon', next: 198, prev: 196 },
  { pid: 198, name: 'murkrow', next: 199, prev: 197 },
  { pid: 199, name: 'slowking', next: 200, prev: 198 },
  { pid: 200, name: 'misdreavus', next: 201, prev: 199 },
  { pid: 201, name: 'unown', next: 202, prev: 200 },
  { pid: 202, name: 'wobbuffet', next: 203, prev: 201 },
  { pid: 203, name: 'girafarig', next: 204, prev: 202 },
  { pid: 204, name: 'pineco', next: 205, prev: 203 },
  { pid: 205, name: 'forretress', next: 206, prev: 204 },
  { pid: 206, name: 'dunsparce', next: 207, prev: 205 },
  { pid: 207, name: 'gligar', next: 208, prev: 206 },
  { pid: 208, name: 'steelix', next: 209, prev: 207 },
  { pid: 209, name: 'snubbull', next: 210, prev: 208 },
  { pid: 210, name: 'granbull', next: 211, prev: 209 },
  { pid: 211, name: 'qwilfish', next: 212, prev: 210 },
  { pid: 212, name: 'scizor', next: 213, prev: 211 },
  { pid: 213, name: 'shuckle', next: 214, prev: 212 },
  { pid: 214, name: 'heracross', next: 215, prev: 213 },
  { pid: 215, name: 'sneasel', next: 216, prev: 214 },
  { pid: 216, name: 'teddiursa', next: 217, prev: 215 },
  { pid: 217, name: 'ursaring', next: 218, prev: 216 },
  { pid: 218, name: 'slugma', next: 219, prev: 217 },
  { pid: 219, name: 'magcargo', next: 220, prev: 218 },
  { pid: 220, name: 'swinub', next: 221, prev: 219 },
  { pid: 221, name: 'piloswine', next: 222, prev: 220 },
  { pid: 222, name: 'corsola', next: 223, prev: 221 },
  { pid: 223, name: 'remoraid', next: 224, prev: 222 },
  { pid: 224, name: 'octillery', next: 225, prev: 223 },
  { pid: 225, name: 'delibird', next: 226, prev: 224 },
  { pid: 226, name: 'mantine', next: 227, prev: 225 },
  { pid: 227, name: 'skarmory', next: 228, prev: 226 },
  { pid: 228, name: 'houndour', next: 229, prev: 227 },
  { pid: 229, name: 'houndoom', next: 230, prev: 228 },
  { pid: 230, name: 'kingdra', next: 231, prev: 229 },
  { pid: 231, name: 'phanpy', next: 232, prev: 230 },
  { pid: 232, name: 'donphan', next: 233, prev: 231 },
  { pid: 233, name: 'porygon2', next: 234, prev: 232 },
  { pid: 234, name: 'stantler', next: 235, prev: 233 },
  { pid: 235, name: 'smeargle', next: 236, prev: 234 },
  { pid: 236, name: 'tyrogue', next: 237, prev: 235 },
  { pid: 237, name: 'hitmontop', next: 238, prev: 236 },
  { pid: 238, name: 'smoochum', next: 239, prev: 237 },
  { pid: 239, name: 'elekid', next: 240, prev: 238 },
  { pid: 240, name: 'magby', next: 241, prev: 239 },
  { pid: 241, name: 'miltank', next: 242, prev: 240 },
  { pid: 242, name: 'blissey', next: 243, prev: 241 },
  { pid: 243, name: 'raikou', next: 244, prev: 242 },
  { pid: 244, name: 'entei', next: 245, prev: 243 },
  { pid: 245, name: 'suicune', next: 246, prev: 244 },
  { pid: 246, name: 'larvitar', next: 247, prev: 245 },
  { pid: 247, name: 'pupitar', next: 248, prev: 246 },
  { pid: 248, name: 'tyranitar', next: 249, prev: 247 },
  { pid: 249, name: 'lugia', next: 250, prev: 248 },
  { pid: 250, name: 'ho-oh', next: 251, prev: 249 },
  { pid: 251, name: 'celebi', next: 252, prev: 250 },
  { pid: 252, name: 'treecko', next: 253, prev: 251 },
  { pid: 253, name: 'grovyle', next: 254, prev: 252 },
  { pid: 254, name: 'sceptile', next: 255, prev: 253 },
  { pid: 255, name: 'torchic', next: 256, prev: 254 },
  { pid: 256, name: 'combusken', next: 257, prev: 255 },
  { pid: 257, name: 'blaziken', next: 258, prev: 256 },
  { pid: 258, name: 'mudkip', next: 259, prev: 257 },
  { pid: 259, name: 'marshtomp', next: 260, prev: 258 },
  { pid: 260, name: 'swampert', next: 261, prev: 259 },
  { pid: 261, name: 'poochyena', next: 262, prev: 260 },
  { pid: 262, name: 'mightyena', next: 263, prev: 261 },
  { pid: 263, name: 'zigzagoon', next: 264, prev: 262 },
  { pid: 264, name: 'linoone', next: 265, prev: 263 },
  { pid: 265, name: 'wurmple', next: 266, prev: 264 },
  { pid: 266, name: 'silcoon', next: 267, prev: 265 },
  { pid: 267, name: 'beautifly', next: 268, prev: 266 },
  { pid: 268, name: 'cascoon', next: 269, prev: 267 },
  { pid: 269, name: 'dustox', next: 270, prev: 268 },
  { pid: 270, name: 'lotad', next: 271, prev: 269 },
  { pid: 271, name: 'lombre', next: 272, prev: 270 },
  { pid: 272, name: 'ludicolo', next: 273, prev: 271 },
  { pid: 273, name: 'seedot', next: 274, prev: 272 },
  { pid: 274, name: 'nuzleaf', next: 275, prev: 273 },
  { pid: 275, name: 'shiftry', next: 276, prev: 274 },
  { pid: 276, name: 'taillow', next: 277, prev: 275 },
  { pid: 277, name: 'swellow', next: 278, prev: 276 },
  { pid: 278, name: 'wingull', next: 279, prev: 277 },
  { pid: 279, name: 'pelipper', next: 280, prev: 278 },
  { pid: 280, name: 'ralts', next: 281, prev: 279 },
  { pid: 281, name: 'kirlia', next: 282, prev: 280 },
  { pid: 282, name: 'gardevoir', next: 283, prev: 281 },
  { pid: 283, name: 'surskit', next: 284, prev: 282 },
  { pid: 284, name: 'masquerain', next: 285, prev: 283 },
  { pid: 285, name: 'shroomish', next: 286, prev: 284 },
  { pid: 286, name: 'breloom', next: 287, prev: 285 },
  { pid: 287, name: 'slakoth', next: 288, prev: 286 },
  { pid: 288, name: 'vigoroth', next: 289, prev: 287 },
  { pid: 289, name: 'slaking', next: 290, prev: 288 },
  { pid: 290, name: 'nincada', next: 291, prev: 289 },
  { pid: 291, name: 'ninjask', next: 292, prev: 290 },
  { pid: 292, name: 'shedinja', next: 293, prev: 291 },
  { pid: 293, name: 'whismur', next: 294, prev: 292 },
  { pid: 294, name: 'loudred', next: 295, prev: 293 },
  { pid: 295, name: 'exploud', next: 296, prev: 294 },
  { pid: 296, name: 'makuhita', next: 297, prev: 295 },
  { pid: 297, name: 'hariyama', next: 298, prev: 296 },
  { pid: 298, name: 'azurill', next: 299, prev: 297 },
  { pid: 299, name: 'nosepass', next: 300, prev: 298 },
  { pid: 300, name: 'skitty', next: 301, prev: 299 },
  { pid: 301, name: 'delcatty', next: 302, prev: 300 },
  { pid: 302, name: 'sableye', next: 303, prev: 301 },
  { pid: 303, name: 'mawile', next: 304, prev: 302 },
  { pid: 304, name: 'aron', next: 305, prev: 303 },
  { pid: 305, name: 'lairon', next: 306, prev: 304 },
  { pid: 306, name: 'aggron', next: 307, prev: 305 },
  { pid: 307, name: 'meditite', next: 308, prev: 306 },
  { pid: 308, name: 'medicham', next: 309, prev: 307 },
  { pid: 309, name: 'electrike', next: 310, prev: 308 },
  { pid: 310, name: 'manectric', next: 311, prev: 309 },
  { pid: 311, name: 'plusle', next: 312, prev: 310 },
  { pid: 312, name: 'minun', next: 313, prev: 311 },
  { pid: 313, name: 'volbeat', next: 314, prev: 312 },
  { pid: 314, name: 'illumise', next: 315, prev: 313 },
  { pid: 315, name: 'roselia', next: 316, prev: 314 },
  { pid: 316, name: 'gulpin', next: 317, prev: 315 },
  { pid: 317, name: 'swalot', next: 318, prev: 316 },
  { pid: 318, name: 'carvanha', next: 319, prev: 317 },
  { pid: 319, name: 'sharpedo', next: 320, prev: 318 },
  { pid: 320, name: 'wailmer', next: 321, prev: 319 },
  { pid: 321, name: 'wailord', next: 322, prev: 320 },
  { pid: 322, name: 'numel', next: 323, prev: 321 },
  { pid: 323, name: 'camerupt', next: 324, prev: 322 },
  { pid: 324, name: 'torkoal', next: 325, prev: 323 },
  { pid: 325, name: 'spoink', next: 326, prev: 324 },
  { pid: 326, name: 'grumpig', next: 327, prev: 325 },
  { pid: 327, name: 'spinda', next: 328, prev: 326 },
  { pid: 328, name: 'trapinch', next: 329, prev: 327 },
  { pid: 329, name: 'vibrava', next: 330, prev: 328 },
  { pid: 330, name: 'flygon', next: 331, prev: 329 },
  { pid: 331, name: 'cacnea', next: 332, prev: 330 },
  { pid: 332, name: 'cacturne', next: 333, prev: 331 },
  { pid: 333, name: 'swablu', next: 334, prev: 332 },
  { pid: 334, name: 'altaria', next: 335, prev: 333 },
  { pid: 335, name: 'zangoose', next: 336, prev: 334 },
  { pid: 336, name: 'seviper', next: 337, prev: 335 },
  { pid: 337, name: 'lunatone', next: 338, prev: 336 },
  { pid: 338, name: 'solrock', next: 339, prev: 337 },
  { pid: 339, name: 'barboach', next: 340, prev: 338 },
  { pid: 340, name: 'whiscash', next: 341, prev: 339 },
  { pid: 341, name: 'corphish', next: 342, prev: 340 },
  { pid: 342, name: 'crawdaunt', next: 343, prev: 341 },
  { pid: 343, name: 'baltoy', next: 344, prev: 342 },
  { pid: 344, name: 'claydol', next: 345, prev: 343 },
  { pid: 345, name: 'lileep', next: 346, prev: 344 },
  { pid: 346, name: 'cradily', next: 347, prev: 345 },
  { pid: 347, name: 'anorith', next: 348, prev: 346 },
  { pid: 348, name: 'armaldo', next: 349, prev: 347 },
  { pid: 349, name: 'feebas', next: 350, prev: 348 },
  { pid: 350, name: 'milotic', next: 351, prev: 349 },
  { pid: 351, name: 'castform', next: 352, prev: 350 },
  { pid: 352, name: 'kecleon', next: 353, prev: 351 },
  { pid: 353, name: 'shuppet', next: 354, prev: 352 },
  { pid: 354, name: 'banette', next: 355, prev: 353 },
  { pid: 355, name: 'duskull', next: 356, prev: 354 },
  { pid: 356, name: 'dusclops', next: 357, prev: 355 },
  { pid: 357, name: 'tropius', next: 358, prev: 356 },
  { pid: 358, name: 'chimecho', next: 359, prev: 357 },
  { pid: 359, name: 'absol', next: 360, prev: 358 },
  { pid: 360, name: 'wynaut', next: 361, prev: 359 },
  { pid: 361, name: 'snorunt', next: 362, prev: 360 },
  { pid: 362, name: 'glalie', next: 363, prev: 361 },
  { pid: 363, name: 'spheal', next: 364, prev: 362 },
  { pid: 364, name: 'sealeo', next: 365, prev: 363 },
  { pid: 365, name: 'walrein', next: 366, prev: 364 },
  { pid: 366, name: 'clamperl', next: 367, prev: 365 },
  { pid: 367, name: 'huntail', next: 368, prev: 366 },
  { pid: 368, name: 'gorebyss', next: 369, prev: 367 },
  { pid: 369, name: 'relicanth', next: 370, prev: 368 },
  { pid: 370, name: 'luvdisc', next: 371, prev: 369 },
  { pid: 371, name: 'bagon', next: 372, prev: 370 },
  { pid: 372, name: 'shelgon', next: 373, prev: 371 },
  { pid: 373, name: 'salamence', next: 374, prev: 372 },
  { pid: 374, name: 'beldum', next: 375, prev: 373 },
  { pid: 375, name: 'metang', next: 376, prev: 374 },
  { pid: 376, name: 'metagross', next: 377, prev: 375 },
  { pid: 377, name: 'regirock', next: 378, prev: 376 },
  { pid: 378, name: 'regice', next: 379, prev: 377 },
  { pid: 379, name: 'registeel', next: 380, prev: 378 },
  { pid: 380, name: 'latias', next: 381, prev: 379 },
  { pid: 381, name: 'latios', next: 382, prev: 380 },
  { pid: 382, name: 'kyogre', next: 383, prev: 381 },
  { pid: 383, name: 'groudon', next: 384, prev: 382 },
  { pid: 384, name: 'rayquaza', next: 385, prev: 383 },
  { pid: 385, name: 'jirachi', next: 386, prev: 384 },
  { pid: 386, name: 'deoxys', next: 387, prev: 385 },
  { pid: 387, name: 'turtwig', next: 388, prev: 386 },
  { pid: 388, name: 'grotle', next: 389, prev: 387 },
  { pid: 389, name: 'torterra', next: 390, prev: 388 },
  { pid: 390, name: 'chimchar', next: 391, prev: 389 },
  { pid: 391, name: 'monferno', next: 392, prev: 390 },
  { pid: 392, name: 'infernape', next: 393, prev: 391 },
  { pid: 393, name: 'piplup', next: 394, prev: 392 },
  { pid: 394, name: 'prinplup', next: 395, prev: 393 },
  { pid: 395, name: 'empoleon', next: 396, prev: 394 },
  { pid: 396, name: 'starly', next: 397, prev: 395 },
  { pid: 397, name: 'staravia', next: 398, prev: 396 },
  { pid: 398, name: 'staraptor', next: 399, prev: 397 },
  { pid: 399, name: 'bidoof', next: 400, prev: 398 },
  { pid: 400, name: 'bibarel', next: 401, prev: 399 },
  { pid: 401, name: 'kricketot', next: 402, prev: 400 },
  { pid: 402, name: 'kricketune', next: 403, prev: 401 },
  { pid: 403, name: 'shinx', next: 404, prev: 402 },
  { pid: 404, name: 'luxio', next: 405, prev: 403 },
  { pid: 405, name: 'luxray', next: 406, prev: 404 },
  { pid: 406, name: 'budew', next: 407, prev: 405 },
  { pid: 407, name: 'roserade', next: 408, prev: 406 },
  { pid: 408, name: 'cranidos', next: 409, prev: 407 },
  { pid: 409, name: 'rampardos', next: 410, prev: 408 },
  { pid: 410, name: 'shieldon', next: 411, prev: 409 },
  { pid: 411, name: 'bastiodon', next: 412, prev: 410 },
  { pid: 412, name: 'burmy', next: 413, prev: 411 },
  { pid: 413, name: 'wormadam', next: 414, prev: 412 },
  { pid: 414, name: 'mothim', next: 415, prev: 413 },
  { pid: 415, name: 'combee', next: 416, prev: 414 },
  { pid: 416, name: 'vespiquen', next: 417, prev: 415 },
  { pid: 417, name: 'pachirisu', next: 418, prev: 416 },
  { pid: 418, name: 'buizel', next: 419, prev: 417 },
  { pid: 419, name: 'floatzel', next: 420, prev: 418 },
  { pid: 420, name: 'cherubi', next: 421, prev: 419 },
  { pid: 421, name: 'cherrim', next: 422, prev: 420 },
  { pid: 422, name: 'shellos', next: 423, prev: 421 },
  { pid: 423, name: 'gastrodon', next: 424, prev: 422 },
  { pid: 424, name: 'ambipom', next: 425, prev: 423 },
  { pid: 425, name: 'drifloon', next: 426, prev: 424 },
  { pid: 426, name: 'drifblim', next: 427, prev: 425 },
  { pid: 427, name: 'buneary', next: 428, prev: 426 },
  { pid: 428, name: 'lopunny', next: 429, prev: 427 },
  { pid: 429, name: 'mismagius', next: 430, prev: 428 },
  { pid: 430, name: 'honchkrow', next: 431, prev: 429 },
  { pid: 431, name: 'glameow', next: 432, prev: 430 },
  { pid: 432, name: 'purugly', next: 433, prev: 431 },
  { pid: 433, name: 'chingling', next: 434, prev: 432 },
  { pid: 434, name: 'stunky', next: 435, prev: 433 },
  { pid: 435, name: 'skuntank', next: 436, prev: 434 },
  { pid: 436, name: 'bronzor', next: 437, prev: 435 },
  { pid: 437, name: 'bronzong', next: 438, prev: 436 },
  { pid: 438, name: 'bonsly', next: 439, prev: 437 },
  { pid: 439, name: 'mime-jr', next: 440, prev: 438 },
  { pid: 440, name: 'happiny', next: 441, prev: 439 },
  { pid: 441, name: 'chatot', next: 442, prev: 440 },
  { pid: 442, name: 'spiritomb', next: 443, prev: 441 },
  { pid: 443, name: 'gible', next: 444, prev: 442 },
  { pid: 444, name: 'gabite', next: 445, prev: 443 },
  { pid: 445, name: 'garchomp', next: 446, prev: 444 },
  { pid: 446, name: 'munchlax', next: 447, prev: 445 },
  { pid: 447, name: 'riolu', next: 448, prev: 446 },
  { pid: 448, name: 'lucario', next: 449, prev: 447 },
  { pid: 449, name: 'hippopotas', next: 450, prev: 448 },
  { pid: 450, name: 'hippowdon', next: 451, prev: 449 },
  { pid: 451, name: 'skorupi', next: 452, prev: 450 },
  { pid: 452, name: 'drapion', next: 453, prev: 451 },
  { pid: 453, name: 'croagunk', next: 454, prev: 452 },
  { pid: 454, name: 'toxicroak', next: 455, prev: 453 },
  { pid: 455, name: 'carnivine', next: 456, prev: 454 },
  { pid: 456, name: 'finneon', next: 457, prev: 455 },
  { pid: 457, name: 'lumineon', next: 458, prev: 456 },
  { pid: 458, name: 'mantyke', next: 459, prev: 457 },
  { pid: 459, name: 'snover', next: 460, prev: 458 },
  { pid: 460, name: 'abomasnow', next: 461, prev: 459 },
  { pid: 461, name: 'weavile', next: 462, prev: 460 },
  { pid: 462, name: 'magnezone', next: 463, prev: 461 },
  { pid: 463, name: 'lickilicky', next: 464, prev: 462 },
  { pid: 464, name: 'rhyperior', next: 465, prev: 463 },
  { pid: 465, name: 'tangrowth', next: 466, prev: 464 },
  { pid: 466, name: 'electivire', next: 467, prev: 465 },
  { pid: 467, name: 'magmortar', next: 468, prev: 466 },
  { pid: 468, name: 'togekiss', next: 469, prev: 467 },
  { pid: 469, name: 'yanmega', next: 470, prev: 468 },
  { pid: 470, name: 'leafeon', next: 471, prev: 469 },
  { pid: 471, name: 'glaceon', next: 472, prev: 470 },
  { pid: 472, name: 'gliscor', next: 473, prev: 471 },
  { pid: 473, name: 'mamoswine', next: 474, prev: 472 },
  { pid: 474, name: 'porygon-z', next: 475, prev: 473 },
  { pid: 475, name: 'gallade', next: 476, prev: 474 },
  { pid: 476, name: 'probopass', next: 477, prev: 475 },
  { pid: 477, name: 'dusknoir', next: 478, prev: 476 },
  { pid: 478, name: 'froslass', next: 479, prev: 477 },
  { pid: 479, name: 'rotom', next: 480, prev: 478 },
  { pid: 480, name: 'uxie', next: 481, prev: 479 },
  { pid: 481, name: 'mesprit', next: 482, prev: 480 },
  { pid: 482, name: 'azelf', next: 483, prev: 481 },
  { pid: 483, name: 'dialga', next: 484, prev: 482 },
  { pid: 484, name: 'palkia', next: 485, prev: 483 },
  { pid: 485, name: 'heatran', next: 486, prev: 484 },
  { pid: 486, name: 'regigigas', next: 487, prev: 485 },
  { pid: 487, name: 'giratina', next: 488, prev: 486 },
  { pid: 488, name: 'cresselia', next: 489, prev: 487 },
  { pid: 489, name: 'phione', next: 490, prev: 488 },
  { pid: 490, name: 'manaphy', next: 491, prev: 489 },
  { pid: 491, name: 'darkrai', next: 492, prev: 490 },
  { pid: 492, name: 'shaymin', next: 493, prev: 491 },
  { pid: 493, name: 'arceus', next: 494, prev: 492 },
  { pid: 494, name: 'victini', next: 495, prev: 493 },
  { pid: 495, name: 'snivy', next: 496, prev: 494 },
  { pid: 496, name: 'servine', next: 497, prev: 495 },
  { pid: 497, name: 'serperior', next: 498, prev: 496 },
  { pid: 498, name: 'tepig', next: 499, prev: 497 },
  { pid: 499, name: 'pignite', next: 500, prev: 498 },
  { pid: 500, name: 'emboar', next: 501, prev: 499 },
  { pid: 501, name: 'oshawott', next: 502, prev: 500 },
  { pid: 502, name: 'dewott', next: 503, prev: 501 },
  { pid: 503, name: 'samurott', next: 504, prev: 502 },
  { pid: 504, name: 'patrat', next: 505, prev: 503 },
  { pid: 505, name: 'watchog', next: 506, prev: 504 },
  { pid: 506, name: 'lillipup', next: 507, prev: 505 },
  { pid: 507, name: 'herdier', next: 508, prev: 506 },
  { pid: 508, name: 'stoutland', next: 509, prev: 507 },
  { pid: 509, name: 'purrloin', next: 510, prev: 508 },
  { pid: 510, name: 'liepard', next: 511, prev: 509 },
  { pid: 511, name: 'pansage', next: 512, prev: 510 },
  { pid: 512, name: 'simisage', next: 513, prev: 511 },
  { pid: 513, name: 'pansear', next: 514, prev: 512 },
  { pid: 514, name: 'simisear', next: 515, prev: 513 },
  { pid: 515, name: 'panpour', next: 516, prev: 514 },
  { pid: 516, name: 'simipour', next: 517, prev: 515 },
  { pid: 517, name: 'munna', next: 518, prev: 516 },
  { pid: 518, name: 'musharna', next: 519, prev: 517 },
  { pid: 519, name: 'pidove', next: 520, prev: 518 },
  { pid: 520, name: 'tranquill', next: 521, prev: 519 },
  { pid: 521, name: 'unfezant', next: 522, prev: 520 },
  { pid: 522, name: 'blitzle', next: 523, prev: 521 },
  { pid: 523, name: 'zebstrika', next: 524, prev: 522 },
  { pid: 524, name: 'roggenrola', next: 525, prev: 523 },
  { pid: 525, name: 'boldore', next: 526, prev: 524 },
  { pid: 526, name: 'gigalith', next: 527, prev: 525 },
  { pid: 527, name: 'woobat', next: 528, prev: 526 },
  { pid: 528, name: 'swoobat', next: 529, prev: 527 },
  { pid: 529, name: 'drilbur', next: 530, prev: 528 },
  { pid: 530, name: 'excadrill', next: 531, prev: 529 },
  { pid: 531, name: 'audino', next: 532, prev: 530 },
  { pid: 532, name: 'timburr', next: 533, prev: 531 },
  { pid: 533, name: 'gurdurr', next: 534, prev: 532 },
  { pid: 534, name: 'conkeldurr', next: 535, prev: 533 },
  { pid: 535, name: 'tympole', next: 536, prev: 534 },
  { pid: 536, name: 'palpitoad', next: 537, prev: 535 },
  { pid: 537, name: 'seismitoad', next: 538, prev: 536 },
  { pid: 538, name: 'throh', next: 539, prev: 537 },
  { pid: 539, name: 'sawk', next: 540, prev: 538 },
  { pid: 540, name: 'sewaddle', next: 541, prev: 539 },
  { pid: 541, name: 'swadloon', next: 542, prev: 540 },
  { pid: 542, name: 'leavanny', next: 543, prev: 541 },
  { pid: 543, name: 'venipede', next: 544, prev: 542 },
  { pid: 544, name: 'whirlipede', next: 545, prev: 543 },
  { pid: 545, name: 'scolipede', next: 546, prev: 544 },
  { pid: 546, name: 'cottonee', next: 547, prev: 545 },
  { pid: 547, name: 'whimsicott', next: 548, prev: 546 },
  { pid: 548, name: 'petilil', next: 549, prev: 547 },
  { pid: 549, name: 'lilligant', next: 550, prev: 548 },
  { pid: 550, name: 'basculin', next: 551, prev: 549 },
  { pid: 551, name: 'sandile', next: 552, prev: 550 },
  { pid: 552, name: 'krokorok', next: 553, prev: 551 },
  { pid: 553, name: 'krookodile', next: 554, prev: 552 },
  { pid: 554, name: 'darumaka', next: 555, prev: 553 },
  { pid: 555, name: 'darmanitan', next: 556, prev: 554 },
  { pid: 556, name: 'maractus', next: 557, prev: 555 },
  { pid: 557, name: 'dwebble', next: 558, prev: 556 },
  { pid: 558, name: 'crustle', next: 559, prev: 557 },
  { pid: 559, name: 'scraggy', next: 560, prev: 558 },
  { pid: 560, name: 'scrafty', next: 561, prev: 559 },
  { pid: 561, name: 'sigilyph', next: 562, prev: 560 },
  { pid: 562, name: 'yamask', next: 563, prev: 561 },
  { pid: 563, name: 'cofagrigus', next: 564, prev: 562 },
  { pid: 564, name: 'tirtouga', next: 565, prev: 563 },
  { pid: 565, name: 'carracosta', next: 566, prev: 564 },
  { pid: 566, name: 'archen', next: 567, prev: 565 },
  { pid: 567, name: 'archeops', next: 568, prev: 566 },
  { pid: 568, name: 'trubbish', next: 569, prev: 567 },
  { pid: 569, name: 'garbodor', next: 570, prev: 568 },
  { pid: 570, name: 'zorua', next: 571, prev: 569 },
  { pid: 571, name: 'zoroark', next: 572, prev: 570 },
  { pid: 572, name: 'minccino', next: 573, prev: 571 },
  { pid: 573, name: 'cinccino', next: 574, prev: 572 },
  { pid: 574, name: 'gothita', next: 575, prev: 573 },
  { pid: 575, name: 'gothorita', next: 576, prev: 574 },
  { pid: 576, name: 'gothitelle', next: 577, prev: 575 },
  { pid: 577, name: 'solosis', next: 578, prev: 576 },
  { pid: 578, name: 'duosion', next: 579, prev: 577 },
  { pid: 579, name: 'reuniclus', next: 580, prev: 578 },
  { pid: 580, name: 'ducklett', next: 581, prev: 579 },
  { pid: 581, name: 'swanna', next: 582, prev: 580 },
  { pid: 582, name: 'vanillite', next: 583, prev: 581 },
  { pid: 583, name: 'vanillish', next: 584, prev: 582 },
  { pid: 584, name: 'vanilluxe', next: 585, prev: 583 },
  { pid: 585, name: 'deerling', next: 586, prev: 584 },
  { pid: 586, name: 'sawsbuck', next: 587, prev: 585 },
  { pid: 587, name: 'emolga', next: 588, prev: 586 },
  { pid: 588, name: 'karrablast', next: 589, prev: 587 },
  { pid: 589, name: 'escavalier', next: 590, prev: 588 },
  { pid: 590, name: 'foongus', next: 591, prev: 589 },
  { pid: 591, name: 'amoonguss', next: 592, prev: 590 },
  { pid: 592, name: 'frillish', next: 593, prev: 591 },
  { pid: 593, name: 'jellicent', next: 594, prev: 592 },
  { pid: 594, name: 'alomomola', next: 595, prev: 593 },
  { pid: 595, name: 'joltik', next: 596, prev: 594 },
  { pid: 596, name: 'galvantula', next: 597, prev: 595 },
  { pid: 597, name: 'ferroseed', next: 598, prev: 596 },
  { pid: 598, name: 'ferrothorn', next: 599, prev: 597 },
  { pid: 599, name: 'klink', next: 600, prev: 598 },
  { pid: 600, name: 'klang', next: 601, prev: 599 },
  { pid: 601, name: 'klinklang', next: 602, prev: 600 },
  { pid: 602, name: 'tynamo', next: 603, prev: 601 },
  { pid: 603, name: 'eelektrik', next: 604, prev: 602 },
  { pid: 604, name: 'eelektross', next: 605, prev: 603 },
  { pid: 605, name: 'elgyem', next: 606, prev: 604 },
  { pid: 606, name: 'beheeyem', next: 607, prev: 605 },
  { pid: 607, name: 'litwick', next: 608, prev: 606 },
  { pid: 608, name: 'lampent', next: 609, prev: 607 },
  { pid: 609, name: 'chandelure', next: 610, prev: 608 },
  { pid: 610, name: 'axew', next: 611, prev: 609 },
  { pid: 611, name: 'fraxure', next: 612, prev: 610 },
  { pid: 612, name: 'haxorus', next: 613, prev: 611 },
  { pid: 613, name: 'cubchoo', next: 614, prev: 612 },
  { pid: 614, name: 'beartic', next: 615, prev: 613 },
  { pid: 615, name: 'cryogonal', next: 616, prev: 614 },
  { pid: 616, name: 'shelmet', next: 617, prev: 615 },
  { pid: 617, name: 'accelgor', next: 618, prev: 616 },
  { pid: 618, name: 'stunfisk', next: 619, prev: 617 },
  { pid: 619, name: 'mienfoo', next: 620, prev: 618 },
  { pid: 620, name: 'mienshao', next: 621, prev: 619 },
  { pid: 621, name: 'druddigon', next: 622, prev: 620 },
  { pid: 622, name: 'golett', next: 623, prev: 621 },
  { pid: 623, name: 'golurk', next: 624, prev: 622 },
  { pid: 624, name: 'pawniard', next: 625, prev: 623 },
  { pid: 625, name: 'bisharp', next: 626, prev: 624 },
  { pid: 626, name: 'bouffalant', next: 627, prev: 625 },
  { pid: 627, name: 'rufflet', next: 628, prev: 626 },
  { pid: 628, name: 'braviary', next: 629, prev: 627 },
  { pid: 629, name: 'vullaby', next: 630, prev: 628 },
  { pid: 630, name: 'mandibuzz', next: 631, prev: 629 },
  { pid: 631, name: 'heatmor', next: 632, prev: 630 },
  { pid: 632, name: 'durant', next: 633, prev: 631 },
  { pid: 633, name: 'deino', next: 634, prev: 632 },
  { pid: 634, name: 'zweilous', next: 635, prev: 633 },
  { pid: 635, name: 'hydreigon', next: 636, prev: 634 },
  { pid: 636, name: 'larvesta', next: 637, prev: 635 },
  { pid: 637, name: 'volcarona', next: 638, prev: 636 },
  { pid: 638, name: 'cobalion', next: 639, prev: 637 },
  { pid: 639, name: 'terrakion', next: 640, prev: 638 },
  { pid: 640, name: 'virizion', next: 641, prev: 639 },
  { pid: 641, name: 'tornadus', next: 642, prev: 640 },
  { pid: 642, name: 'thundurus', next: 643, prev: 641 },
  { pid: 643, name: 'reshiram', next: 644, prev: 642 },
  { pid: 644, name: 'zekrom', next: 645, prev: 643 },
  { pid: 645, name: 'landorus', next: 646, prev: 644 },
  { pid: 646, name: 'kyurem', next: 647, prev: 645 },
  { pid: 647, name: 'keldeo', next: 648, prev: 646 },
  { pid: 648, name: 'meloetta', next: 649, prev: 647 },
  { pid: 649, name: 'genesect', next: 650, prev: 648 },
  { pid: 650, name: 'chespin', next: 651, prev: 649 },
  { pid: 651, name: 'quilladin', next: 652, prev: 650 },
  { pid: 652, name: 'chesnaught', next: 653, prev: 651 },
  { pid: 653, name: 'fennekin', next: 654, prev: 652 },
  { pid: 654, name: 'braixen', next: 655, prev: 653 },
  { pid: 655, name: 'delphox', next: 656, prev: 654 },
  { pid: 656, name: 'froakie', next: 657, prev: 655 },
  { pid: 657, name: 'frogadier', next: 658, prev: 656 },
  { pid: 658, name: 'greninja', next: 659, prev: 657 },
  { pid: 659, name: 'bunnelby', next: 660, prev: 658 },
  { pid: 660, name: 'diggersby', next: 661, prev: 659 },
  { pid: 661, name: 'fletchling', next: 662, prev: 660 },
  { pid: 662, name: 'fletchinder', next: 663, prev: 661 },
  { pid: 663, name: 'talonflame', next: 664, prev: 662 },
  { pid: 664, name: 'scatterbug', next: 665, prev: 663 },
  { pid: 665, name: 'spewpa', next: 666, prev: 664 },
  { pid: 666, name: 'vivillon', next: 667, prev: 665 },
  { pid: 667, name: 'litleo', next: 668, prev: 666 },
  { pid: 668, name: 'pyroar', next: 669, prev: 667 },
  { pid: 669, name: 'flabebe', next: 670, prev: 668 },
  { pid: 670, name: 'floette', next: 671, prev: 669 },
  { pid: 671, name: 'florges', next: 672, prev: 670 },
  { pid: 672, name: 'skiddo', next: 673, prev: 671 },
  { pid: 673, name: 'gogoat', next: 674, prev: 672 },
  { pid: 674, name: 'pancham', next: 675, prev: 673 },
  { pid: 675, name: 'pangoro', next: 676, prev: 674 },
  { pid: 676, name: 'furfrou', next: 677, prev: 675 },
  { pid: 677, name: 'espurr', next: 678, prev: 676 },
  { pid: 678, name: 'meowstic', next: 679, prev: 677 },
  { pid: 679, name: 'honedge', next: 680, prev: 678 },
  { pid: 680, name: 'doublade', next: 681, prev: 679 },
  { pid: 681, name: 'aegislash', next: 682, prev: 680 },
  { pid: 682, name: 'spritzee', next: 683, prev: 681 },
  { pid: 683, name: 'aromatisse', next: 684, prev: 682 },
  { pid: 684, name: 'swirlix', next: 685, prev: 683 },
  { pid: 685, name: 'slurpuff', next: 686, prev: 684 },
  { pid: 686, name: 'inkay', next: 687, prev: 685 },
  { pid: 687, name: 'malamar', next: 688, prev: 686 },
  { pid: 688, name: 'binacle', next: 689, prev: 687 },
  { pid: 689, name: 'barbaracle', next: 690, prev: 688 },
  { pid: 690, name: 'skrelp', next: 691, prev: 689 },
  { pid: 691, name: 'dragalge', next: 692, prev: 690 },
  { pid: 692, name: 'clauncher', next: 693, prev: 691 },
  { pid: 693, name: 'clawitzer', next: 694, prev: 692 },
  { pid: 694, name: 'helioptile', next: 695, prev: 693 },
  { pid: 695, name: 'heliolisk', next: 696, prev: 694 },
  { pid: 696, name: 'tyrunt', next: 697, prev: 695 },
  { pid: 697, name: 'tyrantrum', next: 698, prev: 696 },
  { pid: 698, name: 'amaura', next: 699, prev: 697 },
  { pid: 699, name: 'aurorus', next: 700, prev: 698 },
  { pid: 700, name: 'sylveon', next: 701, prev: 699 },
  { pid: 701, name: 'hawlucha', next: 702, prev: 700 },
  { pid: 702, name: 'dedenne', next: 703, prev: 701 },
  { pid: 703, name: 'carbink', next: 704, prev: 702 },
  { pid: 704, name: 'goomy', next: 705, prev: 703 },
  { pid: 705, name: 'sliggoo', next: 706, prev: 704 },
  { pid: 706, name: 'goodra', next: 707, prev: 705 },
  { pid: 707, name: 'klefki', next: 708, prev: 706 },
  { pid: 708, name: 'phantump', next: 709, prev: 707 },
  { pid: 709, name: 'trevenant', next: 710, prev: 708 },
  { pid: 710, name: 'pumpkaboo', next: 711, prev: 709 },
  { pid: 711, name: 'gourgeist', next: 712, prev: 710 },
  { pid: 712, name: 'bergmite', next: 713, prev: 711 },
  { pid: 713, name: 'avalugg', next: 714, prev: 712 },
  { pid: 714, name: 'noibat', next: 715, prev: 713 },
  { pid: 715, name: 'noivern', next: 716, prev: 714 },
  { pid: 716, name: 'xerneas', next: 717, prev: 715 },
  { pid: 717, name: 'yveltal', next: 718, prev: 716 },
  { pid: 718, name: 'zygarde', next: 719, prev: 717 },
  { pid: 719, name: 'diancie', next: 720, prev: 718 },
  { pid: 720, name: 'hoopa', next: 1, prev: 719 }
];

export {pokedex};