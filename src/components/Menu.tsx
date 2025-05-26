import recipes from "../data/recipes";
import Swal from "sweetalert2";

const Menu = () => {
  const handleOrder = (id: number) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to order this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, order it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // do some API calls
        console.log("Ordering item with id: ", id);

        Swal.fire({
          title: "Ordered!",
          text: "Your order has been processing.",
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>This weeks specials!</h2>
      </div>
      <div className="cards">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="menu-items">
            <img src={recipe.image} alt={recipe.title} />
            <div className="menu-content">
              <div className="heading">
                <h5>{recipe.title}</h5>
                <p className="price">${recipe.price}</p>
              </div>
              <p>{recipe.description}</p>
              <button
                className="orderBtn"
                onClick={() => handleOrder(recipe.id)}
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
