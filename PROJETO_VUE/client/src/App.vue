<template>
  <div>
    <menu type="context" id="menu">
      <ul class="side-nav">
        <li>
          <div class="user-view">
            <img src="http://avatarbox.net/avatars/img37/sandman_avatar_picture_24863.jpg" class="circle"/>
            <span>MIKE T.</span>
          </div>
        </li>
        <li><a href="#/"><i class="material-icons">home</i></a></li>
        <li><a href="#/email"><i class="material-icons">email</i></a></li>
        <li><a href="#/lists"><i class="material-icons">supervisor_account</i></a></li>
        <li><a href=""><i class="material-icons">lock</i></a></li>
        <li><a href=""><i class="material-icons">exit_to_app</i></a></li>
      </ul>
    </menu>
    <section id="page">
      <header id="header">
        <ul id="dropdown1" class="dropdown-content">
          <li><a href="">temos 2 novos leads</a></li>
          <li><a href="">sua companha teve novos clicks</a></li>
        </ul>
        <nav class="row light-blue">
          <div class="nav-wrapper col s12">
            <a href="" class="brand-logo hide-on-med-and-down">Digital Marketing</a>
            <a href="" class="brand-logo hide-on-large-only">DM</a>
            <ul id="nav-mobile" class="right">
              <li>
                <a href="" class="dropdown-button" data-activates="dropdown1">
                  <i class="material-icons black-text">notifications_active</i>
                </a></li>
            </ul>
          </div>
        </nav>
      </header>
      <main id="content">
        <section class="row">
          <div class="col s12">
            <router-view></router-view>
          </div>
        </section>
      </main>
      <footer id="footer" class="row grey lighten-3">
        <div class="col s12">
          <small>by MIKE TYSON</small>
        </div>
      </footer>
    </section>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: "app"
};
</script>

<style>
@import 'https://fonts.googleapis.com/icon?family=Material+Icons';

body {
  background-color: #fafafa !important;
}

#page {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
#footer {
  width: 100%;
  margin-bottom: 0;
}
main {
  flex: 1 0 auto;
}
#menu {
  text-align: center;
  padding: 0;
  margin: 0;
}
#menu .user-view .material-icons {
  display: block;
  font-size: 60px;
}
#menu .side-nav, #menu .side-nav li>a>i.material-icons {
  text-align: center;
  color: inherit;
}
#menu .side-nav {
  transform: translateX(0);
  width: 150px;
  background-color: #212121;
  color: #9e9e9e;
}
#menu + #page {
  margin-left: 150px
}

</style>