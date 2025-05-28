import ProgressBar from '../../common/progressBar'

const JobCard = ({ job, isAssigned, isHistory, onClick }) => {
  return (
    <div
      className='bg-white rounded-lg border-2 border-[#e9e8e8] overflow-hidden hover:shadow-md transition-shadow duration-200 cursor-pointer'
      onClick={onClick}
    >
      <div className='p-4'>
        <div className='flex justify-between items-start'>
          <div>
            <h3 className='text-lg font-semibold text-gray-900'>
              {job.client}
            </h3>
            <p className='text-gray-600 text-sm'>{job.title}</p>
          </div>
          <span className='text-gray-500 text-xs'>#{job.id}</span>
        </div>

        {job.property_type && (
          <div className='flex items-center mt-3 gap-2 text-[#131E47] text-sm'>
            <svg
              width='17'
              height='17'
              viewBox='0 0 17 17'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clip-path='url(#clip0_2517_18015)'>
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M0.851857 9.35094C0.0698567 9.35094 -0.297343 8.38449 0.287457 7.86599L7.93746 1.06599C8.09301 0.927855 8.29382 0.851562 8.50186 0.851562C8.70989 0.851563 8.9107 0.927855 9.06626 1.06599L16.7163 7.86599C17.3011 8.38449 16.9339 9.35094 16.1519 9.35094H15.3019V15.3009C15.3019 15.5264 15.2123 15.7426 15.0529 15.902C14.8935 16.0614 14.6773 16.1509 14.4519 16.1509H2.55186C2.32642 16.1509 2.11022 16.0614 1.95082 15.902C1.79141 15.7426 1.70186 15.5264 1.70186 15.3009V9.35094H0.851857ZM5.95186 14.4509V10.2009C5.95186 9.97551 6.04141 9.75931 6.20082 9.5999C6.36022 9.44049 6.57642 9.35094 6.80186 9.35094H10.2019C10.4273 9.35094 10.6435 9.44049 10.8029 9.5999C10.9623 9.75931 11.0519 9.97551 11.0519 10.2009V14.4509H13.6019V8.50094C13.6018 8.34972 13.6421 8.20124 13.7186 8.0708C13.7952 7.94036 13.9051 7.83268 14.0371 7.75889L8.50186 2.83739L2.96666 7.75889C3.09865 7.83268 3.20856 7.94036 3.28506 8.0708C3.36156 8.20124 3.40188 8.34972 3.40186 8.50094V14.4509H5.95186ZM7.65186 14.4509V11.0509H9.35186V14.4509H7.65186Z'
                  fill='#131E47'
                />
              </g>
              <defs>
                <clipPath id='clip0_2517_18015'>
                  <rect width='17' height='17' fill='white' />
                </clipPath>
              </defs>
            </svg>

            <span>{job.property_type}</span>
          </div>
        )}

        {job?.assignedAt && (
          <div className='flex items-center mt-3 gap-2 text-[#131E47] text-sm'>
            <svg
              width='18'
              height='18'
              viewBox='0 0 18 18'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M14.25 3H12.75V2.25C12.75 2.05109 12.671 1.86032 12.5303 1.71967C12.3897 1.57902 12.1989 1.5 12 1.5C11.8011 1.5 11.6103 1.57902 11.4697 1.71967C11.329 1.86032 11.25 2.05109 11.25 2.25V3H6.75V2.25C6.75 2.05109 6.67098 1.86032 6.53033 1.71967C6.38968 1.57902 6.19891 1.5 6 1.5C5.80109 1.5 5.61032 1.57902 5.46967 1.71967C5.32902 1.86032 5.25 2.05109 5.25 2.25V3H3.75C3.15326 3 2.58097 3.23705 2.15901 3.65901C1.73705 4.08097 1.5 4.65326 1.5 5.25V14.25C1.5 14.8467 1.73705 15.419 2.15901 15.841C2.58097 16.2629 3.15326 16.5 3.75 16.5H14.25C14.8467 16.5 15.419 16.2629 15.841 15.841C16.2629 15.419 16.5 14.8467 16.5 14.25V5.25C16.5 4.65326 16.2629 4.08097 15.841 3.65901C15.419 3.23705 14.8467 3 14.25 3ZM15 14.25C15 14.4489 14.921 14.6397 14.7803 14.7803C14.6397 14.921 14.4489 15 14.25 15H3.75C3.55109 15 3.36032 14.921 3.21967 14.7803C3.07902 14.6397 3 14.4489 3 14.25V9H15V14.25ZM15 7.5H3V5.25C3 5.05109 3.07902 4.86032 3.21967 4.71967C3.36032 4.57902 3.55109 4.5 3.75 4.5H5.25V5.25C5.25 5.44891 5.32902 5.63968 5.46967 5.78033C5.61032 5.92098 5.80109 6 6 6C6.19891 6 6.38968 5.92098 6.53033 5.78033C6.67098 5.63968 6.75 5.44891 6.75 5.25V4.5H11.25V5.25C11.25 5.44891 11.329 5.63968 11.4697 5.78033C11.6103 5.92098 11.8011 6 12 6C12.1989 6 12.3897 5.92098 12.5303 5.78033C12.671 5.63968 12.75 5.44891 12.75 5.25V4.5H14.25C14.4489 4.5 14.6397 4.57902 14.7803 4.71967C14.921 4.86032 15 5.05109 15 5.25V7.5Z'
                fill='#131E47'
              />
            </svg>

            <span>Job Assigned: {job.assignedAt}</span>
          </div>
        )}

        {job?.price && (
          <div className='flex items-center mt-3 gap-2 text-[#131E47] text-sm'>
            <svg
              width='17'
              height='16'
              viewBox='0 0 17 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1.41797 5.33073H15.5846M1.41797 3.9974C1.41797 3.64377 1.56722 3.30464 1.8329 3.05459C2.09858 2.80454 2.45891 2.66406 2.83464 2.66406H14.168C14.5437 2.66406 14.904 2.80454 15.1697 3.05459C15.4354 3.30464 15.5846 3.64377 15.5846 3.9974V11.9974C15.5846 12.351 15.4354 12.6902 15.1697 12.9402C14.904 13.1903 14.5437 13.3307 14.168 13.3307H2.83464C2.45891 13.3307 2.09858 13.1903 1.8329 12.9402C1.56722 12.6902 1.41797 12.351 1.41797 11.9974V3.9974Z'
                stroke='#131E47'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M1.41797 8H6.3763C6.3763 8.66667 6.8013 10 8.5013 10C10.2013 10 10.6263 8.66667 10.6263 8H15.5846'
                stroke='#131E47'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>

            <span>£{job.price}</span>
          </div>
        )}

        {job?.address && (
          <div className='flex items-center mt-3 gap-2 text-[#131E47] text-sm'>
            <svg
              width='15'
              height='18'
              viewBox='0 0 15 18'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M7.125 1.58413C5.65526 1.58413 4.24571 2.16798 3.20645 3.20724C2.16719 4.24651 1.58333 5.65605 1.58333 7.12579C1.58333 9.39154 2.99408 11.5773 4.54258 13.2707C5.33436 14.1333 6.1983 14.9268 7.125 15.6425C7.26328 15.5365 7.42557 15.4072 7.61188 15.2546C8.35589 14.6437 9.05612 13.9813 9.70742 13.2723C11.2559 11.5773 12.6667 9.39233 12.6667 7.12579C12.6667 5.65605 12.0828 4.24651 11.0436 3.20724C10.0043 2.16798 8.59474 1.58413 7.125 1.58413ZM7.125 17.5869L6.67613 17.2781L6.67375 17.2765L6.669 17.2726L6.65317 17.2615L6.59379 17.2195L6.38004 17.0636C5.29693 16.2496 4.29073 15.338 3.37408 14.3403C1.75592 12.5685 0 10.0043 0 7.125C2.81582e-08 5.23533 0.750667 3.42306 2.08686 2.08686C3.42306 0.750668 5.23533 0 7.125 0C9.01467 0 10.8269 0.750668 12.1631 2.08686C13.4993 3.42306 14.25 5.23533 14.25 7.125C14.25 10.0043 12.4941 12.5693 10.8759 14.3387C9.95952 15.3364 8.95358 16.248 7.87075 17.062C7.78054 17.1294 7.68949 17.1956 7.59763 17.2607L7.581 17.2718L7.57625 17.2757L7.57467 17.2765L7.125 17.5869ZM7.125 5.54246C6.70507 5.54246 6.30235 5.70927 6.00541 6.00621C5.70848 6.30314 5.54167 6.70587 5.54167 7.12579C5.54167 7.54572 5.70848 7.94844 6.00541 8.24538C6.30235 8.54231 6.70507 8.70912 7.125 8.70912C7.54493 8.70912 7.94765 8.54231 8.24459 8.24538C8.54152 7.94844 8.70833 7.54572 8.70833 7.12579C8.70833 6.70587 8.54152 6.30314 8.24459 6.00621C7.94765 5.70927 7.54493 5.54246 7.125 5.54246ZM3.95833 7.12579C3.95833 6.28594 4.29196 5.48049 4.88583 4.88662C5.47969 4.29276 6.28515 3.95913 7.125 3.95913C7.96485 3.95913 8.77031 4.29276 9.36417 4.88662C9.95804 5.48049 10.2917 6.28594 10.2917 7.12579C10.2917 7.96564 9.95804 8.7711 9.36417 9.36496C8.77031 9.95883 7.96485 10.2925 7.125 10.2925C6.28515 10.2925 5.47969 9.95883 4.88583 9.36496C4.29196 8.7711 3.95833 7.96564 3.95833 7.12579Z'
                fill='#131E47'
              />
            </svg>

            <span>{job.address}</span>
          </div>
        )}
        {job?.priority_Level && (
          <div className='flex items-center mt-3 gap-2 text-[#131E47] text-sm'>
            <svg
              width='18'
              height='18'
              viewBox='0 0 18 18'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clip-path='url(#clip0_2517_18040)'>
                <path
                  d='M9.0011 6.0011V9.0011M9.0011 12.0086L9.0086 12.0004M8.6831 1.0691C8.76748 0.984834 8.88185 0.9375 9.0011 0.9375C9.12035 0.9375 9.23473 0.984834 9.3191 1.0691L16.9331 8.6831C17.0174 8.76748 17.0647 8.88185 17.0647 9.0011C17.0647 9.12035 17.0174 9.23473 16.9331 9.3191L9.3191 16.9331C9.23473 17.0174 9.12035 17.0647 9.0011 17.0647C8.88185 17.0647 8.76748 17.0174 8.6831 16.9331L1.0691 9.3191C0.984834 9.23473 0.9375 9.12035 0.9375 9.0011C0.9375 8.88185 0.984834 8.76748 1.0691 8.6831L8.6831 1.0691Z'
                  stroke='#131E47'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </g>
              <defs>
                <clipPath id='clip0_2517_18040'>
                  <rect width='18' height='18' fill='white' />
                </clipPath>
              </defs>
            </svg>

            <span
              style={{
                color:
                  job?.priority_Level?.toLowerCase() == 'emergency'
                    ? '#FF3D00'
                    : job?.priority_Level?.toLowerCase() == 'priority'
                    ? '#04910C'
                    : '#131E47'
              }}
            >
              {job.priority_Level}
            </span>
          </div>
        )}

        <div className='flex items-center mt-2 gap-2 text-[#131E47] text-sm'>
          <svg
            width='21'
            height='22'
            viewBox='0 0 21 22'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M2.625 11.0859C2.625 12.1201 2.82869 13.1441 3.22445 14.0996C3.6202 15.055 4.20027 15.9231 4.93153 16.6544C5.6628 17.3857 6.53093 17.9657 7.48637 18.3615C8.44181 18.7572 9.46584 18.9609 10.5 18.9609C11.5342 18.9609 12.5582 18.7572 13.5136 18.3615C14.4691 17.9657 15.3372 17.3857 16.0685 16.6544C16.7997 15.9231 17.3798 15.055 17.7756 14.0996C18.1713 13.1441 18.375 12.1201 18.375 11.0859C18.375 8.99736 17.5453 6.99432 16.0685 5.51747C14.5916 4.04062 12.5886 3.21094 10.5 3.21094C8.41142 3.21094 6.40838 4.04062 4.93153 5.51747C3.45469 6.99432 2.625 8.99736 2.625 11.0859Z'
              stroke='#131E47'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
            <path
              d='M10.5 6.71094V11.0859L13.125 13.7109'
              stroke='#131E47'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
          {job.expedited ? (
            <span className='text-[#FF3D00]'>
              Expedited - {job.workingDays} working days
            </span>
          ) : (
            <span>{job.workingDays} working days</span>
          )}
        </div>

        {!isAssigned && !isHistory && (
          <div className='mt-4'>
            <div className='flex justify-between items-center mb-1'>
              <span className='text-sm font-medium text-gray-700'>
                Progress
              </span>
              <span className='text-sm font-medium text-gray-700'>
                {job.progress}%
              </span>
            </div>
            <ProgressBar progress={job.progress} className='!h-1.5' />
          </div>
        )}
        {isHistory && (
          <div className='flex items-center mt-3 gap-2 text-[#131E47] text-sm'>
            <div className='flex'>
              {[1, 2, 3, 4, 5].map(star => (
                <svg
                  key={star}
                  className={`w-5 h-5 ${
                    star <= job.rating ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>
              ))}
            </div>
            <span className=''>{job.rating}</span>
          </div>
        )}
        <div className='flex items-center mt-4 flex-wrap  w-full gap-3 '>
          {isHistory ? (
            <>
              <button className='flex-1 py-2 border-2 gap-2 rounded-md font-medium flex items-center justify-center hover:bg-gray-50'>
                View Details
              </button>
            </>
          ) : isAssigned ? (
            <div className='flex items-center mt-4 flex-wrap  w-full gap-3 '>
              <button className='flex-1 py-2 border-2 gap-2 rounded-md font-medium flex items-center justify-center hover:bg-gray-50'>
                <svg
                  width='17'
                  height='16'
                  viewBox='0 0 17 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M2.92188 8.5L6.64062 11.7812L14.0781 4.75'
                    stroke='#131E47'
                    stroke-width='2.5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
                Accept
              </button>
              <button className='flex-1 py-2 border-2 gap-2 rounded-md font-medium flex items-center justify-center  bg-primary text-white hover:bg-primary/80'>
                <svg
                  width='20'
                  height='21'
                  viewBox='0 0 20 21'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M14.6693 14.9661L5.33594 5.63281M14.6693 5.63281L5.33594 14.9661'
                    stroke='white'
                    stroke-width='2'
                    stroke-linecap='round'
                  />
                </svg>
                Reject
              </button>
            </div>
          ) : (
            <div className='flex items-center mt-4  w-full gap-3 '>
              <button className='w-full py-2 border-2 gap-2 rounded-md font-medium flex items-center justify-center hover:bg-gray-50'>
                <svg
                  width='18'
                  height='18'
                  viewBox='0 0 18 18'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M2.25 15.2175V3.75C2.25 3.35218 2.40804 2.97064 2.68934 2.68934C2.97064 2.40804 3.35218 2.25 3.75 2.25H14.25C14.6478 2.25 15.0294 2.40804 15.3107 2.68934C15.592 2.97064 15.75 3.35218 15.75 3.75V11.25C15.75 11.6478 15.592 12.0294 15.3107 12.3107C15.0294 12.592 14.6478 12.75 14.25 12.75H5.97075C5.74593 12.75 5.52398 12.8006 5.32133 12.898C5.11869 12.9953 4.94052 13.137 4.8 13.3125L3.05175 15.498C2.99357 15.5709 2.91417 15.6239 2.82453 15.6498C2.73489 15.6756 2.63944 15.6729 2.5514 15.6421C2.46335 15.6113 2.38705 15.5539 2.33305 15.4778C2.27906 15.4017 2.25003 15.3108 2.25 15.2175Z'
                    stroke='#131E47'
                    strokeWidth='2'
                  />
                </svg>
                Message
              </button>
              <button className='flex items-center justify-center'>
                <svg
                  width='12'
                  height='17'
                  viewBox='0 0 12 17'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M8.34798 8.5L0.435583 14.935C-0.152837 15.4136 -0.143975 16.1824 0.455378 16.6522C1.05473 17.122 2.01761 17.115 2.60603 16.6364L11.5644 9.35069C12.1452 8.87836 12.1452 8.12164 11.5644 7.64931L2.60603 0.363594C2.01761 -0.114958 1.05473 -0.122034 0.455378 0.34779C-0.143975 0.817614 -0.152837 1.58642 0.435583 2.06497L8.34798 8.5Z'
                    fill='#131E47'
                  />
                </svg>
              </button>
            </div>
          )}
          {/* <button className='flex items-center justify-center'>
            <svg
              width='12'
              height='17'
              viewBox='0 0 12 17'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M8.34798 8.5L0.435583 14.935C-0.152837 15.4136 -0.143975 16.1824 0.455378 16.6522C1.05473 17.122 2.01761 17.115 2.60603 16.6364L11.5644 9.35069C12.1452 8.87836 12.1452 8.12164 11.5644 7.64931L2.60603 0.363594C2.01761 -0.114958 1.05473 -0.122034 0.455378 0.34779C-0.143975 0.817614 -0.152837 1.58642 0.435583 2.06497L8.34798 8.5Z'
                fill='#131E47'
              />
            </svg>
          </button> */}
        </div>
      </div>
    </div>
  )
}

export default JobCard
