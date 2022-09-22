<template>
    <!-- Start Header Area -->
    <header class="header-area">
        <div class="navbar-area">
            <div class="mobile-nav">
                <div class="container">
                    <a href="/" class="logo">
                        <img src="../assets/img/logo.png" alt="Logo">
                    </a>
                </div>
            </div>
            <div class="main-nav">
                <div class="container">
                    <nav class="navbar navbar-expand-md">
                        <a href="http://" class="navbar-brand">
                            <img src="../assets/img/logo.png" alt="">
                        </a>
                        <div class="collapse navbar-collapse mean-menu" style="display: block;">
                            <ul class="navbar-nav m-auto">
                                <li class="nav-item">
                                    <RouterLink to="/" class="nav-link active">网站首页</RouterLink>
                                </li>
                                <li class="nav-item">
                                    <RouterLink to="/new" class="nav-link">新闻动态</RouterLink>
                                </li>
                                <li class="nav-item">
                                    <RouterLink to="/help" class="nav-link">帮助中心</RouterLink>
                                </li>
                                <li class="nav-item">
                                    <RouterLink to="/service" class="nav-link">服务项目</RouterLink>
                                </li>
                                <li class="nav-item">
                                    <RouterLink to="/about" class="nav-link">关于我们</RouterLink>
                                </li>
                                <li class="nav-item">
                                    <RouterLink to="/contact" class="nav-link">联系我们</RouterLink>
                                </li>
                            </ul>
                            <div class="others-option">
                                <div class="get-quote">
                                    <a href="" class="default-btn">
                                        <span>开始定位体验</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    <!-- End Header Area -->
</template>