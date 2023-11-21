export default function Timer(props) {
  const {
    clock,
    progress,
    isPause,
    onPause,
    onStart,
    onReset,
    decreaseFiveMinutes,
    increaseFiveMinutes,
  } = props
  return (
    <div id="clock" className="bg-deep-purple text-center pb-6">
      <div className="mx-auto relative">
        <div
          id="timer"
          className="filter drop-shadow text-7xl font-overpass-mono absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          {clock}
        </div>
        <div className="w-full xs:w-3/4 sm:w-3/5 md:w-1/2 lg:w-2/5 xl:w-1/3 mx-auto">
          <svg viewBox="0 0 39 39" id="timerRing" fill="none" className="">
            <defs>
              <linearGradient id="timer-ring-gradient">
                <stop offset="0%" stopColor="#FFB56B" />
                <stop offset="30%" stopColor="#BC365D" />
              </linearGradient>
            </defs>
            <circle
              id="shadow-circle"
              className="filter drop-shadow"
              stroke="#2D2D2D"
              strokeWidth="3px"
              cx="50%"
              cy="50%"
              r="15.9155"
            />
            <circle
              id="timer-circle"
              className="-rotate-90 origin-center"
              stroke="url(#timer-ring-gradient)"
              strokeDasharray={progress + ', 100'}
              strokeWidth="3px"
              strokeLinecap="round"
              cx="50%"
              cy="50%"
              r="15.9155"
            />
          </svg>
        </div>
      </div>
      <button
        type="button"
        id="startButton"
        onClick={isPause ? onStart : onPause}
        className="bg-mid-gray px-6 py-5 mt-3 uppercase tracking-wider rounded-sm"
      >
        {isPause ? playButton() : pauseButton()}
      </button>
      <button
        type="button"
        id="startButton"
        className="bg-mid-gray px-6 py-5 mt-3 uppercase tracking-wider rounded-sm"
        onClick={onReset}
      >
        {resetButton()}
      </button>
      <button
        type="button"
        id="startButton"
        className="bg-mid-gray px-6 py-5 mt-3 uppercase tracking-wider rounded-sm"
        onClick={increaseFiveMinutes}
      >
        {plusFiveButton()}
      </button>
      <button
        type="button"
        id="startButton"
        className="bg-mid-gray px-6 py-5 mt-3 uppercase tracking-wider rounded-sm"
        onClick={decreaseFiveMinutes}
      >
        {minusFiveButton()}
      </button>
    </div>
  )
}

const pauseButton = () => (
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="64px"
    height="64px"
    fill="#000000"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      {' '}
      <circle style={{ fill: '#FF5050' }} cx="256" cy="256" r="241.371"></circle>{' '}
      <path d="M256,512C114.842,512,0,397.158,0,256S114.842,0,256,0s256,114.842,256,256S397.158,512,256,512z M256,29.257 C130.974,29.257,29.257,130.974,29.257,256S130.974,482.743,256,482.743S482.743,381.026,482.743,256S381.026,29.257,256,29.257z"></path>{' '}
      <path d="M266.243,445.765c-8.078,0-14.629-6.551-14.629-14.629c0-8.078,6.551-14.636,14.629-14.636s14.629,6.545,14.629,14.623 v0.013C280.871,439.214,274.321,445.765,266.243,445.765z"></path>{' '}
      <path d="M314.511,438.126c-6.229,0-12.001-4.01-13.957-10.268c-2.411-7.711,1.886-15.917,9.596-18.327 c64.49-20.163,107.82-79.151,107.82-146.786c0-8.078,6.551-14.629,14.629-14.629c8.078,0,14.629,6.551,14.629,14.629 c0,39.784-12.548,77.616-36.289,109.409c-22.945,30.723-55.637,53.914-92.058,65.3C317.428,437.909,315.957,438.126,314.511,438.126 z"></path>{' '}
      <rect
        x="168.229"
        y="168.229"
        style={{ fill: '#7BFFCD' }}
        width="57.11"
        height="175.543"
      ></rect>{' '}
      <path d="M225.344,358.4h-57.116c-8.078,0-14.629-6.551-14.629-14.629V168.229c0-8.078,6.551-14.629,14.629-14.629h57.116 c8.078,0,14.629,6.551,14.629,14.629v175.543C239.973,351.849,233.422,358.4,225.344,358.4z M182.857,329.143h27.859V182.857 h-27.859V329.143z"></path>{' '}
      <rect
        x="283.765"
        y="168.229"
        style={{ fill: '#7BFFCD' }}
        width="57.11"
        height="175.543"
      ></rect>{' '}
      <path d="M340.878,358.4h-57.116c-8.078,0-14.629-6.551-14.629-14.629V168.229c0-8.078,6.551-14.629,14.629-14.629h57.116 c8.078,0,14.629,6.551,14.629,14.629v175.543C355.506,351.849,348.957,358.4,340.878,358.4z M298.392,329.143h27.859V182.857 h-27.859V329.143z"></path>{' '}
    </g>
  </svg>
)

