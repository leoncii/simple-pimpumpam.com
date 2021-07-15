import Whatsapp from '../../svg/footer/whatsapp'
import Link from 'next/link'

export function Footer({ height }) {

  const whatsAppNumber = '59174361042'
  const textUrl = 'Hola%20leo...'
  const sendMsg = `https://wa.me/${whatsAppNumber}?text=${textUrl}`

  return <>
    <section>
      <small>Leonardo Torrico Becerra</small>
    </section>
    <style jsx>{`
    section {
     height: ${!height ? '100vh' : height};
     background: linear-gradient(217deg, #1a1414cc, #141111cc 70.71%),
            linear-gradient(127deg, #141414cc, #141414cc 70.71%),
            linear-gradient(336deg, #000000cc, #180404cc 70.71%);
     padding-bottom: 62.800px;
     padding-top: 2rem;
     display: grid;
     grid-template-columns: 1fr;
     grid-template-rows: 1fr;
     place-items: center;
     padding-left:1rem;
     padding-right:1rem;

     color: var(--light-green);
    }
    h4 {
      font-size: 2rem;
      color: #9c039c;
      font-weight: bolder;
      letter-spacing: 1px;
    }
    span {
      cursor: pointer;
      margin-top: 2rem;
    }
    small {
      color: var(--bg);
      text-shadow: 0px 0px 1px #fff,
                   0 0 3px darkblue;
    }
  `}</style>
  </>
}