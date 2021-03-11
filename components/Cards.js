Vue.component('Cards', {
    props: ['titulo', 'imglogo','url'],
template:
`
<div>
                <div class="container-card">
                    <img class="fm-item container-card__img" :src="imglogo">
                    <h3 class="fm-item container-card__h3">{{titulo}}</h3>    
                    <a v-bind:href="url" target="_blank" class="fm-item container-card__btn">Entrar</a>
                </div>
</div>

`

})