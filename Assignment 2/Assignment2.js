let max = 30;
let min = 10;
let ran = Math.random() * (max - min) + min;


let n = Math.floor(ran);
let original = [];

for(let i = 0; i < n; i++)
{
    const obj = {name: "natureProduct_"+i, value: + i};
    original.push(obj);
}

let myNamedProducts = [];

for(let i = 0; i < 5; i++)
{
    const obj = {name: "Ashammeet_"+i, value: + i};
    myNamedProducts.push(obj);
}

function addToOriginalArray(arr)
{
    let myAndOriginal = [];
    for(let i = 0; i < arr.length; i++)
    {
        myAndOriginal[i] = arr[i];
    }

    for(let i = 5; i < original.length + 5; i++)
    {
        let j = 0;
        const obj = {name: "natureProduct_"+i, value: + i};
        myAndOriginal[i] = obj;
        j++;
    }
    return myAndOriginal;
}

let myAndOriginal = addToOriginalArray(myNamedProducts);

console.log(myAndOriginal);

function suggestRandomItem(myAndOriginalArray)
{
    let max = myAndOriginalArray.length - 1;
    let min = 0;
    let ran = Math.random() * (max - min) + min;

    let prod = myAndOriginalArray[Math.floor(ran)];
    let s = prod.name;
    let substring = "Ashammeet_";
    console.log(s);
    if(s.indexOf(substring) !== -1)
    {
    return "Yes, the random suggested item includes my name.";
    }

    return "No, the random suggested item DOES NOT include my name.";
}

console.log(suggestRandomItem(myAndOriginal));

max = myAndOriginal.length - 1;
min = 0;
ran = Math.random() * (max - min) + min;
ran = Math.floor(ran);

function generateFactors(arr, rnd)
{
    let n = arr.length;
    let array_Factors = [];
    for(let i = 1; i < n; i++)
    {
        if(rnd % i === 0)
        {
            array_Factors.push(arr[i]);
        }
    }
    return array_Factors;
}

console.log(generateFactors(myAndOriginal, ran));