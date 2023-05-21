<template>
    <header class="header">
        <h1 class="title">El tiempo</h1>
        <img class="logo" src="../assets/img/lluvia.png" alt="">
    </header>
</template>
  
<style scoped>
.header {
    background: linear-gradient(rgb(234, 159, 20), rgba(234, 159, 20, 0.8));
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
}

.title {

    text-align: center;
    font-size: 4vw;
    font-weight: bold;
    color: #ffffff;
    animation: fadeIn 1s ease-in-out;
    margin-top: 1rem;
}

.logo {
    width: 15vw;
    height: auto;
    margin-top: 1rem;
}

@media (max-width: 768px) {

    .logo {
        width: 30vw;
    }
}

@media (min-width: 769px) {

    .logo {
        width: 10vw;
    }
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
</style>
  