type Props = {
  alert: 'success' | 'error';
  show: boolean;
  message: string;
};

const Alert = ({ message, alert, show }: Props) => {
  return (
    <div className='absolute inset-0'>
      {show && alert === 'success' && (
        <div className='alert w-[50em] absolute alert-success shadow-lg bottom-5 right-1/2 transform -translate-y-[-500px] translate-x-1/2 animate-slide-up'>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='stroke-current flex-shrink-0 h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
            <span>{message}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Alert;
