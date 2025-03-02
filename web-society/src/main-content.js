function revealText(text, start, step) {
  text.style.visibility = "visible";
  if (start > 0) {
    start -= step;
    step += 0.01;
    text.style.clipPath = `inset(0 ${start}% 0 0)`;
    requestAnimationFrame(() => revealText(text, start, step));
  }
}

export function MainContent() {
  setTimeout(() => {
    const title= document.getElementsByClassName("title")[0];
    const sub_titles = document.getElementsByClassName("sub-title");
    revealText(title,120,1);
    Array.from(sub_titles).forEach(element => {
      revealText(element, 150, 2);
    });
  }, 5); // 确保 DOM 先渲染
  return `
<div class="flex-1 flex-col">
    <header class="mx-auto max-w-screen-xl px-12 pt-8 pb-6">
      <div
        class="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between"
      >
        <div>
          <div class="title bg-gradient-to-r from-purple-600 via-blue-500 to-green-400 bg-clip-text text-transparent text-[22px] font-bold text-gray-700 tracking-tight" style="visibility: hidden;">
            Welcome to HEU Pioneers' Society!  欢迎来到HEU拓荒者学社!
          </div>
        </div>
      </div>
    </header>
    <div class="grid grid-cols-[70%_30%] min-h-lvh mx-6 px-2">
      <!--正文-->
      <main class="px-4 flex flex-col space-y-4">
        <div class="flex flex-col">
        <div class="flex flex-row">
          <img class="w-8 h-8 mt-1 mr-4" src="/group.svg" alt="group"/>
          <h2 class="sub-title text-gray-700 pt-[10px] text-sm">您好!~ Hello fellows~!</h2>
        </div>
        
        <p class="mt-2 leading-relaxed text-xs text-gray-500">I am YYJ, currently a ready-professor in Harbin Engineering University. My research interests include high-performance computing, edge computing, web of things, machine learing and so on.
           ❤ I am quite an interest-driven guy, and I love music, movie, eating, and traveling... Research is luxurious, but life isn't. Howsoever, we must enjoy both. 
          <br>
          我是姚怡杰，目前是哈尔滨工程大学的准教授，我的科研工作主要是高性能计算、边缘智能、物联网与机器学习等。我是极为兴趣驱动的那种人，喜欢音乐，电影，美食，旅行…… 科研其实是非常奢侈的，但生活并不是，无论如何，我们要学会享受两者。
        </p>

        <p class="mt-2 leading-relaxed text-xs text-blue-600">
          ♫ We are looking for brilliant youths with dreams - let's work together!
          <br>
          我们正在寻觅怀揣梦想的年轻人，让我们共同进步吧!
        </p>
        </div>

        <div class="flex flex-col">
        <div class="flex flex-row">
          <svg class="w-8 h-8  mt-1 mr-4 text-gray-500" fill="currentColor" vertical-align: middle;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="18930"><path d="M757.333333 324.16V112a5.333333 5.333333 0 0 0-5.333333-5.333333H112a5.333333 5.333333 0 0 0-5.333333 5.333333v800a5.333333 5.333333 0 0 0 5.333333 5.333333h714.666667a90.666667 90.666667 0 0 0 90.666666-90.666666V334.826667a5.333333 5.333333 0 0 0-5.333333-5.333334h-149.333333a5.333333 5.333333 0 0 1-5.333334-5.333333zM677.333333 842.666667H186.666667a5.333333 5.333333 0 0 1-5.333334-5.333334V186.666667a5.333333 5.333333 0 0 1 5.333334-5.333334h490.666666a5.333333 5.333333 0 0 1 5.333334 5.333334v650.666666a5.333333 5.333333 0 0 1-5.333334 5.333334z m122.666667 0a42.666667 42.666667 0 0 1-42.666667-42.666667V409.493333a5.333333 5.333333 0 0 1 5.333334-5.333333h74.666666a5.333333 5.333333 0 0 1 5.333334 5.333333V800a42.666667 42.666667 0 0 1-42.666667 42.666667zM258.186667 307.52m5.333333 0l336.96 0q5.333333 0 5.333333 5.333333l0 64q0 5.333333-5.333333 5.333334l-336.96 0q-5.333333 0-5.333333-5.333334l0-64q0-5.333333 5.333333-5.333333ZM258.186667 460.053333m5.333333 0l336.96 0q5.333333 0 5.333333 5.333334l0 64q0 5.333333-5.333333 5.333333l-336.96 0q-5.333333 0-5.333333-5.333333l0-64q0-5.333333 5.333333-5.333334ZM258.186667 612.586667m5.333333 0l213.066667 0q5.333333 0 5.333333 5.333333l0 64q0 5.333333-5.333333 5.333333l-213.066667 0q-5.333333 0-5.333333-5.333333l0-64q0-5.333333 5.333333-5.333333Z" p-id="18931"></path></svg>
          <h2 class="sub-title text-gray-700 pt-[10px] text-sm" style="visibility: hidden;">最新动态 News</h2>
        </div>
        <p class="mt-2 leading-relaxed text-xs text-gray-500">
           🍊 "Building Resilience and Embracing Innovation!" Our research on resilient Web 3.0 infrastructure, “Building Resilient Web 3.0 Infrastructure with Quantum Information Technologies and Blockchain: An Ambilateral View,” has been accepted by Proceedings of the IEEE (SCI-1, IF: 23.2). Congratulations! Moving forward, we will continue to delve into cutting-edge quantum information technologies and blockchain innovations to shape the future of Web 3.0 infrastructure. Congratulations！
        </p>
        <p class="mt-1 leading-relaxed text-xs font-medium text-gray-600">
          2024.12 – “构建韧性，拥抱创新！”我们在Web 3.0基础设施中的韧性研究《Building Resilient Web 3.0 Infrastructure with Quantum Information Technologies and Blockchain: An Ambilateral View》已被Proceedings of the IEEE (SCI-1, IF: 23.2)期刊正式录用。恭喜！未来我们将继续深入探索量子信息技术与区块链创新，共同塑造Web 3.0基础设施的未来！
        </p>

        <p class="mt-4 leading-relaxed text-xs text-gray-500">
           🍊 2024.9 - On this enchanting Mid-Autumn Festival night, our survey "Socialized Learning: A Paradigm Shift for Edge Intelligence in Networked Systems" has been accepted by IEEE Communications Surveys & Tutorials (CAS Q1, IF: 34.4)! 🎉🌓 It proposes a pioneering "socialized learning + edge intelligence" paradigm to address the challenges of edge intelligence, enhancing performance and collaboration. 🚀 Grateful for the team's efforts! 💪 Wishing all a joyous festival, and let's continue making strides in intelligent networking! 🥮🌟
        </p>
        <p class="mt-1 leading-relaxed text-xs font-medium text-gray-600">
            2024.9 - 花好月圆夜,捷报传佳音!🎉 我们在边缘智能领域的最新综述《Socialized Learning: A Survey of the Paradigm Shift for Edge Intelligence in Networked Systems》被IEEE Communications Surveys & Tutorials (中科院一区, IF:34.4)录用!该文聚焦边缘智能(EI)发展困境,独辟蹊径,提出"社会化学习+边缘智能"协同新范式,利用社会化学习(SL)的人类社会协同交互思想提升EI系统性能,为智能协作注入新动力!🚀 感谢团队所有成员的辛勤付出!💪 值此中秋佳节,祝愿大家阖家欢乐,未来让我们携手并进,在智能网络前沿续写辉煌!🥮🌟  
        </p>
        </div>
      </main>

      <!--右侧边栏-->
      <aside class="-mt-2 pl-4 pr-3">
        <div class="sub-title flex flex-col" style="visibility: hidden;">
          <span class="text-sm mb-[3px] text-gray-700">SOCIETY HISTORY 社团经历</span>
          <h2 class="flex flex-row">
            <span class="bg-gray-950 w-14 h-px"></span>
            <span class="flex-1 h-px bg-gradient-to-r from-gray-700 via-gray-400 to-gray-200"></span>
          </h2>
        </div>
        <ul class="mt-6 space-y-6">
        <li>
          <h3 class="relative pl-4">
            <span class="absolute inset-x-[0.18rem] -inset-y-[0.6rem] -z-10 text-[1.3rem] text-gray-300 font-semibold">2026-Future</span>
            <span class="z-10 text-xs font-medium text-gray-700">Professor 教授（长聘）</span>
          </h3>
          <p class="mt-1 pl-4 text-[0.6rem] font-light text-gray-600">
            School of Computer Science and Technology, <span class="font-medium">Harbin Engineering University</span>, China
            <br>
            计算机科学与技术学院，<span class="font-semibold">哈尔滨工程大学</span>，中国
          </p>
        </li>
        <li>
          <h3 class="relative pl-4">
            <span class="absolute inset-x-[0.18rem] -inset-y-[0.6rem] -z-10 text-[1.3rem] text-gray-300 font-semibold">2022-2026</span>
            <span class="z-10 text-xs font-medium text-gray-700">Undergraduate 本科生</span>
          </h3>
          <p class="mt-1 pl-4 text-[0.6rem] font-light text-gray-600">
            School of Computer Science and Technology, <span class="font-medium">Harbin Engineering University</span>, China
            <br>
            计算机科学与技术学院，<span class="font-semibold">哈尔滨工程大学</span>，中国
          </p>
        </li>
        <li>
          <h3 class="relative pl-4">
            <span class="absolute inset-x-[0.18rem] -inset-y-[0.6rem] -z-10 text-[1.3rem] text-gray-300 font-semibold">2019-2022</span>
            <span class="z-10 text-xs font-medium text-gray-700">Senior High Student 高中生</span>
          </h3>
          <p class="mt-1 pl-4 text-[0.6rem] font-light text-gray-600">
            School of Computer Science and Technology, <span class="font-medium">XXX Senior High School</span>, China
            <br>
            计算机科学与技术学院，<span class="font-semibold">高级中学</span>，中国
          </p>
        </li>
        </ul>
        
      </aside>
    </div
</div>
`;
}
