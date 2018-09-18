<template>
    <div class="nameBoard">
        <main class="Id">
            <header>
                <h1>张博涵</h1>
                <h2>前端工程师</h2>
            </header>
            <ul>
                <li>出生日期</li>
                <li>年龄</li>
                <li>城市</li>
                <li>学历</li>
                <li>专业</li>
                <li>学校</li>
            </ul>
            <ul>
                <li>1994.2.25</li>
                <li>24</li>
                <li>重庆</li>
                <li>本科</li>
                <li>建筑学</li>
                <li>大连民族大学</li>
            </ul>
        </main>
        <div class="photo"></div>

        <footer class="connection"></footer>
    </div>
</template>

<style lang="scss">
    .nameBoard {
        height: 600px;
        width: 76vw;
        background: rgb(80, 80, 80);
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
        padding: 40px;
        .photo {
            height: 70px;
            width: 70px;
            border-radius: 35px;
            background: red;
        }
        .Id {
            display: flex;
            justify-content: space-between;
            flex-direction: row;
            align-items: center;
            width: 100%;
            ul {
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;
                flex-direction: column;
                li {
                    font-size: 15px;
                }
            }
        }
    }
</style>