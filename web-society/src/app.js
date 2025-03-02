import './style.css'
import { SideBar} from './sidebar'
import { MainContent } from './main-content'

document.addEventListener("DOMContentLoaded",async () => {
    // 直接用模板字符串组织 HTML 结构
    const app = document.querySelector("#app");
    app.className = "min-h-screen w-full relative"
    app.innerHTML = `
    <div class="absolute inset-0 bg-[url()] opacity-70 bg-fixed bg-cover bg-center"></div>
    <div class="relative z-10 flex min-h-screen font-Play">
        <!--侧边栏-->
         ${SideBar()}
        <!--正文框架-->
        ${MainContent()}
      </div>
    `;
});

