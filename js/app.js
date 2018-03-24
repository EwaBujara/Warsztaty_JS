'use strict';
document.addEventListener('DOMContentLoaded', function() 
    {
    var dropdown = document.querySelector('.for-dropdown');
    
    var dropdownMenu = document.querySelector('.dropdown');
    
    dropdownMenu.style.display='none';
    
    dropdown.addEventListener('mouseover', function(){dropdownMenu.style.display = 'block'});
    
    dropdown.addEventListener('mouseout', function(){dropdownMenu.style.display = 'none'});
    
    });


/*console.log("Hello world!");
var name = 'Ewa';
var nameTable = ['Wiktor', 'Maria', 'Teresa'];

console.log(nameTable[1]);

nameTable.unshift('Ewa');
console.log(nameTable[1]);

nameTable.push('Elunia')
console.log(nameTable[nameTable.length-1])
var a = 5;
var b = 3;

function compare(number, number)
    {
        if (a>b)
            {
            console.log('Hurra!')
            }
        else
            {
            console.log('Buuuu!')
            }
    };

function cout()
{
    for (var i = 0; i<=(nameTable.length-1); i++)
        {
            console.log(nameTable[i])
        }
};*/


