//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");
const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },

];


btn.addEventListener('click', ()=>{
	const h1 = document.createElement('h1');
	h1.innerText = 'loading please wait...'
	output.append(h1)
	fillWithImg();
})

function fillWithImg(){
	Promise.all(images)
	.then((arr)=>{
		output.innerText = ''
		arr.forEach((img)=>{
			const imgEl = document.createElement('img');
			imgEl.src = img.url;
			output.append(imgEl);
		})
	})
}