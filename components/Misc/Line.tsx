type LineType = {
  line: "red-md" | "yellow-thick" | "blue-sm" | "purple-thick"
}
export const Line = ({ line }: LineType) => {
  return (
    <>
      {line === "red-md" ? (
        <RedMedLine />
      ) : line === "yellow-thick" ? (
        <YellowThickLine />
      ) : line === "blue-sm" ? (
        <BlueSmLine />
      ) : line === "purple-thick" ? (
        <PurpleThickLine />
      ) : undefined}
    </>
  )
}
export const RedMedLine = () => {
  return (
    <svg
      width='318'
      height='214'
      viewBox='0 0 318 214'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M14 200L304.619 14'
        stroke='#EC6C5A'
        strokeWidth='26'
        strokeLinecap='round'
      />
    </svg>
  )
}

export const YellowThickLine = () => {
  return (
    <svg
      width='176'
      height='136'
      viewBox='0 0 176 136'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M18 118.467L157.733 18'
        stroke='#F4DC5A'
        strokeWidth='35'
        strokeLinecap='round'
      />
    </svg>
  )
}

export const BlueSmLine = () => {
  return (
    <svg
      width='195'
      height='146'
      viewBox='0 0 195 146'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M11 135.29L183.869 11'
        stroke='#6E8EFF'
        strokeWidth='21'
        strokeLinecap='round'
      />
    </svg>
  )
}

export const PurpleThickLine = () => {
  return (
    <svg
      width='170'
      height='149'
      viewBox='0 0 170 149'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M18 130.726L152.332 18'
        stroke='#8D55E9'
        strokeWidth='35'
        strokeLinecap='round'
      />
    </svg>
  )
}
