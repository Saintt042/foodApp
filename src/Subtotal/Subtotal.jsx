import { Container } from "./SubtotalStyle"


const Subtotal = () => {
  return (
    <Container>
      <div className="subtotal">
        <h3> Your Subtotal </h3>
        <p className="subb" > Subtotal $80.00 </p>
        <button className="confirmbtn" > Confirm Order </button>
      </div>

      <div className="promo">
        <h4> Promo Code </h4>
        <form>
					<input type='text' placeholder="enter promo code" className="typist" />
					<button className="applybtn" > Apply </button>
				</form>
      </div>
    </Container>
  )
}

export default Subtotal