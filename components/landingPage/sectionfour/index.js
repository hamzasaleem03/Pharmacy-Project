import React from 'react'
// eslint-disable-next-line
function index() {
  return (
    <>
    <div className='bg-gray-100'>
    <div className='mt-[200px] mx-auto container px-4  flex justify-between items-start gap-4 lg:flex-row flex-col'>
      <div aria-label='map' className='w-full'>
        <picture>
        <img src='https://tuk-cdn.s3.amazonaws.com/can-uploader/MAP-removebg-preview.png' alt='map'/>
        </picture>
      </div>
      <div aria-label='Content' className='w-full py-8'>
      <p className="text-2xl font-bold text-strat mb-10">お近くの店舗を探す</p>
      <div className='flex items-start justify-start gap-4'>
        <div className='flex items-center gap-2 lg:max-w-[150px] w-full'>
          <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M6.99984 4.66667C6.3555 4.66667 5.83317 5.189 5.83317 5.83333C5.83317 6.47767 6.3555 7 6.99984 7C7.64417 7 8.1665 6.47767 8.1665 5.83333C8.1665 5.189 7.64417 4.66667 6.99984 4.66667ZM4.6665 5.83333C4.6665 4.54467 5.71117 3.5 6.99984 3.5C8.2885 3.5 9.33317 4.54467 9.33317 5.83333C9.33317 7.122 8.2885 8.16667 6.99984 8.16667C5.71117 8.16667 4.6665 7.122 4.6665 5.83333Z" fill="#404040" />
        <path fillRule="evenodd" clipRule="evenodd" d="M3.28769 2.12103C4.27226 1.13647 5.60761 0.583344 7 0.583344C8.39239 0.583344 9.72774 1.13647 10.7123 2.12103C11.6969 3.1056 12.25 4.44096 12.25 5.83334C12.25 6.42637 12.1871 6.94875 12.0231 7.44357C11.8582 7.94099 11.6008 8.38154 11.2468 8.82315C11.2422 8.82899 11.2374 8.83473 11.2325 8.84039L7.44082 13.2154C7.33002 13.3432 7.16918 13.4167 7 13.4167C6.83082 13.4167 6.66998 13.3432 6.55918 13.2154L2.76751 8.84039C2.76262 8.83473 2.75783 8.82899 2.75315 8.82315C2.39921 8.38154 2.14182 7.94099 1.97694 7.44357C1.81292 6.94875 1.75 6.42637 1.75 5.83334C1.75 4.44096 2.30312 3.1056 3.28769 2.12103ZM7 1.75001C5.91703 1.75001 4.87842 2.18022 4.11265 2.94599C3.34687 3.71176 2.91667 4.75038 2.91667 5.83334C2.91667 6.34399 2.971 6.73452 3.08435 7.07649C3.19595 7.41316 3.37409 7.73088 3.65669 8.085L7 11.9427L10.3433 8.085C10.6259 7.73089 10.804 7.41316 10.9156 7.07649C11.029 6.73452 11.0833 6.34399 11.0833 5.83334C11.0833 4.75038 10.6531 3.71176 9.88735 2.94599C9.12158 2.18022 8.08297 1.75001 7 1.75001Z" fill="#404040" />
      </svg>
      <p className="text-sm font-bold text-gray-700">千葉県</p>
        </div>
        <div className='flex flex-wrap items-center gap-2 w-full'>
        <p className='px-1.5 py-1 border rounded border-gray-700 text-xs font-bold leading-3 text-gray-700'>北松戸薬局</p>
        <p className='px-1.5 py-1 border rounded border-gray-700 text-xs font-bold leading-3 text-gray-700'>北松戸薬局</p>
        <p className='px-1.5 py-1 border rounded border-gray-700 text-xs font-bold leading-3 text-gray-700'>ポワール薬局</p>
        <p className='px-1.5 py-1 border rounded border-gray-700 text-xs font-bold leading-3 text-gray-700'>ながれやま薬局</p>
        <p className='px-1.5 py-1 border rounded border-gray-700 text-xs font-bold leading-3 text-gray-700'>ハート薬局</p>
        <p className='px-1.5 py-1 border rounded border-gray-700 text-xs font-bold leading-3 text-gray-700'>ヒロ薬局</p>
        <p className='px-1.5 py-1 border rounded border-gray-700 text-xs font-bold leading-3 text-gray-700'>フリューゼ薬局</p>
        <p className='px-1.5 py-1 border rounded border-gray-700 text-xs font-bold leading-3 text-gray-700'>フォレスト薬局</p>
        <p className='px-1.5 py-1 border rounded border-gray-700 text-xs font-bold leading-3 text-gray-700'>フォレスト薬局</p>
        </div>
      </div>
      <div className='flex items-start justify-start gap-4 my-5'>
        <div className='flex items-center gap-2 lg:max-w-[150px] w-full'>
          <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M6.99984 4.66667C6.3555 4.66667 5.83317 5.189 5.83317 5.83333C5.83317 6.47767 6.3555 7 6.99984 7C7.64417 7 8.1665 6.47767 8.1665 5.83333C8.1665 5.189 7.64417 4.66667 6.99984 4.66667ZM4.6665 5.83333C4.6665 4.54467 5.71117 3.5 6.99984 3.5C8.2885 3.5 9.33317 4.54467 9.33317 5.83333C9.33317 7.122 8.2885 8.16667 6.99984 8.16667C5.71117 8.16667 4.6665 7.122 4.6665 5.83333Z" fill="#404040" />
        <path fillRule="evenodd" clipRule="evenodd" d="M3.28769 2.12103C4.27226 1.13647 5.60761 0.583344 7 0.583344C8.39239 0.583344 9.72774 1.13647 10.7123 2.12103C11.6969 3.1056 12.25 4.44096 12.25 5.83334C12.25 6.42637 12.1871 6.94875 12.0231 7.44357C11.8582 7.94099 11.6008 8.38154 11.2468 8.82315C11.2422 8.82899 11.2374 8.83473 11.2325 8.84039L7.44082 13.2154C7.33002 13.3432 7.16918 13.4167 7 13.4167C6.83082 13.4167 6.66998 13.3432 6.55918 13.2154L2.76751 8.84039C2.76262 8.83473 2.75783 8.82899 2.75315 8.82315C2.39921 8.38154 2.14182 7.94099 1.97694 7.44357C1.81292 6.94875 1.75 6.42637 1.75 5.83334C1.75 4.44096 2.30312 3.1056 3.28769 2.12103ZM7 1.75001C5.91703 1.75001 4.87842 2.18022 4.11265 2.94599C3.34687 3.71176 2.91667 4.75038 2.91667 5.83334C2.91667 6.34399 2.971 6.73452 3.08435 7.07649C3.19595 7.41316 3.37409 7.73088 3.65669 8.085L7 11.9427L10.3433 8.085C10.6259 7.73089 10.804 7.41316 10.9156 7.07649C11.029 6.73452 11.0833 6.34399 11.0833 5.83334C11.0833 4.75038 10.6531 3.71176 9.88735 2.94599C9.12158 2.18022 8.08297 1.75001 7 1.75001Z" fill="#404040" />
      </svg>
      <p className="text-sm font-bold text-gray-700">東京都</p>
        </div>
        <div className='flex flex-wrap items-center gap-2 w-full'>
        <p className='px-1.5 py-1 border rounded border-gray-700 text-xs font-bold leading-3 text-gray-700'>タイム薬局</p>
        <p className='px-1.5 py-1 border rounded border-gray-700 text-xs font-bold leading-3 text-gray-700'>末広町薬局</p>
        <p className='px-1.5 py-1 border rounded border-gray-700 text-xs font-bold leading-3 text-gray-700'>しらかば薬局</p>
        <p className='px-1.5 py-1 border rounded border-gray-700 text-xs font-bold leading-3 text-gray-700'>エド川薬局</p>
        <p className='px-1.5 py-1 border rounded border-gray-700 text-xs font-bold leading-3 text-gray-700'>ガレヌス北小岩調剤薬局</p>
        <p className='px-1.5 py-1 border rounded border-gray-700 text-xs font-bold leading-3 text-gray-700'>アール薬局</p>
        <p className='px-1.5 py-1 border rounded border-gray-700 text-xs font-bold leading-3 text-gray-700'>町の薬局</p>
        <p className='px-1.5 py-1 border rounded border-gray-700 text-xs font-bold leading-3 text-gray-700'>けやき薬局</p>
        <p className='px-1.5 py-1 border rounded border-gray-700 text-xs font-bold leading-3 text-gray-700'>ひばり北口薬局</p>
        </div>
      </div>
      <div className='flex items-start justify-start gap-4 my-5'>
        <div className='flex items-center gap-2 lg:max-w-[150px] w-full'>
          <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M6.99984 4.66667C6.3555 4.66667 5.83317 5.189 5.83317 5.83333C5.83317 6.47767 6.3555 7 6.99984 7C7.64417 7 8.1665 6.47767 8.1665 5.83333C8.1665 5.189 7.64417 4.66667 6.99984 4.66667ZM4.6665 5.83333C4.6665 4.54467 5.71117 3.5 6.99984 3.5C8.2885 3.5 9.33317 4.54467 9.33317 5.83333C9.33317 7.122 8.2885 8.16667 6.99984 8.16667C5.71117 8.16667 4.6665 7.122 4.6665 5.83333Z" fill="#404040" />
        <path fillRule="evenodd" clipRule="evenodd" d="M3.28769 2.12103C4.27226 1.13647 5.60761 0.583344 7 0.583344C8.39239 0.583344 9.72774 1.13647 10.7123 2.12103C11.6969 3.1056 12.25 4.44096 12.25 5.83334C12.25 6.42637 12.1871 6.94875 12.0231 7.44357C11.8582 7.94099 11.6008 8.38154 11.2468 8.82315C11.2422 8.82899 11.2374 8.83473 11.2325 8.84039L7.44082 13.2154C7.33002 13.3432 7.16918 13.4167 7 13.4167C6.83082 13.4167 6.66998 13.3432 6.55918 13.2154L2.76751 8.84039C2.76262 8.83473 2.75783 8.82899 2.75315 8.82315C2.39921 8.38154 2.14182 7.94099 1.97694 7.44357C1.81292 6.94875 1.75 6.42637 1.75 5.83334C1.75 4.44096 2.30312 3.1056 3.28769 2.12103ZM7 1.75001C5.91703 1.75001 4.87842 2.18022 4.11265 2.94599C3.34687 3.71176 2.91667 4.75038 2.91667 5.83334C2.91667 6.34399 2.971 6.73452 3.08435 7.07649C3.19595 7.41316 3.37409 7.73088 3.65669 8.085L7 11.9427L10.3433 8.085C10.6259 7.73089 10.804 7.41316 10.9156 7.07649C11.029 6.73452 11.0833 6.34399 11.0833 5.83334C11.0833 4.75038 10.6531 3.71176 9.88735 2.94599C9.12158 2.18022 8.08297 1.75001 7 1.75001Z" fill="#404040" />
      </svg>
      <p className="text-sm font-bold text-gray-700">埼玉県</p>
        </div>
        <div className='flex flex-wrap items-center gap-2 w-full'>
        <p className='px-1.5 py-1 border rounded border-gray-700 text-xs font-bold leading-3 text-gray-700'>ちいさな薬局</p>
        <p className='px-1.5 py-1 border rounded border-gray-700 text-xs font-bold leading-3 text-gray-700'>ソレイユ薬局</p>
        </div>
      </div>
      <div className='flex items-start justify-start gap-4 my-5'>
        <div className='flex items-center gap-2 lg:max-w-[150px] w-full'>
          <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M6.99984 4.66667C6.3555 4.66667 5.83317 5.189 5.83317 5.83333C5.83317 6.47767 6.3555 7 6.99984 7C7.64417 7 8.1665 6.47767 8.1665 5.83333C8.1665 5.189 7.64417 4.66667 6.99984 4.66667ZM4.6665 5.83333C4.6665 4.54467 5.71117 3.5 6.99984 3.5C8.2885 3.5 9.33317 4.54467 9.33317 5.83333C9.33317 7.122 8.2885 8.16667 6.99984 8.16667C5.71117 8.16667 4.6665 7.122 4.6665 5.83333Z" fill="#404040" />
        <path fillRule="evenodd" clipRule="evenodd" d="M3.28769 2.12103C4.27226 1.13647 5.60761 0.583344 7 0.583344C8.39239 0.583344 9.72774 1.13647 10.7123 2.12103C11.6969 3.1056 12.25 4.44096 12.25 5.83334C12.25 6.42637 12.1871 6.94875 12.0231 7.44357C11.8582 7.94099 11.6008 8.38154 11.2468 8.82315C11.2422 8.82899 11.2374 8.83473 11.2325 8.84039L7.44082 13.2154C7.33002 13.3432 7.16918 13.4167 7 13.4167C6.83082 13.4167 6.66998 13.3432 6.55918 13.2154L2.76751 8.84039C2.76262 8.83473 2.75783 8.82899 2.75315 8.82315C2.39921 8.38154 2.14182 7.94099 1.97694 7.44357C1.81292 6.94875 1.75 6.42637 1.75 5.83334C1.75 4.44096 2.30312 3.1056 3.28769 2.12103ZM7 1.75001C5.91703 1.75001 4.87842 2.18022 4.11265 2.94599C3.34687 3.71176 2.91667 4.75038 2.91667 5.83334C2.91667 6.34399 2.971 6.73452 3.08435 7.07649C3.19595 7.41316 3.37409 7.73088 3.65669 8.085L7 11.9427L10.3433 8.085C10.6259 7.73089 10.804 7.41316 10.9156 7.07649C11.029 6.73452 11.0833 6.34399 11.0833 5.83334C11.0833 4.75038 10.6531 3.71176 9.88735 2.94599C9.12158 2.18022 8.08297 1.75001 7 1.75001Z" fill="#404040" />
      </svg>
      <p className="text-sm font-bold text-gray-700">栃木県</p>
        </div>
        <div className='flex flex-wrap items-center gap-2 w-full'>
        <p className='px-1.5 py-1 border rounded border-gray-700 text-xs font-bold leading-3 text-gray-700'>サフラン薬局</p>
        </div>
      </div>
      <div className='flex items-start justify-start gap-4 my-5'>
        <div className='flex items-center gap-2 lg:max-w-[150px] w-full'>
          <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M6.99984 4.66667C6.3555 4.66667 5.83317 5.189 5.83317 5.83333C5.83317 6.47767 6.3555 7 6.99984 7C7.64417 7 8.1665 6.47767 8.1665 5.83333C8.1665 5.189 7.64417 4.66667 6.99984 4.66667ZM4.6665 5.83333C4.6665 4.54467 5.71117 3.5 6.99984 3.5C8.2885 3.5 9.33317 4.54467 9.33317 5.83333C9.33317 7.122 8.2885 8.16667 6.99984 8.16667C5.71117 8.16667 4.6665 7.122 4.6665 5.83333Z" fill="#404040" />
        <path fillRule="evenodd" clipRule="evenodd" d="M3.28769 2.12103C4.27226 1.13647 5.60761 0.583344 7 0.583344C8.39239 0.583344 9.72774 1.13647 10.7123 2.12103C11.6969 3.1056 12.25 4.44096 12.25 5.83334C12.25 6.42637 12.1871 6.94875 12.0231 7.44357C11.8582 7.94099 11.6008 8.38154 11.2468 8.82315C11.2422 8.82899 11.2374 8.83473 11.2325 8.84039L7.44082 13.2154C7.33002 13.3432 7.16918 13.4167 7 13.4167C6.83082 13.4167 6.66998 13.3432 6.55918 13.2154L2.76751 8.84039C2.76262 8.83473 2.75783 8.82899 2.75315 8.82315C2.39921 8.38154 2.14182 7.94099 1.97694 7.44357C1.81292 6.94875 1.75 6.42637 1.75 5.83334C1.75 4.44096 2.30312 3.1056 3.28769 2.12103ZM7 1.75001C5.91703 1.75001 4.87842 2.18022 4.11265 2.94599C3.34687 3.71176 2.91667 4.75038 2.91667 5.83334C2.91667 6.34399 2.971 6.73452 3.08435 7.07649C3.19595 7.41316 3.37409 7.73088 3.65669 8.085L7 11.9427L10.3433 8.085C10.6259 7.73089 10.804 7.41316 10.9156 7.07649C11.029 6.73452 11.0833 6.34399 11.0833 5.83334C11.0833 4.75038 10.6531 3.71176 9.88735 2.94599C9.12158 2.18022 8.08297 1.75001 7 1.75001Z" fill="#404040" />
      </svg>
      <p className="text-sm font-bold text-gray-700">福島県</p>
        </div>
        <div className='flex flex-wrap items-center gap-2 w-full'>
        <p className='px-1.5 py-1 border rounded border-gray-700 text-xs font-bold leading-3 text-gray-700'>かすみ薬局</p>
         </div>
      </div>
      <div className='flex items-start justify-start gap-4 my-5'>
        <div className='flex items-center gap-2 lg:max-w-[150px] w-full'>
          <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M6.99984 4.66667C6.3555 4.66667 5.83317 5.189 5.83317 5.83333C5.83317 6.47767 6.3555 7 6.99984 7C7.64417 7 8.1665 6.47767 8.1665 5.83333C8.1665 5.189 7.64417 4.66667 6.99984 4.66667ZM4.6665 5.83333C4.6665 4.54467 5.71117 3.5 6.99984 3.5C8.2885 3.5 9.33317 4.54467 9.33317 5.83333C9.33317 7.122 8.2885 8.16667 6.99984 8.16667C5.71117 8.16667 4.6665 7.122 4.6665 5.83333Z" fill="#404040" />
        <path fillRule="evenodd" clipRule="evenodd" d="M3.28769 2.12103C4.27226 1.13647 5.60761 0.583344 7 0.583344C8.39239 0.583344 9.72774 1.13647 10.7123 2.12103C11.6969 3.1056 12.25 4.44096 12.25 5.83334C12.25 6.42637 12.1871 6.94875 12.0231 7.44357C11.8582 7.94099 11.6008 8.38154 11.2468 8.82315C11.2422 8.82899 11.2374 8.83473 11.2325 8.84039L7.44082 13.2154C7.33002 13.3432 7.16918 13.4167 7 13.4167C6.83082 13.4167 6.66998 13.3432 6.55918 13.2154L2.76751 8.84039C2.76262 8.83473 2.75783 8.82899 2.75315 8.82315C2.39921 8.38154 2.14182 7.94099 1.97694 7.44357C1.81292 6.94875 1.75 6.42637 1.75 5.83334C1.75 4.44096 2.30312 3.1056 3.28769 2.12103ZM7 1.75001C5.91703 1.75001 4.87842 2.18022 4.11265 2.94599C3.34687 3.71176 2.91667 4.75038 2.91667 5.83334C2.91667 6.34399 2.971 6.73452 3.08435 7.07649C3.19595 7.41316 3.37409 7.73088 3.65669 8.085L7 11.9427L10.3433 8.085C10.6259 7.73089 10.804 7.41316 10.9156 7.07649C11.029 6.73452 11.0833 6.34399 11.0833 5.83334C11.0833 4.75038 10.6531 3.71176 9.88735 2.94599C9.12158 2.18022 8.08297 1.75001 7 1.75001Z" fill="#404040" />
      </svg>
      <p className="text-sm font-bold text-gray-700">沖縄県</p>
        </div>
        <div className='flex flex-wrap items-center gap-2 w-full'>
        <p className='px-1.5 py-1 border rounded border-gray-700 text-xs font-bold leading-3 text-gray-700'>コナ薬局</p>
         </div>
      </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default index