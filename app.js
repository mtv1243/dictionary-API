// let apiUrl = 'https://www.dictionaryapi.com/api/v3/references/collegiate/json/voluminous?key=';
// let apiKeyDict = '0f59b5e1-83a9-44dc-a6fe-53ad611a0d90';
// let apiKeyThes = 'e43253c7-697d-4e7a-899e-c8d06e7e214f';
//
// let response = fetch('https://www.dictionaryapi.com/api/v3/references/collegiate/json/voluminous?key=0f59b5e1-83a9-44dc-a6fe-53ad611a0d90');
//
// let myJson = response.json();
// console.log(JSON.stringify(myJson));

let wordInputEl = document.querySelector('#word-input');
let searchBtn = document.querySelector('#search-btn');
let wordEl = document.querySelector('#word');
let partOfSpeechEl = document.querySelector('.part-of-speech');
let definitionsEl = document.querySelector('#definitions');
let word = 'definition';
let apiKey = '0f59b5e1-83a9-44dc-a6fe-53ad611a0d90';

searchBtn.addEventListener('click', ()=>{
  definitionsEl.innerHTML = '';
  word = wordInputEl.value;
  wordEl.innerHTML = word;
  fetchWordDef();
  // console.log('the word is ' + word);
})

function fetchWordDef(){

 fetch('https://www.dictionaryapi.com/api/v3/references/collegiate/json/' + word + '?key=' + apiKey)
  .then((resp)=>{
     //arrow function converts the fetch into JSON
      return resp.json();

    }).then((res)=>{
    //get number of definitions
    let numOfDefs = res.length;
    for (let i=0; i<numOfDefs; i++){
      let defI = res[i];
      let defText; //= defI.def[0].sseq[0][0][1].dt[0][1];

      let partOfSpeech = defI.fl;

      let partOfSpeechEl = document.createElement('span');
      partOfSpeechEl.classList.add('part-of-speech')
      partOfSpeechEl.innerHTML = partOfSpeech;
      definitionsEl.append(partOfSpeechEl);
      console.log('the word is ' + word);

      for(let j=0; j<defI.shortdef.length; j++){
        let defTextEl = document.createElement('p');
        defTextEl.classList.add('shortdef');
        defText = defI.shortdef[j];
        defTextEl.innerHTML = defText;
        definitionsEl.append(defTextEl);
        console.log('definition is ' + defText);
      }

    }
  console.log(res);

    })
};

fetchWordDef();
// console.log(response);