const playButton = () => (
  <svg
    height="64px"
    width="64px"
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="#000000"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="#CCCCCC"
      strokeWidth="13.312000000000001"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {' '}
      <polygon
        style={{ fill: '#FFFFFF' }}
        points="187.368,146.928 187.368,355.8 382.992,251.368 "
      ></polygon>{' '}
      <path
        style={{ fill: '#DB2B42' }}
        d="M256,0.376C114.616,0.376,0,114.824,0,256s114.616,255.624,256,255.624S512,397.176,512,256 S397.384,0.376,256,0.376z M184.496,146.928l195.624,104.44L184.496,355.8V146.928z"
      ></path>{' '}
    </g>
  </svg>
)

const resetButton = () => (
  <svg width="64px" height="64px" viewBox="0 0 512 512" version="1.1" fill="#000000">
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      {' '}
      <title>reset</title>{' '}
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        {' '}
        <g id="Combined-Shape" fill="#FF5050" transform="translate(74.806872, 64.000000)">
          {' '}
          <path d="M351.859794,42.6666667 L351.859794,85.3333333 L283.193855,85.3303853 C319.271288,116.988529 341.381875,163.321355 341.339886,213.803851 C341.27474,291.98295 288.098183,360.121539 212.277591,379.179704 C136.456999,398.237869 57.3818117,363.341907 20.3580507,294.485411 C-16.6657103,225.628916 -2.17003698,140.420413 55.5397943,87.68 C63.6931909,100.652227 75.1888658,111.189929 88.8197943,118.186667 C59.4998648,141.873553 42.4797783,177.560832 42.5264609,215.253333 C43.5757012,285.194843 100.577082,341.341203 170.526461,341.333333 C234.598174,342.388718 289.235113,295.138227 297.4321,231.584253 C303.556287,184.101393 282.297007,138.84385 245.195596,112.637083 L245.193128,192 L202.526461,192 L202.526461,42.6666667 L351.859794,42.6666667 Z M127.859794,-1.42108547e-14 C151.423944,-1.42108547e-14 170.526461,19.1025173 170.526461,42.6666667 C170.526461,66.230816 151.423944,85.3333333 127.859794,85.3333333 C104.295645,85.3333333 85.1931276,66.230816 85.1931276,42.6666667 C85.1931276,19.1025173 104.295645,-1.42108547e-14 127.859794,-1.42108547e-14 Z">
            {' '}
          </path>{' '}
        </g>{' '}
      </g>{' '}
    </g>
  </svg>
)

const plusFiveButton = () => (
  <svg
    height="64px"
    width="64px"
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="#000000"
  >
    <text
      x="50%"
      y="60%"
      dominantBaseline="middle"
      textAnchor="middle"
      fill="#FF5050"
      fontSize="50"
    >
      +5
    </text>
  </svg>
)

const minusFiveButton = () => (
  <svg
    height="64px"
    width="64px"
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="#000000"
  >
    <text
      x="50%"
      y="60%"
      dominantBaseline="middle"
      textAnchor="middle"
      fill="#FF5050"
      fontSize="50"
    >
      -5
    </text>
  </svg>
)
