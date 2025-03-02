// 定义路径到索引的映射关系
const mapping = {
    "/index.html": 0,
    "/event.html": 1,
    "/member.html": 2,
    "/contact.html": 3,
  };

// 定义样式
const focusedStates = ["outline-none","ring-0.9","ring-white" ,"border-white" ,"rounded-r-md"];

export function SideBar() {
    setTimeout(()=>{
    // 获取当前路径对应的索引
    let nowIndex = mapping[window.location.pathname];
    // 获取所有按钮
    const sidebarButtons = document.querySelectorAll(".nav-link");
    // 按钮添加聚焦效果
    sidebarButtons[nowIndex].classList.add(...focusedStates);

    },10)

  return `
    <aside class="w-64 bg-[url('https://th.bing.com/th/id/OIP.YpOX5NLSQb6hZ9ewSmIfYQHaNK?rs=1&pid=ImgDetMain')]  bg-fixed   text-white p-4">
        
        <div style = "font-family:STXihei, sans-serif; font-size: 24px; font-weight: bold; margin-top: 20px;">


        <!-- 只有在小屏设备上显示 -->
        <div class="sm:hidden">
          <!-- 提供一个用于辅助技术（如屏幕阅读器）的标签 -->
          <label for="Tab" class="sr-only">Tab</label>

          <!-- 下拉框 -->
          <select id="Tab" class="w-full rounded-md border-gray-200">
            <option>Settings</option> <!-- 设置选项 -->
            <option>Messages</option> <!-- 消息选项 -->
            <option>Archive</option> <!-- 归档选项 -->
            <option select>Notifications</option> <!-- 默认选中的通知选项 -->
          </select>
        </div>


        <!-- 在Web端显示 -->
        <div class="hidden flex flex-col mt-8 sm:block ">

        <!-- 拓荒者图片+基本信息 -->
        <div class="flex items-center justify-center flex-col mb-4">
        <img src="https://th.bing.com/th/id/OIP.qr4kq7T2IrtuAaZkGZrWcgHaHa?rs=1&pid=ImgDetMain" alt="图片无法显示" class="w-28 h-28  rounded-full ">

        <p class=" text-center text-lg text-gray-200 mt-2">Pioneers' Society <br> 拓荒者学社 <br> <span class=" text-sm font-bold">代码拓荒 算法犁云</span> </p>

        </div>

        <!-- 导航栏 -->
        <div class=" border-l-2 border-gray-100">
        <nav class="flex flex-col gap-2">

            
            <a
                href="index.html"
                id="home"
                class="nav-link shrink-0 border border-transparent p-3 text-sm font-medium text-gray-100 hover:text-gray-500 "
            >
                首页  HOME
            </a>

            <a
                href="event.html"
                id = "activities"
                class="nav-link shrink-0 border border-transparent p-3 text-sm font-medium text-gray-100 hover:text-gray-500 "
            >
                活动  ACTIVITIES
            </a>

            <a
                href="member.html"
                id = "members"
                class="nav-link shrink-0 border border-transparent p-3 text-sm font-medium text-gray-100 hover:text-gray-500 "
            >
                成员  MEMBERS
            </a>

            <a
                href="contact.html"
                id = "contact"
                class="nav-link shrink-0 border border-transparent p-3 text-sm font-medium text-gray-100 hover:text-gray-500 "
            >
                联系 CONTACT US
            </a>
        </nav>
      </div>
    </div>

</div>


    </aside>
`;
}
