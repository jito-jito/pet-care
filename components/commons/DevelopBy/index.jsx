import react from "react";


function DevelopBy({
  className,
  url
}) {

  return(
    <>
      <article>
        <p>Develop by jito-jito ❤</p>
      </article>
      <style jsx>{`
        article {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 35px;
          margin-top: 15px;
          background-color: white;
        }

        p {
          margin: auto 0;
          font-weight: 700;
          text-align: center;
          color: #707178;
        }
        
      `}</style>
    </>
  )
}


export default DevelopBy