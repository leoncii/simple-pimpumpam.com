import { Comments } from 'containers/Comments'
import { HeadPost } from '../../components/HeadPost/'
import { ShareBar } from '../ShareBar'
import { Footer } from '../../components/Footer'

export function BlogPost({ children, meta }) {
  const { isActive } = meta
  return (
    <>
      <div>
        <HeadPost meta={meta} />
        <article>{children}</article>
        <Comments />
      </div>
      <ShareBar />
      <Footer />
      <style jsx>{`
      div {
        padding-top: ${isActive ? '49px' : '0px'};
        place-items: center;
        display: flex;
        flex-direction: column;
        width: 650px;
        justify-content: center;
        align-content: center;
        margin: 0 auto;
      }
      article {
        text-align: left;
        margin: 0 auto;
        font-family: 'JetBrain Mono', monospace; 
        padding-bottom: 120px;
        width: inherit;
        padding: 0 2rem;
      }
      `}</style>
    </>
  )
}
