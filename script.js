const imagesDiv = document.getElementById("images");
let id = (Math.random() * 6 + 1) * 10000;
id = Math.floor(id);

console.log("images");
const i = document.createElement("img");
const fakeimages= "https://thispersondoesnotexist.com/";
const realimages= `https://whichfaceisreal.blob.core.windows.net/public/realimages/${id}.jpeg`;
const result = document.getElementById('result')
const again = document.createElement("button")
again.innerText='play again'
again.onclick = function(){
location.reload()
}

const rnd = Math.random()>0.5
const arr=[rnd,!rnd]

for (const x of arr)
{
const i1=document.createElement("img")
i1.src=(x ? realimages:fakeimages)
imagesDiv.append(i1);
i1.onclick = function()
{
    
    result.innerText = x?'correct':'not correct'
    imagesDiv.style.pointerEvents = 'none'
    result.append(again)
}
}

