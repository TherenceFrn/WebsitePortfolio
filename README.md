# Portfolio Thérence FERRON
## Liste de tâches à faire
<!-- - [ ] responsive
- [ ] grid
- [ ] menu qui s'affiche en fixed pour ne pas reset la pos
- [ ] refaire le détecteur de scroll du SVG
- [ ] svg qui bouge -->
- [x] Faire une app Express
- [ ] Faire le SVG
- [ ] Page portfolio => texte des card en bleu
- [ ] Animation a l'apparition du menu
- [ ] Animation lorsqu'on survole une card du portfolio

## SVG

## HTML
<div class="circle" style="position: relative">
	<svg class="circle__svg" style="position: absolute" viewBox="0 0 165 165" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M165 82.5C165 120.167 152.104 149.886 117.5 159.5C110.499 161.445 90.6208 164.5 83 164.5C69.2867 164.5 49.3596 162.951 38 157C20.1467 147.647 9.07682 134.591 1.99999 115.5C-1.2906 106.623 1.00001 92.5215 1.00001 82.5C1.00001 65.451 2.59514 44.1172 11.5 31C26.2492 9.27383 54.7617 0.5 83 0.5C102.972 0.5 126.277 13.633 140.5 25.5C158.528 40.5417 165 57.1848 165 82.5Z" fill="#d3c3f7"></path>
	</svg>
	<svg class="circle__svg--two" style="position: absolute" viewBox="0 0 165 165" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M165 82.5C165 120.167 152.104 149.886 117.5 159.5C110.499 161.445 90.6208 164.5 83 164.5C69.2867 164.5 49.3596 162.951 38 157C20.1467 147.647 9.07682 134.591 1.99999 115.5C-1.2906 106.623 1.00001 92.5215 1.00001 82.5C1.00001 65.451 2.59514 44.1172 11.5 31C26.2492 9.27383 54.7617 0.5 83 0.5C102.972 0.5 126.277 13.633 140.5 25.5C158.528 40.5417 165 57.1848 165 82.5Z" fill="#d3c3f7"></path>
	</svg>
	<svg class="circle__svg--three" style="position: absolute" viewBox="0 0 165 165" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M165 82.5C165 120.167 152.104 149.886 117.5 159.5C110.499 161.445 90.6208 164.5 83 164.5C69.2867 164.5 49.3596 162.951 38 157C20.1467 147.647 9.07682 134.591 1.99999 115.5C-1.2906 106.623 1.00001 92.5215 1.00001 82.5C1.00001 65.451 2.59514 44.1172 11.5 31C26.2492 9.27383 54.7617 0.5 83 0.5C102.972 0.5 126.277 13.633 140.5 25.5C158.528 40.5417 165 57.1848 165 82.5Z" fill="#d3c3f7"></path>
	</svg>
</div>

## KEYFRAME

0% {
    transform: rotate(0) scale(1);
}
50% {
    transform: rotate(180deg) scale(1.5);
}
100% {
    transform: rotate(360deg) scale(1);
}

## CSS 
.circle__svg {
    animation: spinnAnim 7s infinite linear;
}

.circle__svg--two {
    animation: spinnAnim 6s infinite linear;
}

.circle__svg--three {
    animation: spinnAnim 5s infinite linear .2s;