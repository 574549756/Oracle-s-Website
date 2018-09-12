<template>
    <div class="nameBoard">
        <div class="photo"></div>
        <header>
            <h1>张博涵</h1>
            <h2>前端工程师</h2>
        </header>
        <main class="Id">
            <ul>
                <li>出生日期</li>
                <li>年龄</li>
                <li>城市</li>
                <li>学历</li>
                <li>专业</li>
                <li>学校</li>
            </ul>
            <ul class="msg">
                <li>1994.2.25</li>
                <li>24</li>
                <li>重庆</li>
                <li>本科</li>
                <li>建筑学</li>
                <li>大连民族大学</li>
            </ul>
        </main>
        <footer class="connection"></footer>
    </div>
</template>

<style lang="scss">
.nameBoard {
    height: 800px;
    width: 350px;
    background: rgb(80, 80, 80);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    .photo {
        height: 70px;
        width: 70px;
        border-radius: 35px;
        background: red;
    }
}
</style>