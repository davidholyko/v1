const store = require('../store')

const setupAbout = () => {
  console.log('setupAbout')
  store.about =

`<div><h3 class="pb-3 preserve"><span class="mx-4"></span>I started my programming journey with an intro Java class in college. I thought that the idea of programming to solve problems was really cool. A few years later while trying to become a professional video gamer for a MOBA called <a href="https://www.smitegame.com/" target="_blank">Smite</a>, I had came across a problem that I knew programming knowledge would help handle.

<span class="mx-4"></span>The problem involved solving pick and bans. My idea was to create a web application that can measure a team's performance based on character's traits such as damage output, crowd control, sustain, siege performance and so on. The result of this project would help us decide our playstyle and game plan for that specific match.

<span class="mx-4"></span>The result of embarking on this project was a discovery for my passion for problem solving, collaborating with others for newer ideas, and continuous learning to become a better programmer.
</h3></div>`
}
module.exports = setupAbout
