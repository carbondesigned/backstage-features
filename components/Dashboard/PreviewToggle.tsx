type Props = {
  onClick: () => void
  preview: boolean
}
export const PreviewToggle = (props: Props) => {
  return (
    <div className='flex w-full justify-evenly'>
      <button
        onClick={props.onClick}
        className={`${
          !props.preview && "border-b-4 border-primary"
        } flex-1 py-2`}
        type='button'
      >
        Body
      </button>
      <button
        onClick={props.onClick}
        className={`${
          props.preview && "border-b-4 border-primary"
        } flex-1 py-2`}
        type='button'
      >
        Preview
      </button>
    </div>
  )
}
