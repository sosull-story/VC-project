export default function ProfilePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-4 py-16 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <div className="flex w-full max-w-sm flex-col items-center rounded-2xl border border-zinc-200/80 bg-white p-8 text-center shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        {/* 프로필 아바타 / 이니셜 */}
        <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-zinc-100 text-2xl font-semibold text-zinc-700 shadow-inner dark:bg-zinc-800 dark:text-zinc-200">
          소
        </div>

        {/* 이름 */}
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          소현우
        </h1>

        {/* 소개글 */}
        <p className="mt-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
          리틀 사무관
        </p>

        {/* 심플한 구분선 & 추가 정보나 링크 영역을 위한 공간 */}
        <div className="my-6 h-px w-full bg-zinc-100 dark:bg-zinc-800" />

        <div className="flex flex-col gap-2.5 w-full text-xs text-zinc-500 dark:text-zinc-400">
          <p>안녕하세요, 리틀 사무관 소현우입니다.</p>
        </div>
      </div>
    </main>
  );
}
