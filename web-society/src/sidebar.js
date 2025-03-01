export function SideBar() {
  return `
    <aside class="w-64 bg-gray-800 text-white p-4">
        <h2 class="text-lg font-bold">侧边栏</h2>

        <div src="https://th.bing.com/th/id/OIP.YpOX5NLSQb6hZ9ewSmIfYQHaNK?rs=1&pid=ImgDetMain">


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
        <div class="hidden sm:block">

        <!-- 拓荒者图片+基本信息 -->
        <div>
        <img src="https://th.bing.com/th/id/OIP.qr4kq7T2IrtuAaZkGZrWcgHaHa?rs=1&pid=ImgDetMain" alt="图片无法显示" class="w-30 h-30 rounded-full border-2 border-gray-300 ">
        <p class=" text-center text-sm text-gray-500 mt-2">milet</p>

        </div>

        <!-- 导航栏 -->
        <div class=" border-l-2 border-gray-100">
        <nav class="flex flex-col gap-2">
            <a
                href="#"
                class="shrink-0 border border-transparent p-3 text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-0.9 focus:ring-white focus:border-white focus:rounded-r-md"
            >
                首页  HOME
            </a>

            <a
                href="#"
                class="shrink-0 border border-transparent p-3 text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-0.9 focus:ring-white focus:border-white focus:rounded-r-md"
            >
                活动  ACTIVITIES
            </a>

            <a
                href="#"
                class="shrink-0 border border-transparent p-3 text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-0.9 focus:ring-white focus:border-white focus:rounded-r-md"
            >
                成员  MEMBERS
            </a>

            <a
                href="#"
                class="shrink-0 border border-transparent p-3 text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-0.9 focus:ring-white focus:border-white focus:rounded-r-md"
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
