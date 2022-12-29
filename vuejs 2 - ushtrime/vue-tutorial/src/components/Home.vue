<template>
    <div class="home">
        <section class="hero">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">{{heading}}</h1>
                    <div class="is-two-thirds comlumn is-paddingless">
                        <h2 class="subtitle is-4">{{subheading}}</h2>
                    </div>
                    <a class="button is-large is-primary" id="learn">Learn More</a>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <div class="columns pd is-desktop">
                    <div class="column is-1 has-text-centered">
                        <i class="fa fa-cog is-primary"></i>
                    </div>
                    <div class="column is-one-third-desktop">
                        <p class="title"><strong>We provide smth</strong></p>
                    </div>
                    <div class="column">
                        <p>some text</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default{
    name: 'home'
}
</script>

<style lang="sass" scoped>
@import '../mq.sass'
</style>
