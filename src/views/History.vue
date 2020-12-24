<template>
    <div class="wrapper-his">
        <header class="navbar navbar-light bg-light">
            <a class="navbar-brand">History</a>
        </header>
        <Nav/>
        <main>
            <div class="report">
                <img src="https://user-images.githubusercontent.com/34501764/102009671-9bd2a380-3d6b-11eb-9536-f09be6dc3339.png" alt="">
                <img src="https://user-images.githubusercontent.com/34501764/102009673-9d03d080-3d6b-11eb-8a55-c98932fd0b27.png" alt="">
                <img src="https://user-images.githubusercontent.com/34501764/102009674-9d03d080-3d6b-11eb-8db0-287c27d537e3.png" alt="">
            </div>
            <img class="graph" width="800px" src="https://user-images.githubusercontent.com/34501764/102009670-99704980-3d6b-11eb-8652-a46291d63042.png" alt="">
        </main>
    </div>
  
</template>

<script>
import Nav from '../components/Nav';

export default {
    name: "History",
    components: {
        Nav
    }
}
</script>

<style scoped>
.wrapper-his {
    display: grid;
        height: 100vh;
        grid-template-columns: 0.2fr 2fr 1fr;
        grid-template-rows: 0.1fr 2fr;
        grid-template-areas:
          "nav header header"
          "nav main main";
        grid-gap: 0.5em;
}
.report {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 1em 2.5em;
}
.report img {
    width: 30%;
}

</style>