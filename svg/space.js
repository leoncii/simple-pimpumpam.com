export function Space(props) {
  return (
    <>
      <svg
        viewBox="0 0 1326.93 1650"
        {...props}
      >
        <image
          className='image'
          data-name="Capa 2"
        />
      </svg>
      <style jsx>{`
    svg {
      position: absolute;
      top: 80px;
      right: 0;  
      width: -webkit-fill-available;
      height: 500px;
    }

    @media only screen and (min-width: 768px) {
      svg {
      width: auto;
      margin-right: calc(7% + ((3000vw - 900px) / (1300)));;
      }
    }
    @media only screen and (max-width: 468px) {
      svg {
        top: 34px;
      }
    }
  `}
      </style>
    </>
  )
}