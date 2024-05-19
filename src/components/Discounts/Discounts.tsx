import './Discounts.css'

const Discounts = ({title, sales}: {title:string, sales: any}) => {
  
  return (
    <section className="movie__list">
      <h1 className="movie__list-title">{title}</h1>
      <div className="movie__list-wrapper">
        {sales!=''? sales.slice(1,6).map((sale:any) => <Discounts film={sale} key={sale.id}/>) : ''}
      </div>
    </section>
  )
}

export default Discounts