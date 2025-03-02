export function MainContent() {
    return `
<div class="flex-1 flex-col">
    <header class="mx-auto max-w-screen-xl px-12 pt-8 pb-6">
      <div
        class="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between"
      >
        <div>
          <div  class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent text-[22px] font-bold text-gray-700 tracking-tight">
            Welcome to HEU Pioneers' Society!  欢迎来到HEU拓荒者学社!
          </div>
        </div>
      </div>
    </header>
    <div class="grid grid-cols-[65%_35%] h-screen mx-6 px-2">
        <main class="px-4">
        <p>it is a text.</p>
        </main>
        <aside class="px-4">
        <p>it is a text.</p>
        </aside>
    </div>

</div>
`
}
