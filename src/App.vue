<template>
  <div id="app">
    <!-- <button-secondary /> -->
    <headline-1 />
    <headline-2 />
    <headline-3 />
    <headline-4 />
    <headline-5 />
    <headline-6 />
    <subtitle-1 /><br>
    <subtitle-2 />
    <body-1 />
    <body-2 />
    <text-button />
    <text-caption />
  </div>
</template>

<script>
// import ButtonSecondary from './design-system/atomos/botao/ButtonSecondary.vue'
import Headline1 from './design-system/atomos/estilosTexto/cabecalhos/Headline1.vue'
import Headline2 from './design-system/atomos/estilosTexto/cabecalhos/Headline2.vue'
import Headline3 from './design-system/atomos/estilosTexto/cabecalhos/Headline3.vue'
import Headline4 from './design-system/atomos/estilosTexto/cabecalhos/Headline4.vue'
import Headline5 from './design-system/atomos/estilosTexto/cabecalhos/Headline5.vue'
import Headline6 from './design-system/atomos/estilosTexto/cabecalhos/Headline6.vue'
import Subtitle1 from './design-system/atomos/estilosTexto/cabecalhos/Subtitle1.vue'
import Subtitle2 from './design-system/atomos/estilosTexto/cabecalhos/Subtitle2.vue'
import Body1 from './design-system/atomos/estilosTexto/corpo/Body1.vue'
import Body2 from './design-system/atomos/estilosTexto/corpo/Body2.vue'
import TextButton from './design-system/atomos/estilosTexto/corpo/Button.vue'
import TextCaption from './design-system/atomos/estilosTexto/corpo/Caption.vue'

export default {
  name: 'App',
  components: {
    // ButtonSecondary,
    Headline1,
    Headline2,
    Headline3,
    Headline4,
    Headline5,
    Headline6,
    Subtitle1,
    Subtitle2,
    Body1,
    Body2,
    TextButton,
    TextCaption
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
html {
  font-size: 16px;
}
body {
  font-family: 'Roboto', sans-serif;
  color: #000000;
}
</style>

