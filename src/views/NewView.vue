<script setup lang="ts">
import '../assets/css/style.css'
import { ref } from 'vue'
const items = ref([
    {
        id: 1,
        title: '手机号码免费定位试用一次，1元手机定位花1元钱',
        desction: '手机号码免费定位试用一次 ，是真的吗佩金斯先生和戈尔冈小姐，以及奥尔德堡镇上两大派系的爱。我亲爱的约翰，露西以一种非常睿智的神色喊道，一定会这样的。至于Doughty Stree...',
        author: 'admin',
        date: '2020-11-05',
        img: '',
    },

    {
        id: 1,
        title: '手机号码免费定位试用一次，1元手机定位花1元钱',
        desction: '手机号码免费定位试用一次 ，是真的吗佩金斯先生和戈尔冈小姐，以及奥尔德堡镇上两大派系的爱。我亲爱的约翰，露西以一种非常睿智的神色喊道，一定会这样的。至于Doughty Stree...',
        author: 'admin',
        date: '2020-11-05',
        img: '123',
    },

    {
        id: 1,
        title: '手机号码免费定位试用一次，1元手机定位花1元钱',
        desction: '手机号码免费定位试用一次 ，是真的吗佩金斯先生和戈尔冈小姐，以及奥尔德堡镇上两大派系的爱。我亲爱的约翰，露西以一种非常睿智的神色喊道，一定会这样的。至于Doughty Stree...',
        author: 'admin',
        date: '2020-11-05',
        img: '',
    },

    {
        id: 1,
        title: '手机号码免费定位试用一次，1元手机定位花1元钱',
        desction: '手机号码免费定位试用一次 ，是真的吗佩金斯先生和戈尔冈小姐，以及奥尔德堡镇上两大派系的爱。我亲爱的约翰，露西以一种非常睿智的神色喊道，一定会这样的。至于Doughty Stree...',
        author: 'admin',
        date: '2020-11-05',
        img: '',
    },
])
</script>
<template>
    <!-- Start Page Title Area -->
    <div class="page-title-area page-title-style-two">
        <div class="container">
            <div class="page-title-content">
                <h2>新闻动态</h2>
                <ul>
                    <li>
                        <a href="https://www.wwwqutao.com/">
                            <i class="bx bx-home"></i>
                            网站首页
                        </a>
                    </li>
                    <li class="active">新闻动态</li>
                </ul>
            </div>
        </div>
    </div>
    <!-- End Page Title Area -->

    <!-- Start Blog Column One Area -->
    <section class="blog-column-one-area ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="row">
                        <div class="col-lg-12" v-for="item in items" :key="item.id">
                            <div class="single-blog-posts">

                                <div class="single-blog-content">
                                    <h3>
                                        <a href="/new/2020/1105/1.html">
                                            {{ item.title }}
                                            <!-- <img v-if="item.img" src="/uploads/201102/1-201102142539100.jpg"
                                                :alt="item.title" /> -->
                                        </a>
                                    </h3>

                                    <p>{{ item.desction }}</p>

                                    <ul class="admin">
                                        <li>
                                            <a>
                                                <i class="bx bx-user-circle"></i>
                                                作者: {{ item.author }}
                                            </a>
                                        </li>
                                        <li class="float">
                                            <i class="bx bx-calendar-alt"></i>
                                            {{ item.date }}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-12 col-md-12">
                            <div class="pagination-area">
                                <a class='prev page-numbers'><i class='bx bx-chevron-left'></i></a>
                                <a class="page-numbers current">1</a>
                                <a class="page-numbers" href='list_1_2.html'>2</a>
                                <a class='next page-numbers' href='list_1_2.html'><i
                                        class='bx bx-chevron-right'></i></a>


                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="widget-sidebar">
                        <div class="sidebar-widget search">
                            <form class="search-form" action="/scanner.php" method="POST">
                                <input class="form-control" name="phone" id="phone" placeholder="输入手机号码开始定位" type="tel"
                                    onkeyup="value=value.replace(/[^\d]/g,'')" maxlength="11" required>
                                <button class="search-button" type="submit">
                                    <i class="bx bx-search"></i>
                                </button>
                            </form>
                        </div>
                        <div class="sidebar-widget categories">
                            <h3 class="widget-title">热点推荐</h3>

                            <ul>
                                <li><a href="/new/2020/1101/2.html">文章</a></li>
                                <li><a href="/new/2020/1105/28.html">手机号码免费定位试用一</a></li>
                                <li><a href="/new/2020/1101/1.html">诺基亚年底王者归来 推两</a></li>
                                <li><a href="/new/2020/1102/22.html">以保证用户数据手机号码</a></li>
                                <li><a href="/new/2020/1102/19.html">对于这些贴着互联手机号</a></li>
                                <li><a href="/new/2020/1102/20.html">信号太多导致“打架”手</a></li>
                                <li><a href="/new/2020/1102/24.html">提升VR视觉体验手机号码定</a></li>
                                <li><a href="/new/2020/1102/25.html">因此今年的iPhone手机号码</a></li>
                                <li><a href="/new/2020/1102/23.html">言语刺激收信手机号码定</a></li>
                                <li><a href="/new/2020/1102/21.html">这样的手机号码定位诺基</a></li>

                            </ul>
                        </div>

                        <div class="sidebar-widget categories">
                            <h3>文章分类</h3>

                            <ul>
                                <li>
                                    <a href="/new/">新闻动态</a>
                                </li>
                                <li>
                                    <a href="/help/">帮助中心</a>
                                </li>
                                <li>
                                    <a href="/service/">服务项目</a>
                                </li>

                            </ul>
                        </div>

                        <div class="sidebar-widget categories">
                            <h3>服务项目</h3>

                            <ul>
                                <li>
                                    <a href='/service/2020/1102/27.html'>快递收货地址查看</a>
                                </li>
                                <li>
                                    <a href='/service/2020/1102/18.html'>手机号码定位追踪找人</a>
                                </li>
                                <li>
                                    <a href='/service/2020/1102/17.html'>手机短信查看</a>
                                </li>
                                <li>
                                    <a href='/service/2020/1102/16.html'>查看所有通话记录</a>
                                </li>
                                <li>
                                    <a href='/service/2020/1102/15.html'>查看手机相册照片/视频</a>
                                </li>
                                <li>
                                    <a href='/service/2020/1102/14.html'>监控抓取微信和QQ聊天记录信息</a>
                                </li>
                                <li>
                                    <a href='/service/2020/1102/13.html'>监视浏览历史记录</a>
                                </li>
                                <li>
                                    <a href='/service/2020/1102/12.html'>实时监听环境录音</a>
                                </li>


                            </ul>
                        </div>

                        <div class="sidebar-widget tags mb-0">
                            <h3>热门标签</h3>

                            <ul>

                                <li>
                                    <a
                                        href="/tags.php?/%E6%89%8B%E6%9C%BA%E5%AE%9A%E4%BD%8D%E6%89%BE%E4%BA%BA/">手机定位找人</a>
                                </li>

                                <li>
                                    <a
                                        href="/tags.php?/%E5%BC%80%E6%88%BF%E8%AE%B0%E5%BD%95%E6%9F%A5%E8%AF%A2/">开房记录查询</a>
                                </li>

                                <li>
                                    <a
                                        href="/tags.php?/%E6%89%8B%E6%9C%BA%E5%AE%9A%E4%BD%8D%E8%BF%BD%E8%B8%AA/">手机定位追踪</a>
                                </li>

                                <li>
                                    <a href="/tags.php?/%E7%94%B5%E8%AF%9D%E8%B7%9F%E8%B8%AA/">电话跟踪</a>
                                </li>

                                <li>
                                    <a href="/tags.php?/%E6%96%87%E7%AB%A0/">文章</a>
                                </li>

                                <li>
                                    <a href="/tags.php?/1%E5%85%83%E6%89%8B%E6%9C%BA%E5%AE%9A%E4%BD%8D/">1元手机定位</a>
                                </li>

                                <li>
                                    <a
                                        href="/tags.php?/%E6%89%8B%E6%9C%BA%E7%9F%AD%E4%BF%A1%E6%9F%A5%E7%9C%8B/">手机短信查看</a>
                                </li>

                                <li>
                                    <a
                                        href="/tags.php?/%E6%9F%A5%E7%9C%8B%E6%89%8B%E6%9C%BA%E7%9B%B8%E5%86%8C/">查看手机相册</a>
                                </li>

                                <li>
                                    <a
                                        href="/tags.php?/QQ%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%E6%8A%93%E5%8F%96/">QQ聊天记录抓取</a>
                                </li>

                                <li>
                                    <a
                                        href="/tags.php?/%E5%BE%AE%E4%BF%A1%E8%AE%B0%E5%BD%95%E6%9F%A5%E7%9C%8B/">微信记录查看</a>
                                </li>


                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End Blog Column One Area -->

</template>