import RedButton from "../../Components/Buttons/RedButton";
import WhiteButton from "../../Components/Buttons/WhiteButton";

type Props = {
  handleThankYou: () => void,
}
const Thanks: React.FC<Props> = ({
  handleThankYou,
}) => {
  return (
    //   <div 
    //   className="thanks"
    //   // className='fixed inset-0 flex items-center justify-center'
    //   >
    //   <div 
    //   className='thanks'
    //   // className='bg-white p-8  w-[502px] h-[607px] rounded-3xl relative flex items-center justify-start flex-col'
    //   >
    //     <button onClick={handleThankYou}>
    //       <svg
    //         className='absolute top-5 right-5'
    //         width='20'
    //         height='20'
    //         viewBox='0 0 20 20'
    //         fill='none'
    //         xmlns='http://www.w3.org/2000/svg'
    //       >
    //         <path
    //           fillRule='evenodd'
    //           clipRule='evenodd'
    //           d='M10.0114 12.6921L16.7467 19.4197C17.1041 19.7767 17.5888 19.9772 18.0943 19.9772C18.5997 19.9772 19.0844 19.7767 19.4418 19.4197C19.7992 19.0627 20 18.5785 20 18.0736C20 17.5688 19.7992 17.0846 19.4418 16.7276L12.704 10L19.4405 3.27238C19.6174 3.09562 19.7577 2.88579 19.8534 2.65487C19.9491 2.42395 19.9983 2.17646 19.9983 1.92654C19.9982 1.67662 19.9489 1.42915 19.8531 1.19828C19.7573 0.967401 19.6169 0.757635 19.4399 0.580956C19.2629 0.404275 19.0529 0.264142 18.8217 0.168555C18.5905 0.0729685 18.3427 0.0238009 18.0925 0.0238599C17.8423 0.0239188 17.5946 0.0732027 17.3634 0.168898C17.1323 0.264594 16.9223 0.404827 16.7454 0.58159L10.0114 7.30921L3.2761 0.58159C3.10044 0.399757 2.89028 0.254687 2.6579 0.154847C2.42551 0.0550063 2.17554 0.00239379 1.92258 7.98025e-05C1.66962 -0.00223418 1.41873 0.0457963 1.18456 0.141369C0.950377 0.236941 0.737599 0.378142 0.558637 0.556731C0.379675 0.735321 0.238113 0.947724 0.14221 1.18154C0.046308 1.41537 -0.00201381 1.66592 6.42879e-05 1.9186C0.00214238 2.17127 0.0545786 2.421 0.154314 2.65322C0.254049 2.88544 0.399086 3.09549 0.580961 3.27111L7.3188 10L0.582232 16.7289C0.400356 16.9045 0.25532 17.1146 0.155584 17.3468C0.0558492 17.579 0.00341238 17.8287 0.00133429 18.0814C-0.000743808 18.3341 0.047578 18.5846 0.14348 18.8185C0.239383 19.0523 0.380945 19.2647 0.559907 19.4433C0.738869 19.6219 0.951647 19.7631 1.18583 19.8586C1.42 19.9542 1.67089 20.0022 1.92385 19.9999C2.17681 19.9976 2.42678 19.945 2.65917 19.8452C2.89155 19.7453 3.10171 19.6002 3.27736 19.4184L10.0114 12.6933V12.6921Z'
    //           fill='#030D2E'
    //         />
    //       </svg>
    //     </button>

    //     <h2 className='text-[32px] font-jost text-[#DC1720] font-bold mt-10 text-center'>
    //       Thank you for uploading your script
    //     </h2>

    //     <p className='mt-10 font-jost text-[#030D2E] text-[16px] text-center w-[342px]'>
    //       Your script has been added to your bag, you can now share it with
    //       the community if you wish to get feedback and find collaborators.{' '}
    //     </p>
    //     <div className='thank-you-btn-container mt-24 flex items-center justify-center flex-col'>
    //       <button className='thank-you-btn-share'>
    //         Share it with the community
    //       </button>
    //       <button className='thank-you-see-script-btn' type='button'>
    //         See my script
    //       </button>
    //       <p className='font-jost text-[#979EA9] text-[16px]'>
    //         You will still be able to share it later from you bag.
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <div className="thanks">
      <button
        className="thanks__close"
        onClick={handleThankYou}>
        <svg

          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M10.0114 12.6921L16.7467 19.4197C17.1041 19.7767 17.5888 19.9772 18.0943 19.9772C18.5997 19.9772 19.0844 19.7767 19.4418 19.4197C19.7992 19.0627 20 18.5785 20 18.0736C20 17.5688 19.7992 17.0846 19.4418 16.7276L12.704 10L19.4405 3.27238C19.6174 3.09562 19.7577 2.88579 19.8534 2.65487C19.9491 2.42395 19.9983 2.17646 19.9983 1.92654C19.9982 1.67662 19.9489 1.42915 19.8531 1.19828C19.7573 0.967401 19.6169 0.757635 19.4399 0.580956C19.2629 0.404275 19.0529 0.264142 18.8217 0.168555C18.5905 0.0729685 18.3427 0.0238009 18.0925 0.0238599C17.8423 0.0239188 17.5946 0.0732027 17.3634 0.168898C17.1323 0.264594 16.9223 0.404827 16.7454 0.58159L10.0114 7.30921L3.2761 0.58159C3.10044 0.399757 2.89028 0.254687 2.6579 0.154847C2.42551 0.0550063 2.17554 0.00239379 1.92258 7.98025e-05C1.66962 -0.00223418 1.41873 0.0457963 1.18456 0.141369C0.950377 0.236941 0.737599 0.378142 0.558637 0.556731C0.379675 0.735321 0.238113 0.947724 0.14221 1.18154C0.046308 1.41537 -0.00201381 1.66592 6.42879e-05 1.9186C0.00214238 2.17127 0.0545786 2.421 0.154314 2.65322C0.254049 2.88544 0.399086 3.09549 0.580961 3.27111L7.3188 10L0.582232 16.7289C0.400356 16.9045 0.25532 17.1146 0.155584 17.3468C0.0558492 17.579 0.00341238 17.8287 0.00133429 18.0814C-0.000743808 18.3341 0.047578 18.5846 0.14348 18.8185C0.239383 19.0523 0.380945 19.2647 0.559907 19.4433C0.738869 19.6219 0.951647 19.7631 1.18583 19.8586C1.42 19.9542 1.67089 20.0022 1.92385 19.9999C2.17681 19.9976 2.42678 19.945 2.65917 19.8452C2.89155 19.7453 3.10171 19.6002 3.27736 19.4184L10.0114 12.6933V12.6921Z'
            fill='#030D2E'
          />
        </svg>
      </button>

      <div className="thanks__container">
        <h1 className="thanks-title">
        Thank you for uploading new version of your script
        </h1>

        <p className="thanks-text">
        The new version of your script has been successfully updated and is now available in your history.</p> 
      </div>
      <div className="mb-4">
      <RedButton className="mb-4"
       text="Share it with the community"></RedButton>

      <WhiteButton text="See my script"
      className="thanks-button"></WhiteButton>

      </div>

     <p className="thanks-text--gray">You will still be able to share it later from your bag.</p>

    </div>
  )
}

export default Thanks;