![banner](/images/keyboard.png)
# Control panel - Stijn Zwaard
### CSS MIDI PLAYER
[eindresultaat](https://stijncss.github.io/cssToTheRescueSZ/)

## Concept
Ik ga een midi player maken gebasseerd op het merk AKAI. Een midi player heeft veel knopjes en verschillende soorten inputs. Joystick, piano keys, drum pads en draai nobs. Ik wil elke week focussen op een ander gebied van de midi player. [foto van mijn concept](https://imgur.com/a/LV6PVqo)

## challenges
### Responsiveness ✅ ✅
Op desktop wordt de midiplayer gedisplayed in het formaat met 2 octaven. Voor mobiel wil ik een mini player maken met 1 octaaf en als het op een gigantisch display wordt bekeken wil ik 4 octaven. Mobiele variant wordt ook geforceerd om op landscape bekeken te worden.
### experimentjes ✅ ✅ ✅
Ik wil kijken of ik de piano toetsen in 1 div kan maken met 2 verschillende gradients.
### SVG animatie 🅾️
De midi player heeft een kleine display waar ik een animatie in wil zetten die gemanipuleerd kan worden met SVG filters en het veranderen van CSS variabelen.
### Custom Midi player ✅
De midi player krijgt een skin die je met knoppen aan kan passen. Denk aan kleur maar als ik tijd over heb wil ook een gekke vormen maken van de midi player
### Typografie ✅
Ik wil dat de typografie beweegt doormiddel van een interessante variabele font

### progress

# Week 2
## 3 maart
Ik ben van plan om elk segment van de MIDI controller los te maken in codepen's voordat ik ze tot één geheel ga samenmaken  
[Joystick](https://codepen.io/stijn_ux/pen/raNyjMN)  
[Drumpad](https://codepen.io/stijn_ux/pen/EaxWGzR)  
[Piano](https://codepen.io/stijn_ux/pen/PwopYqG)  
[gridtestje](https://codepen.io/stijn_ux/pen/PwopmvJ)  
## 4 maart Typografie experiment
4 maart heb stond echt in het thema van tekst animeren. Ik heb gestoeid met variabele fonts en ngo veel meer!
animation die ik gemaakt heb tijdens de workshops van Roel  
[Scary_Movie](https://codepen.io/stijn_ux/pen/xbxqMOm)  
[baby_Driver](https://codepen.io/stijn_ux/pen/RNwpzBQ)  
[li li li li li li li](https://codepen.io/stijn_ux/pen/XJWMOww)  
Ik heb nog een dag gekeken hoe ver ik variabele fonts kan animeren  
**[Final](https://codepen.io/stijn_ux/pen/pvoeXEG)** !epeleptie waarschuwing!

### Gefaalde typografie experimenten
[rainbow text](https://codepen.io/stijn_ux/pen/MYWpdyQ)  
[retro bounce](https://codepen.io/stijn_ux/pen/mydWYzr)  

# Layout experimenten
## grid area
Ik heb een layout gemaakt met grid(area) Dit werkt goed en is visueel chill alleen kreeg ik problemen met responsiveness. Ik heb niet eens geprobeerd om het met content te vullen.  
- voordelen
    -overzichtelijk
- nadelen
    - Responsiveness issues  
[layout00](https://codepen.io/stijn_ux/pen/XJWaxbp) oefenen met selectors  
[layout01](https://codepen.io/stijn_ux/pen/LEYjMxR) grid area clean  
[layout02](https://codepen.io/stijn_ux/pen/MYWrEKd) grid area  
[container queries](https://codepen.io/stijn_ux/pen/YPzxOZQ)  
  
### Workshops week 3
[workshop-flexbox-pro-Nils-01](https://codepen.io/stijn_ux/pen/OPJxRvE)  
[workshop-flexbox-pro-Nils-02](https://codepen.io/stijn_ux/pen/pvoWEGM)  
[eigen-flexbox-experiment](https://codepen.io/stijn_ux/pen/mydBqZO)  

## Pianokeys Calc & Round
Nils heeft mij geleerd om Round te gebruiken om per octaaf te resizen in plaats van per key. Dit zorgt ervoor dat ik geen lelijke halve toetsen in beeld krijg. Round is niet zo ingewikkeld maar ik heb wel veel moeite gehad om het perfect te krijgen dit kwam door externe factoren zoals box-sizing en padding op de parent.

### Interacties
## Joystick
Met de joystick gebruik ik :has om de achtergrond kleur aan te passen en een andere complexe has seelector om een transform op de 5e li item te gebruiken

Ik gebruik een tran
## Keys
De keys hebben voor nu alleen een kleurrijke hover state en kleine animatie 
De keys moeten 'geluid' maken ik wil een :after toeveogen op elke toets die een animatie heeft van een muziek nootje die in beeld komt boven de toets die je indrukt. 
## Drumpad
De drumpad gebruikt :has om de variabelen aan te passen die de kleur en radius aanpassen van de controller `html:has(input#tom:checked)`
## Kabel
De kabel heb ik met de JS gelinked aan de S van HSL. Dit moet aan ene uit symbolizeren. Geen kleur is uit en kleur is aan. De kabel blijft kleurrijk om de gebruiker een hint te geven dat je daar moet beginnen

# Reflectie
## Nieuwe code
Werken met veel Variabelen `--cable-color:#e90c0c;  --gradient-percent: 50%;`  
variabele fonts property's `font-variation-settings: 'wght' 50;`  
Calc & Round `--controller-width: round(down, 90vw, calc( (var(--piano-width) ) ) )`  
:Has `html:has(input#tom:checked)`  
Display Grid `  display: grid; grid-area fractions`  
Complexe Flexbox begrippen `flex basis Flex-grow & flex-shrink`  
CSS Nesting `&:hover`  
Meest verwarrende selector ` section:nth-of-type(1) > div:first-of-type ul:first-of-type:has (li:nth-child(6):hover) li:nth-child(5)`  
animatie origin `transform-origin:center;`  
psuedo elementen `;:before ::after`  
@media queries `@media (width > 653px)`  
pointer events `pointer-events:none;`  

## Conclusie
Ik ben erg blij met mijn eindresultaat ik heb heel veel nieuwe CSS truckjes gebruikt. Geen classes gebruiken is goed te doen alleen niet heel overzichtelijk.  
Ik ben het meest trots op de responsiveness, dat het per octaaf scaled is een klein detail dat het voor mij compleet maakt.  Ik heb ook geleerd dat ik mijn eerste concept te complex heb gemaakt waardoor ik een heel ander eindproduct heb dan ik eerst in gedacht had. Mijn eindproduct is een stuk simpeler met minder controls, ik ben wel tevreden met deze versie. Bij mijn volgende project wil ik eerst wat simpeler beginnen en het dan uitbreiden in plaats vna complex beginnen en dan het simpeler moeten maken omdat het te complex is.

### Dingen die Sanne zei dat beter waren maar ik zei dat ik ze niet ging aanpassen maar toch heb aangepast
heel veel divjes > ul + li
background > background-color 
desktop beginnen en min + max width gebruiken > mobile first alleen width > gebruiken  
### Bronnen
[Css Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)  
 [Calc codepen Nils](https://codepen.io/enbee81/pen/zxYEwKZ?editors=1100)  
 [Joystick Chris](https://codepen.io/Christian199815/pen/YPzZpeq?editors=1100)  
 [only JS allowed](https://codepen.io/shooft/pen/LYaexbj)
 CHATgpt voor debugging en kleuren styles aanmaken