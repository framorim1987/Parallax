# Parallax 
 Uma página web inspirada no vídeo *Javascript Mousemove Parallax Glassmorphism* do canal (https://www.youtube.com/channel/UCbwXnUipZsLfUckBPsC7Jog)[online tutorials] no YouTube.

 Link para a página https://framorim1987.github.io/Parallax/
 
 Link para o vídeo inspiração https://www.youtube.com/watch?v=-BexUIbuRp8

## Explicação do código
 A posição do mouse foi gravada em uma váriável css que é usada para alterar a posição das imagens e do texto na página. O código foi aplicado no evento Mousemove, gerando o efeito parallax.

### Exemplo do código Javascript
 ```
 const pos = document.documentElement;
 pos.addEventListener('mousemove', e => {
    pos.style.setProperty('--x', e.clientX + 'px');
    pos.style.setProperty('--y', e.clientY + 'px');
 });
 ```

 ### Exemplo do código CSS
```
 background-position: calc(var(--x)/-20) calc(var(--y)/-20);
 transform: translate(calc(var(--x)/-5),calc(var(--y)/-5));
 ```