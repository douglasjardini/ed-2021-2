var mes = []

var inicial = []
var final = []

var media1 = [35, 36.5, 40, 39, 27]
var media2 = [34, 31, 23, 34, 22]
var media3 = [28, 41, 29, 26.3, 24.7]
var media4 = [33.2, 34, 41.5, 28, 27]

inicial = [media1, media2]
final = [media3, media4]

mes = [inicial, final]

for(var x = 0; x < mes.length; x++)
{
    for(var y = 0; y < mes[x].length; y++)
    {
        for(var z = 0; z < mes[x][y].length; z++)
        {
            console.log(mes[x][y][z])
        }
    }
}