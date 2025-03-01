import './style.css'
import { SideBar } from './sidebar'
import { MainContent } from './main-content'

document.addEventListener("DOMContentLoaded", () => {
    // 直接用模板字符串组织 HTML 结构
    const app = document.querySelector("#app");
    app.className = "min-h-lvh w-full"
    app.innerHTML = `
    <div class="flex h-screen">
        <!--侧边栏-->
         ${SideBar()}
        <!--正文框架-->
        ${MainContent()}
      </div>
    `;
});

