  const touchOne = document.getElementById('click1');
  const touchTwo = document.getElementById('click2');
  const episodeListOne = document.getElementById('episodeList1');
  const episodeListTwo=document.getElementById('episodeList2');


  touchOne.addEventListener('click', () => {
    const display = episodeListOne.style.display;

    episodeListOne.style.display = display === 'block' ? 'none' : 'block'

  })

touchTwo.addEventListener('click',function(){
  const display=episodeListTwo.style.display;
  episodeListTwo.style.display=display==='block' ? 'none': 'block';
})
